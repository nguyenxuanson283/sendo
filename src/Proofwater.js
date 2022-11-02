import './css/menudrop.css'
import React, { useState } from 'react'
import { Collapse , Checkbox ,Button } from "antd";
import { IoAdd } from "react-icons/io5";
import { AiOutlineLine } from "react-icons/ai";

function Proofwater({handleChange}){
    const {Panel} = Collapse;
    const listCitys = [
        {
            key:1,
            title:"Không chống nước"
        },
        {
            key:2,
            title:'3 ATM'
        },
        {
            key:3,
            title:'5 ATM'
        },
        {
            key:4,
            title:'10 ATM'
        }
    ]
    const listHidenCitys = [
        {
            key:1,
            title:"20 ATM"
        },
        {
            key:2,
            title:'Khác'
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
                return [...preState, {type:"proof", value:value}]
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
                <Panel header="Độ chịu nước">
                    <ul>
                        {listCitys.map(listCity=>{
                        return <li key={listCity.key}>
                        <Checkbox value={listCity.title} onChange={e=>handleSelected(e.target.value, e.target.checked)}>{listCity.title}</Checkbox>
                        </li>
                         })}
                         {list && <>
                            {listHidenCitys.map(listHidenCity =>{
                             return <li>  <Checkbox key={listHidenCity.key} value={listHidenCity.title} onChange={e=>handleSelected(e.target.value, e.target.checked)}>{listHidenCity.title}</Checkbox></li>
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
export default Proofwater;