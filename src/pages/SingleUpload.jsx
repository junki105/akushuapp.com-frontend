
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
function SingleUpload() {
    const navigate = useNavigate();
    const [imageURL, setImageURL] = useState("");
    const [imageObj, setImage] = useState(null);
    const [videoURL, setVideoURL] = useState("");
    const [videoObj, setVideo] = useState(null);
    const image = useRef();
    const video = useRef();
    const updateImage = (event)=>{
        let fileObj = event.target.files[0];
        setImageURL(URL.createObjectURL(fileObj));
        setImage(fileObj);
    }

    const updateVideo = (event)=>{
        let fileObj = event.target.files[0];
        setVideoURL(URL.createObjectURL(fileObj));
        setVideo(fileObj);
    }

    return(
        <main className="select-type-main">
            <div className="select-type-header font-HiraKakuProN-W6">
                コンテンツを選んでください
            </div>
            <div className="select-type-container" >
                <div className="select-type-card" onClick={(e) => image.current.click()}>
                    <img src={imageURL==="" ? "assets/image/single-upload-img.png":imageURL} alt="" />
                    <div className="card-text1 font-HiraKakuProN-W6">
                        Image
                    </div>
                    <div className="card-text2">
                        マーカーにする画像
                    </div>
                </div>
                <input type="file" onChange={updateImage} ref={image} style={{display:"none"}} accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"/>
                <div className="select-type-card"  onClick={(e) => video.current.click()}>
                    {videoURL==="" ? <img src="assets/image/single-upload-movie.png" alt=""/> : <video src={videoURL} width={"86px"} height={"86px"} />}
                    <div className="card-text1 font-HiraKakuProN-W6">
                        Movie
                    </div>
                    <div className="card-text2">
                        再生する動画
                    </div>
                </div>
                <input type="file" onChange={updateVideo} ref={video} style={{display:"none"}} accept=".avi, .mp4, .wmv, mov"/>
            </div>
        </main>
    )
}

export default SingleUpload;