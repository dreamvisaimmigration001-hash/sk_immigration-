import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import VisaManagement from '../components/dashboard/VisaManagement';

const Dashboard = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('employee'); // default

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    
    if (!token || storedRole === 'user') {
      navigate('/app_india/login');
    } else if (storedRole) {
      setRole(storedRole);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/app_india/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Sidebar role={role} onLogout={handleLogout} />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ 
          height: '60px', 
          backgroundColor: 'white', 
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 20px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Role:</span>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                style={{ padding: '4px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
              >
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </select>
            </div>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              {role === 'admin' ? 'A' : 'E'}
            </div>
          </div>
        </header>

        <main style={{ flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<VisaManagement />} />
            <Route path="/settings" element={<div style={{ padding: '20px' }}><h2>Settings</h2><p>Dashboard configuration will go here.</p></div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
