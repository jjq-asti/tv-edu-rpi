import eel
import lirc

eel.init("web")

def getIrKeyPress():
    while True:
        code = lirc.nextcode()
        if len(code) > 0:
            code = code[0]
            if code == "key_1":
                print(code)
            elif code == "key_2":
                pass
            elif code == "key_3":
                pass
            elif code == "key_4":
                pass
            elif code == "key_5":
                pass
            elif code == "key_6":
                pass
            elif code == "key_7":
                pass
            elif code == "key_8":
                pass
            elif code == "key_9":
                pass
            elif code == "key_0":
                pass
            elif code == "key_up":
                print("key UP")
                eel.incrementSelectionCounter()
            elif code == "key_down":
                eel.decrementSelectionCounter()
            elif code == "key_left":
                pass
            elif code == "key_right":
                pass
            elif code == "key_asterisk":
                pass
            elif code == "key_pound":
                pass
            elif code == "key_ok":
                pass
            else:
                pass

#eel.spawn(getIrKeyPress)
eel.start("index.html",block=False)
print("Running rural")
socketid = lirc.init("test",blocking=False)
lirc.set_blocking(False,socketid)
eel.sleep(5.0)
print("running IR")
while True:
    getIrKeyPress()
        
#getIrKeyPress()
