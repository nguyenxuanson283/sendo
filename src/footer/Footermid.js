
import React from 'react'
import '../css/Footermid.css';
function Footermid(){
    const aboutMes = [
        {
             cap:'Giới thiệu Sendo.vn'         
        },
        {
            cap:'Giới thiệu SenMall'
        },
        {
            cap:"Quy chế hoạt động"
        },
        {
            cap:"chính sách bảo mật"
        }
    ];
    const buyErs = [
        {
            cap:'Giải quyết khiếu nại'         
       },
       {
           cap:'Hướng dẫn mua hàng'
       },
       {
           cap:"Chính sách đổi trả"
       },
       {
           cap:"Chăm sóc khách hàng"
       },
       {
            cap:"Nạp tiền điện thoại"
       }
    ];
    const sellErs = [
        {
            cap:'Quy định đối với người bán'         
       },
       {
           cap:'Chính sách bán hàng'
       },
       {
           cap:"Hệ thống tiêu chí kiểm duyệt "
       },
       {
           cap:"Mở shop trên Sendo"
       }
    ];
    const appliCations = [
        {
            cap:'Mang thế giới mua sắm của Sendo trong tầm tay bạn',     
            image:'https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png'
        },
        {
            image:'https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png'
        },
        {
            image:'https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png'
        }
    ];
    return(
        <div className="Ft-mid">
            <div className="link-tags">
                <h3>VỀ CHÚNG TÔI</h3>
                {aboutMes.map(aboutMe=>{
                    return <li><a href="">{aboutMe.cap}</a></li>
                })}
            </div>
            <div className="link-tags">
                <h3>DÀNH CHO NGƯỜI MUA</h3>
                {buyErs.map(buyEr=>{
                    return <li><a href="">{buyEr.cap}</a></li>
                })}
            </div>
            <div className="link-tags">
                <h3>DÀNH CHO NGƯỜI BÁN</h3>
                {sellErs.map(sellEr=>{
                    return <li><a href="">{sellEr.cap}</a></li>
                })}
            </div>
            <div className='link-tags'>
                <h3>TẢI ỨNG DỤNG SENDO</h3>
                    {appliCations.map(appliCation => {
                        return <li><a>{appliCation.cap}</a></li>
                    })}
                    <div className='Img'>
                    {appliCations.map(appliCation => {
                        return <li><img src={appliCation.image} /></li>
                    })}
                    </div>
            </div>
        </div>
    )
}
export default Footermid;