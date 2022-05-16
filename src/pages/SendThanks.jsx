import {useNavigate} from "react-router-dom";

function SendThanks() {
    const navigate = useNavigate();
    return(
        <div className="admin-content">
        <div className="admin-content-header">
            お見積り
        </div>
        <div className="admin-card admin-card2">
            
            <div className="admin-header-text font-HiraKakuProN-W6">
                ご発注、誠にありがとうございます。
            </div>
            <div className="admin-btn-cover">
                <button className="admin-main-btn btn yellow-btn" onClick={()=>navigate("/dashboard")}>
                続けて発注する
                </button>
            </div>
           
        </div>
    </div>
    )
}

export default SendThanks;