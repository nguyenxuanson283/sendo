import React, { useState, useEffect } from 'react'
import { Select } from "antd";
import './css/Productitem.css';
function Buttonmain({handleSelect}) {
    const { Option } = Select;
    const handleChangeButton = (selected) => {
       if(selected){
            handleSelect(preState => {
                return [{type:"selected", value: selected}]
            })
       }
       
    };
    const [selected, setSelected] = useState('')
    const [listDatas, setListDatas] = useState([])
    
    const options = [
     
        {
            nameLabel: "Đề cử",
            keyValue: "1",
        },
        {
            nameLabel: "Bán chạy",
            keyValue: "2",
        },
        {
            nameLabel: "Khuyến Mãi",
            keyValue: "3",
        },
        {
            nameLabel: "Đánh giá tốt",
            keyValue: "4",
        }
    ]
    
    const [selectOption, setSelectOption] = useState(options[0].keyValue)
    useEffect(() => {
        fetch('http://localhost:8000/employees')
            .then(res => res.json())
            .then(data => setListDatas(data))
            .catch(err => console.log(err))
        return setListDatas(listDatas)
    }, [])
    const [show, setShow] = useState(false)
    return (
      <div>
              <div className='Button' style={{ display: "flex", alignItems: "center", marginTop: "2rem", marginLeft: "5rem" }}>
            <span>Sắp xếp theo:</span>
            <select defaultValue="0" style={{ width: 150, marginLeft: "2rem" }} onChange={e=>handleChangeButton(e.target.value, e.target.selectedIndex)} value={options.nameLabel}>
                {options.map((option, index) => {
                    return <option key={index} value={option.nameLabel}>{option.nameLabel}</option>
                })}
            </select>
        </div>
        {/* <div style={{display:"flex", width:"97%", flexWrap:"wrap",justifyContent:"flex-start", marginLeft:"2rem"}}>
            {show && listDatas.filter(list=>{
                if(selectOption === "0"){
                    return list.text === "Trả góp Kredivo"
                }else if(selectOption === '1'){
                    return list.type === 'SKU'
                }else if(selectOption === '2'){
                    return list.shop_warehouse_city === "Hà Nội"
                }else{
                    return list.price > 1000000
                }
            }).map((list, index) => {
               return(
                <div className="Product" key={index}>
                <div className="Product-item" key={list.product_id} >
                    <img src={list.original_img_url ?? list.thumbnail_url} width={"30%"} />
                    <div className="content">
                        <span><img width={"30%"} style={{ marginRight: "0.5rem" }} src={list.shop_badge_url ?? ''} />{list.name}</span>
                        <div className="price"><h3>{list.price}</h3></div>
                        <div className="img-content" style={{ display: "flex" }}>
                            <img src={list.icon} />
                            <p>{list.text ?? ''}</p>

                        </div>
                        <div className="Bottom-item">
                            <p>{list.shop_warehouse_city}</p>
                        </div>
                    </div>
                </div>
            </div>
             
               )

            })}
        </div> */}
      </div>
    )
}
export default Buttonmain;