import mysql.connector


def getConnection():
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="123123",
        auth_plugin='mysql_native_password',
        # database = 'radio_app'
    )
    return db
