import React from 'react';
import { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    // Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    // ResponsiveContainer,
} from 'recharts';


const Statistics = () => {

    const assignments = [
        { "assignment_number": 1, "marks": 56 },
        { "assignment_number": 2, "marks": 54 },
        { "assignment_number": 3, "marks": 52 },
        { "assignment_number": 4, "marks": 48 },
        { "assignment_number": 5, "marks": 45 },
        { "assignment_number": 6, "marks": 51 },
        { "assignment_number": 7, "marks": 58 },
        { "assignment_number": 8, "marks": 53 }
    ]

    return (
        <div className='flex flex-col items-center'>

            <h2 className='text-2xl font-bold mt-5 mb-10'>Total Assignment : {assignments.length}</h2>

            <div>
                <ComposedChart
                    width={1000}
                    height={600}
                    data={assignments}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="assignment_number" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="marks" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;