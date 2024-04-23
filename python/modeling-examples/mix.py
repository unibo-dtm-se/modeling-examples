
#
#  User Entity example in unit-02.2
#

class User:

    def __init__(self,name,password,userId):
        self.name = name
        self.password = password
        self.userId = userId
    
    def get_name(self):
        return self.name
    
    def get_pwd(self):
        return self.password

    def get_userId(self):
        return self.userId
        
    def updatePassword(self, newPassword):
        self.password = newPassword


class MyCounter:

    def __init__(self, initialValue):
        self.count = initialValue

    def inc(self):
        self.count = self.count + 1
        
    def dec(self):
        self.count = self.count - 1

    def get_value(self):
        return self.count

