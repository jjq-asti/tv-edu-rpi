#!/usr/bin/python3
import eel
import lirc

eel.init("web")

def getIrKeyPress():
    code = lirc.nextcode()
    if len(code) > 0:
        code = code[0]
        print(code)
        eel.getKeyPressed(code)

#eel.spawn(getIrKeyPress)
eel.start("index.html",block=False,cmdline_args=["--start-fullscreen"])
print("Running rural")
socketid = lirc.init("test")
#lirc.set_blocking(False,socketid)
eel.sleep(5.0)
print("running IR")
while True:
    getIrKeyPress()
        
#getIrKeyPress()
