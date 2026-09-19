import React from 'react';
import { Link } from 'react-router-dom';

import { Send, BookOpen, Files, ArrowUp } from 'lucide-react';

const NationalEmployment = () => {
  return (
    <>
<section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/page-title.jpg)',  }}>
			<div className="auto-container">
				<div className="content-box">
					<div className="title-box">
						<h1>Employment</h1>
						<div className="dotted-box">
							<span className="dotted"></span>
							<span className="dotted"></span>
							<span className="dotted"></span>
						</div>
					</div>
					<ul className="bread-crumb clearfix">
						<li><Link to="/index.php">Home</Link></li>
						<li>National visa</li>
						<li>Employment</li>
					</ul>
				</div>
			</div>
		</section><div className="sidebar-page-container">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                    <div className="sidebar">
                        <div className="sidebar-widget sidebar-categories">
                            <ul className="categories-list clearfix">
						        <li><Link to="/national_employment.php" className="active">Employment<Send className="flaticon-send" /></Link></li>
							{/* li><Link to="/national_highly_qualified_job_seeker.php">Highly qualified job seeker<Send className="flaticon-send" /></Link></li>
							<li><Link to="/national_relocated_employee.php">Relocated employee<Send className="flaticon-send" /></Link></li>
							<li><Link to="/national_family_member_of_the_relocated_employee.php">Family member of the relocated employee<Send className="flaticon-send" /></Link></li */}
                            </ul>
                        </div>
                        <button className="mobile-view"> <BookOpen className="flaticon-elearning" /> View form</button>
                        <div className="mobileview">
                            <div className="sidebar-widget sidebar-download">
                                <div className="widget-title">
                                    <h3>Download form</h3>
                                    <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
                                </div>
                                
                                <div className="widget-title">
                                    <h3>Download form</h3>
                                    <p>Below mentioned forms/checklist are mandatory for all visa categories accepted by BLS</p>
                                    <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
                                </div>
                                <div className="widget-content">
                                    <ul className="download-list clearfix">
                                    <li> <Files className="flaticon-files" />
                                     <h4><a href="/assets/pdf/application_form/National_Visa_Form.pdf" target="_blank">Application Form</a></h4>
                                     {/* span>Last Update: 23 January 2022</span */}
                                     </li>
                                    </ul>
                                </div>
                                {/* div className="widget-title">
                                    <h3>Documents required checklist</h3>
									<p>
                                </div */}
                                {/* div className="widget-content">
                                    <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
                                    <ul className="download-list clearfix">
                                    <li> <Files className="flaticon-files" />
                                              <h4><a href="#" target="_blank">Checklist for employment</a></h4>
                                              <!--span>Last Update: 23 January 2022</span-- >
                                           </li>
                                    </ul>
                                </div */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                    <div className="coaching-details-content service-details-content">
                        <div className="content-style-one">
                            {/*  <figure className="image-box"><img src="/assets/images/service/service-14.jpg" alt="" /></figure> */}
                            <div className="group-title">
                                <h2>Employment</h2>
                                <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
                            </div>
							</div>
							<div className="content-style-two">
              <table border="0" cellspacing="0" cellpadding="0" width="100%" className="feetable">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div className="accordion" id="accordionExample">
                        <div className="btn btn-link card-header" id="headingOne">
                          <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Overview
                          </button>
                        </div>
                        <div className="btn btn-link card-header" id="headingTwo">
                          <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Visa fee
                          </button>
                        </div>
                        <div className="btn btn-link  card-header" id="headingThree">
                          <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Document requirements
                          </button>
                        </div>
						<div className="btn btn-link  card-header" id="headingfour">
                          <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                            Photo specifications
                          </button>
                        </div>
						<div className="btn btn-link  card-header" id="headingfive">
                          <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                            Processing time
                          </button>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">
						  <h4 className="mb-2">Overview</h4>
                            <p className="mb-2">Individuals travelling to Slovakia for employment purpose can apply.</p>
                          </div>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                          <div className="card-body">
                            <h4 className="mb-2">Visa fee</h4>
<table border="0" cellspacing="0" cellpadding="0" width="100%" className="feetable">
                  <tbody><tr>
                    <th><strong>Visa Type</strong></th>
                    <th><strong>Fee</strong></th>
                  </tr>
				  <tr>
				  <td>Long Term Visa (Employment) </td>
				  <td>₹ 9933{/* 9860 */}</td>
				  </tr>
				  <tr>
				  <td>Interest of SR - high qualified visa (D) </td>
				  <td>₹ 5519{/* 5478 */}</td>
				  </tr>
                </tbody></table>
				<p className="mb-2">Note:</p>
                <div className="two-column">
                            <div className="row align-items-center clearfix">
                                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <ul className="list clearfix mt-3 mb-3">
                                            <li>Applicants will be paying a service fee of ₹ 1866{/* 1852 */} (including VAT)</li>
                                            <li>The applicable Visa Fee and Service fee are as per the current rate of exchange set by the Embassy of Slovakia. They are subject to change without any notice</li>
                                            <li>All the Fees are non-refundable</li>
                                          </ul></div></div></div></div>                          </div>
                        </div>
						<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                          <div className="card-body">
						  <h4 className="mb-2">Document requirements</h4>
                            <br />
                          {/* p className="mb-2">Checklist for employment - <a href="#" target="_blank">Click here</a></p */}
                          <p className="mb-2">Application Form - <a href="/assets/pdf/application_form/National_Visa_Form.pdf" target="_blank">Click here</a></p>
						  <p className="mb-2">For more information : <a href="https://www.mzv.sk/en/web/dilli-en/services/national-visa" target="_blank">https://www.mzv.sk/en/web/dilli-en/services/national-visa</a></p>
                          <br />
						  {/* h4 className="mb-2">Application for a national visa for the purpose of employment</h4>
						  <div className="two-column">
                            <div className="row align-items-center clearfix">
                                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <ul className="list clearfix mt-3 mb-3">
										<li><p className="mb-2">a valid passport (its validity shall be at least 90 days after the intended date of departure from the Slovak Republic);</p></li>
										<li><p className="mb-2">a completed application for a national visa;</p></li>
										<li><p className="mb-2">a full-face colour photograph, conform to <a href="https://home-affairs.ec.europa.eu/system/files_en?file=2016-12/icao_photograph_guidelines_en.pdf" target="_blank">ICAO standards</a>, 3 x 3,5 cm showing applicant´s current facial image;</p></li>
										<li><p className="mb-2">proof of education:</p>
										<ul className="list clearfix mt-3 mb-3">
										<li><p className="mb-2">a university diploma or confirmation of successful completion of a second-level study at a higher education institution in the Slovak Republic or the Czech Republic, or</p></li>
										<li><p className="mb-2">a higher education diploma or a certificate of successful completion of a university or educational establishment as referred to in Annex 1 to the Regulation in a study programme lasting at least three years, or</p></li>
										<li><p className="mb-2">a university diploma or certificate of successful completion of a university or educational establishment in a study programme of at least four years in the case of employment listed in Annex 2 to the Regulation;</p></li>
										</ul></li>
										<li><p className="mb-2">a letter of employment of the third country national issued by the employer or a valid employment contract;</p></li>
										<li><p className="mb-2">proof of health insurance in the territory of the Slovak Republic valid until the period of entry into force of the employment contract.</p></li>
										</ul></div></div></div></div */}
                          </div>
                        </div>
						<div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                          <div className="card-body">
                            <h4 className="mb-2">Photo specifications</h4>
{/* p className="mb-2"><a href="https://home-affairs.ec.europa.eu/system/files_en?file=2016-12/icao_photograph_guidelines_en.pdf" target="_blank">Click here</a> to know the photo specifications</p */}
<p className="mb-2">Note: We regret we cannot accept photographs that do not meet these requirements</p>
<p className="mb-2"><img src="/assets/images/photo-specification.jpg" alt="photo requirement" /></p>
<div className="two-column">
	<div className="row align-items-center clearfix">
		<div className="col-lg-12 col-md-12 col-sm-12 content-column">
			<div className="content-box">
				<p className="mb-2">Please provide one recent photograph (not more than 6 months old) of yourself, which should not have been used previously in the passport. The photograph should be in colour and:</p>
				<ul className="list clearfix mt-3 mb-3">
					<li>Taken against a light background (white or off-white) so that features are distinguishable and contrast against the background.</li>
					<li>Clear share quality and with the face in focus.</li>
					<li>Printed on normal photographic paper (camera print).</li>
					<li>Full face, non-smiling [without sunglasses, a hat/cap or other head covering, unless the applicant wears such items because of their religious belief or ethnic background]</li>
					<li>Please stick the Photograph on the Visa Application Form.</li>
				</ul>
				<p className="mb-2"><strong>Note:</strong> Please follow these instructions carefully. If photographs presented do not meet these requirements your application will be considered incomplete. A photo booth meeting these requirements is available at the centre.</p>
					{/* p className="mb-2">Photo Size</p>
                    <p className="mb-2">The photo for each visa applicant submitted must measure:</p>
					<ul className="list clearfix mt-3 mb-3">
						                <li>The picture dimensions must be 240 pixels wide by 320 pixels high at least. A smaller picture will be rejected. For instance, a photo being 235 pixels by 320 pixels is not valid.</li>
                                        <li>On the other hand, the photo should keep a proportion of 3.5 x 4.5 (width x height) within limits. However, 250 x 340 pixels picture would be valid, but not a 290 x 340 pixels one.</li>
                                        <li>Finally, the image weight (size in Kbytes) can never be bigger than 120 Kbytes. Finally, the image weight (size in Kbytes) can never be bigger than 120 Kbytes.</li>
					</ul */}
                    </div></div></div></div>                          </div>
                        </div>
						<div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                          <div className="card-body">
                            <h4 className="mb-2">Processing Time</h4>
<p className="mb-2">From the date of receipt of application at the Embassy of Slovakia, it takes 30 {/* to 45 */} working days to process the visa application. The duration of days when the application is in transit between the Visa Application Centre and the Embassy are not counted.</p>                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
            </div>
                            {/* div className="text">
                            <h4 className="mb-2">Overview</h4>
                            <p className="mb-2">Individuals travelling to Slovakia with the purpose of visiting family or friends can apply for Schengen Visa of this category.</p>
                            </div>
                        </div>
                        <div className="two-column">
                            <div className="content-box">
                                <h4 className="mb-2">Visa Fee</h4>
                                <div className="content-style-two mt-4">
                                								<h4 className="mb-2">Document Requirements</h4>
								<ul className="list clearfix mt-3 mb-3">
                                <li>Travel medical insurance is mandatory for all Schengen countries</li>
								<li>Please note that only residents of the China can apply at the Visa Application Centre in China.</li></ul></br>
								<h4 className="mb-2">Photo Specifications</h4>
																                                    </div>
                            </div>
                        </div */}
                    </div>
                </div>
            </div>
        </div>
                                            </div><button className="scroll-top scroll-to-target open" data-target="html" aria-label="Scroll to top">
  <ArrowUp className="fas fa-long-arrow-alt-up" />
</button>
    </>
  );
};

export default NationalEmployment;
