
function Contact() {
    return(
        <div className="contact">
            <form className="auth-card">
                <div className="auth-header">
                    お問い合わせ
                </div>
                <div className="auth-input-container">
                    <label htmlFor="text">会社名</label>
                    <input type="text" name="text" />
                </div>
        
                <div className="auth-input-container">
                    <label htmlFor="text">メールアドレス</label>
                    <input type="text" name="text" />
                </div>
                <div className="auth-input-container">
                    <label htmlFor="text">ご用件</label>
                    <input type="text" name="text" />
                </div>
                <div className="auth-input-container textarea-container">
                    <label htmlFor="text">ご用件</label>
                    <textarea></textarea>
                </div>
                <div className="auth-btn-cover">
                    <button className="auth-btn">
                        送信する
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;