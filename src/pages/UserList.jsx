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


function RequestList() {
    const navigate = useNavigate();
    var userData =  JSON.parse(localStorage.getItem("userData")) || null;
    if(!userData)
    {
        navigate("/")
    }
    const [userList, setList] = useState([])

    useEffect(()=>{
        getUserList()
    },[])
    const getUserList = () =>{
        let config = {
            method: 'post',
            url: `${baseurl}/api/users`,
            headers: { 
                'Authorization': 'Bearer ' + userData.token,
            }
        };
        axios(config)
        .then((response) => {
            console.log(response.data)
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


   
    return(
        <div className="admin-content">
            <div className="admin-content-header">
                クライアント
            </div>
            <div className="admin-card admin-card1">
                <div className="admin-card-row">
                    <div>NO</div>
                    <div className="lg-item center">会社名</div>
                    <div >担当者</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {userList.map((item,index)=>(
                    <div className="admin-card-row">
                        <div>{index + 1}</div>
                        <div  className="lg-item center">{item.companyName}</div>
                        <div>{item.name}</div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RequestList;