class Light:
    
    def __init__(self, id):
        self.id = id
        self.log("created.")

    def log(self, msg):
        print("[Light %s] %s" % (self.id, msg))

