import React from 'react';
import { Link } from 'react-router-dom';
import { Send, BookOpen, Files, ArrowUp } from 'lucide-react';

const TrackApplication = () => {
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
					  {/* p className="mb-2"><strong>Coming Soon</strong></p */}
                        <iframe src="https://software.blsslovakiavisa.com/search" width="100%" height="605px" aria-hidden="true"></iframe>
                        {/* <form action="#" method="post" className="assessment-form">
                          <div className="form-group">
                            <input type="text" className="border" name="phone" placeholder="Enter your reference no :" required="" />
                          </div>
                          <div className="form-group">
                            <input type="date" className="border" name="phone" placeholder="Enter your date of birth" required="" />
                          </div>
                          <div className="form-group">
                            <input name="" className="border" type="checkbox" value="" />
                            I agree to the <u>Terms and Conditions</u>
                          </div>
                          <div className="form-group">
                            <img src="/assets/images/img-google-captcha.jpg" alt="" />
                          </div>
                          <div className="form-group">
                            <button type="submit" className="theme-btn-two"><Send className="flaticon-send" />Track Status</button>
                          </div>
                        </form>
                         */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="login-bg">
                    <img src="/assets/images/img-tracking.jpg" alt="" />
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
