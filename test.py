import eel
import lirc

eel.init("web")

def getIrKeyPress():
    socketid = lirc.init("test")
    while True:
        code = lirc.nextcode()
        if len(code) > 0:
            if code == "key_1":
                #do something
            elif code == "key_2":
                #do something
            elif code == "key_3":
                #do something
            elif code == "key_4":
                #do something
            elif code == "key_5":
                #do something
            elif code == "key_6":
                #do something
            elif code == "key_7":
                #do something
            elif code == "key_8":
                #do something
            elif code == "key_9":
                #do something
            elif code == "key_0":
                #do something
            elif code == "key_up":
                eel.incrementSelectionCounter
            elif code == "key_down":
                eel.decrementSelectionCounter
            elif code == "key_left":
                #do something
            elif code == "key_right":
                #do something
            elif code == "key_asterisk":
                #do something
            elif code == "key_pound":
                #do something
            elif code == "key_ok":
                #do something
            else:
                pass


eel.spawn(getIrKeyPress)
eel.start("index.html")