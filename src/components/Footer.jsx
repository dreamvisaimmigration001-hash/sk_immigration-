import React from 'react';
import { Link } from 'react-router-dom';

import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="main-footer bg-color-2">
        <div className="auto-container">
          <div className="footer-top">
            <div className="widget-section">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3 data-asw-org-font-size="22" style={{ fontSize: '22px' }}>Quick links</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="list clearfix">
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Home</Link></li>
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/about_us.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>About us</Link></li>
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/contact_us.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Contact us</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3 data-asw-org-font-size="22" style={{ fontSize: '22px' }}>Schedule an appointment</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="list clearfix">
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><a href="#" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Schedule an appointment - India</a>
                          <ul style={{ marginLeft: '20px' }}>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><a href="https://appointment.blsslovakiavisa.com/app_india/login" target="_blank" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Book an appointment</a></li>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><a href="https://appointment.blsslovakiavisa.com/app_india/login" target="_blank" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Reschedule/cancel appointment</a></li>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><a href="https://appointment.blsslovakiavisa.com/app_india/login" target="_blank" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Reprint appointment letter</a></li>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/track_application.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Track your application</Link></li>
                          </ul>
                        </li>
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><a href="#" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Schedule an appointment - Nepal</a>
                          <ul style={{ marginLeft: '20px' }}>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><a href="https://software.blsslovakiavisa.com/appointments/login" target="_blank" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Book an appointment</a></li>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><a href="https://software.blsslovakiavisa.com/appointments/login" target="_blank" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Reschedule/cancel appointment</a></li>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><a href="https://software.blsslovakiavisa.com/appointments/login" target="_blank" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Reprint appointment letter</a></li>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/track_application.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Track your application</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3 data-asw-org-font-size="22" style={{ fontSize: '22px' }}>Visa services</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="list clearfix">
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><a href="#" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Schengen Short Stay Visa </a>
                          <ul style={{ marginLeft: '20px' }}>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/schengen_tourism.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Tourism</Link></li>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/schengen_business.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Business</Link></li>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/schengen_family_friends.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Visit Family or Friends Visa</Link></li>
                            {/* <li><Link to="/schengen_conference.php">Conference</Link></li> */}
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/schengen_st_re_other.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Study, Research or other types of Internship</Link></li>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/schengen_cul_spo_rel.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Cultural, Sports or Religious events and for film crews</Link></li>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/schengen_medical.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Medical Treatment</Link></li>
                          </ul>
                        </li>
                        {/* National visa is not allowed in the begining may be later will make it live */}
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><a href="#" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>National Visa </a>
                          <ul style={{ marginLeft: '20px' }}>
                            <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/national_employment.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Employment</Link></li>
                            {/* <li><Link to="/national_highly_qualified_job_seeker.php">Highly Qualified Job Seeker</Link></li>
                            <li><Link to="/national_relocated_employee.php">Relocated Employee</Link></li>
                            <li><Link to="/national_family_member_of_the_relocated_employee.php">Family Member of the relocated employee</Link></li> */}
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3>Visa Types</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="list clearfix">
                        <li><Link to="/gainful_activity.php">Gainful activity</Link></li>
                        <li><Link to="/intra_corporate_transfer.php">Intra-corporate transfer</Link></li>
                        <li><Link to="/voluntary_service_activities.php">Voluntary Service Activities</Link></li>
                        <li><Link to="/medical_treatment.php">Medical Treatment</Link></li>
                        <li><Link to="/long_term_mobility.php">Long Term Mobility</Link></li>
                        <li><Link to="/seasonal_employment.php">Seasonal Employment</Link></li>
                        <li><Link to="/others_visa.php">Others</Link></li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3 data-asw-org-font-size="22" style={{ fontSize: '22px' }}>Information</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="list clearfix">
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/public_holiday.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Public holidays</Link></li>
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/useful_links.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Useful links</Link></li>
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/customer_experience.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Customer experience</Link></li>
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/faqs.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>FAQs</Link></li>
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/additional_services.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Value added services (optional)</Link></li>
                        <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/security_rules.php" data-asw-org-font-size="12" style={{ fontSize: '12px' }}>Security rules</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget newsletter-widget">
                    <div className="widget-title">
                      <h3>Newsletter Signup</h3>
                    </div>
                    <div className="widget-content">
                      <p>Enter your email address to get latest updates and offers from us. Also some Discount coupons.</p>
                      <form action="#" method="post" className="newsletter-form">
                        <div className="form-group">
                          <input type="email" name="email" placeholder="Email address" required="" />
                          <button type="submit"><Send className="flaticon-send" /></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="footer-bottom clearfix">
            <div className="copyright pull-left">
              <p data-asw-org-font-size="14" style={{ fontSize: '14px' }}>(©) 2026 <a href="https://blsinternational.com/" target="_blank" data-asw-org-font-size="14" style={{ fontSize: '14px' }}>BLS International</a>. All rights reserved.</p>
            </div>
            <ul className="footer-nav pull-right clearfix">
              <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/disclaimer.php" data-asw-org-font-size="13" style={{ fontSize: '13px' }}>Disclaimer</Link></li>
              <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/privacy-policy.php" data-asw-org-font-size="13" style={{ fontSize: '13px' }}>Privacy policy</Link></li>
              <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/cookies.php" data-asw-org-font-size="13" style={{ fontSize: '13px' }}>Cookies policy</Link></li>
              <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/copy_right_policy.php" data-asw-org-font-size="13" style={{ fontSize: '13px' }}>Copyright policy</Link></li>
              <li data-asw-org-font-size="13" style={{ fontSize: '13px' }}><Link to="/terms_conditions.php" data-asw-org-font-size="13" style={{ fontSize: '13px' }}>Terms &amp; conditions</Link></li>
              {/* <li><Link to="/delivery_policy.php">Delivery policy</Link></li> */}
              {/* <li><Link to="/privacy-policy.php">Privacy Policy</Link></li> */}
              {/* <li><Link to="/sitemap.php">Sitemap</Link></li>
              <li><Link to="/modern_slavery_statement_2021.php">Modern Slavery statement</Link></li> */}
              {/* <li><Link to="/terms_conditions.php">Terms & Conditions</Link></li> */}
              {/* <li><Link to="/terms_conditions.php">Service terms & Conditions</Link></li> */}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
