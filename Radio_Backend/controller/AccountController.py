from model.AccountModel import Account
from model.All_TaiKhoanModel import All_Account
from model.CRUDAccountModel import CRUD_Account


def login_app_chat(username, password):
    acc = Account(0, username, password)
    return acc.login()


def getAll_TK():
    tk = All_Account()
    return tk.getAll_TaiKhoan()


def add_Acc(tenTaiKhoan, matKhau, quyen):
    addAcc = CRUD_Account(0, tenTaiKhoan, matKhau, quyen)
    return addAcc.Add_acc()


def edit_Acc(maTaiKhoan, tenTaiKhoan, matKhau, quyen):
    edit_acc = CRUD_Account(maTaiKhoan, tenTaiKhoan, matKhau, quyen)
    return edit_acc.Edit_acc()


def del_Acc(id):
    del_acc = CRUD_Account(id, "", "", "")
    return del_acc.Delete_acc()
