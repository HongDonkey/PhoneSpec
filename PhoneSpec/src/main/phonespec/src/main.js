import "./src/App.css";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [msg, setMsg] = useState([]);
    useEffect(() => {
      axios.get("/main")
          .then((res) => {return res.json();})
          .then((data) => {setMsg(data);})
    }, []);
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {msg.map((content, idx) => <li key={`${idx} - ${content}`}>{content}</li>)}
          </ul>
        </header>
      </div>
    );
  }
  
  export default App;