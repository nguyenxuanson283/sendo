import './css/Headerbottom.css';
import React, { useState, useEffect, useRef } from 'react'
import { Input, Dropdown, Menu, Space, Button } from 'antd'
import { ShoppingCartOutlined, AppstoreOutlined, SearchOutlined } from '@ant-design/icons';
import Menudrop from './Menudrop.js';
import { BsListNested } from 'react-icons/bs';
import { IoFastFood } from 'react-icons/io5';

function Headerbottom({handleSelectInput}) {
    const [listDatas, setListDatas] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/employees/')
            .then(res => res.json())
            .then(data => setListDatas(data))
        return setListDatas(listDatas)
    }, [])
    const menu = (
        <Menu style={{ marginLeft: "-10rem" }}
            items={[
                {
                    key: '1',

                    label: (
                        <Menudrop />
                    ),
                    autoFocus: true
                }
            ]}
        />
    )
    const [searchTerm, setSearchTerm] = useState('')
    const [hidden, setHidden] = useState(false)
    // const [searchItem, setSearchItem] = useState({})
    const handleFocus = () => {
        setHidden(true)   
    }
    const handleBlur = (e) => {
        setTimeout(() => {
            setHidden(false)
        }, 1000)
    }
    const placeholder = "Nhập tìm kiếm..."
     const changeInput =(event) =>{
            return setSearchTerm(event)
    }
    const handleClick = (item ,e) => { 
        setSearchTerm(item.name)
        if(item){
            handleSelectInput(preState=>{
                return [{type:"name",value:item.name}]
            })
        }
    }
    return (
        <div className='Headerbottom'>
            <a href='#'> Sendo </a>
            <Dropdown overlay={menu}>
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        <a> <AppstoreOutlined style={{ fontSize: "2rem" }} /></a>
                    </Space>
                </a>
            </Dropdown>
            <Input type='text' style={{ width: "50%", marginRight: '0.5rem' }} size='large' 
                onChange={event => {changeInput(event.target.value)}}
                allowClear={true}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={searchTerm ?? placeholder}
            >

            </Input>
            <Button type="primary" style={{ background: "#F2F3F4", color: "#666666", height: "2.5rem", width: "2.5rem", borderRadius: "0.5rem", marginRight: '2.5rem' }} icon={<SearchOutlined />} />
            <a href='#'>  <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
            </a>

            {hidden &&
                <div className='list-item' style={{ position: "absolute", width: "38.5%", height: '13rem', overflow: "hidden", top: "6rem", background: "#FFFFFF", color: "black", zIndex: "999", left: "27rem", padding: "1rem" }}>
                    <h4>Xu hướng tìm kiếm</h4>
                    {listDatas.filter(val => {
                        if (searchTerm === '') {
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((item, indx) => {
                        return (
                            <div key={indx}><li key={item} onClick={e=>handleClick(item,e)}><a>{item.name}</a></li></div>
                        )
                    })}
                </div>
            }

        </div>
    )
}

export default Headerbottom;
