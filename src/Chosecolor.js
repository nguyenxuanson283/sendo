import './css/menudrop.css'
import { Collapse , Checkbox, Input } from "antd";
function ChoseColor({handleChange}){
    const {Panel} = Collapse
    const Colors = [
        {
            key:1,
            title:"Màu hồng",
            color:"pink"
        },
        {
            key:2,
            title:"Màu đen",
            color:"#000000",
        },
        {
            key:3,
            title:"Màu bạc",
            color:"#CCCCCC"
        },
        {
            key:4,
            title:"Màu nâu",
            color:"#804000"
        },
        {
            key:5,
            title:"Màu đỏ",
            color:"red"
        },
        {
            key:6,
            title:"Màu trắng",
            color:"#F4F4F4"
        },
        {
            key:7,
            title:"Màu xanh đen",
            color:"#112C4E"
        },
        {
            key:8,
            title:"Màu vàng",
            color:"#FFFF00"
        },
        {
            key:9,
            title:"Màu xanh nước biển",
            color:"#0080FF"
        }
    ]
    const handleSelected = (value) => {
       if(value){
        handleChange(preState => {
            return [...preState, {type:"color-background",value:value}]
        })
       }else{
            handleChange(preState => {
                return preState.filter(element => element.value !== value)
            })
       }
    }
    return (
        <div className='list-menu-votes' style={{border:"1px solid #D9D9D9", borderTop:"none"}}>
            <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
                <Panel header="Màu sắc">
                    <ul style={{justifyContent:"space-between", flexWrap:"wrap", display:"flex", marginLeft:"-2rem"}}>
                        {Colors.map(Color=>{
                            return <Input title={Color.title} 
                            value={Color.title}
                            onClick={e=>handleSelected(e.target.value)}
                            style={{boder:"1px solid #D9D9D9" , 
                            padding:"1rem", "background":`${Color.color}`,
                            width:"0.5rem",
                            height:"0.5rem",
                            borderRadius:"15%",
                            marginRight:"1.5rem",
                            marginBottom:"1.5rem",
                            border:`${Color.color}`,
                           

                            }} />
                        })}
                    </ul>
                </Panel>
            </Collapse>
        </div>
    )
}
export default ChoseColor;