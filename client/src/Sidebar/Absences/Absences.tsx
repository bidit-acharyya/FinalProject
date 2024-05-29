import { useState } from 'react';
import InputCheckbox from '../../components/InputCheckbox';
import './Absences.css'; 

interface AbsencesProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Absences: React.FunctionComponent<AbsencesProps> = ({handleInputChange}) => {
    const [checkedState, setCheckedState] = useState({
        'Absent 9 Days': false,
        'Absent 15 Days': false,
        'Absent 4 Days Unexcused': false,
        'Absent 8 Days Unexcused': false,
        'Absent 10 Days Unexcused': false
    
    }); 

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedState({...checkedState, [e.target.name]: e.target.checked});
        handleInputChange(e);
    };


    return (
        <div>
            <h2 className="sidebar-title">Absences</h2>

            <div>
                <InputCheckbox name='Absent 9 Days' checked={checkedState['Absent 9 Days']} onChange={handleCheckChange}/>
                <InputCheckbox name='Absent 15 Days' checked={checkedState['Absent 15 Days']} onChange={handleCheckChange}/>
                <InputCheckbox name='Absent 4 Days Unexcused' checked={checkedState['Absent 4 Days Unexcused']} onChange={handleCheckChange}/>
                <InputCheckbox name='Absent 8 Days Unexcused' checked={checkedState['Absent 8 Days Unexcused']} onChange={handleCheckChange}/>
                <InputCheckbox name='Absent 10 Days Unexcused' checked={checkedState['Absent 10 Days Unexcused']} onChange={handleCheckChange}/>
            </div>
        </div>
    );
}

export default Absences;  