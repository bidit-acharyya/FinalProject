import { useCallback, useEffect, useState } from "react";
import type {Student } from "./types";
import {StudentList, DetentionTracker} from './components';
import Sidebar from "./Sidebar/Sidebar";




function App(){
    const [students, setData] = useState<Student[] | undefined>(undefined);
    const [filters, setFilters] = useState({
        absent9Days: false,
        absent15Days: false,
        absent4DaysUnexcused: false,
        absent8DaysUnexcused: false,
        absent10DaysUnexcused: false,
        hasDetentions: false,
        hasISS: false,
        hasOSS: false,
        gradeLevelMin: 1,
        gradeLevelMax: 12
    });
    const [filteredStudents, setFilteredData] = useState<Student[] | undefined>(undefined);


    const fetchData = useCallback(() => {
        const url = 'http://localhost:5000/api';
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setData(data);
                setFilteredData(data);
            });
            
    }, [setData]);

    


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.type === 'checkbox' ? e.target.checked : parseInt(e.target.value); //if checkbox, use checked property; otherwise, use value property
        if(e.target.type !== 'checkbox'){
            if(typeof newValue === 'number' && (e.target.name === 'gradeLevelMin' || e.target.name === 'gradeLevelMax')){
                newValue = Math.max(1, Math.min(12, newValue)); //ensure grade level is within 1-12
            }
        } 
        setFilters({
            ...filters,
            [e.target.name]: newValue
        });
        applyFiltersFunction(
            filters.absent9Days,
            filters.absent15Days,
            filters.absent4DaysUnexcused,
            filters.absent8DaysUnexcused,
            filters.absent10DaysUnexcused,
            filters.hasDetentions,
            filters.hasISS,
            filters.hasOSS,
            filters.gradeLevelMin,
            filters.gradeLevelMax
        )
    };

    const applyFiltersFunction = (
        //parameters for filters
        absent9Days: boolean, absent15Days: boolean,
        absent4DaysUnexcused: boolean, absent8DaysUnexcused: boolean, absent10DaysUnexcused: boolean,
        hasDetentions: boolean, hasISS: boolean, hasOSS: boolean,
        gradeLevelMin: number, gradeLevelMax: number) => {
            console.log(hasDetentions);
            if(!students) 
                return; //if students undefined, do not apply filters.

            const filtered = students.filter((student) => 
                //if checkbox is not checked, all students are included; if checkbox is checked, only students who have a Y are included
                (absent9Days ? student["Att:Has09DayAbsLtr"]==="Y" : true) && 
                (absent15Days ? student["Att:Has15DayAbsLtr"]==="Y" : true) &&
                (absent4DaysUnexcused ? student["Att:Has04DayUxAbsLtr"]==="Y" : true) &&
                (absent8DaysUnexcused ? student["Att:Has08DayUxAbsLtr"]==="Y" : true) &&
                (absent10DaysUnexcused ? student["Att:Has10DayUxAbsLtr"]==="Y" : true) &&
                (hasDetentions ? student["Conduct:HasDetentions"]==="Y" : true) &&
                (hasISS ? student["Conduct:HasISSSuspensions"]==="Y" : true) &&
                (hasOSS ? student["Conduct:HasOSSSuspensions"]==="Y" : true) &&
                //if grade level is within the range, include student
                (student.GradeLevel >= gradeLevelMin && student.GradeLevel <= gradeLevelMax)
            );
            console.log('FilteredS')
            setFilteredData(filtered);
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        console.log(filters); 
    }, [filters]);

    /*useEffect(() => {
        console.log(filteredStudents);
    }, [filteredStudents]); //delete this later*/


    



    return (
        <div>
            <h1>Student Data App</h1>
            {filteredStudents ? (
                <>
                    <Sidebar handleInputChange={handleInputChange}/>
                    {/*<StudentList students={data}/>*/}
                    <DetentionTracker students={filteredStudents}/>
                </>
            ) : (
                <p>Nothing...</p>
            )}
        </div>        
    );
};

export default App;