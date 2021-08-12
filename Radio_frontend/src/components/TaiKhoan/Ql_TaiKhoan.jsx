import React from 'react';
import './local.css'
import add_png from './imgs/AddNSX.png'
import edit_png from "./imgs/edit.png"
import delete_png from "./imgs/Delete.png"

import axios from 'axios';
import reactDom from 'react-dom';
import Cookies from 'js-cookie';

import { Redirect } from 'react-router-dom';

// const getIcon = (str) => {
//     switch(str){
//         case : 
//     }
// }


function Ql_TaiKhoan() {
    const RedirectToEdit = (id) => {
        Cookies.set('idAcc', id)
    }

    const loadTaiKhoan = async () => {
        const data = {
            
        }
        console.log(data)
        const result = await axios.get('http://127.0.0.1:5000/acc', data)
        return result;
    }

    loadTaiKhoan().then(res => {
        console.log(res.data)
        
        const Arr = res.data.getAll_acc.map(function (num) { // mess trog All_mesModel.py
            let id = num.maTaiKhoan

            return (
            <div className="row" style={{paddingTop: '10px'}}>
                <div className="col-sm-5 col-md-5 col-lg-5" style={{textAlign: 'center'}}> {num.tenTaiKhoan} </div>
                <div className="col-sm-2 col-md-2 col-lg-2"> {num.matKhau} </div>
                <div className="col-sm-2 col-md-2 col-lg-2" style={{textAlign: 'center'}}> {num.quyen} </div>
                <div className="col-sm-1 col-md-1 col-lg-1"> <a href="/qlAcc/edit"><img onClick={() => RedirectToEdit(id)} style={{width: "30px"}} src={edit_png} /></a> </div>
                <div className="col-sm-1 col-md-1 col-lg-1"> <a href=""><img onClick={() => Xoa_Acc(id)} style={{width: "30px"}} src={delete_png} /></a> </div>
            </div>
          )
        });
        reactDom.render(Arr, document.getElementById('loadAllTK'))
  
    }) 

    const[success, setSuccess] = React.useState(false)  // bien login khoi tao = false

    const Xoa_Acc = (id) => {
         // dang bi loi chua lay duoc id dong
        const Xoa_acc = async () => {
            const data = {
            
            }
            console.log(data)
            const result = await axios.delete('http://127.0.0.1:5000/acc/delete/'+ id, data)
            return result;

        }
        Xoa_acc().then(res => {
            console.log(res.data)     
            const status = res.data
            if(status == "delete_acc_success"){
            setSuccess(!success)
            }
        })

    }
    if(success){
        alert("Xóa thành công!!!")
        return <Redirect to="/qlKenh"/>
    }



    return(
        <div className="Ql_tk">
            <div id="wrapper">
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only"> Hello</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="">Admin</a>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul id="active" className="nav navbar-nav side-nav">
                            <li><a href="/qlKenh"   >  Quản lý kênh</a></li>
                            <li><a  href="/qlAcc">  Quản lý Tài Khoản</a></li>
                            <li><a   >  Tài khoản </a></li>
                            <li><a  href="/"> Đăng xuất </a></li>


                        </ul>
                        <ul className="nav navbar-nav navbar-right navbar-user">                 
                            <li className="dropdown user-dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" /> Steve Miller<b className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#"><i className="fa fa-user" /> Profile</a></li>
                                    <li><a href="#"><i className="fa fa-gear" /> Settings</a></li>
                                    <li className="divider" />
                                    <li><a href="#">Log Out</a></li>
                                </ul>
                            </li>
                            <li className="divider-vertical" />
                            <li>
                                <form className="navbar-search">
                                <input type="text" placeholder="Search" className="form-control" />
                                </form>
                            </li>
                        </ul>
                    
                    </div>
                </nav>
                <h2>QUẢN LÝ TÀI KHOẢN </h2>
                <div className="pagination-container">
                    <ul className="pagination">
                        <li className="active">
                            <a>1</a>
                        </li>
                    </ul>
                </div>
                
                <div className="container">
                    <div className="row">
                        <h4 className="col-sm-5 col-md-5 col-lg-5" style={{textAlign: 'center'}}> Account Name</h4>
                        <h4 className="col-sm-2 col-md-2 col-lg-2"> Pass </h4>
                        <h4 className="col-sm-2 col-md-2 col-lg-2" style={{textAlign: 'center'}}> Role </h4>
                        <h4 className="col-sm-2 col-md-2 col-lg-2"> <a href="/qlAcc/add"><img src={add_png} /></a> </h4>
                    </div>

                    <div id="loadAllTK">
                        {/* hien thi danh sach here */}
                    </div>
                </div>
            </div>
            {/* /#wrapper */}
            </div>

  );
}

export default Ql_TaiKhoan;

