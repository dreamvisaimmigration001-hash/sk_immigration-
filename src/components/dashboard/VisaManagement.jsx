import React, { useState, useEffect } from 'react';
import { Plus, Search, Download } from 'lucide-react';

const API_URL = 'https://api-immigration.vercel.app/api';

const VisaManagement = () => {
  const [visas, setVisas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const initialFormData = { 
    applicationType: 'visa',
    familyName: '',
    givenNames: '',
    trn: '',
    visaorigin: 'sk',
    documentNumber: '',
    visaClassSubclass: '',
    visaApplicant: '',
    visaGrantDate: '',
    visaExpiryDate: '',
    location: '',
    visaStatus: '',
    visaGrantNumber: '',
    entriesAllowed: '',
    mustNotArriveAfter: '',
    enterBeforeDate: '',
    periodOfStay: '',
    visaType: '',
    dateOfBirth: '',
    nationality: '',
    biometricsNumber: '',
    dateOfBiometricsEnrolment: '',
    biometricsExpiryDate: '',
    uci: '',
    applicationNumber: '',
    receiveDate: '',
    medicalExaminationPassDate: '',
    documentReviewDate: '',
    employer: '',
    type: '',
    status: '',
    fullName: '',
    jobTitle: '',
    documentName: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [file, setFile] = useState(null);

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
      const res = await fetch(`${API_URL}/visas?origin=sk`, {
        headers: getAuthHeader()
      });
      if (res.ok) {
        const data = await res.json();
        setVisas(data.visas || []);
      }
    } catch (err) {
      console.error("Failed to fetch visas:", err);
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleCreateVisa = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      const payload = { ...formData, origin: 'sk' };
      Object.keys(payload).forEach(key => {
        if (payload[key]) {
          fd.append(key, payload[key]);
        }
      });
      if (file) {
        fd.append('document', file);
        fd.append('documentName', formData.documentName || file.name);
      }

      const res = await fetch(`${API_URL}/visas`, {
        method: 'POST',
        headers: getAuthHeader(), 
        body: fd
      });
      if (res.ok) {
        setShowModal(false);
        fetchVisas();
        setFormData(initialFormData);
        setFile(null);
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
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>Document No.</th>
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>Type</th>
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>Status</th>
                <th style={{ padding: '12px 20px', color: '#4b5563', fontWeight: '600', fontSize: '0.875rem' }}>Document</th>
              </tr>
            </thead>
            <tbody>
              {visas.map((visa, index) => (
                <tr key={visa._id} style={{ borderBottom: index !== visas.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                  <td style={{ padding: '12px 20px', color: '#111827', fontSize: '0.875rem' }}>{visa.visaGrantNumber || visa.trn || visa._id}</td>
                  <td style={{ padding: '12px 20px', color: '#111827', fontSize: '0.875rem', fontWeight: '500' }}>{visa.givenNames} {visa.familyName}</td>
                  <td style={{ padding: '12px 20px', color: '#4b5563', fontSize: '0.875rem' }}>{visa.documentNumber || 'N/A'}</td>
                  <td style={{ padding: '12px 20px', color: '#4b5563', fontSize: '0.875rem' }}>{visa.applicationType}</td>
                  <td style={{ padding: '12px 20px' }}>
                    <span style={{ 
                      padding: '4px 10px', 
                      borderRadius: '9999px', 
                      fontSize: '0.75rem', 
                      fontWeight: '600',
                      backgroundColor: (visa.visaStatus === 'Approved' || visa.status === 'Approved') ? '#dcfce7' : '#fef9c3',
                      color: (visa.visaStatus === 'Approved' || visa.status === 'Approved') ? '#166534' : '#854d0e'
                    }}>
                      {visa.visaStatus || visa.status || 'Pending'}
                    </span>
                  </td>
                  <td style={{ padding: '12px 20px' }}>
                    {visa.document && visa.document.length > 0 && visa.document[0].url && (
                      <a href={visa.document[0].url} target="_blank" rel="noreferrer" style={{ color: '#2563eb', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontSize: '0.875rem' }}>
                        <Download size={14} /> Download
                      </a>
                    )}
                  </td>
                </tr>
              ))}
              {visas.length === 0 && (
                <tr><td colSpan="6" style={{ padding: '20px', textAlign: 'center' }}>No visas found.</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', width: '800px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '1.25rem' }}>Create New Application</h3>
            <form onSubmit={handleCreateVisa} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Application Type</label>
                <select name="applicationType" value={formData.applicationType} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }}>
                  <option value="schengen">Schengen Visa (Short Term)</option>
                  <option value="national">National Visa (Long Term)</option>
                  <option value="visa">Other Visa</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Family Name</label>
                <input type="text" name="familyName" value={formData.familyName} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Given Names</label>
                <input type="text" name="givenNames" value={formData.givenNames} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Reference Number</label>
                <input type="text" name="applicationNumber" value={formData.applicationNumber} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>


              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Document Number (Passport)</label>
                <input type="text" name="documentNumber" value={formData.documentNumber} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Visa Category</label>
                <select name="visaClassSubclass" value={formData.visaClassSubclass} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }}>
                  <option value="">Select Category...</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Business">Business</option>
                  <option value="Employment">Employment</option>
                  <option value="Visit Family or Friends">Visit Family or Friends</option>
                  <option value="Study/Research">Study / Research</option>
                  <option value="Medical Treatment">Medical Treatment</option>
                  <option value="Cultural/Sports">Cultural / Sports</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Visa Grant Number</label>
                <input type="text" name="visaGrantNumber" value={formData.visaGrantNumber} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Visa Status</label>
                <select name="visaStatus" value={formData.visaStatus} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }}>
                  <option value="Pending">Pending</option>
                  <option value="In Process">In Process</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Visa Grant Date</label>
                <input type="date" name="visaGrantDate" value={formData.visaGrantDate} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Visa Expiry Date</label>
                <input type="date" name="visaExpiryDate" value={formData.visaExpiryDate} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Date of Birth</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Nationality</label>
                <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Entries Allowed</label>
                <select name="entriesAllowed" value={formData.entriesAllowed} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }}>
                  <option value="">Select...</option>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Multiple">Multiple</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Must Not Arrive After</label>
                <input type="date" name="mustNotArriveAfter" value={formData.mustNotArriveAfter} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Enter Before Date</label>
                <input type="date" name="enterBeforeDate" value={formData.enterBeforeDate} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Period Of Stay (Days)</label>
                <input type="number" min="0" placeholder="e.g. 90" name="periodOfStay" value={formData.periodOfStay} onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Document Name (Optional)</label>
                <input type="text" name="documentName" value={formData.documentName} placeholder="Custom name for the uploaded document" onChange={handleInputChange} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem', fontWeight: '500' }}>Document Upload (PDF)</label>
                <input type="file" name="document" onChange={handleFileChange} accept="application/pdf,image/*" style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '4px' }} />
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '15px' }}>
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
