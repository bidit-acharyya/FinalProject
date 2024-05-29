import type {Student} from '../types';
interface Props {
    students: Student[];
}



const StudentList: React.FunctionComponent<Props> = ({students}) => {
    return (
        <ul>
            {students.map(student => (
                <li key={student.StudentID}>
                    {student.FirstName} {student.LastName},  ID: {student.StudentID}, Grade: {student.GradeLevel}
                </li>
            
            ))}
        </ul>
    );
}

export default StudentList; 