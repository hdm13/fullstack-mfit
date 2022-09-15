import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


// const LineChart = styled.table`

// `

const data = [
    { name: " Week 1", uv: 45, amt: 2400 },
    { name: " Week 2", uv: 66, amt: 2400 },
    { name: " Week 3", uv: 70, amt: 2400 },
    { name: " Week 4", uv: 100, amt: 2400 },
    { name: " Week 5", uv: 82, amt: 2400 },
    { name: " Week 6", uv: 82, amt: 2400 }
];

export const LineGraph = () => {
    return (
        <LineChart width={1050} height={400} data={data} margin={{ top: 50, right: 20, bottom: 5, left: -30 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
}