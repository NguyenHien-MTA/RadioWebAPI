import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function Add_Kenh(){
    const[success, setSuccess] = React.useState(false)  // bien login khoi tao = false
    const[isOpen, setIsOpen] = React.useState(false);

    const Add_kenh = () => {
      const img = document.getElementById('iconInput').value
      const ten_kenh = document.getElementById('tenKenhInput').value
      const link_kenh = document.getElementById('linkInput').value
      const loai_kenh = document.getElementById('loaiInput').value
      const AddKenh = async() => {
        const data = {
          icon: img,
          tenKenh: ten_kenh,
          linkKenh: link_kenh,
          theLoai: loai_kenh
        }
        console.log(data)
        const result = await axios.post('http://127.0.0.1:5000/kenh/add', data)
        return result;
      }

      AddKenh().then(res => {
        console.log(res.data)
        let addSuccess =  res.data;
        if(addSuccess == "oke"){
          setSuccess(!success)
        }
      })
        
    }

    if(success){
      return <Redirect to="/qlKenh"/>
    }

    return(
        <div className="addkenh" >
          <Form style={{ position: "fixed", justifyContent: "center", left: "40%", padding: "40px" }}> 
            <h3>THÊM KÊNH</h3>
            <Form.Group className="mt-5">
              <Form.Label style={{ fontSize: "15px", float: "left" }}>Icon</Form.Label>
              <Form.Control id="iconInput" type="text" placeholder=""></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label style={{ fontSize: "15px", float: "left" }}>Tên kênh</Form.Label>
              <Form.Control id="tenKenhInput" type="" placeholder="channel name"></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label style={{ fontSize: "15px", float: "left" }}>link kênh</Form.Label>
              <Form.Control id="linkInput" type="" placeholder="link"></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label style={{ fontSize: "15px", float: "left" }}>Thể loại</Form.Label>
              <Form.Control id="loaiInput" type="" placeholder="type channel"></Form.Control>
            </Form.Group>
            <Button className="mt-3" variant="primary" type="button" style={{ float: "right" }} onClick={() => Add_kenh()}>Thêm </Button>
          </Form>
        </div>
      );
}

export default Add_Kenh;
    
