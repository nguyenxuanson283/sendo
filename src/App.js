import React, { useState } from 'react';
import './App.css'
import 'antd/dist/antd.min.css'
import { BackTop } from 'antd';
import { BsArrowUp } from "react-icons/bs";
import Header from './Header';
import Headerbottom from './Headerbottom.js';
import Navmenu from './Navmenu';
import ProductItem from './ProductItem';
import Footertop from './footer/Footertop';
import Footermid from './footer/Footermid'
import Footerbottom from './footer/Footerbottom';
import Buttonmain from './Buttonmain';
function App() {
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
    color: '#666666',
    textAlign: 'center',
    fontSize: 14,
  }
  const [checked, setChecked] = useState([])
  const [selected, setSelected] =  useState([])
  const [selectedInput, setSelectInput] = useState([])
  const [priceCheck, setPriceCheck] = useState([])
  return (
    <div className="App">
      <div className='App-header'>
        <Header />
      </div>
      <div className="App-header-bottom">
        <Headerbottom handleSelectInput={setSelectInput} />
      </div>
      <div className='main'>
        <div className='Nav-left'>
          <Navmenu handleChange={setChecked} handlePrice={setPriceCheck} />
        </div>
        <div className='Product-name'>
        <div className='Product-item'>
          <Buttonmain handleSelect={setSelected} />
          <div className='Product-item-main'>
            <ProductItem filter={checked} select={selected} clickInput={selectedInput} changePrice={priceCheck}/>
          </div>
        </div>
        </div>
      </div>
      <div className='Footer'>
        <div className='Footer-top'>
          <Footertop />
        </div>
        <div className='Footer-mid'>
          <Footermid />
        </div>
        <div className='Footer-bottom'>
          <Footerbottom />
        </div>
      </div>
      <BackTop style={style}><BsArrowUp /></BackTop>
    </div>
  );
}

export default App;
