import json

from DBConnect import getConnection


class AddChannel:
    maKenh = ''
    icon = ''
    tenKenh = ''
    linkKenh = ''
    theLoai = ''

    def __init__(self, idd, ic, ten, link, loai):
        self.maKenh = idd
        self.icon = ic
        self.tenKenh = ten
        self.linkKenh = link
        self.theLoai = loai

    def AddKenh(self):
        myConnect = getConnection()
        sql_query = 'INSERT INTO Radio_app.Kenh (Icon, TenKenh, LinkKenh, MaLoaiKenh) VALUES (%s, %s, %s, %s)'
        cursor = myConnect.cursor()
        cursor.execute(sql_query, (self.icon, self.tenKenh, self.linkKenh, self.theLoai))
        myConnect.commit()
        myConnect.close()
        cursor.close()
        return json.dumps('oke')

