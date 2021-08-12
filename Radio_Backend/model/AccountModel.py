import json

from DBConnect import getConnection


class Account:
    id = ''
    username = ''
    password = ''

    def __init__(self, id, username, password):  # nhận vào từ client, k nhat thiet dat trung ten bien khoi tao
        self.id = id  # id khởi tạo ở line7 = id nhận vào
        self.username = username
        self.password = password

    def login(self):
        myConnect = getConnection()  # lay data tu dbconnect
        sql_query = 'select * from Radio_app.TaiKhoan tk where tk.TenTaiKhoan = %s and tk.MatKhau = %s'
        cursor = myConnect.cursor()
        cursor.execute(sql_query, (self.username, self.password))
        record = cursor.fetchone()
        # controller
        if (record == None):
            return json.dumps('null')  # dumps(): ma hoa doi tuong thanh json
        item = {
            'maTaiKhoan': record[0],
            'tenTaiKhoan': record[1],
            'matKhau': record[2],
            'quyen': record[3],
            'status': 'ok'
        }
        myConnect.close()
        cursor.close()
        return json.dumps(item)



# class Mess:
#     id = ''
#     id_account = ''
#     id_acc_send = ''
#     message = ''
#
#     def __init__(self, idd, id_acc, id_send, mess):
#         self.id = idd
#         self.id_account = id_acc
#         self.id_acc_send = id_send
#         self.message = mess
#
#     def mess(self):
#         myConnect = getConnection()
#         sql_query = 'INSERT INTO `bkav_chat`.`message` (`id_connect`, `id_acc_send`, `message`) VALUES (%s, %s, %s);'
#         cursor = myConnect.cursor()
#         cursor.execute(sql_query, (self.id_account, self.id_acc_send, self.message))
#         mess = cursor.fetchall()
#
#         if(mess == None):
#             result = json.dumps('null')
