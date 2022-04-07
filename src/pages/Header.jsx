

import { useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return(
        <header className="header-nav">    
            <div className="header-text">
                Header
            </div>
            <div className="header-btn-container">
                <button className="btn blue-btn header-nav-btn" onClick={()=>{navigate("/contact");}}>お問い合わせ</button>
                <button className="btn yellow-btn header-nav-btn" onClick={()=>{navigate("/login");}}>ログイン</button>
            </div>
        </header>
    )
}

export default Header;