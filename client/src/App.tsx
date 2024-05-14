import { useCallback, useEffect, useState } from "react";
import type { StudentData } from "./types";
import StudentList from "./components/StudentList";
import DetentionTracker from "./components/DetentionTracker";

function App(){

    const [data, setData] = useState<StudentData | undefined>(undefined);

    const fetchData = useCallback(() => {
        const url = 'http://localhost:5000/api';
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            //.then(() => console.log(data));
    }, [setData]);


    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            <h1>Student Data</h1>
            {data ? (
                <>
                    <StudentList students={data}/>
                    <DetentionTracker students={data}/>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>        
    );
}

export default App;