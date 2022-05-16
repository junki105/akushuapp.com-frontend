
import {BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Header from './pages/Header.jsx';
import TopPage from './pages/TopPage.jsx';
import SingleUpload from './pages/SingleUpload.jsx';
import MultiUpload from './pages/MultiUpload.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import Contact from './pages/Contact.jsx';
import Order from './pages/Order.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Preview from './pages/Preview.jsx'
import OrderThanks from './pages/OrderThanks.jsx'
function AppRoot() {
    var userData =  JSON.parse(localStorage.getItem("userData")) || null;
    
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<TopPage/>} />
                <Route path="/singleUpload" element={<SingleUpload/>} />
                <Route path="/multiUpload" element={<MultiUpload/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/preview" element={<Preview/>} />
                <Route path="/order" element={<Order/>} />
                <Route path="/orderthanks" element={<OrderThanks/>} />
                <Route path="/resetpassword" element={<ResetPassword/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/dashboard"  element={userData ?<Navigate to="/dashboard/requestList" replace />:<Navigate to="/" replace />}/>
                <Route path="/dashboard/*"  element={userData?<Dashboard/>:<Navigate to="/" replace />}/>
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