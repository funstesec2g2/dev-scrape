import React, { useState } from 'react';
import { BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import {  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import './admin.css';
import { blockUser } from './adminPageEndPoints';
import { useEffect } from 'react';
import { getCookie } from '../Components/LoginPage/LoginHelper';


const AdminHome = () => {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const [dailyUsers, setDailyUsers] = useState(0);
  const [blockUserEmail, setBlockUserEmail] = useState('');
  const [blockedUsers, setBlockedUsers] = useState([]);
  
  // adminPageEndPoints.js

const API_BASE_URL = 'http:localhost:5500/auth'; // Replace with your actual API base URL

const getTotalUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/total-users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getCookie('user')}`
    },
  });

  if (!response.ok) {
    throw new Error('Error fetching total users');
  }

  return response;
};

const getBlockedUsers = async () => {
  console.log(getCookie('user'))
  const response = await fetch(`${API_BASE_URL}/total-blocked-users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getCookie('user')}`
    },
  });

  if (!response.ok) {
    throw new Error('Error fetching total blocked users');
  }

  return response;
};


useEffect(() => {
  getTotalUsers()
    .then((response) => setDailyUsers(response.totalUsers))
    .catch((error) => console.error('Error fetching total users:', error));

  getBlockedUsers()
    .then((response) => setBlockedUsers(response.totalBlockedUsers))
    .catch((error) => console.error('Error fetching total blocked users:', error));
}, []);



 

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
            <h3>{dailyUsers} Total User Users </h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{dailyUsers}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Block Users </h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{blockedUsers}</h1>
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
      <div className='block-user-form'>
        <label htmlFor='blockUserEmail'>User Email:</label>
        <input
          type='email'
          id='blockUserEmail'
          value={blockUserEmail}
          onChange={(e) => setBlockUserEmail(e.target.value)}
          placeholder="Enter user's email"
        />
        <button onClick={blockUser(blockUser)}>Block User</button>
      </div>
    </main>
  );
};

export default AdminHome;
