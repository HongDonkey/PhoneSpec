import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const[data, setData] = useState('')

    useEffect(() => {
        axios.get('/iphone')
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            {data}
        </div>
    )
}

export default App;