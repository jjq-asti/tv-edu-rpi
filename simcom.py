import serial
import time
import eel

class GSM(serial.Serial):
    def __init__(self,port="/dev/ttyS0",baudrate=9600,tout=1):
        super().__init__(port,baudrate,timeout=3)

    def sendAtCommand(self,at_command,endfeed="\r"):
        self.write((at_command + endfeed).encode())
        self.flush()
        ret = self.handleResponse()
        return ret

    def handleResponse(self):
        # print(self.read(self.in_waiting).decode())
        _ = self.readline()
        x = self.read(20) #consume first line
        return x.decode()

    def process(self):
        data = self.handleResponse()
        return data
        # d = [i for i in data]
        # if len(d) != 0:
        #     return d

    def unpackData(self, generator):
        resp_list = list()
        for i in generator:
            resp_list.append(i.strip('\r\n'))
        del generator
        return resp_list
