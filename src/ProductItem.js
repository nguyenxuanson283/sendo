import {memo} from 'react'
import { getValue } from "@testing-library/user-event/dist/utils";
import { Button } from "antd";
import { useState, useEffect } from "react";
import { BsOption } from "react-icons/bs";
import './css/Productitem.css'
function ProductItem({ filter , select , clickInput , changePrice }) {
  const [listDatas, setListDatas] = useState([]);
  const [listChecked, setListChecked] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/employees')
      .then(res => res.json())
      .then(data => setListDatas(data))
    return setListDatas(listDatas)
  }, [])
  useEffect(() => {
    setListChecked(listDatas)
  }, [listDatas])
  useEffect(() => {
    if (filter.length) {
      setListChecked(listDatas?.filter(
        listData => {
          const arr = filter?.map(data => {
            return listData[data.type] === data.value
          })
          return arr.find(e => e === true);
        }
      ))
    }
    else {
      setListChecked(listDatas)
    }

  }, [filter])

  useEffect(() => {
    if (select.length) {
      setListChecked(listDatas?.filter(
        listData => {
          const arr = select?.map(data => {
            return listData[data.type] === data.value;
          })
          return arr.find(e => e === true);
        }
      ))
    }
    else {
      setListChecked(listDatas)
    }

  }, [select])
  useEffect(() => {
    if(clickInput.length){
      setListChecked(listDatas?.filter(
        listData => {
          const arr = clickInput?.map(data => {
            return listData[data.type] === data.value;
          })
          return arr.find(e => e === true);
        }
      ))
    }else{
      return setListChecked(listDatas)
    }
  },[clickInput])
  // Khoảng giá
  useEffect(()=>{
    if(changePrice.length){
      setListChecked(listDatas?.filter(
        listData => {
          const arr = changePrice?.map(data=>{
            return listData[data.type] === data.value; 
          })
          return arr.find(e => e === true);
        }
      ))
    }else{
      return setListChecked(listDatas)
    }
  },[changePrice])
  return (
    <>
      {listChecked.map(item => {
        return (
          <div className="Product">
            <div className="Product-item" key={item.product_id} >
              <img src={item.original_img_url ?? item.thumbnail_url} width={"30%"} />
              <div className="content">
                <span><img width={"30%"} style={{ marginRight: "0.5rem" }} src={item.shop_badge_url ?? ''} />{item.name}</span>
                <div className="price"><h3>{item.price}</h3></div>
                <div className="img-content" style={{ display: "flex" }}>
                  <img src={item.icon} />
                  <p>{item.text ?? item.track_info}</p>
                </div>
                <div className="Bottom-item">
                  <p>{item.shop_warehouse_city}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
};

export default memo(ProductItem);