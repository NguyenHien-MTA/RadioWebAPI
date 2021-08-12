from flask import Flask, request
from flask_cors import CORS
from controller.AccountController import login_app_chat, add_Acc, edit_Acc, del_Acc
from controller.AccountController import getAll_TK
from controller.KenhController import addChannel, editChannel, deleteChannel, getKenhByIdController, \
    getMyChannelControll, addMyChannel, delMyChannel
from controller.KenhController import getAllKenh

app = Flask(__name__)
CORS(app)


# @app.route('/')
# def hello_world():
#     return 'Hello World!'

@app.route('/login', methods=['GET', 'POST'])
def login_chat_app():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    return login_app_chat(username, password)


@app.route('/kenh')
def all_kenh():
    data = request.json
    return getAllKenh()


@app.route('/kenh/add', methods=['GET', 'POST'])
def add_kenh():
    data = request.json
    icon = data.get('icon')
    tenKenh = data.get('tenKenh')
    linkKenh = data.get('linkKenh')
    theLoai = data.get('theLoai')
    return addChannel(icon, tenKenh, linkKenh, theLoai)


@app.route('/kenh/edit/<int:id>', methods=['PUT'])
def edit_kenh(id):
    data = request.json
    icon = data.get('icon')
    tenKenh = data.get('tenKenh')
    linkKenh = data.get('linkKenh')
    theLoai = data.get('theLoai')
    return editChannel(id, icon, tenKenh, linkKenh, theLoai)


@app.route('/kenh/edit/<int:id>', methods=['GET'])
def get_kenh(id):
    return getKenhByIdController(id)


@app.route('/kenh/delete/<int:id>', methods=['DELETE'])
def delete_channel(id):
    return deleteChannel(id)


@app.route('/myChannel', methods=['GET', 'POST'])  # phai la method POST de gui du lieu len, con GET la lay du lieu ve
def getMyChannel():
    data = request.json
    idMy = data.get('idAcc')
    return getMyChannelControll(idMy)


@app.route('/myChannel/add', methods=['POST'])
def add_myChannel():
    data = request.json
    idAcc = data.get('idAcc')
    idKenh = data.get('idKenh')
    return addMyChannel(idAcc, idKenh)


@app.route('/myChannel/delete', methods=['DELETE', 'POST'])
def del_myChannel():
    data = request.json
    idAcc = data.get('idAcc')
    idKenh = data.get('idKenh')
    return delMyChannel(idAcc, idKenh)


@app.route('/acc')
def all_TaiKhoan():
    return getAll_TK()


@app.route('/acc/add', methods=['GET', 'POST'])
def add_acc():
    data = request.json
    acc_name = data.get('accName')
    pw = data.get('pass')
    role = data.get('role')
    return add_Acc(acc_name, pw, role)


@app.route('/acc/edit/<int:id>', methods=['PUT'])
def edit_acc(id):
    data = request.json
    nameAcc = data.get('accName')
    passAcc = data.get('pass')
    quyenAcc = data.get('role')
    return edit_Acc(id, nameAcc, passAcc, quyenAcc)


@app.route('/acc/delete/<int:id>', methods=['DELETE'])
def delete_acc(id):
    return del_Acc(id)


if __name__ == '__main__':
    app.run()
