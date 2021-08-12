import json

from DBConnect import getConnection

class MyChannel:
    maTaiKhoan = ''

    def __init__(self, idAcc):
        self.maTaiKhoan = idAcc

    def getMyChannel(self):
        myConnect = getConnection()  # lay data tu dbconnect
        sql_query = 'SELECT k.MaKenh, k.Icon, k.TenKenh, k.LinkKenh, k.MaLoaiKenh ' \
                    'FROM Radio_app.Kenh k, Radio_app.MyChannel my, Radio_app.TaiKhoan tk ' \
                    'WHERE k.MaKenh = my.MaKenh AND my.MaTaiKhoan = tk.MaTaiKhoan AND tk.MaTaiKhoan = %s'
        cursor = myConnect.cursor()
        cursor.execute(sql_query, (self.maTaiKhoan,))
        record = cursor.fetchall()
        arr = []
        for i in record:
            item = {
                'maKenh': i[0],
                'icon': i[1],
                'tenKenh': i[2],
                'linkKenh': i[3],
                'maLoaiKenh': i[4],
                'status': 'oke'
            }
            arr.append(item)
        dictKenh = {
            'kenh': arr
        }
        myConnect.close()
        cursor.close()
        return json.dumps(dictKenh)


class AddMyChannel:
    maTaiKhoan = ''
    maKenh = ''

    def __init__(self, idAcc, idKenh):
        self.maTaiKhoan = idAcc
        self.maKenh = idKenh

    def addMyChannel(self):
        myConnect = getConnection()
        sql_query = 'INSERT INTO Radio_app.MyChannel (MaTaiKhoan, MaKenh) VALUES (%s, %s)'
        cursor = myConnect.cursor()
        cursor.execute(sql_query, (self.maTaiKhoan, self.maKenh))
        myConnect.commit()
        myConnect.close()
        cursor.close()
        return json.dumps('oke')

    def deleteMyChannel(self):
        myConnect = getConnection()
        sql_query = 'DELETE FROM Radio_app.MyChannel my WHERE my.MaTaiKhoan = %s AND my.MaKenh = %s'
        cursor = myConnect.cursor()
        cursor.execute(sql_query, (self.maTaiKhoan, self.maKenh,))
        myConnect.commit()
        myConnect.close()
        cursor.close()
        return json.dumps('delete_channel_success')