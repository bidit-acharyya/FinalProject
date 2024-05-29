
import { useState } from 'react';
import InputCheckbox from '../../components/InputCheckbox';
import './Delinquency.css'; 

interface DelinquencyProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
 
const Delinquency: React.FunctionComponent<DelinquencyProps> = ({handleInputChange}) => {


    const [checkedState, setCheckedState] = useState({
        'Has Detentions': false,
        'Has ISS': false,
        'Has OSS': false,
    }); 

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedState({...checkedState, [e.target.name]: e.target.checked});
        handleInputChange(e);
    };

    return (    
        <div>
            <h2 className="sidebar-title">Delinquency</h2>

            <div>
                <InputCheckbox name='Has Detentions' checked={checkedState['Has Detentions']} onChange={handleCheckChange}/>
                <InputCheckbox name='Has ISS' checked={checkedState['Has ISS']} onChange={handleCheckChange}/>
                <InputCheckbox name='Has OSS' checked={checkedState['Has OSS']} onChange={handleCheckChange}/>

            </div>
        </div>
    );
}

export default Delinquency