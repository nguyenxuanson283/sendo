import './css/menudrop.css'
import React, { useState } from 'react'
import { Collapse , Checkbox ,Button } from "antd";
import { IoAdd } from "react-icons/io5";
import { AiOutlineLine } from "react-icons/ai";

function Cityborn({handleChange}){
    const {Panel} = Collapse;
    const listCitys = [
        {
            key:1,
            title:"Châu Âu"
        },
        {
            key:2,
            title:'Thụy Sĩ'
        },
        {
            key:3,
            title:'Đài Loan'
        },
        {
            key:4,
            title:'Hàn Quốc'
        }
    ]
    const listHidenCitys = [
        {
            key:1,
            title:"Hồng Kông"
        },
        {
            key:2,
            title:'Nhật'
        },
        {
            key:3,
            title:'Mỹ'
        },
        {
            key:4,
            title:'Châu Á'
        },
        {
            key:5,
            title:'Trung Quốc'
        },
        {
            key:6,
            title:'Pháp'
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
    const handleSelected = (value, checked) => {
        if(checked){
            handleChange(preState => {
                return [...preState, {type:"city-born", value:value}]
            })
        }else{
            handleChange(preState => {
                return preState.filter(element=> element.value !== value )
            })
        }
    }
    return(
        <div className='list-menu-two' style={{border:"1px solid #D9D9D9", borderTop:"none"}}>
            <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
                <Panel header="Xuất xứ">
                    <ul>
                        {listCitys.map(listCity=>{
                        return <li key={listCity.key}>
                    <Checkbox value={listCity.title} onChange={e=>handleSelected(e.target.value, e.target.checked)}>{listCity.title}</Checkbox>
                        </li>
                         })}
                         {list && <>
                            {listHidenCitys.map(listHidenCity =>{
                             return <li> <Checkbox key={listHidenCity.key} onChange={e=>handleSelected(e.target.value, e.target.checked)} value={listHidenCity.title}>{listHidenCity.title}</Checkbox></li>
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
export default Cityborn;