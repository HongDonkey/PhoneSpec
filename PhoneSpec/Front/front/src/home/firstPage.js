import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

    const[data, setData] = useState([])

    useEffect(() => {
        axios.get('/allIPhone')
        .then(response => setData(response.data))
        .catch(error => console.log(error))
        
        // if(data.length > 0){
        //     console.log("1보다큼")
        //     setData({
        //         seq : data.list.seq,
        //         device_type : data.list.device_type
        //     })          
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
    
    );

    return (
        <div>
            {data.map((el) => (
            <div>
                <div>{el.seq}</div>
                <div>{el.productnm}</div>
            </div>
            ))}
        </div>
        
    )
}

export default App;