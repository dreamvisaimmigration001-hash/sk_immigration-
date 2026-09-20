import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer bg-color-2">
      <div className="auto-container">
        <div className="footer-top">
          <div className="widget-section">
            <div className="row clearfix">
              
              {/* Column 1: Quick links */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3 style={{ fontSize: '22px' }}>Quick links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="list clearfix">
                      <li><Link to="/" style={{ fontSize: '14px' }}>Home</Link></li>
                      <li><Link to="/about_us.php" style={{ fontSize: '14px' }}>About Us</Link></li>
                      <li><Link to="/contact_us.php" style={{ fontSize: '14px' }}>Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 2: Schedule an appointment */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3 style={{ fontSize: '22px' }}>Schedule an appointment</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="list clearfix">
                      <li><a href="https://appointment.blsslovakiavisa.com/app_azerbaijan/login" target="_blank" style={{ fontSize: '14px' }}>Book an appointment</a></li>
                      <li><a href="https://appointment.blsslovakiavisa.com/app_azerbaijan/login" target="_blank" style={{ fontSize: '14px' }}>Reschedule/cancel appointment</a></li>
                      <li><a href="https://appointment.blsslovakiavisa.com/app_azerbaijan/login" target="_blank" style={{ fontSize: '14px' }}>Reprint appointment letter</a></li>
                      <li><Link to="/track_application.php" style={{ fontSize: '14px' }}>Track Application</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 3: Visa services */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3 className="none_mob" style={{ fontSize: '22px' }}>Visa services</h3>
                  </div>
                  <div className="widget-content">
                    <p style={{ fontSize: '14px', color: '#97a2b7', marginBottom: '10px', fontWeight: 'bold' }}>Schengen Visa (Short Term)</p>
                    <ul className="list clearfix" style={{ marginBottom: '20px' }}>
                      <li><Link to="/schengen_tourism.php" style={{ fontSize: '14px' }}>Tourism</Link></li>
                      <li><Link to="/schengen_business.php" style={{ fontSize: '14px' }}>Business</Link></li>
                      <li><Link to="/schengen_medical.php" style={{ fontSize: '14px' }}>Medical Treatment</Link></li>
                      <li><Link to="/schengen_family_friends.php" style={{ fontSize: '14px' }}>Visiting Family/Friends</Link></li>
                    </ul>
                    
                    <p style={{ fontSize: '14px', color: '#97a2b7', marginBottom: '10px', fontWeight: 'bold' }}>National Visa (Long Term)</p>
                    <ul className="list clearfix">
                      <li><Link to="/national_employment.php" style={{ fontSize: '14px' }}>Employment Visa</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 4: Information */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3 style={{ fontSize: '22px' }}>Information</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="list clearfix">
                      <li><Link to="/public_holiday.php" style={{ fontSize: '14px' }}>Public Holidays / Closures</Link></li>
                      <li><Link to="/useful_links.php" style={{ fontSize: '14px' }}>Useful Links</Link></li>
                      <li><Link to="/customer_experience.php" style={{ fontSize: '14px' }}>Customer Experience</Link></li>
                      <li><Link to="/faqs.php" style={{ fontSize: '14px' }}>FAQs</Link></li>
                      <li><Link to="/additional_services.php" style={{ fontSize: '14px' }}>Value added sevices (optional)</Link></li>
                      <li><Link to="/security_rules.php" style={{ fontSize: '14px' }}>Security Rules</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className="footer-bottom clearfix">
          <div className="copyright pull-left">
            <p style={{ fontSize: '14px' }}>(©) 2026 <a href="https://blsinternational.com/" target="_blank" style={{ fontSize: '14px' }}>BLS International</a> . All Rights Reserved</p>
          </div>
          <ul className="footer-nav pull-right clearfix">
            <li><Link to="/disclaimer.php" style={{ fontSize: '14px' }}>Disclaimer</Link></li>
            <li><Link to="/privacy-policy.php" style={{ fontSize: '14px' }}>Privacy policy</Link></li>
            <li><Link to="/cookies.php" style={{ fontSize: '14px' }}>Cookies policy</Link></li>
            <li><Link to="/copy_right_policy.php" style={{ fontSize: '14px' }}>Copyright policy</Link></li>
            <li><Link to="/terms_conditions.php" style={{ fontSize: '14px' }}>Terms &amp; conditions</Link></li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
