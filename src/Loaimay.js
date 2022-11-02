import './css/menudrop.css'
import React, { useState } from 'react'
import { Collapse , Checkbox ,Button, Input } from "antd";
import { IoAdd } from "react-icons/io5";
import { AiOutlineLine } from "react-icons/ai";

function Loaimay({handleChange}){
    const {Panel} = Collapse;
    const Prices = [
        {
            key:1,
            title:"Kinetic(vừa pin vừa tự động)"
        },
        {
            key:2,
            title:'Pin (Quaztz)'
        },
        {
            key:3,
            title:'Bấm giờ (choronograph)'
        },
        {
            key:4,
            title:'Cơ (Automatic)'
        }
    ]
    const listHidenPrices = [
        {
            key:1,
            title:"Năng lượng mặt trời"
        }   
    ]
    const [list, setList] =  useState(false)
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
    const handleChangePrice = (value, checked) => {
        if(checked){
            handleChange(preState=>{
                return [...preState, {type:"loaimay", value:value}]
            })
        }else{
            handleChange(preState=>{
                return preState.filter(element=>element.value !==value)
            })
        }
    }
    return(
        <div className='list-menu-price' style={{border:"1px solid #D9D9D9", borderTop:"none"}}>
            <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
                <Panel header="Loại máy">
                <ul>
                        {Prices.map(Price=>{
                        return <li key={Price.key}>
                          <Checkbox onChange={e=>handleChangePrice(e.target.value, e.target.checked)} value={Price.title}>{Price.title}</Checkbox> 
                        </li>
                         })}
                         {list && <>
                            {listHidenPrices.map(listHidenPrice =>{
                             return <li> <Checkbox onChange={e=>handleChangePrice(e.target.value, e.target.checked)} key={listHidenPrice.key}>{listHidenPrice.title}</Checkbox></li>
                        })} 
                           {setList && <>
                            <Button onClick={hiddenList} style={{fontWeight:"bold"}}><AiOutlineLine style={{fontWeight:"bold"}} />{title}</Button>
                           </>}
                        </>
                        }    
                        {showHiden &&  <Button onClick={showList} style={{fontWeight:"bold"}}><IoAdd style={{fontWeight:"bold"}} />{title}</Button> }               
                    </ul>
                </Panel>
            </Collapse>
        </div>
    )
}
export default Loaimay;