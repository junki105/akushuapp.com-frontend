
import {useNavigate, useLocation} from "react-router-dom";

import {useEffect, useState} from "react";
import axios from "axios";

const baseurl = import.meta.env.REACT_APP_API_BASE_URL;

const tabs = [
    "t-shirt",
    "long-sleeves",
    "winter_clothes"
]
const toppixel =[
    "25%", "30%", "45%"
]


function Preview() {
    const location = useLocation();
    const navigate = useNavigate();
    const [uploadData, setUloadDataURL] = useState([]);
    const [tab, setTab] = useState(0);
    useEffect(()=>{
        var data = location.state.uploadData
        if(data){
            setUloadDataURL(data)
        }
    },[])

    const handleGoback = ()=>{
        localStorage.removeItem("uploadData");
        let config = {
            method: 'post',
            url: `${baseurl}/api/removeCombilist`,
            headers: { 
                'Content-Type': 'application/json'
            },
                data : uploadData,
        };
        axios(config)
        .then((response) => {
        })
        .catch((error)=>{
           console.log(error)
        })
        navigate(-1)
    }
    
    return(
        <main className="preview-main">
            <div className="preview-tab-lists">
            <div className="preview-tab" onClick={()=>{setTab(0)}}>
                <img src="assets/image/preview1.png" alt=""/>
            </div>
            <div className="preview-tab">
                <img src="assets/image/preview2.png" alt="" onClick={()=>{setTab(1)}}/>
            </div>
            <div className="preview-tab">
                <img src="assets/image/preview3.png" alt="" onClick={()=>{setTab(2)}}/>
            </div>

        </div>
        <div className="preview-main-main">
            <div className="select-type-header font-HiraKakuProN-W6">
                プレビューをお楽しみください。<br/>
                <span className="preview-sub-text"> アプリを起動してマーカーにかざしてみましょう。</span>
            </div>
            {
                uploadData.map((item, index)=>(
                    <div key={index} className="preview-tab-content">
                                {item.img1!=="" &&
                                <div  className="preview-img-con">
                                    <img src={`assets/image/${tabs[tab]}.png`} className="img-back" alt="" />
                                    <img src={`${baseurl}/media/${item.img1}`} className="img-mark" alt="" style={{top:toppixel[tab]}}/>
                                </div>}
                                {item.img2!=="" &&
                                <div  className="preview-img-con">
                                    <img src={`assets/image/${tabs[tab]}.png`} className="img-back" alt="" />
                                    <img src={`${baseurl}/media/${item.img2}`} className="img-mark" alt="" style={{top:toppixel[tab]}}/>
                                </div>}
                                {item.img3!=="" &&
                                <div  className="preview-img-con">
                                    <img src={`assets/image/${tabs[tab]}.png`} className="img-back" alt="" />
                                    <img src={`${baseurl}/media/${item.img3}`} className="img-mark" alt="" style={{top:toppixel[tab]}}/>
                                </div>}
                        
                    </div>
                ))
            }
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
                <button className="btn footer-arrow-btn font-HiraKakuProN-W6" onClick={handleGoback}>&lt;</button>
                <button className="btn blue-btn footer-btn" onClick={()=>{
                    navigate("/order",
                        {
                            state: {
                                type: tab,
                            }
                        }
                    );}}>先に進む</button>
            </div>
        </div>
    </main>
    )
}

export default Preview;