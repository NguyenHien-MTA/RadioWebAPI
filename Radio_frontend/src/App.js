import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Ql_Kenh from './components/Kenh_radio/Ql_Kenh.jsx'
import Ql_TaiKhoan from "./components/TaiKhoan/Ql_TaiKhoan.jsx";
import Add_Kenh from "./components/Kenh_radio/Add_Kenh.jsx";
import Edit_Kenh from "./components/Kenh_radio/Edit_Kenh.jsx";
import Add_Account from "./components/TaiKhoan/Add_TaiKhoan.jsx";
import Edit_Acc from "./components/TaiKhoan/Edit_Acc.jsx";
import React from "react";
import RunModal from "./Componentss/RunModal.js";
import Home from "./components/Home/Home.jsx";
import MyChannel from "./components/Home/MyChannel.jsx";
import RadioView from "./components/Home/Radio.jsx"
import {TableAudio} from "./components/Home/Radio.jsx"

function App() {
  
  return (
    <div className="App">
      {/* <Login/> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/qlKenh" exact component={Ql_Kenh} />
          <Route path="/qlKenh/add" exact component={Add_Kenh} />
          <Route path="/qlKenh/edit/:pathParam1?" exact component={Edit_Kenh} />
          <Route path="/qlAcc" exact component={Ql_TaiKhoan} />
          <Route path="/qlAcc/add" exact component={Add_Account} />
          <Route path="/qlAcc/edit" exact component={Edit_Acc} />
          <Route path="/home" exact component={Home} />
          <Route path="/myChannel" exact component={MyChannel} />
          {/* <Route path="/play" exact component={TableAudio} /> */}
          <Route path="/play" exact component={RadioView} />

          

          


          {/* <Route path="/modal" exact component={RunModal} /> */}

          {/* <Route path="/chat" component={ChatView} /> */}
        </Switch>
      </Router>
    </div>
    
  );

  
}

export default App;
/*
import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
*/