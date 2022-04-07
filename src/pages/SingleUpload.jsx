
import { useNavigate} from "react-router-dom";
function SingleUpload() {
    const navigate = useNavigate();
    return(
        <main className="select-type-main">
            <div className="select-type-header font-HiraKakuProN-W6">
                コンテンツを選んでください
            </div>
            <div className="select-type-container">
                <div className="select-type-card">
                    <img src="assets/image/single-upload-img.png" alt=""/>
                    <div className="card-text1 font-HiraKakuProN-W6">
                        Image
                    </div>
                    <div className="card-text2">
                        マーカーにする画像
                    </div>
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
        </main>
    )
}

export default SingleUpload;