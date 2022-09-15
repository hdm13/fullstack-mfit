import React from "react";
import { Line } from "react-chartjs-2";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"


const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
        {
            label: "score",
            backgroundColor: "rgba(75, 192, 192, 1",
            borderColor: "rgba(75,192,192,1)",
            data: [65, 45, 100, 42, 43]
        }
    ]
};

const options = {
    plugins: {
        legend: {
            display: true,
            position: "bottom"
        },
        title: {
            text: "Average PT score per week",
            display: true,
            fontSize: 20
        }
    }
}

export const LineGraph = () => {
    return (
        <div className="linegraph">
            <Line
                data={data}
                options={options}
            />

            <p style={{ textAlign: "center" }}>Line Graph</p>
        </div>
    )
};







// const data = [
//     { "name": "Week 1", "uv": 400, "amt": 2400 },
//     { "name": "Week 2", "uv": 300, "amt": 2210 },
//     { "name": "Week 3", "uv": 250, "amt": 2150 },
//     { "name": "Week 4", "uv": 300, "amt": 2210 },
//     { "name": "Week 5", "uv": 100, "amt": 2400 }
// ]

// return (
//     <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
//         <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//         <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//     </LineChart>
// );