import React, { useState } from 'react';
import { BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import {  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import './admin.css';
import { getCookie } from '../Components/LoginPage/LoginHelper';


const AdminHome = () => {
  const [message, setMessage] = useState('');

  const API = 'http://localhost:5000/auth';
  const accessToken = getCookie('user');
  const blockUser = async (email) => {
    try {
      const response = await fetch(`${API}/block-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setMessage(data?.message); 
      } else {
        
       setMessage('Something went wrong in blocking the user');
       
      }
  
    } catch (error) {
      setMessage('Something went wrong in blocking the user');
     
    }
  };
  

  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const [dailyUsers, setDailyUsers] = useState(1);
  const [blockUserEmail, setBlockUserEmail] = useState('');
  const [blockedUsers, setBlockedUsers] = useState([]);

 

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Activity Chart </h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>{dailyUsers} Daily Users </h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{dailyUsers}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Blocked Users </h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{blockedUsers.length}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
            <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Block User Form */}
      <div className="block-user-form max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
  <label htmlFor="blockUserEmail" className="block text-gray-700 text-sm font-bold mb-2">
    User Email:
  </label>
  <input
  type="email"
  id="blockUserEmail"
  value={blockUserEmail}
  onChange={(e) => setBlockUserEmail(e.target.value)}
  placeholder="Enter user's email"
  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-black text-white focus:outline-none focus:border-blue-500"
/>

  <button
  onClick={() => blockUser(blockUserEmail)}  
  className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
>
  Block User
</button>
<div className='text-red-500'>{message}</div>

</div>

    </main>
  );
};

export default AdminHome;
