import json

from DBConnect import getConnection


class DeleteChannel:
    maKenh = ''


    def __init__(self, idd):
        self.maKenh = idd

    def Delete_Channel(self):
        myConnect = getConnection()
        sql_query = 'DELETE FROM Radio_app.Kenh k WHERE k.MaKenh = %s'
        cursor = myConnect.cursor()
        cursor.execute(sql_query, (self.maKenh,))
        myConnect.commit()
        myConnect.close()
        cursor.close()
        return json.dumps('delete_channel_success')


