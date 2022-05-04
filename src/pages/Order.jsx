
import {useNavigate, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from 'axios';
import Preloader from './Preloader';
const baseurl = import.meta.env.REACT_APP_API_BASE_URL;
const types = [
    "T-shirt",
    "Long-sleeves",
    "Orthers"
]

const JPtypes = [
    "Tシャツ",
    "長袖",
    "その他"

]

function Order() {
    const navigate = useNavigate();
    const location = useLocation();
    const [orderList, setOrderList] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [prefecture, setPrefecture] = useState("");
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [building, setBuilding] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    useEffect(()=>{
        let data = localStorage.getItem("uploadData")   
        if(data){
            
            let orderdata = JSON.parse(data).map((item)=>({...item, amount:100}))
            setOrderList(orderdata)
        }
    },[])

    const handleChangeAmount = (index, value) =>{
        let orderdata = orderList;
        orderdata[index].amount = parseInt(value)

        setOrderList([...orderdata])
    }

    const handleSubmit = ()=>{
        let data = JSON.stringify({
            "orderList":orderList,
            "companyName":companyName,
            "name":name,
            "email":email,
            "postalCode":postalCode,
            "prefecture":prefecture,
            "city":city,
            "address":address,
            "building":building,
            "phoneNumber":phoneNumber
        });
        let config = {
            method: 'post',
            url: `${baseurl}/api/order`,
            headers: { 
                'Content-Type': 'application/json'
            },
                data : data,
        };
        axios(config)
        .then((response) => {
            
        })
        .catch((error)=>{
            if(error.response){
            }
        })
    }
    return(
            <main className="preview-main order-main">
                    <div className="preview-main-main _type">
                        <div className="select-type-header font-HiraKakuProN-W6">
                            お見積もり依頼
                        </div>
                        <div className="order-main-main">
                            <div className="order-type-cons">
                                {orderList.map((item,index)=>(
                                    <div key={index} className="order-type-container">
                                        <img src={`${baseurl}/media/${item.img1}`} alt=""/>
                                        <div className="order-type-con-input">
                                            <div className="font-HiraKakuProN-W6">
                                                {types[location.state.type]}
                                            </div>
                                            <div>
                                                {JPtypes[location.state.type]}
                                            </div>
                                            <div className="order-input-cover">
                                                <label htmlFor="">枚数</label>
                                                <select type="select" value={item.amount} onChange={(e)=>handleChangeAmount(index,e.target.value)}>
                                                    <option value={100}>100</option>
                                                    <option value={50}>50</option>
                                                    <option value={10}>10</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> 
                                ))}         
                            </div>
                            <div className="order-input-cons">
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6">会社名</label>
                                    <input type="text" value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}}/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6">氏名</label>
                                    <input type="text"value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6">メールアドレス</label>
                                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6">郵便番号</label>
                                    <input type="text" value={postalCode} onChange={(e)=>{setPostalCode(e.target.value)}}/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6">都道府県</label>
                                    <input type="text" value={prefecture} onChange={(e)=>{setPrefecture(e.target.value)}}/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6">市区町村</label>
                                    <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6">住所</label>
                                    <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6">建物名</label>
                                    <input type="text" value={building} onChange={(e)=>{setBuilding(e.target.value)}}/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6">電話番号</label>
                                    <input type="text" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="preview-footer order-footer">
                        <div className="order-check">
                            <input type="checkbox" name="order-check" id="order-check"/>
                            <label htmlFor="order-check" className="font-HiraKakuProN-W6">この内容で会員登録する</label>
                        </div>
                        <div className="preview-footer-btns">
                            <button className="btn footer-arrow-btn font-HiraKakuProN-W6" onClick={()=> {navigate(-1)}}>&lt;</button>
                            <button className="btn yellow-btn footer-btn" onClick={handleSubmit}>依頼する</button>
                        </div>
                    </div>
                </main>
    )
}

export default Order;