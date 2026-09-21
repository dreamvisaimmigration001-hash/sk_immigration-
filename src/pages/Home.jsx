import React from 'react';
import { Link } from 'react-router-dom';

import { Send, FileText, Copy, MapPin, Plane } from 'lucide-react';

const Home = () => {
  return (
    <>
<section className="banner-section style-two">
			<div className="banner-carousel owl-theme owl-dots-none">
				<div className="slide-item">
					<div className="image-layer" style={{ backgroundImage: 'url(/assets/images/banner.jpg)' }}></div>
					<div className="auto-container">
						<div className="row clearfix">
							<div className="col-xl-10 col-lg-12 col-md-12 offset-xl-1 content-column">
								<div className="content-box centred">
									{/* <span className="top-text">Effective Immigration Solution</span> */}
									<div className="title-text" id="texttitle">
										<h3>Welcome to</h3>
										{/* h1>Slovakia visa application center in India</h1 */}
										<h1>BLS International</h1>
										<p>Official partner of Embassy of Slovakia</p>
										{/* div className="dotted-box">
											<span className="dotted"></span>
											<span className="dotted"></span>
											<span className="dotted"></span>
										</div */}
									</div>
									{/* 
                                    <div className="btn-box">
                                        <a href="index.html" className="theme-btn-one"><Send className="flaticon-send" />Discover Solutions</a>
                                    </div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section><section className="apply-style-two pt-0 pb-0 step-overlay">
			<div className="auto-container">
				<div className="row clearfix">
					<div className="col-lg-4 col-md-6 col-sm-12 single-column centred">
						<div className="single-item wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
							<div className="inner-box" id="innerbox">
								<h6><span>1</span></h6>
								<div className="icon-box">
									<div className="arrow" style={{ backgroundImage: 'url(/assets/images/icons/arrow-1.png)',  }}></div>
									<FileText className="flaticon-document" />
								</div>
								<h3><a href="https://appointment.blsslovakiavisa.com/app_india/login" target="_blank">Book an <br /> appointment</a></h3>
							</div>
						</div>
					</div>
					{/* <div className="col-lg-3 col-md-6 col-sm-12 single-column centred">
						<div className="single-item wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
							<div className="inner-box">
								<h6><span>2</span></h6>
								<div className="icon-box">
									<div className="arrow" style={{ backgroundImage: 'url(/assets/images/icons/arrow-1.png)',  }}></div>
									<Copy className="flaticon-copy" />
								</div>
								<h3><Link to="/contact_us.php">Upload All Your <br />Attested Documents</Link></h3>
							</div>
						</div>
					</div> */}
					<div className="col-lg-4 col-md-6 col-sm-12 single-column centred">
						<div className="single-item wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
							<div className="inner-box" id="innerbox">
								<h6><span>2</span></h6>
								<div className="icon-box">
									<div className="arrow" style={{ backgroundImage: 'url(/assets/images/icons/arrow-1.png)',  }}></div>
									<MapPin className="flaticon-geography" />
								</div>
								<h3><Link to="/contact_us.php">Visit <br />our center</Link></h3>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 single-column centred">
						<div className="single-item wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
							<div className="inner-box" id="innerbox">
								<h6><span>3</span></h6>
								<div className="icon-box"><Plane className="flaticon-plane" /></div>
								<h3><Link to="/track_application.php">Track <br />your application</Link></h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section><section className="about-section" id="changecolor">
      <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/pattern-1.png)',  }}></div>
      <div className="auto-container">
        <div className="row align-items-center clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 content-column">
            <div id="content_block_1">
              <div className="content-box">
                <div className="sec-title">
                  {/*  <p>who are BLS</p> */}
                  {/*  Runing marque end  */}
                  <div>
                                        <div className="clear"></div>
                  </div>
                  {/*  Runing marque end  */}
                  <h2>Slovakia Visa Application - India &amp; Nepal</h2>
                  <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div id="image_block_1">
              <div className="image-box">
                <figure className="image"><img src="/assets/images/resource/about-1.jpg" alt="BLS International" /></figure>
                <div className="box">
                  <div className="inner">
                    <div className="icon-box">
                      <div className="icon icon-1"></div>
                      <div className="icon icon-2"></div>
                    </div>
                    <h1>20+</h1>
                    <p>Years of global experience</p>
                    <h1>70+</h1>
                    <p>Countries of operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div id="content_block_1">
              <div className="content-box">
                {/* <div className="bold-text">
					<p>"BLS International Services Ltd." is headquartered in New Delhi, India and is a specialist service provider of Outsourcing for Visa, Passport, Consular, Attestation and Apostille Services to the Diplomatic Missions across the world.</p>
				</div> */}
                <div className="text">
                  {/*  <p className="mb-3">"BLS International Services Ltd." is headquartered in New Delhi, India and is a specialist service provider of Outsourcing for Visa, Passport, Consular, Attestation and Apostille Services to the Diplomatic Missions across the world.</p> */}
                  <p>BLS International is a trusted global tech-enabled service partner for governments and citizens. It provides administrative and non-judgmental services to the Diplomatic Missions. The company is recognized as 'Best under a Billion Company" by Forbes Asia and is amongst "Fortune India's Next 500 companies".</p>
                </div>
                <div className="btn-box"> <Link to="/about_us.php" className="theme-btn-two">About us<Send className="flaticon-send" /></Link> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><section className="feature-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 content-column">
            <div id="content_block_1">
              <div className="content-box">
                <div className="sec-title">
                  <h2>How to apply</h2>
                  <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box"><img src="/assets/images/resource/feature-1.jpg" alt="Know Your Visa Type" /></figure>
                <div className="text">
                  <h3><Link to="/visa_types.php">Know your visa type</Link></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box"><img src="/assets/images/resource/feature-2.jpg" alt="Book Appointment" /></figure>
                <div className="text">
                  <h3><a href="https://appointment.blsslovakiavisa.com/app_india/login" target="_blank">Book your appointment</a></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box"><img src="/assets/images/img-location.jpg" style={{ height: '245px',  }} alt="Visit our Centre" /></figure>
                <div className="text">
                  <h3><Link to="/contact_us.php">Visit our centre</Link></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    <section className="vas-section bg-color-1">
      <div className="auto-container">
        <div className="top-inner">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 title-column">
              <div className="sec-title mb-0">
                <h2 data-asw-org-font-size="23" style={{ fontSize: '23px' }}>Value added services (optional)</h2>
                <div className="dotted-box">
                  <span className="dotted" data-asw-org-font-size="13" style={{ fontSize: '13px' }}></span>
                  <span className="dotted" data-asw-org-font-size="13" style={{ fontSize: '13px' }}></span>
                  <span className="dotted" data-asw-org-font-size="13" style={{ fontSize: '13px' }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="four-item-carousel owl-carousel owl-theme owl-nav-none owl-loaded owl-drag">
        <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-1638px, 0px, 0px)', transition: '0.5s', width: '3510px' }}><div className="owl-item cloned" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one centred">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/img-photocopy.jpg" alt="Photocopy" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Photocopy</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item cloned" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one centred">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/img-photobooth.jpg" alt="Photograph" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Photograph</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item cloned" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one centred">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/img-courier-delivery.jpg" alt="Courier Delivery" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Courier service</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item cloned" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/sms-services.jpg" alt="SMS Service" /></div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>SMS service</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item cloned" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/on-demand-visa-service.jpg" alt="Premium Lounge" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Premium lounge</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one centred">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/img-photocopy.jpg" alt="Photocopy" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Photocopy</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one centred">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/img-photobooth.jpg" alt="Photograph" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Photograph</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item active" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one centred">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/img-courier-delivery.jpg" alt="Courier Delivery" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Courier service</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item active" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/sms-services.jpg" alt="SMS Service" /></div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>SMS service</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item active" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/on-demand-visa-service.jpg" alt="Premium Lounge" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Premium lounge</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item cloned active" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one centred">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/img-photocopy.jpg" alt="Photocopy" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Photocopy</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item cloned active" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one centred">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/img-photobooth.jpg" alt="Photograph" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Photograph</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item cloned" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one centred">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/img-courier-delivery.jpg" alt="Courier Delivery" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Courier service</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item cloned" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/sms-services.jpg" alt="SMS Service" /></div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>SMS service</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div><div className="owl-item cloned" style={{ width: '204px', marginRight: '30px' }}><div className="vas-block-one">
            <div className="inner-box">
              <div className="icon-box"><img src="/assets/images/on-demand-visa-service.jpg" alt="Premium Lounge" />
              </div>
              <h3 data-asw-org-font-size="15" style={{ fontSize: '15px' }}><a href="#" data-asw-org-font-size="15" style={{ fontSize: '15px' }}>Premium lounge</a></h3>
              <div className="link"><a href="#" data-asw-org-font-size="16" style={{ fontSize: '16px' }}>Read more <i className="flaticon-send"></i></a></div>
            </div>
          </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev"><span className="fas fa-angle-left" data-asw-org-font-size="19" style={{ fontSize: '19px' }}></span></div><div className="owl-next"><span className="fas fa-angle-right" data-asw-org-font-size="19" style={{ fontSize: '19px' }}></span></div></div><div className="owl-dots disabled"><div className="owl-dot active"><span data-asw-org-font-size="13" style={{ fontSize: '13px' }}></span></div></div></div>
      </div>
    </section>
    </>
  );
};

export default Home;
