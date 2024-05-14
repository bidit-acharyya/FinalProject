/*import type { Student } from "../types";
interface Props {
    students: Student[]; 
}

const DetentionTracker: React.FunctionComponent<Props> = ({students}) => {

    const totalNumDetentions: number = students.filter(student => student['Conduct:HasDetentions'] === 'Y').length;

    return (
        <ul>
            {totalNumDetentions} students have detentions; 
            {students.length - totalNumDetentions} students do not have detentions.
            There are {students.length} students in this dataset.

        </ul>
    );
}

export default DetentionTracker; */

import {Student} from '../types';
import {Bar} from 'react-chartjs-2'; 
import {
    Chart as ChartJS, 
    CategoryScale,
    LinearScale, 
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
    students: Student[]; 
}

const DetentionTracker: React.FunctionComponent<Props> = ({students}) => {
    const numDetentions: number = students.filter(student => student['Conduct:HasDetentions'] === 'Y').length;
    const numNoDetentions: number = students.length - numDetentions;


    const data = {
        labels: ['Detentions', 'No Detentions'],
        datasets: [
            {
                labels: 'Number of Students', 
                data: [numDetentions, numNoDetentions],
                backgroundColor: [
                    'red', //color for 'detentions'
                    'green' //color for no detentions
                ],
                borderColor: [
                    'black',
                    'black'
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Detention Tracker',
                font: {
                    size: 45,
                    family: 'Arial',
                },
            },
        },
    }; 


    return <Bar data={data} options={options}/>;
}

export default DetentionTracker;