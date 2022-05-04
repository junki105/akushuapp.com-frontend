
import { useNavigate} from "react-router-dom";
import {useRef, useState, useEffect} from "react";
import axios from 'axios';
import Preloader from './Preloader';
const baseurl = import.meta.env.REACT_APP_API_BASE_URL;

function MultiUpload() {
    const navigate = useNavigate();
    const [imageURLs, setImageURLs] = useState([{img1:"",img2:"",img3:"",video:""}]);
    const image1Refs = useRef([]);
    const image2Refs = useRef([]);
    const image3Refs = useRef([]);
    const videoRefs = useRef([]);
    const [combiList, setCombist] = useState([{img1:null,img2:false,img3:false,video:null}]);
    const [alertmodal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSetImage = (imgIndex, listIndex) => {
        let combiStatus = combiList;
        if(imgIndex==1)
        {
            combiStatus[listIndex].img1 = null;
        }
        if(imgIndex==2)
        {
            combiStatus[listIndex].img2 = null;
        }
        if(imgIndex==3)
        {
            combiStatus[listIndex].img3 = null
        }
        setCombist([...combiStatus])
    }

    const handleAddNewList = ()=>{
        setCombist([...combiList,{img1:null,img2:false,img3:false,video:null}])
        setImageURLs([...imageURLs,{img1:"",img2:"",img3:"",video:""}])
    }

    const handleUpload = (event)=>{
        let returnvalue = false;
        combiList.forEach((item)=>{
            if(item.img1===null || item.img2===null || item.img3===null)
            {
                setShowModal(true)
                setMessage("Please select an Image file");
                returnvalue = true
            }
            if(item.video===null)
            {
                setShowModal(true)
                setMessage("Please select a Video file");
                returnvalue = true
            }
        })
        if(returnvalue) return
        const fd = new FormData();
        for (let i = 0; i < combiList.length; i++) {
            if(combiList[i].img1!==false)
                fd.append(`image1[${i}]`, combiList[i].img1)
            if(combiList[i].img2!==false)
                fd.append(`image2[${i}]`, combiList[i].img2)
            if(combiList[i].img3!==false)

                fd.append(`image3[${i}]`, combiList[i].img3)
            if(combiList[i].video!==false)
                fd.append(`video[${i}]`, combiList[i].video)
        }
        fd.append("listLength", combiList.length)
        setLoading(true)
        axios.post(`${baseurl}/api/multiupload`, fd, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then((response)=>{
           localStorage.setItem("uploadData",JSON.stringify(response.data.combiList))
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

    const handleRemoveList = (index) =>{
        combiList.splice(index, 1);
        imageURLs.splice(index, 1);
        setCombist([...combiList]);
        setImageURLs([...imageURLs]);
    }

    const updateImage = (event,imgIndex, listIndex)=>{
        let combiStatus = combiList;
        let imageURLsStatus = imageURLs;
        let fileObj = event.target.files[0];
        if(imgIndex==1)
        {
            combiStatus[listIndex].img1 = fileObj;
            imageURLsStatus[listIndex].img1 = URL.createObjectURL(fileObj);
        }
        if(imgIndex==2)
        {
            combiStatus[listIndex].img2 = fileObj;
            imageURLsStatus[listIndex].img2 = URL.createObjectURL(fileObj);
        }
        if(imgIndex==3)
        {
            combiStatus[listIndex].img3 = fileObj;
            imageURLsStatus[listIndex].img3 = URL.createObjectURL(fileObj);
        }
        setCombist([...combiStatus]);
        setImageURLs([...imageURLsStatus]);
    }

    const updateVideo = (event, listIndex)=>{
        let combiStatus = combiList;
        let imageURLsStatus = imageURLs;
        let fileObj = event.target.files[0];
        combiStatus[listIndex].video = fileObj;
        imageURLsStatus[listIndex].video = URL.createObjectURL(fileObj);
        setCombist([...combiStatus]);
        setImageURLs([...imageURLsStatus]);
    }

    useEffect(() => {
        image1Refs.current = image1Refs.current.slice(0, combiList.length);
        image2Refs.current = image2Refs.current.slice(0, combiList.length);
        image3Refs.current = image3Refs.current.slice(0, combiList.length);
        videoRefs.current = videoRefs.current.slice(0, combiList.length);
     }, [combiList]);

    return(
        <main className="combi-main select-type-main">
            <div className="select-type-header font-HiraKakuProN-W6">
                コンテンツを選んでください
            </div>
            {combiList.map((item, index)=>(
                <div key={index} className="select-type-container combi-container">
                    {index !== 0 &&  <div className="combi-container-close" onClick={()=>handleRemoveList(index)}>
                                        <img src="assets/image/remove.png" alt=""/>
                                    </div>
                    }
                    {item.img1!==false ? <div className="select-type-card combi-img-card" onClick={(e) => image1Refs.current[index].click()}>
                                            <img src={imageURLs[index].img1==="" ? "assets/image/single-upload-img.png":imageURLs[index].img1} alt="" />
                                            <div className="card-text1 font-HiraKakuProN-W6">
                                                Image
                                            </div>
                                            <div className="card-text2">
                                                マーカーにする画像
                                            </div>
                                        </div>
                                      :  <div className="combi-plus" onClick={()=>handleSetImage(1,index)}>
                                            <img src="assets/image/combi-plus.png" alt=""/>
                                        </div>
                    }
                    <input type="file" onChange={(event)=>updateImage(event, 1, index)} ref={(el)=>image1Refs.current[index] = el} style={{display:"none"}} accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"/>
                    <div className="combi-main-text font-HiraKakuProN-W6">
                        と
                    </div>
                        {item.img2!==false ? <div className="select-type-card combi-img-card" onClick={(e) => image2Refs.current[index].click()}>
                                                <img src={imageURLs[index].img2==="" ? "assets/image/single-upload-img.png":imageURLs[index].img2} alt="" />
                                                <div className="card-text1 font-HiraKakuProN-W6">
                                                    Image
                                                </div>
                                                <div className="card-text2">
                                                    マーカーにする画像
                                                </div>
                                            </div>
                                        :  <div className="combi-plus" onClick={()=>handleSetImage(2,index)}>
                                                <img src="assets/image/combi-plus.png" alt=""/>
                                            </div>
                        }
                        <input type="file" onChange={(event)=>updateImage(event, 2, index)} ref={(el)=>image2Refs.current[index] = el} style={{display:"none"}} accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"/>
                    <div className="combi-main-text font-HiraKakuProN-W6">
                        と
                    </div>
                    {item.img3!==false ? <div className="select-type-card combi-img-card" onClick={(e) => image3Refs.current[index].click()}>
                                            <img src={imageURLs[index].img3==="" ? "assets/image/single-upload-img.png":imageURLs[index].img3} alt="" />
                                            <div className="card-text1 font-HiraKakuProN-W6">
                                                Image
                                            </div>
                                            <div className="card-text2">
                                                マーカーにする画像
                                            </div>
                                        </div>
                                    :  <div className="combi-plus" onClick={()=>handleSetImage(3,index)}>
                                            <img src="assets/image/combi-plus.png" alt=""/>
                                        </div>
                    }
                    <input type="file" onChange={(event)=>updateImage(event, 3, index)} ref={(el)=>image3Refs.current[index] = el} style={{display:"none"}} accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"/>
                    <div className="combi-main-text font-HiraKakuProN-W6">
                        をかざすと
                    </div>
                    <div className="select-type-card" onClick={(e) => videoRefs.current[index].click()}>
                        {imageURLs[index].video==="" ? <img src="assets/image/single-upload-movie.png" alt=""/> : <video src={imageURLs[index].video} width={"86px"} height={"86px"} />}
                        <div className="card-text1 font-HiraKakuProN-W6">
                            Movie
                        </div>
                        <div className="card-text2">
                            再生する動画
                        </div>
                    </div>
                    <input type="file" onChange={(event)=>updateVideo(event,index)}  ref={(el)=>videoRefs.current[index] = el} style={{display:"none"}} accept=".avi, .mp4, .wmv, mov"/>
                </div>
            ))}            
            <div className="combi-main-footer">
                <div>
                    <button className="combi-plus-btn yellow-btn btn" onClick={()=>handleAddNewList()}>
                        <img src="assets/image/combi-btn-plus.png" alt=""/>パターンを追加する
                    </button>
                </div>
                <div>
                    <button className="btn gray-btn combi-footer-btn" onClick={()=>{navigate("/");}}>戻る</button>
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

export default MultiUpload;