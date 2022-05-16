import {useNavigate} from "react-router-dom";

function OrderThanks() {
    const navigate = useNavigate();
    return(
        <div className="admin-content">
        <div className="admin-content-header">
            お見積り
        </div>
        <div className="admin-card admin-card2">
            
            <div className="admin-header-text font-HiraKakuProN-W6">
                見積りが送信されました。
            </div>
            <div className="admin-btn-cover">
                <button className="admin-main-btn btn yellow-btn" onClick={()=>navigate("/dashboard")}>
                 続けて作成する
                </button>
            </div>
           
        </div>
    </div>
    )
}

export default OrderThanks;