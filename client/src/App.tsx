import React, {useEffect, useState} from 'react'; 

function App(){

    const [backendData, setBackendData] = useState<any[]>([]);
    useEffect(() => {
        fetch('/api')
        .then(response => response.json())
        .then(data => setBackendData(data)); 
    }, []);

    return (
        <div>
            <h1>Server response:</h1>
            <p>{JSON.stringify(backendData)}</p>
        </div>
    )
}

export default App;