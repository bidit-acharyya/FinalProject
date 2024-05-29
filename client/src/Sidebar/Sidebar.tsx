import './Sidebar.css'; 

import Absences from './Absences/Absences';
import Delinquency from './Delinquency/Delinquency';
import Grades from './Grades/Grades';

interface Filters {
    absent9Days: boolean;
    absent15Days: boolean;
    absent4DaysUnexcused: boolean;
    absent8DaysUnexcused: boolean;
    absent10DaysUnexcused: boolean;
    hasDetentions: boolean;
    hasISS: boolean;
    hasOSS: boolean;
    gradeLevelMin: number;
    gradeLevelMax: number;
}

interface SidebarProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Sidebar: React.FunctionComponent<SidebarProps> = ({handleInputChange}) => {
    return(
    <>
        <section className="sidebar">
            <Absences handleInputChange={handleInputChange}/>
            <Delinquency handleInputChange={handleInputChange}/>
            <Grades handleInputChange={handleInputChange}/>
        </section>
    </>
    )
};

export default Sidebar; 