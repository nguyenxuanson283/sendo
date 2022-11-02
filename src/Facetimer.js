import './css/menudrop.css'
import { Collapse , Checkbox} from "antd";

function Facetimer({handleChange}){
    const {Panel} = Collapse;
    const phuongThucs = [
        {
            key:1,
            title:"Mặt tròn"
        },
        {
            key:2,
            title:"Mặt Chữ nhật"
        },
        {
            key:3,
            title:"Mặt vuông"
        },
        {
            key:4,
            title:"Mặt Oval"
        }
    ]
    const handleSelected = (value, checked) => {
        if(checked){
            handleChange(preState => {
                return [...preState, {type : "faceItems" ,value : value}]
            })
        }else{
            handleChange(preState => {
                return preState.filter(element => element.value !== value)
            })
        }
    }
    return(
        <div className='list-menu-three' style={{border:"1px solid #D9D9D9", borderTop:"none"}}>
        <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end">
            <Panel header="Mặt đồng hồ">
                <ul>
                    {phuongThucs.map(phuongThuc => {
                        return <li key={phuongThuc.key}><Checkbox onChange={e=>handleSelected(e.target.value, e.target.checked)} value={phuongThuc.title}>{phuongThuc.title}</Checkbox></li>
                    })}
                </ul>
            </Panel>
        </Collapse>
        </div>
    )
}
export default Facetimer;