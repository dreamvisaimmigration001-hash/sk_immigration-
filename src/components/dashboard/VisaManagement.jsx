import React, { useState, useEffect } from 'react';
import { Plus, Search } from 'lucide-react';

const API_URL = 'https://api-immigration.vercel.app/api';

const VisaManagement = () => {
  const [visas, setVisas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({ 
    applicationType: 'visa',
    applicantName: '',
    passportNumber: '',
    country: 'Canada',
    status: 'Pending',
    applicationDate: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    fetchVisas();
  }, []);

  const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return { 'Authorization': `Bearer ${token}` };
  };

  const fetchVisas = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/visas`, {
        headers: getAuthHeader()
      });
      if (res.ok) {
        const data = await res.json();
        setVisas(data);
      }
    } catch (err) {
      console.error("Failed to fetch visas:", err);
    }
    setLoading(false);
  };

  const handleCreateVisa = async (e) => {
    e.preventDefault();
    try {
      // Note: Backend uses multer for file upload so we should ideally use FormData
      // but for this MVP we'll send a JSON request without the file to see if it works,
      // or we must switch to FormData.
      const fd = new FormData();
      Object.keys(formData).forEach(key => fd.append(key, formData[key]));
      // Note: add dummy document if required by backend
      // fd.append('document', new Blob([''], { type: 'application/pdf' }), 'dummy.pdf');

      const res = await fetch(`${API_URL}/visas`, {
        method: 'POST',
        headers: getAuthHeader(), // DON'T set Content-Type to application/json if using FormData
        body: fd
      });
      if (res.ok) {
        setShowModal(false);
        fetchVisas();
        // Reset form
        setFormData({ ...formData, applicantName: '', passportNumber: '' });
      } else {
        const data = await res.json();
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Visa Applications</h2>
        <button 
          onClick={() => setShowModal(true)}
          style={{ backgroundColor: '#2563eb', color: 'white', padding: '10px 20px', borderRadius: '6px', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Plus size={18} /> New Application
        </button>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '15px', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f3f4f6', padding: '8px 12px', borderRadius: '6px', flex: 1 }}>
            <Search size={18} color="#6b7280" />
            <input type="text" placeholder="Search applications..." style={{ border: 'none', backgroundColor: 'transparent', marginLeft: '10px', outline: 'none', width: '100%' }} />
          </div>
        </div>
        
        {loading ? (
          <div style={{ padding: '20px', textAlign: 'center' }}>Loading visas from API...</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f9fafb', textAlign: 'left' }}>
              <tr>
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>ID (Grant No.)</th>
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>Applicant Name</th>
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>Passport No.</th>
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>Type</th>
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {visas.map((visa, index) => (
                <tr key={visa._id} style={{ borderBottom: index !== visas.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                  <td style={{ padding: '12px 20px', color: '#111827', fontSize: '0.875rem' }}>{visa.grantNumber || visa._id}</td>
                  <td style={{ padding: '12px 20px', color: '#111827', fontSize: '0.875rem', fontWeight: '500' }}>{visa.applicantName || 'N/A'}</td>
                  <td style={{ padding: '12px 20px', color: '#4b5563', fontSize: '0.875rem' }}>{visa.passportNumber || 'N/A'}</td>
                  <td style={{ padding: '12px 20px', color: '#4b5563', fontSize: '0.875rem' }}>{visa.applicationType}</td>
                  <td style={{ padding: '12px 20px' }}>
                    <span style={{ 
                      padding: '4px 10px', 
                      borderRadius: '9999px', 
                      fontSize: '0.75rem', 
                      fontWeight: '600',
                      backgroundColor: visa.status === 'Approved' ? '#dcfce7' : '#fef9c3',
                      color: visa.status === 'Approved' ? '#166534' : '#854d0e'
                    }}>
                      {visa.status || 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
              {visas.length === 0 && (
                <tr><td colSpan="5" style={{ padding: '20px', textAlign: 'center' }}>No visas found.</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', width: '500px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '1.25rem' }}>Create New Application</h3>
            <form onSubmit={handleCreateVisa} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Applicant Name</label>
                <input type="text" value={formData.applicantName} onChange={e => setFormData({...formData, applicantName: e.target.value})} required style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Application Type</label>
                  <select value={formData.applicationType} onChange={e => setFormData({...formData, applicationType: e.target.value})} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }}>
                    <option value="visa">Visa</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="aewv">AEWV</option>
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Passport Number</label>
                  <input type="text" value={formData.passportNumber} onChange={e => setFormData({...formData, passportNumber: e.target.value})} required style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Status</label>
                <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }}>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '25px' }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '4px', backgroundColor: 'white', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#2563eb', color: 'white', cursor: 'pointer' }}>Create Application</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaManagement;
