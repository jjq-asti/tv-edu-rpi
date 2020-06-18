#!/usr/bin/python3
import eel
import lirc
import sms

eel.init("web", allowed_extensions=['.js','.html'])

@eel.expose
def send_sms(*args):
    text_message = ",".join(args)
    ret = sms_buster.sendMessage(text_message,"09478727449")
    return ret


def getIrKeyPress():
    while True:
        code = lirc.nextcode()
        if len(code) > 0:
            code = code[0]
            print(code)
            eel.getKeyPressed(code)
            if ( code == "key_ok"):
                break


#eel.spawn(getIrKeyPress)

eel.start("index.html",block=False,cmdline_args=["--start-fullscreen"])

print("Running rural")
socketid = lirc.init("test")
lirc.set_blocking(False,socketid)
sms_buster = sms.SMS(port = "/dev/ttyS0", baud = 115200, timeout = 1);
eel.sleep(5.0)
print("running IR")
while True:
    getIrKeyPress()
    eel.sleep(5.0)  
