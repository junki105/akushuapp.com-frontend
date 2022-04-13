
import { useNavigate} from "react-router-dom";
function MultiUpload() {
    const navigate = useNavigate();
    return(
        <main className="combi-main select-type-main">
            <div className="select-type-header font-HiraKakuProN-W6">
                コンテンツを選んでください
            </div>
            <div className="select-type-container combi-container">
                <div className="select-type-card combi-img-card">
                    <img src="assets/image/single-upload-img.png" alt=""/>
                    <div className="card-text1 font-HiraKakuProN-W6">
                        Image
                    </div>
                    <div className="card-text2">
                        マーカーにする画像
                    </div>
                </div>
                <div className="combi-main-text font-HiraKakuProN-W6">
                    と
                </div>
                <div className="combi-plus">
                    <img src="assets/image/combi-plus.png" alt=""/>
                </div>
                <div className="combi-main-text font-HiraKakuProN-W6">
                    と
                </div>
                <div className="combi-plus">
                    <img src="assets/image/combi-plus.png" alt=""/>
                </div>
                <div className="combi-main-text font-HiraKakuProN-W6">
                    をかざすと
                </div>
                <div className="select-type-card">
                    <img src="assets/image/single-upload-movie.png" alt=""/>
                    <div className="card-text1 font-HiraKakuProN-W6">
                        Movie
                    </div>
                    <div className="card-text2">
                        再生する動画
                    </div>
                </div>
            </div>
            <div className="combi-main-footer">
                <div>
                    <button className="combi-plus-btn yellow-btn btn">
                        <img src="assets/image/combi-btn-plus.png" alt=""/>パターンを追加する
                    </button>
                </div>
                <div>
                    <button className="btn gray-btn combi-footer-btn" onClick={()=>{navigate("/");}}>戻る</button>
                    <button className="btn blue-btn combi-footer-btn">進む</button>
                </div>
            </div>
        </main>
    )
}

export default MultiUpload;