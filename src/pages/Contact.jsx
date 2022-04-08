
function Contact() {
    return(
        <div class="contact">
            <form class="auth-card">
                <div class="auth-header">
                    お問い合わせ
                </div>
                <div class="auth-input-container">
                    <label htmlFor="text">会社名</label>
                    <input type="text" name="text" />
                </div>
        
                <div class="auth-input-container">
                    <label htmlFor="text">メールアドレス</label>
                    <input type="text" name="text" />
                </div>
                <div class="auth-input-container">
                    <label htmlFor="text">ご用件</label>
                    <input type="text" name="text" />
                </div>
                <div class="auth-input-container textarea-container">
                    <label htmlFor="text">ご用件</label>
                    <textarea></textarea>
                </div>
                <div class="auth-btn-cover">
                    <button class="auth-btn">
                        送信する
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;