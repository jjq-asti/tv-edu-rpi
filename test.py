import eel
import lirc

eel.init("web")

def getIrKeyPress():
    while True:
        code = lirc.nextcode()
        if len(code) > 0:
            code = code[0]
            eel.getKeyPressed(code)

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
