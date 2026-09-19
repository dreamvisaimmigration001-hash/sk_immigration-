import React, { useState, useEffect } from 'react';
import { Plus, UserCog } from 'lucide-react';

const API_URL = 'https://api-immigration.vercel.app/api';

const UserManagement = ({ role }) => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({ username: '', password: '', role: 'employe', origin: 'INDIA' });

  useEffect(() => {
    if (role === 'admin') {
      fetchUsers();
    }
  }, [role]);

  const getAuthHeader = () => {
    // Assuming token is saved in localStorage after login
    const token = localStorage.getItem('token');
    return { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/users`, {
        headers: getAuthHeader()
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      } else {
        setError('Failed to fetch users. Ensure you are logged in as admin.');
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      // Backend differentiates between employe and user routes
      const endpoint = formData.role === 'employe' ? `${API_URL}/auth/employe` : `${API_URL}/auth/user`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: getAuthHeader(),
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setShowModal(false);
        fetchUsers();
        setFormData({ username: '', password: '', role: 'employe', origin: 'INDIA' });
      } else {
        const data = await res.json();
        alert(`Error: ${data.message || 'Failed to create user'}`);
      }
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  if (role !== 'admin') {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#ef4444' }}>Access Denied</h2>
        <p>You do not have permission to view this page. Admin access required.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <UserCog size={24} /> System Users
        </h2>
        <button 
          onClick={() => setShowModal(true)}
          style={{ backgroundColor: '#10b981', color: 'white', padding: '10px 20px', borderRadius: '6px', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Plus size={18} /> Add User
        </button>
      </div>

      {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

      <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: '20px', textAlign: 'center' }}>Loading users from API...</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f9fafb', textAlign: 'left' }}>
              <tr>
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>Username</th>
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>Origin</th>
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id || index} style={{ borderBottom: index !== users.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                  <td style={{ padding: '12px 20px', color: '#111827', fontSize: '0.875rem', fontWeight: '500' }}>{user.username}</td>
                  <td style={{ padding: '12px 20px', color: '#4b5563', fontSize: '0.875rem' }}>{user.origin}</td>
                  <td style={{ padding: '12px 20px', color: '#4b5563', fontSize: '0.875rem' }}>
                    <span style={{ 
                      padding: '2px 8px', 
                      borderRadius: '4px', 
                      fontSize: '0.75rem', 
                      backgroundColor: user.role === 'admin' ? '#e0e7ff' : '#f3f4f6',
                      color: user.role === 'admin' ? '#4338ca' : '#4b5563',
                      border: '1px solid',
                      borderColor: user.role === 'admin' ? '#c7d2fe' : '#e5e7eb'
                    }}>
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr><td colSpan="3" style={{ padding: '20px', textAlign: 'center' }}>No users found.</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', width: '400px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '1.25rem' }}>Add System User</h3>
            <form onSubmit={handleCreateUser} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Username</label>
                <input type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} required style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Password</label>
                <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Origin (Country)</label>
                <input type="text" value={formData.origin} onChange={e => setFormData({...formData, origin: e.target.value})} required style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Role</label>
                <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }}>
                  <option value="employe">Employee</option>
                  <option value="user">Standard User</option>
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '25px' }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '4px', backgroundColor: 'white', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#10b981', color: 'white', cursor: 'pointer' }}>Save User</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
