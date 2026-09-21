import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, BookOpen, Files, ArrowUp } from 'lucide-react';

const TrackApplication = () => {
  const [searchType, setSearchType] = useState('passport');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setLoading(true);

    try {
      const response = await fetch('https://api-immigration.vercel.app/api/visas/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ origin: 'sk', searchType, referenceNumber })
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.message || 'Application not found');
      }
    } catch (err) {
      setError('An error occurred while tracking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
<section className="page-title" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)',  }}>
			<div className="auto-container">
				<div className="content-box">
					<div className="title-box">
						<h1>Track your application</h1>
						<div className="dotted-box">
							<span className="dotted"></span>
							<span className="dotted"></span>
							<span className="dotted"></span>
						</div>
					</div>
					<ul className="bread-crumb clearfix">
						<li><Link to="/index.php">Home</Link></li>
						<li>Track your application</li>
					</ul>
				</div>
			</div>
		</section><section className="coaching-page-section bg-color-3">
    <div className="auto-container">
      <div className="sec-title centred mb-3">
        <h2>Track Application</h2>
        <span>If you have already submitted your application, you can track it online using our tracking service.</span>
        <div className="dotted-box">
          <span className="dotted"></span>
          <span className="dotted"></span>
          <span className="dotted"></span>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-md-12">
          <div className="sidebar-page-container pt-5">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 sidebar-side">
                  <div className="sidebar">
                    <div className="sidebar-widget sidebar-assessment bg-white border">
                      <div className="widget-content">
                            <form onSubmit={handleTrack} className="assessment-form">
                              <div className="form-group mb-4">
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Passport Number:</label>
                                <input 
                                  type="text" 
                                  className="border form-control" 
                                  placeholder="Enter your passport number" 
                                  required 
                                  value={referenceNumber}
                                  onChange={(e) => setReferenceNumber(e.target.value)}
                                  style={{ height: '50px', padding: '10px', width: '100%' }}
                                />
                              </div>
                              <div className="form-group">
                                <button type="submit" className="theme-btn-two" disabled={loading} style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>
                                  <Send className="flaticon-send" style={{ marginRight: '8px', verticalAlign: 'middle' }} size={18} />
                                  {loading ? 'Tracking...' : 'Track Status'}
                                </button>
                              </div>
                            </form>

                            {error && (
                              <div style={{ color: '#721c24', backgroundColor: '#f8d7da', borderColor: '#f5c6cb', padding: '15px', borderRadius: '4px', marginTop: '20px' }}>
                                {error}
                              </div>
                            )}

                            {result && (
                              <div style={{ color: '#155724', backgroundColor: '#d4edda', borderColor: '#c3e6cb', padding: '15px', borderRadius: '4px', marginTop: '20px' }}>
                                <h5 style={{ marginTop: 0, marginBottom: '15px', borderBottom: '1px solid #c3e6cb', paddingBottom: '10px' }}>Application Found!</h5>
                                <p style={{ margin: '5px 0' }}><strong>Status:</strong> {result.visaStatus || 'N/A'}</p>
                                <p style={{ margin: '5px 0' }}><strong>Applicant Name:</strong> {result.givenNames} {result.familyName}</p>
                                <p style={{ margin: '5px 0' }}><strong>Nationality:</strong> {result.nationality || 'N/A'}</p>
                                <p style={{ margin: '5px 0' }}><strong>Date of Birth:</strong> {result.dateOfBirth ? new Date(result.dateOfBirth).toLocaleDateString('en-GB') : 'N/A'}</p>
                                <p style={{ margin: '5px 0' }}><strong>Visa Type:</strong> {result.visaType || result.applicationType || 'N/A'}</p>
                                <p style={{ margin: '5px 0' }}><strong>Latest Update:</strong> {result.latestUpdate?.content || 'No recent updates'}</p>
                                
                                {((result.document && result.document.length > 0) || result.documentUrl) && (
                                  <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #c3e6cb', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                      {result.documentUrl && (
                                          <a href={result.documentUrl} target="_blank" rel="noopener noreferrer" className="theme-btn-two" style={{ padding: '8px 15px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                            <Files size={16} /> Download Attached Document
                                          </a>
                                      )}
                                      {result.document && result.document.map((doc, index) => (
                                          <a key={index} href={doc.url} target="_blank" rel="noopener noreferrer" className="theme-btn-two" style={{ padding: '8px 15px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                            <Files size={16} /> Download {doc.name || `Document ${index + 1}`}
                                          </a>
                                      ))}
                                  </div>
                                )}
                              </div>
                            )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="login-bg">
                    <img src="/assets/images/img-tracking.jpg" alt="Tracking Background" style={{ width: '100%', borderRadius: '10px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section><button className="scroll-top scroll-to-target open" data-target="html" aria-label="Scroll to top">
  <ArrowUp className="fas fa-long-arrow-alt-up" aria-hidden="true" />
</button>
    </>
  );
};

export default TrackApplication;
