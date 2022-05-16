import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
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


function MyRequestList() {
    const navigate = useNavigate();
    var userData =  JSON.parse(localStorage.getItem("userData")) || null;
    if(!userData)
    {
        navigate("/")
    }
    const [requestList, setList] = useState([])

    useEffect(()=>{
        getRequestList()
    },[])
    const getRequestList = () =>{
        if(!userData)
        {
            navigate("/")
        }
        let config = {
            method: 'get',
            url: `${baseurl}/api/getMyOrders`,
            headers: { 
                'Authorization': 'Bearer ' + userData.token,
            }
        };
        axios(config)
        .then((response) => {
            setList(response.data.data)
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

    const previewDate = (str)=>{
        var date = new Date(str)
        date.setDate(date.getDate() + 20)
        var month = date.getMonth()  + 1
        var day = date.getDate()
        return `${date.getFullYear()}-${month > 10 ? month : "0" + month}-${day>10?day:"0"+day}`
    }

    const quoteDate = (str)=>{
        var date = new Date(str)
        date.setDate(date.getDate() + 30)
        var month = date.getMonth()  + 1
        var day = date.getDate()
        return `${date.getFullYear()}-${month > 10 ? month : "0" + month}-${day>10?day:"0"+day}`
    }
   
    return(
        
        <div className="admin-content">
            <div className="admin-content-header">
                依頼リスト
            </div>
            <div className="admin-card">
                <div className="admin-card-row">
                    <div>NO</div>
                    <div>品目</div>
                    <div>プレビュー期限</div>
                    <div>ステータス</div>
                    <div>プレビュー</div>
                    <div>見積書</div>
                    <div>見積り期限</div>
                </div>
                {requestList.map((item,index)=>(
                    <div className="admin-card-row">
                        <div>{index}</div>
                        <div>{JPtypes[item.type]}</div>
                        <div>{previewDate(item.created_at)}</div>
                        <div><button className="btn blue-btn admin-btn">{requeststatus[item.status]}</button></div>
                        <div><button className={`btn ${item.status!=4 ? "yellow-btn" :"gray-btn"} admin-btn`} disabled={item.status==4}>開く</button></div>
                        <div><button className={`btn ${item.status==0?"gray-btn":"green-btn"} admin-btn`} onClick={()=>{
                            console.log("aaa")
                            navigate(
                                `/dashboard/quote/${item.id}`,
                                {
                                    state: {
                                        type: item.type,
                                        status:item.status
                                    }
                                }                    
                            )}} disabled={item.status==0}>開く</button></div>
                        <div>{quoteDate(item.created_at)}</div>
                    </div>
                ))}
               
            </div>
        </div>
    )
}

export default MyRequestList;