import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function Add_Account(){
    const[success, setSuccess] = React.useState(false)  // bien login khoi tao = false
    const Add_acc = () => {
      const accName = document.getElementById('tenAccInput').value
      const pass = document.getElementById('passInput').value
      const role = document.getElementById('roleInput').value
      const AddAcount = async() => {
        const data = {
          accName: accName,
          pass: pass,
          role: role
        }
        console.log(data)
        const result = await axios.post('http://127.0.0.1:5000/acc/add', data)
        return result;
      }

      AddAcount().then(res => {
        console.log(res.data)
        let addSuccess =  res.data;
        if(addSuccess == "add_acc_success"){
          setSuccess(!success)
        }
      })
        
    }

    if(success){
      return <Redirect to="/qlAcc"/>
     }

    return(
        <div className="addAccount" >
          <Form style={{ position: "fixed", justifyContent: "center", left: "40%", padding: "40px" }}> 
            <h3>THÊM KÊNH</h3>
            
            <Form.Group className="mt-5">
              <Form.Label style={{ fontSize: "15px", float: "left" }}>Tên tài khoản</Form.Label>
              <Form.Control id="tenAccInput" type="" placeholder="channel name"></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label style={{ fontSize: "15px", float: "left" }}> Password </Form.Label>
              <Form.Control id="passInput" type="" placeholder="link"></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label style={{ fontSize: "15px", float: "left" }}>Quyền</Form.Label>
              <Form.Control id="roleInput" type="" placeholder="type channel"></Form.Control>
            </Form.Group>
            <Button className="mt-3" variant="primary" type="button" style={{ float: "right" }} onClick={() => Add_acc()}>Thêm </Button>
          </Form>
        </div>
      );
}

export default Add_Account;
    
