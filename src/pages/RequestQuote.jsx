import {useEffect, useState} from "react"
import {useNavigate, useParams, useLocation} from "react-router-dom";
import axios from 'axios';
const baseurl = import.meta.env.REACT_APP_API_BASE_URL;
const JPtypes = [
    "Tシャツ",
    "長袖",
    "その他"
]

const requeststatus = [
    "見積り中",
    "見積り済",
    "発注",
    "期限切れ"
]


function RequestQuote() {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    var userData =  JSON.parse(localStorage.getItem("userData")) || null;
    const [requestList, setList] = useState([])
    const [subTotal, setSubtotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(()=>{
        getSubrequestList()
    },[])
    const getSubrequestList = () =>{
        let config = {
            method: 'get',
            url: `${baseurl}/api/getsuborderlist/${params.id}`,
            headers: { 
                'Authorization': 'Bearer ' + userData.token,
            }
        };
        axios(config)
        .then((response) => {
            let subdata = response.data.data.map((item)=>({...item, unit:"", subtotal:0, type:location.state.type}))
            setList(subdata)
        })
        .catch((error)=>{
            if (error.response) {
                if(error.response.status===401){
                    localStorage.removeItem("userData");
                    window.location.assign('/');
                }
            }
        })
    }

    const handleChange = (value, index)=>{
        let subdata = requestList;
        if(value==""){    
            subdata[index].unit = ""
            subdata[index].subtotal = 0
            setList([...subdata])
        }
        else{
            subdata[index].unit = parseInt(value)
            subdata[index].subtotal = (parseInt(value) * parseInt(subdata[index].amount))
            setList([...subdata])
        }
        let subtotaltemp = subdata.map(item =>parseInt(item.subtotal)).reduce((prev, next) => prev + next)
        let taxtemp = subtotaltemp * 0.1;
        let taxincludetemp = subtotaltemp + taxtemp
        setSubtotal(subtotaltemp);
        setTax(taxtemp);
        setTotalAmount(taxincludetemp)
    }

    const handleSubmit = ()=>{
        let combiid = params.id;
        let data = JSON.stringify({
            "quotelist":requestList,
            "requestid":combiid
        });
        let config = {
            method: 'post',
            url: `${baseurl}/api/sendQuote`,
            headers: { 
                'Authorization': 'Bearer ' + userData.token,
                'Content-Type': 'application/json'
            },
                data : data,
        };
        axios(config)
        .then((response) => {
            navigate("/dashboard/quotethanks")
        })
        .catch((error)=>{
            if(error.response){
            }
        })
        
    }
   
    return(
        <div className="admin-content">
            <div className="admin-content-header">
                お見積り
            </div>
            <div className="admin-card admin-card1">
                <div className="admin-card-row">
                    <div>NO</div>
                    <div>品目</div>
                    <div></div>
                    <div></div>
                    <div>単価</div>
                    <div>数量</div>
                    <div>金額</div>
                </div>
                {requestList.map((item,index)=>(
                    <div key={index} className="admin-card-row">
                        <div>{index + 1}</div>
                        <div>{JPtypes[item.type]}</div>
                        <div></div>
                        <div></div>
                        <div><input type="text" className="admin-input" value={item.unit} onChange={(e)=>handleChange(e.target.value, index)}/><label>円</label></div>
                        <div>{item.amount.toLocaleString()}</div>
                        <div>{item.subtotal.toLocaleString()}円</div>
                    </div>
                ))}
                <div className="admin-card-row border-none">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>小計</div>
                    <div>{subTotal.toLocaleString()}円</div>
                </div>

                <div className="admin-card-row border-none up30">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="admin-card-border">消費税</div>
                    <div>{tax.toLocaleString()}円</div>
                </div>
                <div className="admin-card-row border-none">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>合計</div>
                    <div>{totalAmount.toLocaleString()}円</div>
                </div>
                <div className="admin-btn-cover">
                    <button className="admin-main-btn btn yellow-btn" onClick={handleSubmit}>
                    送信する
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RequestQuote;