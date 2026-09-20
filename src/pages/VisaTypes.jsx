import React from 'react';
import { Link } from 'react-router-dom';

const VisaTypes = () => {
  return (
    <>
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/page-title.jpg)' }}>
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box">
              <h1>Visa Types</h1>
              <div className="dotted-box">
                <span className="dotted"></span>
                <span className="dotted"></span>
                <span className="dotted"></span>
              </div>
            </div>
            <ul className="bread-crumb clearfix">
              <li><Link to="/index.php">Home</Link></li>
              <li>Visa Types</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 content-side">
              <div className="coaching-details-content service-details-content">
                <div className="content-style-one">
                  <div className="group-title">
                    <h2>Visa types</h2>
                    <div className="dotted-box">
                      <span className="dotted"></span>
                      <span className="dotted"></span>
                      <span className="dotted"></span>
                    </div>
                  </div>
                </div>
                <p className="mb-2" style={{ fontSize: '14px' }}>The Slovakia Visa Application Centre accepts applications for short stay (Schengen) and long term (National) visas for residents of India. To find out more about the different purposes of travel, please click on one of the links under the Visa Types.</p>
                <p style={{ fontSize: '14px' }}><strong>Note: </strong>All processed passports will be given only to an applicant/Immediate family member who can prove blood relation with an applicant along with an authority letter and national id proof. In any of the circumstances, mode of delivery of passport will not change and no third party collection will be allowed.</p>
                <br />
                
                <div className="two-column">
                  <div className="row align-items-center clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                      <div className="content-box">
                        <h4 className="mb-2">Short Stay Visa</h4>
                        <ul className="list clearfix mt-3 mb-3">
                          <li><Link to="/schengen_tourism.php">Tourism</Link></li>
                          <li><Link to="/schengen_business.php">Business</Link></li>
                          <li><Link to="/schengen_family_friends.php">Visit Family or Friends Visa</Link></li>
                          <li><Link to="/schengen_st_re_other.php">Study, Research or other types of Internship</Link></li>
                          <li><Link to="/schengen_cul_spo_rel.php">Cultural, Sports or Religious events and for film crews</Link></li>
                          <li><Link to="/schengen_medical.php">Medical Treatment</Link></li>
                        </ul>
                        <h4 className="mb-2">National visa</h4>
                        <ul className="list clearfix mt-3 mb-3">
                          <li><Link to="/national_employment.php">Employment</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisaTypes;
