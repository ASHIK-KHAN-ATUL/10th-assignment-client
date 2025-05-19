import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c', '#d0ed57', '#8dd1e1'];


const OverView = () => {

  const [stats, setStats] = useState({});
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://10th-assignment-server-ruddy.vercel.app/admin-stats')
        .then(res => res.json())
        .then(data => {
            setStats(data);
        })
        .catch(error => {
            console.error("Error fetching admin stats:", error);
            });
        }, []);

        // console.log(stats)
    
      useEffect(() => {
            fetch('https://10th-assignment-server-ruddy.vercel.app/visa-type-stats')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error('Error fetching visa type stats:', err));
        }, []);

    return (
 <div className="p-6 flex flex-col justify-center  h-full ">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Admin Overview</h2>

        <div className="grid md:grid-cols-3 gap-6">
            {/* Total Visas Posted */}
            <div className="bg-purple-500/10 border p-6 rounded-xl shadow-lg border-t-4 border-purple-500 flex flex-col justify-evenly ">
                <h3 className="text-xl font-semibold text-white">Total Visas Posted</h3>
                <p className="text-4xl mt-4 text-purple-600 font-bold">
                <CountUp end={stats.visaCount || 0} duration={2} />
                </p>
            </div>

            {/* Applications Submitted */}
            <div className="bg-purple-500/10 border p-6 rounded-xl shadow-lg border-t-4 border-purple-500 flex flex-col justify-evenly">
                <h3 className="text-xl font-semibold text-white">Applications Submitted</h3>
                <p className="text-4xl mt-4 text-green-600 font-bold">
                <CountUp end={stats.applyVisaCount || 0} duration={2} />
                </p>
            </div>

            {/* Total Reviews */}
            <div className="bg-purple-500/10 border p-6 rounded-xl shadow-lg border-t-4 border-purple-500 flex flex-col justify-evenly">
                <h3 className="text-xl font-semibold text-white">Total Reviews</h3>
                <p className="text-4xl mt-4 text-yellow-600 font-bold">
                <CountUp end={stats.reviewCount || 0} duration={2} />
                </p>
            </div>
        </div>

         <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <PieChart>
                <Pie 
                    data={data} 
                    dataKey="count" 
                    nameKey="visa_type" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={120} 
                    label 
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
    );
};

export default OverView;