import {useNavigate, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
function OrderThanks() {
    const navigate = useNavigate();
    var userData =  JSON.parse(localStorage.getItem("userData")) || null;
    const handleGoPage = ()=>{
        if (userData)
            navigate("/dashboard")
        else
            navigate("/login")
        
    }
    return(
        <form className="auth-card">
            <div className="thanks-header auth-header">
                ありがとうございます！お見積り依頼を受け付けました。
            </div>

            <div className="auth-btn-cover">
                <button className="auth-btn" onClick={()=>{navigate("/")}}>
                    さらに依頼する
                </button>
            </div>
            <div className="auth-anchor-cover">
                <a style={{cursor:"pointer"}} onClick={handleGoPage}>{"管理画面へ移動する >"}</a>
            </div>
        </form>
    )
}

export default OrderThanks;