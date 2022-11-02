import './css/menudrop.css'
import { Collapse , Checkbox} from "antd";

function Baohanh({handleChange}){
    const {Panel} = Collapse;
    const phuongThucs = [
        {
            key:1,
            title:"3 năm"
        },
        {
            key:2,
            title:"5 năm"
        },
        {
            key:3,
            title:"1 năm"
        },
        {
            key:4,
            title:"2 năm"
        }
    ]
    const handleSelected = (value, checked) => {
        if(checked){
            handleChange(preState => {
                return [...preState, {type:"baohanh", value:value}]
            })
        }else{
            handleChange(preState => {
                return preState.filter(element=> element.value !== value )
            })
        }
    }
    return(
        <div className='list-menu-three' style={{border:"1px solid #D9D9D9", borderTop:"none"}}>
        <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
            <Panel header="Bảo hành">
                <ul>
                    {phuongThucs.map(phuongThuc => {
                        return <li key={phuongThuc.key}><Checkbox value={phuongThuc.title} onChange={e=>handleSelected(e.target.value, e.target.checked)}>{phuongThuc.title}</Checkbox></li>
                    })}
                </ul>
            </Panel>
        </Collapse>
        </div>
    )
}
export default Baohanh;