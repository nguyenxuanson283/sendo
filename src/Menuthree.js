import './css/menudrop.css'
import { Collapse , Checkbox} from "antd";

function Menuthree({handleChange}){
    const {Panel} = Collapse;
    const phuongThucs = [
        {
            key:1,
            title:"Hỏa tốc",
            value:"Hỏa tốc"
        },
        {
            key:2,
            title:"Chuyển phát tiêu chuẩn", 
            value:"Chuyển phát tiêu chuẩn"
        }
    ]
    const handleSelected = (value, checked) => {
        if (checked) {
            handleChange(preState => {
                return [...preState, { type:"chuyenphat", value: value }]
                
            })
        }
        else {
            handleChange(preState => {
                return preState.filter(element => element.value !== value)
            })
        } 
        
    }
    return(
        <div className='list-menu-three' style={{border:"1px solid #D9D9D9", borderTop:"none"}}>
        <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
            <Panel header="Phương thức vận chuyển">
                <ul>
                    {phuongThucs.map(phuongThuc => {
                        return <li key={phuongThuc.key}><Checkbox onChange={(e) => handleSelected(e.target.value, e.target.checked)} value={phuongThuc.title}>{phuongThuc.title}</Checkbox></li>
                    })}
                </ul>
            </Panel>
        </Collapse>
        </div>
    )
}
export default Menuthree;