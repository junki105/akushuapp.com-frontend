
function Login() {
    return(
        <form className="auth-card">
            <div className="auth-header">
                ログイン
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
                <a href="/register">{"新規で会員登録 >"}</a>
                <a href="/resetpassword">{"パスワードを忘れた >"}</a>
            </div>
        </form>
    )
}

export default Login;