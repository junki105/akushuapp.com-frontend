
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import axios from 'axios';
import Preloader from './Preloader';
const baseurl = import.meta.env.REACT_APP_API_BASE_URL;
function SingleUpload() {
    const navigate = useNavigate();
    const [imageURL, setImageURL] = useState([]);
    const [imageObj, setImage] = useState(null);
    const [videoURL, setVideoURL] = useState("");
    const [videoObj, setVideo] = useState(null);
    const [alertmodal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const image = useRef();
    const video = useRef();
    const updateImage = (event)=>{
        let fileObj = event.target.files[0];
        setImageURL([URL.createObjectURL(fileObj)]);
       
        setImage(fileObj);
    }

    const updateVideo = (event)=>{
        let fileObj = event.target.files[0];
        setVideoURL(URL.createObjectURL(fileObj));
        setVideo(fileObj);
    }

    const handleUpload = (event)=>{
        if(!imageObj){
            setShowModal(true)
            setMessage("Please select an Image file");
            return
        }
        if(!videoObj){
            setShowModal(true)
            setMessage("Please select a Video file");
            return
        }
        const fd = new FormData();
        fd.append('image', imageObj);
        fd.append('video', videoObj);
        setLoading(true)
        axios.post(`${baseurl}/api/upload`, fd)
        .then((response)=>{
           localStorage.setItem("uploadData",JSON.stringify(response.data.combiList));
           setLoading(false)
           navigate("/preview",
                {
                    state: {
                        uploadData: response.data.combiList,
                }
           });
          
        }).catch((error)=> {
            setLoading(false)
            if(error.response.data.data)
            {
                let errordata = JSON. parse(error.response.data.data)
                let message = errordata.result_code
                setShowModal(true)
                setMessage(message);
            }
        })
    }
    

    return(
        <main className="select-type-main">
            <div className="select-type-header font-HiraKakuProN-W6">
                コンテンツを選んでください
            </div>
            <div className="select-type-container" >
                <div className="select-type-card" onClick={(e) => image.current.click()}>
                    <img src={imageURL.length===0 ? "assets/image/single-upload-img.png":imageURL} alt="" />
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
            <div className="combi-main-footer" style={{marginTop:"50px"}}>
                <div>
                    <button className="btn gray-btn combi-footer-btn" onClick={()=>{navigate("/");}} style={{marginRight:"20px"}}>戻る</button>
                    <button className="btn blue-btn combi-footer-btn" onClick={handleUpload}>進む</button>
                </div>
            </div>
            <div className={alertmodal?"modal modal-show":"modal"} onClick={(e)=>{setShowModal(false)}}>
                <div className="modal-body" onClick={(e)=>{e.stopPropagation()}}>
                    <p>{message}</p>
                </div>
            </div>
            {loading && <Preloader/>}
        </main>
    )
}

export default SingleUpload;