import React, { useState } from 'react'
import 'antd/dist/antd.min.css'
import './css/Header.css'
import { UserOutlined } from '@ant-design/icons';
import Register from './Register';
function Login() {
    const [open, setOpen] = useState(false)
    const showModal = () => {
        setOpen(true)
    }

    child(setOpen)
    return (
        <div className='Header-login'>
            <div className='border'>
                <UserOutlined style={{ color: '#BC000B', width: "100%" }} />
            </div>
            <a href='#'
                onClick={showModal}
            >Đăng nhập</a>
            {open && <Register 
            message={open}
            onDelete={() => setOpen(!open)}
            />}
        </div>
    )
}
function child(callback){
    callback = function(){

    }
    const childData = ''
    callback(childData)
}
export default Login;