import { Item } from "rc-menu";

function Footertop(){
    const Items = [
        {
            id:1,
            img:'https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png',
            title:'Siêu nhiều hàng tốt',
            descreption:'Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm'
        },
        {
            id:2,
            img:'https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png',
            title:'Siêu yên tâm',
            descreption:'Miễn phí đổi trả 48h'
        },
        {
            id:3,
            img:'https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png',
            title:'Siêu tiện lợi',
            descreption:'Mang thế giới mua sắm của sendo trong tầm tay bạn '
        },
        {
            id:4,
            img:'https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png',
            title:'Siêu tiết kiệm',
            descreption:'Giá hợp lý, vừa túi tiền. Luôn có nhiều chương trình khuyến mãi'
        },
        
    ]
    return(
        <div className="top" style={{display:"flex", width:"65%", margin:"auto", justifyContent:"space-between", padding:"2rem 0"}}>
            {Items.map(Item=>{
                return(
                    <div className="Product" key={Item.id} >
                       <div> <img src={Item.img} width="150rem" style={{marginLeft:"auto", marginRight:"auto", display:"block"}} /></div>
                        <div className="Title" style={{textAlign:"center"}}>
                            <h4>{Item.title}</h4>
                        </div>
                        <div className="Des" style={{textAlign:"center", width:"90%", margin:"auto", color:"#666666"}}>
                            <p>{Item.descreption}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
export default Footertop;