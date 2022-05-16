import {BrowserRouter as Router, Routes, Route,useNavigate, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import MyRequestList from './MyRequestList.jsx';
import RequestList from './RequestList.jsx';
import RequestQuote from './RequestQuote.jsx'; 
import Quote from './Quote.jsx'; 
import QuoteThanks from './QuoteThanks.jsx'; 
import QuoteList from './QuoteList.jsx'; 
import SendThanks from './SendThanks.jsx';
import ContractList from './ContractList.jsx';
import UserList from './UserList.jsx'
function Dashboard() {
    let userData = localStorage.getItem("userData")
    const navigate = useNavigate();
    const [tab, setTab] = useState(1)
    const [userType, setUserType] = useState(JSON.parse(userData).usertype)
    const [isAuth,setAuth] = useState(false) 
    useEffect(()=>{
        let userData = localStorage.getItem("userData")
        if(userData){
            setAuth(true)
            setUserType(JSON.parse(userData).usertype)
        }
    },[])
    return(
        <main className="admin-main">
        <div className="admin-tab-container" id="admin_tabs">
            {isAuth && userType==0 && 
                <div>
                    <div onClick={()=>{setTab(1); navigate("/dashboard/requestList")}} className={`admin-tab ${tab==1?"active":""}`}><img src="/assets/image/bag-icon.png" alt=""/><span>依頼リスト</span></div>
                    <div onClick={()=>{setTab(2); navigate("/dashboard/quoteList")}} className={`admin-tab ${tab==2?"active":""}`}><img src="/assets/image/egg-icon.png" alt=""/><span>見積りリスト</span></div>
                    <div onClick={()=>{setTab(3); navigate("/dashboard/orderList")}} className={`admin-tab ${tab==3?"active":""}`}><img src="/assets/image/check-icon.png" alt=""/><span>発注リスト</span></div>
                    {/* <div className="admin-tab"><img src="/assets/image/user-icon.png" alt=""/><span>クライアント</span></div> */}
                </div>
            }
            {isAuth && userType==1 && 
                <div>
                    <div onClick={()=>{setTab(1); navigate("/dashboard/requestList")}} className={`admin-tab ${tab==1?"active":""}`}><img src="/assets/image/bag-icon.png" alt=""/><span>依頼リスト</span></div>
                    <div onClick={()=>{setTab(2); navigate("/dashboard/quoteList")}} className={`admin-tab ${tab==2?"active":""}`}><img src="/assets/image/egg-icon.png" alt=""/><span>見積りリスト</span></div>
                    <div onClick={()=>{setTab(3); navigate("/dashboard/orderList")}} className={`admin-tab ${tab==3?"active":""}`}><img src="/assets/image/check-icon.png" alt=""/><span>発注リスト</span></div>
                    <div onClick={()=>{setTab(4); navigate("/dashboard/userList")}} className={`admin-tab ${tab==4?"active":""}`}><img src="/assets/image/user-icon.png" alt=""/><span>クライアント</span></div>
                </div>
            }
            {isAuth && userType==0 && 
                <div>
                    <button className="btn email-btn img-btn" onClick={()=>navigate("/contact")}><img src="/assets/image/email-icon.png" alt=""/><span>お問い合わせ</span></button>
                </div>
            }


        </div>
        <Routes>
            <Route path="/requestList" element={userType==1?<RequestList/>:<MyRequestList/>}/>
            <Route path="/requestquote/:id" element={userType==1?<RequestQuote/>:<Navigate to="/dashboard/requestList" replace/>}/>
            <Route path="/quotethanks" element={<QuoteThanks/>}/>
            <Route path="/sendthanks" element={<SendThanks/>}/>           
            <Route path="/quoteList" element={<QuoteList/>}/>         
            <Route path="/orderList" element={<ContractList/>}/> 
            <Route path="/userList" element={<UserList/>}/>  
            <Route path="/quote/:id" element={<Quote/>}/>
        </Routes>
    </main>
    )
}

export default Dashboard;