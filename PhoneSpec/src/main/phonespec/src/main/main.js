import "./src/App.css";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [main, setMain] = useState("")

    useEffect(() => {
        axios.get("/main")
        .then(response => setMain(response.data))
        .catch(error => console.log(error))
    }, []);


    return (
    
    <html lang="en" charset="UTF-8">
        <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>  
        </head>

        <body>
            <div id="clock">
                {main}
            </div>
        </body>


    </html>
    )
}

export default App;