import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom';


function Login() {

  const[login, setLogin] = React.useState(false)  // bien login khoi tao = false
  const Submit = () => {
    const user_name = document.getElementById('userInput').value
    const pass_word = document.getElementById('passInput').value
    console.log('abc', user_name)
    const LoginChatApp = async () => {
      const data = {
        username: user_name,
        password: pass_word
      }
      console.log(data)
      console.warn(data)
      const result = await axios.post('http://127.0.0.1:5000/login', data)
      return result;
    }


    LoginChatApp().then(res => {  // su dung hook useState de cap nhat bien login
      console.log(res.data)
      setLogin(!login)   // neu nhap dung user & pass, login khac false (login = true)
    })  
  }
// luu y: bien login khi chay het function moi thay doi gia tri, con trong function no luon = false = gtri khoi tao
  if(login){
   return <Redirect to="chat"/>
  }
  return(
    <div className="Login" >
      <Form style={{ position: "fixed", justifyContent: "center", left: "40%", padding: "40px" }}>
        <Form.Group>
          <Form.Label style={{ fontSize: "15px", float: "left" }}>Username</Form.Label>
          <Form.Control id="userInput" type="text" placeholder="Username"></Form.Control>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label style={{ fontSize: "15px", float: "left" }}>Password</Form.Label>
          <Form.Control id="passInput" type="password" placeholder="Password"></Form.Control>
        </Form.Group>
        <Button className="mt-3" variant="primary" type="button" style={{ float: "right" }} onClick={() => Submit()}>Login</Button>
      </Form>
    </div>
  );
}

export default Login;

