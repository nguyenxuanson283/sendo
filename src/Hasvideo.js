import './css/menudrop.css'
import { Collapse , Checkbox} from "antd";

function Hasvideo(){
    const {Panel} = Collapse;
    const phuongThucs = [
        {
            key:1,
            title:"Có video"
        }
    ]
    return(
        <div className='list-menu-three' style={{border:"1px solid #D9D9D9", borderTop:"none"}}>
        <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
            <Panel header="Bộ lọc khác">
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
export default Hasvideo;