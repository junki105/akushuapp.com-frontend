
import { useNavigate} from "react-router-dom";
function TopPage() {
    const navigate = useNavigate();
    return(
        <>
            <main className="select-type-main">
                <div className="select-type-header font-HiraKakuProN-W6">
                    タイプを選択してください。
                </div>
                <div className="select-type-container">
                    <div className="select-type-card" onClick={()=>{navigate("/singleUpload");}}>
                        <img src="assets/image/select-type-single.png" alt=""/>
                        <div className="card-text1 font-HiraKakuProN-W6">
                            Single
                        </div>
                        <div className="card-text2">
                            1つの画像に1つのAR動画
                        </div>
                    </div>
                    <div className="select-type-card" onClick={()=>{navigate("/multiUpload");}}>
                        <img src="assets/image/select-type-combine.png" alt=""/>
                        <div className="card-text1 font-HiraKakuProN-W6">
                            Collaboration
                        </div>
                        <div className="card-text2">
                            複数の画像をかざすと<br/>
                            別の動画が再生
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default TopPage;