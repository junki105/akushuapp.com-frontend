
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header.jsx';
import TopPage from './pages/TopPage.jsx';
import SingleUpload from './pages/SingleUpload.jsx';
import MultiUpload from './pages/MultiUpload.jsx';
function AppRoot() {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<TopPage/>} />
                <Route path="/singleUpload" element={<SingleUpload/>} />
                <Route path="/multiUpload" element={<MultiUpload/>} />
                {/* <Route path="/synopsis" element={<Synopsis/>} />
                <Route path="/talk/:id" element={<Talk />} />
                <Route path="/movie" element={<Movie/>}/>
                <Route path="/movie/upload_twitter" element={<UploadTwitter/>}/>
                <Route path="/error" element={<Error/>}/> */}
            </Routes>
        </Router>
    )
}
export default AppRoot;