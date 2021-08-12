import json

from DBConnect import getConnection


class CRUD_Account:
    maTaiKhoan = ''
    tenTaiKhoan = ''
    matKhau = ''
    quyen = ''

    def __init__(self, matk, tentk, mk, roles):
        self.maTaiKhoan = matk
        self.tenTaiKhoan = tentk
        self.matKhau = mk
        self.quyen = roles

    def Add_acc(self):
        myConnect = getConnection()
        sql_query = 'INSERT INTO Radio_app.TaiKhoan (TenTaiKhoan, MatKhau, MaQuyen) VALUES (%s, %s, %s)'
        cursor = myConnect.cursor()
        cursor.execute(sql_query, (self.tenTaiKhoan, self.matKhau, self.quyen))
        myConnect.commit()
        myConnect.close()
        cursor.close()
        return json.dumps('add_acc_success')

    def Edit_acc(self):
        myConnect = getConnection()
        sql_query = 'UPDATE Radio_app.TaiKhoan tk ' \
                    'SET tk.TenTaiKhoan = %s, tk.MatKhau = %s, tk.MaQuyen = %s WHERE tk.MaTaiKhoan = %s'
        cursor = myConnect.cursor()
        cursor.execute(sql_query, (self.tenTaiKhoan, self.matKhau, self.quyen, self.maTaiKhoan,))
        myConnect.commit()
        myConnect.close()
        cursor.close()
        return json.dumps('update_acc_success')

    def Delete_acc(self):
        myConnect = getConnection()
        sql_query = 'DELETE FROM Radio_app.TaiKhoan tk WHERE tk.MaTaiKhoan = %s'
        cursor = myConnect.cursor()
        cursor.execute(sql_query, (self.maTaiKhoan,))
        myConnect.commit()
        myConnect.close()
        cursor.close()
        return json.dumps('delete_acc_success')
