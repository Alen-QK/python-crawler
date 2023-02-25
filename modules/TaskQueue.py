from queue import Queue
from threading import Thread

doing = []


class TaskQueue(Queue):
    def __init__(self, num_workers=1):
        Queue.__init__(self)
        self.num_workers = num_workers
        self.start_workers()

    def add_task(self, **kwargs):
        kwargs = kwargs or {}
        self.put((kwargs))

    def start_workers(self):
        for i in range(self.num_workers):
            t = Thread(target=self.worker)
            t.daemon = True
            t.start()

    def worker(self):
        while True:
            # tupl = self.get()
            current_task = self.get()
            task = current_task['target']
            # 添加执行中
            doing.append(current_task)
            print(f"\n{current_task['manga_id']} add to the queue\n")
            # 执行
            task(current_task['manga_id'])
            self.task_done()
            # 移除执行中
            doing.remove(current_task)
            print(f"\n{current_task['manga_id']} removed from queue\n")
