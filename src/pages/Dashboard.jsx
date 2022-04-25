
function Dashboard() {
   
   
    return(
        <main className="admin-main">
        <div class="admin-tab-container" id="admin_tabs">
            <div>
                <div className="admin-tab active"><img src="/assets/image/bag-icon.png" alt=""/><span>依頼リスト</span></div>
                <div className="admin-tab"><img src="/assets/image/egg-icon.png" alt=""/><span>見積りリスト</span></div>
                <div className="admin-tab"><img src="/assets/image/check-icon.png" alt=""/><span>発注リスト</span></div>
                <div className="admin-tab"><img src="/assets/image/user-icon.png" alt=""/><span>クライアント</span></div>
            </div>
            <div>
                <button className="btn email-btn img-btn"><img src="/assets/image/email-icon.png" alt=""/><span>クライアント</span></button>
            </div>


        </div>
        <div className="admin-content">
            <div className="admin-content-header">
                依頼リスト
            </div>
            <div className="admin-card">
                <div className="admin-card-row">
                    <div>NO</div>
                    <div>品目</div>
                    <div className="lg-item">会社名</div>
                    <div>ステータス</div>
                    <div>プレビュー</div>
                    <div>見積書</div>
                    <div>見積り期限</div>
                </div>
                <div className="admin-card-row">
                    <div>10</div>
                    <div>Tシャツ</div>
                    <div className="text-underline lg-item">株式会社XXX</div>
                    <div><button className="btn blue-btn admin-btn">期限切れ</button></div>
                    <div><button className="btn gray-btn admin-btn">開く</button></div>
                    <div><button className="btn green-btn admin-btn">開く</button></div>
                    <div>2022-1-10</div>
                </div>
                <div className="admin-card-row">
                    <div>10</div>
                    <div>ロングTシャツ</div>
                    <div className="text-underline lg-item">株式会社XXX</div>
                    <div><button className="btn blue-btn admin-btn">期限切れ</button></div>
                    <div><button className="btn orange-btn admin-btn">開く</button></div>
                    <div><button className="btn green-btn admin-btn">開く</button></div>
                    <div>2022-1-10</div>
                </div>
                <div className="admin-card-row">
                    <div>10</div>
                    <div>Tシャツ</div>
                    <div className="text-underline lg-item">Encode株式会社</div>
                    <div><button className="btn blue-btn admin-btn">期限切れ</button></div>
                    <div><button className="btn orange-btn admin-btn">開く</button></div>
                    <div><button className="btn gray-btn admin-btn">開く</button></div>
                    <div>2022-1-10</div>
                </div>
                <div className="admin-card-row">
                    <div>10</div>
                    <div>Tシャツ</div>
                    <div className="text-underline lg-item">テスト株式会社</div>
                    <div><button className="btn blue-btn admin-btn">期限切れ</button></div>
                    <div><button className="btn orange-btn admin-btn">開く</button></div>
                    <div><button className="btn green-btn admin-btn">開く</button></div>
                    <div>2022-1-10</div>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Dashboard;