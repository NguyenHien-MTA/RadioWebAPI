import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Cookies from 'js-cookie';
import reactDom from 'react-dom';


function Edit_Kenh(){
    const[success, setSuccess] = React.useState(false)  // bien login khoi tao = false



    // su kie onClick Edit
    const Edit_kenh = () => {
      const img = document.getElementById('iconInput').value
      const ten_kenh = document.getElementById('tenKenhInput').value
      const link_kenh = document.getElementById('linkInput').value
      const loai_kenh = document.getElementById('loaiInput').value
      let idChannel = Cookies.get('idChannel')
      const EditKenh = async() => {
        const data = {
          icon: img,
          tenKenh: ten_kenh,
          linkKenh: link_kenh,
          theLoai: loai_kenh
        }
        console.log(data)
        const result = await axios.put('http://127.0.0.1:5000/kenh/edit/'+ idChannel, data)
        return result;
      }

      EditKenh().then(res => {
        console.log(res.data)
        let editSuccess =  res.data;
        if(editSuccess == "update_channel_success"){
          setSuccess(!success)
        }
      })
        
    }

    if(success){
      return <Redirect to="/qlKenh"/>
     }


    
     




{/*
    let idChannel = Cookies.get('idChannel')
      const getKenh = async() => {
        const data = {
          
        }
        console.log(data)
        const result = await axios.get('http://127.0.0.1:5000/kenh/edit/'+ idChannel, data)
        return result;
      }

      getKenh().then(res => {
        console.log(res.data)
        return (
          <div>
            <h3>SỬA KÊNH</h3>
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
            <Button className="mt-3" variant="primary" type="button" style={{ float: "right" }} onClick={() => Edit_kenh()}> Edit </Button>
            
          </div>
        )
        
      });

*/}
    return(
        <div id="editkenh" >
          <div id="getKenh" style={{ position: "fixed", justifyContent: "center", left: "40%", padding: "40px" }}> 
            <h3>SỬA KÊNH</h3>
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
            <Button className="mt-3" variant="primary" type="button" style={{ float: "right" }} onClick={() => Edit_kenh()}> Edit </Button>
            
          </div>
        </div>
      );
}

export default Edit_Kenh;
    
