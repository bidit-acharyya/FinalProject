import {useState} from 'react';
import './Grades.css'; 


interface GradesProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
 
const Grades: React.FunctionComponent<GradesProps> = ({handleInputChange}) => {

    const [minGrade, setMinGrade] = useState(1);
    const [maxGrade, setMaxGrade] = useState(12);

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMinGrade: number = parseInt(event.target.value);
        if(newMinGrade >= 1 && newMinGrade <= maxGrade)
            setMinGrade(newMinGrade);

        handleInputChange(event);
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMaxGrade: number = parseInt(event.target.value);
        if(newMaxGrade <= 12 && newMaxGrade >= minGrade)
            setMaxGrade(parseInt(event.target.value));

        handleInputChange(event);
    };



    return (    
        <div className="grades-container">

            <header>
                <h2>Grade Range</h2>
                <p>Use arrows to select grade level range</p>
            </header>

            <div className="grade-input">
                <div className="field">
                   <span>Min Grade Level</span> 
                   <input name='gradeLevelMin' type="number" className="input-min" value={minGrade} onChange={handleMinChange} />
                </div>

                <div className="separator">-</div>

                <div className="field">
                   <span>Max Grade Level</span> 
                   <input name='gradeLevelMax' type="number" className="input-max" value={maxGrade} onChange={handleMaxChange}/>
                </div>

            </div>

            <div className="slider">
                <div className="progress"></div>
            </div>



        </div>
    );
}

export default Grades