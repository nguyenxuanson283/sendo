import {Input , Button} from 'antd';
function Footerbottom(){
    return(
        <div className="Ft-bt" style={{width:"80%", margin:"auto", padding:"2rem 0", display:'flex'}}>
            <div className="info" style={{width:"50%"}}>
                <h4 style={{color:"white"}}>Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT</h4>
                <p>Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20, ngày 26/04/2022.</p>
                <p>Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
                <p>Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, 
                Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</p>
                <p>Email: lienhe@sendo.vn</p>
                <div className="img-bt">
                    <img src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png" width={"20%"} style={{marginRight:"2%"}} />
                    <img src='https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png' width={"20%"}/>
                </div>
            </div>
            <div className="search-bt" style={{width:"40%", marginLeft:"5%"}}>
                 <h4 style={{color:"white"}}>Đăng ký nhận bản tin ưu đãi khủng từ Sendo</h4>
                 <div className='action' style={{display:"flex"}}>
                 <Input placeholder='Email của bạn là' style={{width:"50%", marginRight:"2%"}} />
                 <Button type='danger'>Đăng ký</Button>
                 </div>
            </div>
        </div>
    )
}
export default Footerbottom;