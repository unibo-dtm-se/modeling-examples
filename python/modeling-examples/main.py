# from mix import MyCounter, User
from smart_room import Light, LightSwitch, SmartRoom

if __name__ == '__main__':
    '''
    # creating  a light 

    l = Light("myLight")

    if l.isOn():
        print("The light is on.")
    else: 
        print("The light is off.")

    # turning on the light

    l.turnOn()

    # creating a light switch connected to the light

    s = LightSwitch("mySwitch",l)

    # pressing the light switch

    s.press()

    print(l.isOn())

    # pressing again

    s.press()

    print(l.isOn())
    '''
    room = SmartRoom("myRoom")

    newLight = Light("light-03")
    room.addNewLight(newLight)

    room.press("switch-01")
    
    room.turnOn("light-02")

    try: 
        room.turnOn("light-66")
    except:
        print("some error occurred.")

    room.lock()

