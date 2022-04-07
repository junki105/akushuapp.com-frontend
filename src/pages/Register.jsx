
function Register() {
    return(
        <form className="auth-card">
            <div className="auth-header">
                会員登録
            </div>
            <div className="auth-input-container">
                <label for="email">メールアドレス</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="auth-input-container">
                <label for="password">パスワード</label>
                <input type="password" name="password" id="password"/>
            </div>
            <div className="auth-btn-cover">
                <button className="auth-btn">
                    ログイン
                </button>
            </div>
            <div className="auth-anchor-cover">
                <a href="log_in.html">{"ログイン  >"}</a>
                <a href="password.html">{"パスワードを忘れた >"}</a>
            </div>
        </form>
    )
}

export default Register;