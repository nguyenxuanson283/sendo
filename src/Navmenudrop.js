
import './css/menudrop.css'
import { Collapse } from "antd";
function Navmenudrop({handleChange}) {
    const { Panel } = Collapse;
    const text = `
      Về trang tất cả danh mục
    `;
    const listMenuNams = [
        {
            key: 1,
            title: "Đồng hồ kim"
        },
        {
            key: 2,
            title: "Đồng hồ điện tử"
        },
        {
            key: 3,
            title: "Đồng hồ thể thao nam"
        },
        {
            key: 4,
            title: "Đồng hồ lộ máy"
        }
    ]
    const listMenuNus = [
        {
            key: 1,
            title: "Đồng hồ thời trang"
        },
        {
            key: 2,
            title: "Đồng hồ vòng tay, lắc dây"
        },
        {
            key: 3,
            title: "Đồng hồ thể thao nữ"
        }
    ]
    const listMenuDoubles = [
        {
            key: 1,
            title: "Đồng hồ đôi dây kim loại"
        },
        {
            key: 2,
            title: "Đồng hồ đôi dây da"
        },
        {
            key: 3,
            title: "Đồng hồ đôi dây vải"
        }
    ]

    const listMenuChildrens = [
        {
            key: 1,
            title: "Đồng hồ cho bé trai"
        },
        {
            key: 2,
            title: "Đồng hồ cho bé gái"
        }
    ]
    const listMenuOthers = [
        {
            key: 1,
            title: 'Đồng hồ quả quýt'
        },
        {
            key: 2,
            title: 'Đồng hồ khác'
        }
    ]
    const listMenuPKs = [
        {
            key: 1,
            title: 'Dây đồng hồ'
        },
        {
            key: 2,
            title: 'Hộp đựng đồng hồ'
        },
        {
            key: 3,
            title: 'Dụng cụ sửa đồng hồ'
        },
        {
            key: 4,
            title: 'Pin đồng hồ'
        },
    ]
    const onChange = (key) => {
        console.log(key);
    }
    return (

        <div className="list-menu-one" style={{ color: "black" }}>
            <Collapse onChange={onChange} expandIconPosition="end" >
                <Panel header="Danh mục" key="1" >
                    <p style={{ color: "blue", textAlign: "center",fontSize:"13" }}>{text}</p>
                    <Collapse defaultActiveKey="1" ghost={true} expandIconPosition="end" style={{marginLeft:"-2rem"}}>
                        <Panel header="Đồng hồ" key="1" style={{marginLeft:"2rem" }}>
                            <Collapse ghost={true}>
                                <Panel header="Đồng hồ nam" key="1">
                                    <ul style={{width:"100%"}}>
                                        {listMenuNams.map(listMenuNam => {
                                            return (
                                                <li key={listMenuNam.key}>{listMenuNam.title}</li>
                                            )
                                        })}
                                    </ul>
                                </Panel>
                            </Collapse>
                            <Collapse ghost={true}>
                                <Panel header="Đồng hồ nữ" key="2">
                                    <ul>
                                        {listMenuNus.map(listMenuNu => {
                                            return (
                                                <li key={listMenuNu.key}>{listMenuNu.title}</li>
                                            )
                                        })}
                                    </ul>
                                </Panel>
                            </Collapse>
                            <Collapse ghost={true}>
                                <Panel header="Đồng hồ đôi" key="3">
                                    <ul>
                                        {listMenuDoubles.map(listMenuDouble => {
                                            return (
                                                <li key={listMenuDouble.key}>{listMenuDouble.title}</li>
                                            )
                                        })}
                                    </ul>
                                </Panel>
                            </Collapse>
                            <Collapse ghost={true}>
                                <Panel header="Đồng hồ trẻ em" key="4">
                                    <ul>
                                        {listMenuChildrens.map(listMenuChildren => {
                                            return (
                                                <li key={listMenuChildren.key}>{listMenuChildren.title}</li>
                                            )
                                        })}
                                    </ul>
                                </Panel>
                            </Collapse>
                            <Collapse ghost={true}>
                                <Panel header="Đồng hồ khác" key="5">
                                    <ul>
                                        {listMenuOthers.map(listMenuOther => {
                                            return (
                                                <li key={listMenuOther.key}>{listMenuOther.title}</li>
                                            )
                                        })}
                                    </ul>
                                </Panel>
                            </Collapse>
                            <Collapse ghost={true}>
                                <Panel header="Phụ kiện đồng hồ" key="6">
                                    <ul>
                                        {listMenuPKs.map(listMenuPK => {
                                            return (
                                                <li key={listMenuPK.key}>{listMenuPK.title}</li>
                                            )
                                        })}
                                    </ul>
                                </Panel>
                            </Collapse>
                        </Panel>
                    </Collapse>
                </Panel>
            </Collapse>
        </div>
    )
}
export default Navmenudrop;