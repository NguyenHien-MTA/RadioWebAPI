from model.All_KenhModel import All_Kenh, Kenh
from model.AddChannelModel import AddChannel
from model.DeleteModel import DeleteChannel
from model.EditChannelModel import EditChannel
from model.MyChannelModel import MyChannel, AddMyChannel


def getAllKenh():
    allKenh = All_Kenh()
    return allKenh.allKenh()


def addChannel(icon, tenKenh, linkKenh, theLoai):
    add_channel = AddChannel(0, icon, tenKenh, linkKenh, theLoai)
    return add_channel.AddKenh()


def editChannel(maKenh, icon, tenKenh, linkKenh,
                theLoai):  # dù khong su dung den cac bien icon, tenKenh... nhung do dùng chung class, mà class có khai báo đầy đủ để sd cho các def thêm và xóa
    edit_channel = EditChannel(maKenh, icon, tenKenh, linkKenh, theLoai)
    return edit_channel.EditKenh()


def deleteChannel(id):
    delete_channel = DeleteChannel(id)
    return delete_channel.Delete_Channel()


def getKenhByIdController(id):
    getKenh = Kenh(id)
    return getKenh.getKenhById()


def getMyChannelControll(id):
    getMychannel = MyChannel(id)
    return getMychannel.getMyChannel()


def addMyChannel(idAcc, idKenh):
    addChannel = AddMyChannel(idAcc, idKenh)
    return addChannel.addMyChannel()


def delMyChannel(idAcc, idKenh):
    delChannel = AddMyChannel(idAcc, idKenh)  # dung chung class cua Add nen ten hoi klq
    return delChannel.deleteMyChannel()
