import './css/menudrop.css'
import { Collapse , Checkbox} from "antd";

function Baohanh(){
    const {Panel} = Collapse;
    const phuongThucs = [
        {
            key:1,
            title:"Kính sapphie"
        },
        {
            key:2,
            title:"Kính cứng"
        },
        {
            key:3,
            title:"Nhựa"
        },
        {
            key:4,
            title:"Khác"
        }
    ]
    return(
        <div className='list-menu-three' style={{border:"1px solid #D9D9D9", borderTop:"none"}}>
        <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
            <Panel header="Chất liệu mặt kính">
                <ul>
                    {phuongThucs.map(phuongThuc => {
                        return <li key={phuongThuc.key}><Checkbox>{phuongThuc.title}</Checkbox></li>
                    })}
                </ul>
            </Panel>
        </Collapse>
        </div>
    )
}
export default Baohanh;