import json

from DBConnect import getConnection


class EditChannel:
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

    def EditKenh(self):
        myConnect = getConnection()
        sql_query = 'UPDATE Radio_app.Kenh k ' \
                    'SET k.Icon = %s, k.TenKenh = %s, k.LinkKenh = %s, k.MaLoaiKenh = %s ' \
                    'WHERE k.MaKenh = %s'
        cursor = myConnect.cursor()
        cursor.execute(sql_query, (self.icon, self.tenKenh, self.linkKenh, self.theLoai, self.maKenh,))
        myConnect.commit()
        myConnect.close()
        cursor.close()
        return json.dumps('update_channel_success')
