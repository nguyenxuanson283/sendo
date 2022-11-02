import './css/menudrop.css'

import { Collapse , Checkbox } from "antd";

function MenuShop({handleChange}){
    const {Panel} = Collapse;
    const typeShops = [
        {
            key:1,
            title:"SenMail"
        },
        {
            key:2,
            title:"Shop+"
        },
        {
            key:3,
            title:"Shop tự giao"
        },
        {
            key:4,
            title:"Shop uy tín"
        }
    ]
    const handleSelect = (value, checked) => {
      if(checked){
        handleChange(preState=>{
            return [...preState, {type:"shop-type", value:value}]
        })
      }else{
            handleChange(preState=>{
                return preState.filter(Element=> Element.value !== value)
            })
      }
    }
    return(
        <div className='list-menu-three' style={{border:"1px solid #D9D9D9", borderTop:"none"}}>
        <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
            <Panel header="Loại shop">
                <ul>
                    {typeShops.map(typeShop => {
                        return <li key={typeShop.key}><Checkbox  onChange={e=>handleSelect(e.target.value, e.target.checked)} value={typeShop.title} >{typeShop.title}</Checkbox></li>
                    })}
                </ul>
            </Panel>
        </Collapse>
        </div>
    )
}
export default MenuShop;