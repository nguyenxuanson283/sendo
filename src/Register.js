import React , {useState} from 'react'
import { Button } from 'antd'
import { FacebookOutlined ,GooglePlusOutlined } from '@ant-design/icons';
import './css/Register.css'
import { AiOutlineClose } from "react-icons/ai";
function Register(props){ 
    const onDelete = props.onDelete
    const setOpen = () => {
       onDelete(false)
    }  
    return(
       <div className='Register-table' >
         <div className="Header-top-register">
            <h1 className='title-register'>ĐĂNG NHẬP</h1>
            <Button  
            style={{borderRadius:"100%", background:"black", color:"white"}}
            onClick={setOpen}
            ><AiOutlineClose  /></Button>
            
        </div>
        <div className='button'>
            <div className='button-register'>
                <Button type='primary' block style={{height:"2.5rem", display:"flex", alignItems:'center'}}  href="https://www.facebook.com/" >
                <FacebookOutlined style={{fontSize:"1.5rem",borderRight:"1px solid white", padding:'1%'}}/>
                <span style={{marginLeft:"35%"}}>Facebook</span> {/* bị chuyển trang khi đăng nhập */}
                </Button>
            </div>
            <div className='button-register'>
                <Button type='danger' block style={{height:"2.5rem",display:"flex",alignItems:'center'}} href="https://accounts.google.com/"> 
                <GooglePlusOutlined style={{fontSize:"1.5rem", borderRight:"1px solid white", padding:'1%'}} />
                <span style={{marginLeft:"35%"}}>Google +</span>
                </Button>
            </div>
        </div>
        <div className='Register-footer'>
            <a href="#">Đã có SendoID</a>
            <a href='#'>Đăng ký</a>
        </div>
       </div>
    )
}
export default Register;