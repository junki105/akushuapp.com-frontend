import { useState} from 'react'
import axios from 'axios';
const baseurl = import.meta.env.REACT_APP_API_BASE_URL;

function Register() {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[passwordconfirm, setPasswordConfirm] = useState("")
    const[alertmodal, setShowModal] = useState(false);
    const[message, setMessage] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(password!==passwordconfirm)
        {
            setShowModal(true);
            setMessage("パスワードが正しくありません。");
            return
        }
        let data = JSON.stringify({
            "email":email,
            "password":password
        });
        let config = {
            method: 'post',
            url: `${baseurl}/api/signup`,
            headers: { 
                'Content-Type': 'application/json'
            },
                data : data,
        };
        axios(config)
        .then((response) => {
            setShowModal(true);
            setMessage("success");
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
                    会員登録
                </div>
                <div className="auth-input-container">
                    <label htmlFor="email">メールアドレス</label>
                    <input type="email" value={email} id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="auth-input-container">
                    <label htmlFor="password">パスワード</label>
                    <input type="password" value={password} id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="auth-input-container">
                    <label htmlFor="passwordconfirm">パスワード確認用</label>
                    <input type="password" value={passwordconfirm} id="passwordconfirm" onChange={(e)=>{setPasswordConfirm(e.target.value)}}/>
                </div>
                <div className="auth-btn-cover">
                    <button className="auth-btn">
                        会員登録
                    </button>
                </div>
                <div className="auth-anchor-cover">
                    <a href="/login">{"ログイン  >"}</a>
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

export default Register;