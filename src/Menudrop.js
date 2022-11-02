import React from 'react'
import './App.css'
import './css/listmenu.css'
import { FaAngleRight ,FaDochub} from "react-icons/fa";
function Menudrop(){
    const listMenus = [
        {
            id:'1',
            title:'Thời trang nữ',
            icon:<FaDochub />
        },
        {
            id:'2',
            title:'Thời trang nam',
        },
        {
            id:'3',
            title:'Sức khỏe- Làm đẹp'
        },
        {
            id:'4',
            title:'Giày dép- Túi sách'
        },
        {
            id:'5',
            title:'Đồng hồ- Trang sức'
        },
        {
            id:'6',
            title:'Điện thoại- laptop'
        },
        
    ]
    return (
      <div className='list-menu'>
            {listMenus.map(listMenu=>{
                return(
                    <ul>
                    <li key={listMenu.id} style={{width:"100%"}}><a href='#'>{listMenu.icon}{listMenu.title}</a><FaAngleRight /></li>
                    </ul>
                )
            })}
      </div>
    )
}
export default Menudrop;