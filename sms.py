import serial
import re
import _thread as thread
import queue as Queue
import time
import csv
import os
import eel
from datetime import datetime

import simcom

class SMS(simcom.GSM):
    def __init__(self,port,baud,timeout):
        super().__init__(port,baud,timeout)

    def setToGsm(self):
        ret = self.sendAtCommand("AT+CMGF=1") #SMS system to textmode
        time.sleep(1)
        #ret = self.sendAtCommand("AT+CSCS=\"GSM\"")
        #time.sleep(1)
        #SMS Commands/functions/methods
    def sendMessage(self,message,phonenumber):
        ret1 = self.sendAtCommand("AT+CMGS=\"{}\"".format(phonenumber))
        time.sleep(0.1)
        ret =self.sendAtCommand(message,endfeed="\u001A")
        print(ret1,ret)
        if ("OK" in ret):
            print("message sent")
            return "OK"
        else:
            print("FAILED")
            return "FAILED"

    def sendMessageAndSave(self,message,phonenumber):
        ret = self.sendAtCommand("AT+CMGW=\"{}\"".format(phonenumber))
        time.sleep(1)
        self.sendAtCommand(message,endfeed="\u001A")
    def sendToMany(self,message,phonenumber):
        ret = self.sendAtCommand("AT+CMSS=3,\"{}\"".format(phonenumber))
    def deleteSMS(self):
        ret = self.sendAtCommand("AT+CMGD=3")

        

if __name__ == "__main__":
    sms = SMS(port = "/dev/ttyS0",baud=115200,timeout=1)
    sms.sendMessage("hello,world","09478727449")
    #sms.sendMessageAndSave("kigul ni manong","09478727449")
    #time.sleep(3)
    #sms.sendToMany("hello","09478727449")
    #sms.deleteSMS
