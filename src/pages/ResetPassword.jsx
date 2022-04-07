
function ResetPassword() {
    return(
        <form className="auth-card">
            <div className="auth-header">
                パスワード再発行
            </div>
            <div className="auth-input-container">
                <label for="email">メールアドレス</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="auth-btn-cover">
                <button className="auth-btn">
                    パスワード再発行
                </button>
            </div>
            <div className="auth-anchor-cover">
                <a href="log_in.html">{"ログイン  >"}</a>
            </div>
        </form>
    )
}

export default ResetPassword;