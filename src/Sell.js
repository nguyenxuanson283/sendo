import './css/menudrop.css'
import React, { useState, useEffect } from 'react'
import { Collapse , Checkbox ,Button } from "antd";
import { IoAdd } from "react-icons/io5";
import { AiOutlineLine } from "react-icons/ai";
function Sell({handleChange}){
    const {Panel} = Collapse;
    const listCitys = [
        {
            key:1,
            title:"NGÀY PHỤ NỮ VIỆT NAM 20/10"
        },
        {
            key:2,
            title:'QUÀ CÔNG NGHỆ'
        },
        {
            key:3,
            title:'Flash Sale'
        },
        {
            key:4,
            title:'Mua trước trả sau'
        }
    ]
    const listHidenCitys = [
        {
            key:1,
            title:"Gói mua siêu hời"
        },
        {
            key:2,
            title:'Mua nhiều giảm giá'
        },
        {
            key:3,
            title:'Fresship'
        },
        {
            key:4,
            title:'Khuyến mãi'
        },
        {
            key:5,
            title:'Khuyến mãi app'
        },
        {
            key:6,
            title:'Trả góp 0%'
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
                return [...preState, {type:"vote-type", value:value}]
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
                <Panel header="Ưu đãi">
                       <ul>
                        {listCitys.map(listCity=>{
                        return <li>
                          <Checkbox onChange={e=>handleSelected(e.target.value, e.target.checked)} key={listCity.key} value={listCity.title}  >{listCity.title}</Checkbox>
                        </li>
                         })}
                         {list && <>
                            {listHidenCitys.map(listHidenCity =>{
                             return <li> <Checkbox onChange={e=>handleSelected(e.target.value, e.target.checked)} key={listHidenCity.key} value={listHidenCity.title} >{listHidenCity.title}</Checkbox></li>
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

export default Sell;