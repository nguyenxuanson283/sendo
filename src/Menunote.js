import './css/menudrop.css'
import React , {useState} from 'react';
import { Collapse , Checkbox} from "antd";
function Menunote({handleChange}){
    const {Panel} = Collapse
    const Votes = [
        {
            key:1,
            title:"5 sao"
        },
        {
            key:2,
            title:"4 sao"
        },
        {
            key:3,
            title:"3 sao"
        }
    ]
    const handleSelected = (value, checked) => {
        if(checked){
            handleChange(preState => {
                return [...preState, {type:"vote", value:value}]
            })
        }else{
            handleChange(preState => {
                return preState.filter(element=> element.value !== value )
            })
        }
    }
    return (
        <div className='list-menu-votes' style={{border:"1px solid #D9D9D9", borderTop:"none"}}>
            <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
                <Panel header="Đánh giá">
                    <ul>
                        {Votes.map(Vote=>{
                            return <li style={{background:"#F2F3F4", border:"1px solid #D9D9D9", marginTop:"0.5rem"}}>
                                <Checkbox onChange={e=>handleSelected(e.target.value, e.target.checked)} key={Vote.key} value={Vote.title}  >{Vote.title}</Checkbox>
                            </li>
                        })}
                    </ul>
                </Panel>
            </Collapse>
        </div>
    )
}
export default Menunote;