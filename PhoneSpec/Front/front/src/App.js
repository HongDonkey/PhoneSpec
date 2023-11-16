import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FirstPage from "./home/firstPage";

function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        <BrowserRouter>
            <Routes>
                {/* 웹 서비스 소개 페이지 */}
                <Route path="/" element={<FirstPage />} />
                {/* <SignIn /> */}
                {/* <Route path="/signin" element={<SignIn />} /> */}
                {/* <LogIn /> */}
                {/* <Route path="/login" element={<LogIn />} /> */}
            </Routes>
        </BrowserRouter> 
            
        </div>
        
    );
}

export default App;