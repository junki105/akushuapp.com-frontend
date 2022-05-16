

import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react"

function Header() {
    const navigate = useNavigate();
    const [userType, setUserType] = useState("")
    const [isAuth,setAuth] = useState(false) 
    useEffect(()=>{
        let userData = localStorage.getItem("userData")
        if(userData){
            setAuth(true)
            setUserType(JSON.parse(userData).usertype)
        }
    },[])

    const handleLogout = ()=>{
        localStorage.removeItem("userData")
        setAuth(false)
        setUserType("")
        navigate("/")
    }
    return(
        <header className="header-nav">    
            <div className="header-text" onClick={()=>{navigate("/");}}>
                Header
            </div>
            {isAuth && userType==0 && 
                <div className="header-btn-container">
                    <button className="btn yellow-btn header-nav-btn img-btn" onClick={()=>{navigate("/")}}><img src="/assets/image/btn_plus_round.png" alt=""/>見積もり依頼</button>
                    <button className="btn blue-btn header-nav-btn" onClick={handleLogout}>ログアウト</button>
                </div>
            }
            {isAuth && userType==1 && 
                <div className="header-btn-container">
                    <button className="btn blue-btn header-nav-btn" onClick={handleLogout}>ログアウト</button>
                </div>
            }
            {!isAuth &&
                <div className="header-btn-container">
                    <button className="btn blue-btn header-nav-btn" onClick={()=>{navigate("/contact");}}>お問い合わせ</button>
                    <button className="btn yellow-btn header-nav-btn" onClick={()=>{navigate("/login");}}>ログイン</button>
                </div>
            }
            <div className="toggle-menu-btn" id="toggle_menu_btn" onClick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header;