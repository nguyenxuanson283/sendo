
import { useState } from 'react'
import './css/Header.css'
import { Dropdown, Menu, Space , Input, Button } from 'antd';
import { VerticalAlignBottomOutlined, SmileOutlined } from '@ant-design/icons';

import Login from './Login.js';
function Header() {
    const menu = (
        <Menu style={{marginTop:"0.6rem"}}
            items={[
                {
                    key: '1',
                    label: (
                       <img src='./QRcode.png' style={{width:'100%'}}></img>
                    ),
                }
            ]}
        />
    );
    const dropMenu = (
        <Menu style={{marginTop:"0.6rem"}}
        items={[
            {
                key: '1',
                label: (
                  <a target="_blank" href='#'>Trả hàng hoàn tiền</a>
                ),
            },
            {
                key:'2',
                label: (
                    <a target="_blank" href='#'>Trung tâm hỗ trợ</a>
                )
            }
        ]}
    />
    );
    const checkItem = (
        <Menu style={{marginTop:"0.6rem"}}
            items = {[
                {
                    key:'1',
                    label: (
                        <Input placeholder='Nhập mã đơn hàng' />
                    ),
                    autoFocus:true
                },
                {
                    key:'2',
                    label: (
                        <Input placeholder='Email/Số điện thoại' />
                    ),
                    autoFocus:true
                },
                {
                    key:'3',
                    label: (
                        <Button block style={{background:"#F7941D", color:"white"}}>Kiểm tra</Button>
                    ),
                },
                
            ]}
        />
    )
    return (
        <div className="Header-top">
          <div className='Header-top-left'>
          <div className="drop-down">
                <Dropdown overlay={menu} trigger={['click']} arrow={false} >
                    <a onClick={e => e.preventDefault()}>
                        <Space>
                            <VerticalAlignBottomOutlined  />
                            Tải ứng dụng
                        </Space>
                    </a>
                </Dropdown>
            </div> 
            <div className="drop-menu">
                <Dropdown overlay={dropMenu} trigger={['click']}>
                    <a onClick={e => e.preventDefault()}>
                        <Space>
                            Chăm sóc khách hàng
                        </Space>
                    </a>
                </Dropdown>
            </div>   
            <div className="check-items">
                <Dropdown overlay={checkItem} trigger={['click']} killPopupOnHide={false}>
                    <a onClick={e => e.preventDefault()}>
                        <Space>
                            Kiểm tra đơn hàng
                        </Space>
                    </a>
                </Dropdown>
            </div>     
          </div>
          <div className='Header-top-right'>
                <Login />
          </div>   
        </div>
    )
}
export default Header;