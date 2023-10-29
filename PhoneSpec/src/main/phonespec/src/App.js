import logo from "./logo.svg";
import "./App.css";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';


import Main from "./main";
function Header() {
  return (
    <header>
      <h1>Hello, Router</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/main'}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


function App() {
  const [hello, setHello] = useState('')

   useEffect(() => {
       axios.get('/api/hello')
       .then(response => setHello(response.data))
       .catch(error => console.log(error))
   }, []);

   return (
       <div>
        <Routes>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
           백엔드에서 가져온 데이터입니다 : {hello}
       </div>
   );
}

export default App;