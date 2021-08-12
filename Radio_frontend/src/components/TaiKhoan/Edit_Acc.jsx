import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Cookies from 'js-cookie';
import reactDom from 'react-dom';


function Edit_Acc(){
    const[success, setSuccess] = React.useState(false)  // bien login khoi tao = false



    // su kie onClick Edit
    const Edit_acc = () => {
      const ten = document.getElementById('tenInput').value
      const pass = document.getElementById('passInput').value
      const role = document.getElementById('quyenInput').value
      let idAcc = Cookies.get('idAcc')
      const EditAcc = async() => {
        const data = {
          accName: ten,
          pass: pass,
          role: role
        }
        console.log(data)
        const result = await axios.put('http://127.0.0.1:5000/acc/edit/'+ idAcc, data)
        return result;
      }

      EditAcc().then(res => {
        console.log(res.data)
        let editSuccess =  res.data;
        if(editSuccess == "update_acc_success"){
          setSuccess(!success)
        }
      })
        
    }

    if(success){
      return <Redirect to="/qlAcc"/>
     }

    return(
        <div id="edit" >
          <div id="getKenh" style={{ position: "fixed", justifyContent: "center", left: "40%", padding: "40px" }}> 
            <h3>Edit Account </h3>
            
            <Form.Group className="mt-3">
              <Form.Label style={{ fontSize: "15px", float: "left" }}> Account name</Form.Label>
              <Form.Control id="tenInput" type="" placeholder="Account name"></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label style={{ fontSize: "15px", float: "left" }}> Pass </Form.Label>
              <Form.Control id="passInput" type="" placeholder="Pass"></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label style={{ fontSize: "15px", float: "left" }}>Role</Form.Label>
              <Form.Control id="quyenInput" type="" placeholder="Role"></Form.Control>
            </Form.Group>
            <Button className="mt-3" variant="primary" type="button" style={{ float: "right" }} onClick={() => Edit_acc()}> Edit </Button>
            
          </div>
        </div>
      );
}

export default Edit_Acc;
    
