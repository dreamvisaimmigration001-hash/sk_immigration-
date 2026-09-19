import React from 'react';
import { Link } from 'react-router-dom';
import { Send, BookOpen, Files, ArrowUp } from 'lucide-react';

const NewsUpdates = () => {
  return (
    <>
<section className="page-title" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)',  }}>
			<div className="auto-container">
				<div className="content-box">
					<div className="title-box">
						<h1>News and updates</h1>
						<div className="dotted-box">
							<span className="dotted"></span>
							<span className="dotted"></span>
							<span className="dotted"></span>
						</div>
					</div>
					<ul className="bread-crumb clearfix">
						<li><Link to="/index.php">Home</Link></li>
						<li>News and updates</li>
					</ul>
				</div>
			</div>
		</section><section className="coaching-page-section bg-color-3">
        <div className="auto-container">
            <div className="sec-title centred mb-3">
                <h2>News and updates</h2>
                {/* span>Coming Soon.</span */}
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
                                <div className="col-lg-12 col-md-12 col-sm-12 sidebar-side">
                                    <div className="sidebar">
                                    <div className="sidebar-widget sidebar-assessment bg-white border">
                                            <div className="widget-content">
                                                <p className="mb-2">General Public are hereby informed that family members of EU citizen are kindly requested to contact Embassy of Slovak Republic ,Delhi pertaining to submission of their documents for visa.</p>
											{/* p className="mb-2">Individuals travelling to Slovakia for business purposes can apply as walk in at our visa application center. No prior appointment is required.</p */}
                                                {/* p className="mb-2">Processing of Long term Visa Application for Slovakia National Visa in New Delhi, Mumbai and Bengaluru is currently suspended until further notice!</p>
  <p className="mb-2">All applicants who wish to book a new appointment shall communicate directly with the Embassy of Slovakia in New Delhi.</p>
  <p className="mb-2">We regret for any inconvenience caused and thank you for your understanding</p */}
                                            </div>
                                        </div>
                                        {/* div className="sidebar-widget sidebar-assessment bg-white border">
                                            <div className="widget-content">
                                                <p className="mb-2">November 19<sup>th</sup>: Effective 21<sup>st</sup> November there is a change in visa fees. Please refer to the respective visa categories to view the revised fees,</p>
                                                <p className="mb-2">November 8th : The opening for the office in Monterrey, NL has been delayed. If you need to start your applications process for a Germany Visa, please, set up an appointment at the Visa Application Center in Mexico City. Apologies for the inconvenience this may cause.</p>
                                            </div>
                                        </div */}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="login-bg">
                                        {/* <img src="/assets/images/img-tracking.jpg" alt="" /> */}
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

export default NewsUpdates;
