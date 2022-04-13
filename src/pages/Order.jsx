
function Order() {
    return(
            <main className="preview-main order-main">
                    <div className="preview-main-main">
                        <div className="select-type-header font-HiraKakuProN-W6">
                            お見積もり依頼
                        </div>
                        
                        <div className="order-main-main">
                            <div className="order-type-cons">
                                <div className="order-type-container">
                                    <img src="assets/image/marker.png" alt=""/>
                                    <div className="order-type-con-input">
                                        <div className="font-HiraKakuProN-W6">
                                            T-shirt
                                        </div>
                                        <div>
                                            Tシャツ
                                        </div>
                                        <div className="order-input-cover">
                                            <label for="">枚数</label>
                                            <select type="select" name="" id="">
                                                <option value="1">100</option>
                                                <option value="2">50</option>
                                                <option value="3">10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="order-type-container">
                                    <img src="assets/image/marker.png" alt=""/>
                                    <div className="order-type-con-input">
                                        <div className="font-HiraKakuProN-W6">
                                            T-shirt
                                        </div>
                                        <div>
                                            Tシャツ
                                        </div>
                                        <div className="order-input-cover">
                                            <label for="">枚数</label>
                                            <select type="select" name="" id="">
                                                <option value="1">100</option>
                                                <option value="2">50</option>
                                                <option value="3">10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="order-input-cons">
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6" for="">会社名</label>
                                    <input type="text" name="" id=""/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6" for="">氏名</label>
                                    <input type="text" name="" id=""/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6" for="">メールアドレス</label>
                                    <input type="text" name="" id=""/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6" for="">郵便番号</label>
                                    <input type="text" name="" id=""/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6" for="">都道府県</label>
                                    <input type="text" name="" id=""/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6" for="">市区町村</label>
                                    <input type="text" name="" id=""/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6" for="">住所</label>
                                    <input type="text" name="" id=""/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6" for="">建物名</label>
                                    <input type="text" name="" id=""/>
                                </div>
                                <div className="order-input-container">
                                    <label className="font-HiraKakuProN-W6" for="">電話番号</label>
                                    <input type="text" name="" id=""/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="preview-footer order-footer">
                        <div className="order-check">
                            <input type="checkbox" name="order-check" id="order-check"/>
                            <label for="order-check" className="font-HiraKakuProN-W6">この内容で会員登録する</label>
                        </div>
                        <div className="preview-footer-btns">
                            <button className="btn footer-arrow-btn font-HiraKakuProN-W6">&lt;</button>
                            <button className="btn yellow-btn footer-btn">依頼する</button>
                        </div>
                    </div>
                </main>
    )
}

export default Order;