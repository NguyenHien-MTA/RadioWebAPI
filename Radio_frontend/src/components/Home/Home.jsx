import React from 'react';
import './local.css'
import add_png from './imgs/AddNSX.png'
import edit_png from "./imgs/edit.png"
import delete_png from "./imgs/Delete.png"
import kid_png from "./imgs/Kid.png"
import news_png from "./imgs/News.png"
import entertainment_png from "./imgs/Entertainment.png"
import play_png from "./imgs/play.png"

import axios from 'axios';
import reactDom from 'react-dom';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
// import { Howl, Howler } from "howler";


const getIcon = (str) => {
    switch(str){
        case "kid_png": 
            return kid_png;
        case "news_png":
            return news_png;
        case "entertainment_png":
            return entertainment_png;
    }
}


function Home() {
    // const idChannel = Cookies.get('idChannel') // neu id = MaQuyen = 1 thi redirect trang Home
    const home = async () => {
        const data = {
            
        }
        console.log(data)
        const result = await axios.get('http://127.0.0.1:5000/kenh', data)
        return result;
    }
    // const RedirectToedit = (id) =>{
    //     Cookies.set('idChannel', id)
    // }

    home().then(res => {
        console.log(res.data)
        // Cookies.set('idChannel', res.data.maKenh)
        // console.log(Cookies.get('idChannel'))
        const Arr = res.data.kenh.map(function (num) { // mess trog All_mesModel.py
            let id = num.maKenh;
            let link = "/qlKenh/edit/"+id;

          return (
            <div className="col-sm-3 col-md-3 col-lg-3 mb-5"  style={{paddingTop: '10px'}}>
                <span  >
                    <a href=""><img style={{width: "60px"}} src= {getIcon(num.icon)} /></a>
                    <p style={{textAlign: 'center'}}> {num.tenKenh} </p>
                </span>

            </div>
          )
        });

        reactDom.render(Arr, document.getElementById('home'))
  
    }) 

    home().then(res => {
        console.log(res.data)
        // Cookies.set('idChannel', res.data.maKenh)
        // console.log(Cookies.get('idChannel'))
        const Arr = res.data.kenh.map(function (num) { // mess trog All_mesModel.py
            let id = num.maKenh;
            let link_channel = num.linkKenh;
            

          return (
            <div className="row" style={{paddingTop: '10px'}}>
                <div className="col-sm-1 col-md-1 col-lg-1">
                    <a href=""><img style={{width: "30px"}} src= {getIcon(num.icon)} /></a>    
                </div>
                <div className="col-sm-5 col-md-5 col-lg-5" style={{textAlign: 'center'}}> {num.tenKenh} </div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <audio
                        id="radioPlayer"
                        src={num.linkKenh}
                        autoPlay={false}
                    ></audio>
                    <input id="btnPlay" style={{background: "brown", borderRadius: "50px"}}
                        type="button"
                        value = "Play" 
                        onClick={() => PlayRadio(link_channel)}
                    ></input> 
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2"> {num.maLoaiKenh} </div>
                <div className="col-sm-1 col-md-1 col-lg-1"> <a id="idChannel" href=""><img onClick={() => addMyChannel(id)} style={{width: "30px"}} src={add_png} /></a> </div>
                
            </div>
          )
        });

        reactDom.render(Arr, document.getElementById('loadKenh'))
  
    }) 

    const[success, setSuccess] = React.useState(false)  // bien login khoi tao = false
    const idAccount = Cookies.get('maTaiKhoan')
    const addMyChannel = (id) => {
        
        const add_myChannel = async() => {
          const data = {
            idAcc: idAccount,
            idKenh: id
          }
          console.log(data)
          const result = await axios.post('http://127.0.0.1:5000/myChannel/add', data)
          return result;
        }
  
        add_myChannel().then(res => {
          console.log(res.data)
          let addSuccess =  res.data;
          if(addSuccess == "oke"){
            setSuccess(!success)
          }
        })
          
    }
  
    if(success){
    return <Redirect to="/home"/>
    }


    let play = false;
    const PlayRadio = (link_channel) => {
        console.log(play);
        play = !play;
        var player = document.getElementById("radioPlayer");
        var btnPlay = document.getElementById("btnPlay")

        if (play) {
        alert("play");
        player.src = link_channel;
        player.play();
        player.volume = 1.0;
        // btnPlay.style.backgroundColor = "blue"
        btnPlay.value = "Pause"

        } else {
        player.pause();
        btnPlay.value = "Play"
        }
    };

    return(
        <div className="Home">
            <div id="wrapper">
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only"></span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="">Home </a>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul id="active" className="nav navbar-nav side-nav">
                            <li><a href="/home" >  Danh sách kênh</a></li>
                            <li><a href="/myChannel">  Kênh yêu thích </a></li>
                            <li><a href="">  Tài khoản </a></li>
                            <li><a href="/"> Đăng xuất </a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right navbar-user">                 
                            <li className="dropdown user-dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" /> MY ACCOUNT <b className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#"><i className="fa fa-user" /> Profile</a></li>
                                    <li><a href="#"><i className="fa fa-gear" /> Settings</a></li>
                                    <li className="divider" />
                                    <li><a href="#"><i className="fa fa-power-off" /> Log Out</a></li>
                                </ul>
                            </li>
                            <li className="divider-vertical" />
                            <li>
                                <form className="navbar-search">
                                <input id="searchInput" type="text" placeholder="Search" className="form-control" />
                                </form>
                            </li>
                        </ul>
                    
                    </div>
                </nav>
                <h2> DANH SÁCH KÊNH </h2>
                
                <div className="container" >

                    <div className="col-sm-8 col-md-8 col-ld-8" id="home">
                        {/* hien thi danh sach here */}
                    </div>

                    <div className=" col-sm-4 col-md-4 col-lg-4">
                        <a href=""><img id="play_changes" style={{width: "160px"}} src= {play_png} /></a>
                        <p href=""style={{textAlign: 'center'}}> Play </p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <h3></h3>

                <div className="container" style={{width: "90%"}}>
                    <div className="row">
                        <h4 className="col-sm-1 col-md-1 col-lg-1" style={{textAlign: 'center'}}> Icon </h4>
                        <h4 className="col-sm-5 col-md-5 col-lg-5" style={{textAlign: 'center'}}> Tên kênh </h4>
                        <h4 className="col-sm-2 col-md-2 col-lg-2"> Phát </h4>
                        <h4 className="col-sm-2 col-md-2 col-lg-2"> Thể loại </h4>
                        <h4 className="col-sm-2 col-md-2 col-lg-2"> Add my channel </h4>
                    </div>

                    <div id="loadKenh">
                        {/* hien thi danh sach here */}
                    </div>
                </div>
            </div>
            {/* /#wrapper */}
        </div>

  );
}

export default Home;

