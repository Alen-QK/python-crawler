import time
import random
import requests
import base64
import json
import ast
import concurrent.futures

from collections import defaultdict
from threading import Thread

from modules.ua_producer import ua_producer
from modules.make_manga_object import make_manga_object

from flask import Flask
# from waitress import serve
from flask_socketio import SocketIO, send, emit
from flask_apscheduler import APScheduler
from flask_restful import Api, Resource, reqparse, abort, request

from bs4 import BeautifulSoup

from modules.DGmanga import DGmanga



app = Flask(__name__)
api = Api(app)
socketio = SocketIO(app, cors_allowed_origins='*')
scheduler = APScheduler()

# post format
confirm_post_args = reqparse.RequestParser()
confirm_post_args.add_argument('manga_object', type= str, help= 'manga_object of the manga is required', required= True)

manga_library = json.load(open('./manga_library.json', encoding= 'utf-8'))
print(manga_library)
# 简单的task锁，如果遇到block，则直接加锁，加锁状态下需要检查的下载动作都将暂缓执行
g_error_flag = False
# 错误基数初始化，用于计算等待时间，当各个访问步骤遭遇block时，自增，上限为5
g_error_count = 0
# block后基础等待时间
g_wait_time = 40

# def dogemangaTask():
#     entry('UsprF-z2')


# 实际上后台下载选定漫画的task
def confirm_comic_task(manga_id):
    global manga_library
    global g_error_flag
    global g_error_count
    global g_wait_time

    DG = DGmanga(manga_id)
    current_manga_length = DG.check_manga_length()
    target_manga = manga_library[manga_id]
    history_length = target_manga['last_epi']
    print(manga_library)

    if history_length < current_manga_length - 1:
        start = 0 if history_length == 0 else history_length + 1
        end = current_manga_length

        chapters_array = DG.generate_chapters_array(start, end)

        with concurrent.futures.ThreadPoolExecutor(max_workers= 3) as executor:
            finish = list()
            # executor.map(chapter_comic_page, chapters_array)
            for chapter in chapters_array:
                # 如果其他线程的task已经被bloack，那么当前线程的章节任务暂缓 todo
                while g_error_flag:
                    print('线程停止中')

                future = executor.submit(DG.scrape_each_chapter, chapter, manga_library, g_error_flag, g_error_count, g_wait_time, start)
                finish.append(future)
                time.sleep(2 + int(random.random() * 3))

            for f in concurrent.futures.as_completed(finish):
                tmp = dict()
                tmp['newest_epi'], tmp['newest_epi_name'] = f.result()[0], f.result()[1]
                socketio.emit('response', tmp)

        manga_library[manga_id]['completed'] = True
        print(manga_library)
        # 这里传递的实际上时manga_library的引用，所以在dogemanga中的任何操作都会直接反应到内存的manga_library对象上，并非副本
        # entry(manga_id, start, end, manga_library)

        with open('./manga_library.json', 'w') as f:
            json.dump(manga_library, f)
    else:
        print('No need to download.')


class DogeSearch(Resource):
    def get(self):
        args = request.args
        search_name = args['manga_name']

        if search_name == '':
            abort(404, message= 'manga_name should not be empty!')

        headers = {'User-Agent': ua_producer()}
        url = f'https://dogemanga.com/?q={search_name}&l=zh'
        response = requests.get(url, headers= headers)
        soup = BeautifulSoup(response.text, 'lxml')

        site_scroll_row = soup.find('div', class_= 'site-scroll__row')

        try:
            site_cards = site_scroll_row.find_all('div', class_= 'site-card')
            # 限制只返回前十个结果
            max_amount = min(10, len(site_cards))
            results = list()
            session = requests.Session()

            for i in range(max_amount):
                manga_dict = defaultdict()
                card = site_cards[i]
                manga_id = card['data-manga-id']
                manga_name = card.find('h5', class_= 'card-title').text.replace('\n', '')
                artist_name = card.find('h6', class_= 'card-subtitle').text.replace('\n', '')
                newest_epi = card.find('li', class_= 'list-group-item').text.replace('\n', '')
                thumbnail_link = card.find('img', class_= 'card-img-top')['src']
                manga_thumbnail = session.get(thumbnail_link, headers= headers).content
                encoded_thumbnail = (base64.b64encode(manga_thumbnail)).decode('utf-8')

                manga_dict['manga_name'] = manga_name
                manga_dict['manga_id'] = manga_id
                manga_dict['artist_name'] = artist_name
                manga_dict['newest_epi'] = newest_epi
                manga_dict['thumbnail'] = encoded_thumbnail

                results.append(manga_dict)

            return results, 200

        except:
            abort(404, message= 'No manga searched.')


class DogePost(Resource):

    def post(self):
        global manga_library
        args = confirm_post_args.parse_args()
        manga_object = ast.literal_eval(args['manga_object'])
        manga_id = manga_object['manga_id']

        if manga_id not in manga_library:
            manga_library[manga_id] = make_manga_object(manga_object)
        # print(manga_library[manga_id].get_dgmanga_info())
        # 后台工作交由多线程执行，先返回200
        Thread(target= confirm_comic_task, args= [manga_id]).start()

        return 'submitted', 200

class DogeLibrary(Resource):
    def post(self):
        global manga_library

        response = [item for item in manga_library.values()]

        return response, 200

api.add_resource(DogeSearch, '/api/dogemanga/search')
api.add_resource(DogePost, '/api/dogemanga/confirm')
api.add_resource(DogeLibrary, '/api/dogemanga/lib')


if __name__ == '__main__':
    # scheduler.add_job(id= 'Dogemanga task', func= dogemangaTask, trigger= 'interval', seconds= 10)
    # scheduler.start()
    # serve(app, host='127.0.0.1', port= 5000)
    # app.run(host='127.0.0.1', port= 5000, debug= True)
    socketio.run(app, host='127.0.0.1', port= 5000, debug= True)
