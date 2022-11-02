import './css/menudrop.css'
import React, { useState } from 'react'
import { Collapse, Checkbox, Button } from "antd";
import { IoAdd } from "react-icons/io5";
import { AiOutlineLine } from "react-icons/ai";

function NavMenuCheckBox({ handleChange }) {
    const { Panel } = Collapse;
    const listCitys = [
        {
            key: 1,
            title: "Hà Nội",
            value:"hanoi"
        },
        {
            key: 2,
            title: 'TP.HCM'
        },
        {
            key: 3,
            title: 'Lâm Đồng'
        },
        {
            key: 4,
            title: 'Lào Cai'
        }
    ]
    const listHidenCitys = [
        {
            key: 1,
            title: "Vĩnh Phúc"
        },
        {
            key: 2,
            title: 'Nam Định'
        },
        {
            key: 3,
            title: 'Thanh Hóa'
        },
        {
            key: 4,
            title: 'Hưng Yên'
        },
        {
            key: 5,
            title: 'Đà Nẵng'
        },
        {
            key: 6,
            title: 'Bình Định'
        }
    ]
    const [list, setList] = useState(false)
    const [showHiden, setShowHiden] = useState(true)
    const [title, setTitle] = useState('Xem Thêm')
    const showList = () => {
        setList(true)
        setShowHiden(false)
        setTitle('Rút gọn')
    }
    const hiddenList = () => {
        setShowHiden(true)
        setList(false)
        setTitle('Xem thêm')
    }

    const handleSelected = (value, checked) => {
        if (checked) {
            handleChange(preState => {
                return [...preState, { type: "shop_warehouse_city", value: value }]
                
            })
        }
        else {
            handleChange(preState => {
                return preState.filter(element => element.value !== value)
            })
        }
        
    }

    return (
        <div className='list-menu-two' style={{ border: "1px solid #D9D9D9", borderTop: "none" }}>
            <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
                <Panel header="Địa điểm">
                    <ul>
                        {listCitys.map(listCity => {
                            return <li>
                                <Checkbox onChange={(e) => handleSelected(e.target.value, e.target.checked)} key={listCity.key} value={listCity?.title}>{listCity.title}</Checkbox>
                            </li>
                        })}
                        {list && <>
                            {listHidenCitys.map(listHidenCity => {
                                return <li> <Checkbox onChange={(e) => handleSelected(e.target.value, e.target.checked)} value={listHidenCity?.title} key={listHidenCity.key}>{listHidenCity.title}</Checkbox></li>
                            })}
                            {setList && <>
                                <Button onClick={hiddenList} style={{ fontWeight: "bold" }}><AiOutlineLine style={{ fontWeight: "bold" }} />{title}</Button>
                            </>}
                        </>
                        }
                        {showHiden && <Button onClick={showList} style={{ fontWeight: "bold" }}><IoAdd style={{ fontWeight: "bold" }} />{title}</Button>}
                    </ul>
                </Panel>
            </Collapse>
        </div>
    )
}
export default NavMenuCheckBox;