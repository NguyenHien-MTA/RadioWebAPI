import json
from DBConnect import getConnection


class All_Account:
    def getAll_TaiKhoan(self):
        myConnect = getConnection()
        sql_query = 'SELECT * FROM Radio_app.TaiKhoan'
        cursor = myConnect.cursor()
        cursor.execute(sql_query)
        record = cursor.fetchall()
        arr = []
        for i in record:
            item = {
                'maTaiKhoan': i[0],
                'tenTaiKhoan': i[1],
                'matKhau': i[2],
                'quyen': i[3],
            }
            arr.append(item)
        dictTaiKhoan = {
            'getAll_acc': arr
        }

        myConnect.close()
        cursor.close()
        return json.dumps(dictTaiKhoan)
