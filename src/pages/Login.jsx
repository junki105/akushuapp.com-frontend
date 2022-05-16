
import {useState} from 'react'
import { useNavigate} from "react-router-dom";
import axios from 'axios';
const baseurl = import.meta.env.REACT_APP_API_BASE_URL;

function setUserData(userdata) {
    localStorage.setItem("userData", JSON.stringify(userdata))
}
function sleep(ms) {
    return new Promise(resolve => (setTimeout(resolve, ms)));
}
function Login() {
    const navigate = useNavigate();
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[alertmodal, setShowModal] = useState(false);
    const[message, setMessage] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault();
        let data = JSON.stringify({
            "email":email,
            "password":password
        });
        let config = {
            method: 'post',
            url: `${baseurl}/api/login`,
            headers: { 
                'Content-Type': 'application/json'
            },
                data : data,
        };
        axios(config)
        .then(async (response) => {
            setUserData({token:response.data.token,refresh:response.data.refresh, usertype:response.data.userStatus});

            window.location.assign("/dashboard");
        })
        .catch((error)=>{
            setShowModal(true);
            setMessage("failed");
        })
    }
    return(
        <>
            <form className="auth-card" onSubmit={handleSubmit}>
                <div className="auth-header">
                    ログイン
                </div>
                <div className="auth-input-container">
                    <label htmlFor="email">メールアドレス</label>
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email"/>
                </div>
                <div className="auth-input-container">
                    <label htmlFor="password">パスワード</label>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password"/>
                </div>
                <div className="auth-btn-cover">
                    <button className="auth-btn">
                        ログイン
                    </button>
                </div>
                <div className="auth-anchor-cover">
                    <a href="/register">{"新規で会員登録 >"}</a>
                    <a href="/resetpassword">{"パスワードを忘れた >"}</a>
                </div>
            </form>
            <div className={alertmodal?"modal modal-show":"modal"} onClick={(e)=>{setShowModal(false)}}>
                <div className="modal-body" onClick={(e)=>{e.stopPropagation()}}>
                    <p>{message}</p>
                </div>
            </div>
        </>
    )
}

export default Login;