import json

from DBConnect import getConnection


class All_Kenh:

    def allKenh(self):
        myConnect = getConnection()
        sql_query = 'SELECT * FROM Radio_app.Kenh'
        cursor = myConnect.cursor()
        cursor.execute(sql_query)
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

class Kenh:
    idKenh = ''

    def __init__(self, idChannel):
        self.idKenh = idChannel

    def getKenhById(self):
        myConnect = getConnection()  # lay data tu dbconnect
        sql_query = 'SELECT * FROM Radio_app.Kenh k WHERE k.MaKenh = %s'
        cursor = myConnect.cursor()
        cursor.execute(sql_query, (self.idKenh,))
        record = cursor.fetchone()
        # controller
        if (record == None):
            return json.dumps('null')  # dumps(): ma hoa doi tuong thanh json
        item = {
            'maKenh': record[0],
            'icon': record[1],
            'tenKenh': record[2],
            'linkKenh': record[3],
            'theLoai': record[4]
        }
        myConnect.close()
        cursor.close()
        return json.dumps(item)



# record = cursor.fetchall()
#         arr = []
#         for i in record:
#             item = {
#                 'maKenh': i[0],
#                 'icon': i[1],
#                 'tenKenh': i[2],
#                 'linkKenh': i[3],
#                 'maLoaiKenh': i[4],
#                 'status': 'oke'
#             }
#             arr.append(item)
#         dictKenh = {
#             'kenh': arr
#         }
#         myConnect.close()
#         cursor.close()
#         return json.dumps(dictKenh)