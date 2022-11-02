import './css/menudrop.css'
import React, { useState } from 'react'
import { Collapse , Checkbox ,Button, Input } from "antd";
import { IoAdd } from "react-icons/io5";
import { AiOutlineLine } from "react-icons/ai";

function Price({handlePrice}){
    const {Panel} = Collapse;
    const checkInput = [
        {
            key:1,
            input:<Input type="number" />,
        },
        {
            key:2,
            input:<Input type="number" />,
        },
        {
            key:1,
            input:<Button type="danger">Áp dụng</Button>,
        }
    ]
    const Prices = [
        {
            key:1,
            title:"Dưới 70K"
        },
        {
            key:2,
            title:'70K - 200K'
        },
        {
            key:3,
            title:'200K - 300K'
        },
        {
            key:4,
            title:'300K-1M'
        }
    ]
    const listHidenPrices = [
        {
            key:1,
            title:"1M-3M"
        },
        {
            key:2,
            title:'Trên 3M'
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
            handlePrice(preState=>{
                return [...preState, {type:"price-type", value:value}]
            })
        }else{
            handlePrice(preState=>{
                return preState.filter(element=>element.value !==value)
            })
        }
    }

    const handleClick = (e) => {
        const checkInput1 = document.getElementById("addInput1").value;
        const checkInput2 = document.getElementById("addInput2").value;
       if(checkInput1 < checkInput2){
        handlePrice(preState=>{
            return [...preState, {type:"price-type", value:"1M-3M"}]
        })
       }
      
    }
    return(
        <div className='list-menu-price' style={{border:"1px solid #D9D9D9", borderTop:"none"}}>
            <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
                <Panel header="Khoảng giá">
                <div className='checkPrice' style={{display:"flex", marginBottom:"1rem"}}>
                     <div className='checkInput'>
                        <Input type="number" name='inputSearch' id='addInput1'/>
                     </div>
                     <div className='checkInput' style={{marginLeft:"0.5rem"}}>
                        <Input type="number" name='inputSearch' id='addInput2'/>
                     </div>
                </div>
                <div className='checkButton' style={{textAlign:"center", marginBottom:"1rem"}}>
                    <Button type="danger" onClick={e=>handleClick(e.target.value)}>Áp dụng</Button>
                </div>
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
export default Price;