
function Preview() {
    return(
        <main className="preview-main">
            <div className="preview-tab-lists">
            <div className="preview-tab">
                <img src="assets/image/preview1.png" alt=""/>
            </div>
            <div className="preview-tab">
                <img src="assets/image/preview2.png" alt=""/>
            </div>
            <div className="preview-tab">
                <img src="assets/image/preview3.png" alt=""/>
            </div>

        </div>
        <div className="preview-main-main">
            <div className="select-type-header font-HiraKakuProN-W6">
                プレビューをお楽しみください。<br/>
                <span className="preview-sub-text"> アプリを起動してマーカーにかざしてみましょう。</span>
            </div>
            
            <div className="preview-tab-content">
                <div className="preview-img-con">
                    <img src="assets/image/t-shirt.png" className="img-back" alt=""/>
                    <img src="assets/image/marker.png" className="img-mark" alt=""/>
                </div>
                {/* <div className="preview-img-con">
                    <img src="assets/image/t-shirt.png" className="img-back" alt=""/>
                    <img src="assets/image/marker.png" className="img-mark" alt=""/>
                </div>
                <div className="preview-img-con">
                    <img src="assets/image/t-shirt.png" className="img-back" alt=""/>
                    <img src="assets/image/marker.png" className="img-mark" alt=""/>
                </div>
                <div className="preview-img-con">
                    <img src="assets/image/t-shirt.png" className="img-back" alt=""/>
                    <img src="assets/image/marker.png" className="img-mark" alt=""/>
                </div> */}
            </div>
        </div>
        <div className="preview-footer">
            <div className="preview-footer-imgs">
                <div className="preview-footer-img-con">
                    <img src="assets/image/ios.png" alt=""/>
                    <div>
                        iOS
                    </div>
                </div>
                <div className="preview-footer-img-con">
                    <img src="assets/image/android.png" alt=""/>
                    <div>
                        Android
                    </div>
                </div>
            </div>
            <div className="preview-footer-btns">
                <button className="btn footer-arrow-btn font-HiraKakuProN-W6">&lt;</button>
                <button className="btn blue-btn footer-btn">先に進む</button>
            </div>
        </div>
    </main>
    )
}

export default Preview;