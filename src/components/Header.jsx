import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, Phone, Mail, MessageCircle, Users, Briefcase, Search, X, Video } from 'lucide-react';

const Header = () => {
  return (
    <>
<div className="disablebg"></div><div className="bloggerform" id="pop">
	<a href="javascript:;" className="cl"><img src="/assets/images/ic_close.png" alt="Close" className="pop-close" /></a>
	<div className="ct">
	{/* p className="mb-2" style={{ fontWeight: 'bold',  }}>Holiday Notice: The Slovakia Visa Application Center in Mumbai will remain closed on 14th September 2026 on account of the Ganesh Chaturthi Festival.</p */}
	<h2 style={{ textAlign: 'center',  }}>Website Disclaimer</h2>
	<p className="mb-2" style={{ fontWeight: 'bold',  }}>DO NOT FALL INTO FRAUD AND BEWARE OF SCAMS !</p>
  	<p className="mb-2">BLS International advises visa applicants to exercise caution and vigilance regarding the following points:</p>
	<ul style={{ listStyleType: 'disc',  }}>
		<li>•	Our staff never ask visa applicants to make cash payments or any other form of payment to obtain an appointment, expedite the visa application process, secure an earlier appointment, or influence decision-making.</li>
		<li>•	We do not recommend any direct payments into personal bank accounts.</li>
		<li>•	Appointments must be booked exclusively through the BLS website. Please refer to the website for authorized service fees payable to BLS International.</li>
		<li>•	Always request a receipt for optional value-added services available at our center.</li>
		<li>•	The decision regarding visa applications is made solely by the competent authorities, and BLS International has no role or influence in this process. If you receive such a request (in writing or verbally), please report it immediately by completing the complaint form or by sending an email to <a href="mailto:antifraud@blsinternational.com">antifraud@blsinternational.com</a>.</li>
	</ul>
	<p className="mb-2">Be cautious of intermediaries selling visa appointments under the name of BLS International or individually outside our center. All appointments must be booked through the BLS International website. Please refrain from purchasing appointments through a third party: this is a fraudulent practice that BLS International strongly condemns. As a responsible service provider, we make every effort to inform applicants to be wary of fraudulent intermediaries charging fees to clients for appointment bookings.</p>
	<p className="mb-2" style={{ fontWeight: 'bold',  }}>All applicants are hereby informed that there are certain individuals/Agents charging exorbitant amount of money in exchange of Appointments or submission of their visa application. Please be informed that BLS does not charge or encourage any unapproved fees</p>
	<p className="mb-2" style={{ fontWeight: 'bold',  }}>BLS Employee must provide receipt for all the services availed and paid at BLS Slovakia Visa Application Centre. Please write to Mumbai: <a href="mailto:feedback.bom@blshelpline.com">feedback.bom@blshelpline.com</a> , Delhi: <a href="mailto:feedback.del@blshelpline.com">feedback.del@blshelpline.com</a> if you have not received receipt for any payments made in the Slovakia Visa Application Centre.</p>
	<p className="mb-2" style={{ fontWeight: 'bold',  }}><u>Accessibility</u></p>
	<p className="mb-2">Customers who have a disability or need accessibility requirements are requested to inform our customer care team prior to the date of appointment so that our staff will be available to assist them in the visa center.</p>
	</div>
</div><header className="main-header style-one">
		<div className="header-top">
			<div className="top-inner clearfix">
				<div className="lang pull-left">

					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Select Language
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a href="#" onclick="doGTranslate('es|en');return false;" title="english" className="gflag nturl dropdown-item"><img src="/assets/images/img-usa.jpg" alt="Slovakia USA" /> English</a>
														<a href="#" onclick="doGTranslate('en|hi');return false;" title="english" className="gflag nturl dropdown-item"><img src="/global_content/country-flag/india.jpg" alt="" /> Hindi</a>
							{/* a href="" title="Bengali" className="gflag nturl dropdown-item"><img src="/assets/images/img-.jpg" alt="BLS Slovakia " /> Bengali</a */}
						</div>
						{/* div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a href="#" onClick="doGTranslate('es|en');return false;" title="english" className="gflag nturl dropdown-item"><img src="/assets/images/img-usa.jpg" alt="" /> English</a>
														<a href="#" onClick="doGTranslate('es|bn');return false;" title="bengali" className="gflag nturl dropdown-item"><img src="/assets/images/img-.jpg" alt="" /> Bengali</a>
							<!--<a href="" title="Bengali" className="gflag nturl dropdown-item"><img src="/assets/images/img-.jpg" alt="" /> Bengali</a>
						</div */}
					</div>
					{/*  <ul>
				<li><a href="#" onClick="doGTranslate('es|en');return false;" title="english" className="gflag nturl"  style={{ color: '#fff',  }}>English</a></li>
				<li><a href="#" onClick="doGTranslate('en|es');return false;" title="German" className="gflag nturl" style={{ color: '#fff',  }}>Espa&ntilde;ol</a></li>
				<li><a href="#" onClick="doGTranslate('es|ar');return false;" title="Arabic" className="gflag nturl" style={{ color: '#fff',  }}>Arabic</a></li>
				<li><a href="#" onClick="doGTranslate('en|fr');return false;" title="French" className="gflag nturl" style={{ color: '#fff',  }}>French</a></li>
				<li><a href="#" onClick="doGTranslate('en|ru');return false;" title="Russian" className="gflag nturl" style={{ color: '#fff',  }}>Russian</a></li>
		   </ul> */}
					{/* <a href="#" style={{ color: '#fff',  }}>Language</a>
			<a href="#" onClick="doGTranslate('es|en');return false;" title="english" className="gflag nturl"  style={{ color: '#fff',  }}>English</a>
			<a href="#" onClick="doGTranslate('en|es');return false;" title="German" className="gflag nturl" style={{ color: '#fff',  }}>German</a> */}
					<div id="google_translate_element2" style={{ display: 'none',  }}></div>
					
					
					
				</div>
				<div className="top-left pull-left">
					<ul className="info clearfix">
            {/* li><Phone className="flaticon-call" />Call us: <a href="tel:+000 0000000000">+00 (00) 0000-0000</a></li */}
            {/* li><Mail className="flaticon-open-email-message" /> Email: <a href="mailto:#">email.email@email.com</a></li */}
			<li style={{ fontSize: '28px',  }}>Slovakia Visa Application Centers - India <span><img src="/assets/images/india-flag.jpg" alt="India flag" width="40" /></span> &nbsp;&amp; Nepal <span><img src="/assets/images/nepal.svg" alt="Nepal flag" width="40" /></span></li>
          </ul>
				</div>
				<div className="top-right pull-right">
					{/*  <span className="sizechanger">
						<a id="decfont" className="changer" href="javascript:;" onclick="set_font_size('decrease')" title="Decrease font size" role="link" style={{ color: '#000', background: '#fff',  }}>-A</a>
						<a id="defaultfont" className="changer" onclick="set_font_size('')" href="javascript:;" title="Reset font size" role="link">A</a>
						<a id="incfont" className="changer" onclick="set_font_size('increase')" href="javascript:;" title="Increase font size" role="link">+A</a>
					</span>
					<span className="colorchanger">
						<a href="javascript:void(0);" onclick="chooseStyle('none', 60);" role="link" aria-label="" title="Normal Contrast" style={{ color: '#fff', background: '#00000000',  }}>A</a>
						<a href="javascript:void(0);" className="blackbg" onclick="chooseStyle('change', 60);" role="link" aria-label="" title="High Contrast">A</a>
						<a id="decfont" className="changer" href="javascript:;" onclick="set_font_size('decrease')" title="Decrease font size" role="link"><img src="/assets/images/accessible-icon.png" alt="BLS International" /></a>
					</span>  */}
					<ul className="social-links clearfix">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Select country
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ height: '160px', overflow: 'hidden', overflowY: 'scroll',  }}>
							<a href="https://www.blsslovakiavisa.com/argentina/" title="Argentina" className="dropdown-item" role="menuitem"><img src="https://www.blsslovakiavisa.com/assets/images/argentina.png" style={{ width: '20px', height: '14px',  }} alt="Argentina" /> &nbsp;Argentina</a>

							<a href="https://www.blsslovakiavisa.com/armenia/" title="Armenia" className="dropdown-item" role="menuitem"><img src="https://www.blsslovakiavisa.com/assets/images/armenia.png" style={{ width: '20px', height: '14px',  }} alt="Armenia" /> &nbsp;Armenia</a>
							
							<a href="https://blsslovakiavisa.com/azerbaijan/" title="Azerbaijan" className="gflag nturl dropdown-item" aria-label="Choose Azerbaijan as your country"><img src="https://www.blsslovakiavisa.com/global_content/country-flag/azerbaijan.png" style={{ width: '20px', height: '14px',  }} alt="Choose your country Azerbaijan" /> Azerbaijan</a>

							<a href="https://www.blsslovakiavisa.com/bahrain/" title="Bahrain" className="dropdown-item" role="menuitem"><img src="/assets/images/bahrain.png" style={{ width: '20px', height: '14px',  }} alt="Bahrain" /> &nbsp;Bahrain</a>
		
							<a href="https://www.blsslovakiavisa.com/bolivia" title="Bolivia" className="dropdown-item" role="menuitem"><img src="https://www.blsslovakiavisa.com/assets/images/Bolivia.png" style={{ width: '20px', height: '14px',  }} alt="Bolivia" /> &nbsp;Bolivia</a>
							
						   <a href="https://blsslovakiavisa.by/" title="Belarus" className="gflag nturl dropdown-item" aria-label="Choose Belarus as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/belarus.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Belarus" /> Belarus</a>

						   <a href="https://blsslovakiavisa.com/brazil" title="Brazil" className="dropdown-item" role="menuitem"><img src="https://blsslovakiavisa.com/assets/images/brazil.png" style={{ width: '20px', height: '14px',  }} alt="Brazil" /> &nbsp;Brazil</a>

						   <a href="https://blsslovakiavisa.com/cambodia" title="Cambodia" className="dropdown-item" role="menuitem"><img src="https://blsslovakiavisa.com/assets/images/cambodia.png" style={{ width: '20px', height: '14px',  }} alt="Cambodia" /> &nbsp;Cambodia</a>

							<a href="https://slovakia.blscn.cn/" title="China" className="gflag nturl dropdown-item" aria-label="Choose China as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/china.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country China" /> China</a>
														<a href="https://blsslovakiavisa.com/cyprus" title="Cyprus" className="gflag nturl dropdown-item" aria-label="Choose Cyprus as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/cyprus.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Cyprus" /> Cyprus</a>
														<a href="https://blsslovakiavisa.com/egypt" title="Egypt" className="gflag nturl dropdown-item" aria-label="Choose Egypt as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/egypt.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Egypt" /> Egypt</a>
														<a href="https://blsslovakiavisa.com/india" title="India" className="gflag nturl dropdown-item" aria-label="Choose India as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/india.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country India" /> India</a>
														<a href="https://blsslovakiavisa.com/indonesia" title="Indonesia" className="gflag nturl dropdown-item" aria-label="Choose Indonesia as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/indonesia.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Indonesia" /> Indonesia</a>

							<a href="https://blsslovakiavisa.com/ireland" title="Ireland" className="dropdown-item" role="menuitem"><img src="/assets/images/ireland.png" style={{ width: '20px', height: '14px',  }} alt="Ireland" /> &nbsp;Ireland</a>

							<a href="https://blsslovakiavisa.com/israel" title="Israel" className="dropdown-item" role="menuitem"><img src="https://blsslovakiavisa.com/assets/images/israel.svg" style={{ width: '20px', height: '14px',  }} alt="kyrgyzstan" /> &nbsp;Israel</a>
														<a href="https://blsslovakiavisa.com/kazakhstan" title="Kazakhstan" className="gflag nturl dropdown-item" aria-label="Choose kazakhstan as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/Kazakhstan.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Kazakhstan" /> Kazakhstan</a>
							
							<a href="https://blsslovakiavisa.com/kenya" title="Kenya" className="gflag nturl dropdown-item" aria-label="Choose Kenya as your country"><img src="https://www.blsslovakiavisa.com/kenya/assets/images/kenya.svg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Kenya" /> Kenya</a>

							<a href="https://blsslovakiavisa.com/kuwait" title="Kuwait" className="gflag nturl dropdown-item" aria-label="Choose Kuwait as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/kuwait.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Kuwait" /> Kuwait</a>
														<a href="https://blsslovakiavisa.com/kyrgyzstan" title="kyrgyzstan" className="gflag nturl dropdown-item" aria-label="Choose Kyrgyzstan as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/kyrgyzstan.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country kyrgyzstan" /> Kyrgyzstan</a>
							
							<a href="https://blsslovakiavisa.com/laos" title="Laos" className="dropdown-item" role="menuitem"><img src="https://blsslovakiavisa.com/assets/images/laos.svg" style={{ width: '20px', height: '14px',  }} alt="Laos" /> &nbsp;Laos</a>

							<a href="https://blsslovakiavisa.com/lebanon" title="Lebanon" className="dropdown-item" role="menuitem"><img src="https://www.blsslovakiavisa.com/assets/images/lebanon.svg" style={{ width: '20px', height: '14px',  }} alt="Lebanon" /> &nbsp;Lebanon</a>

							<a href="https://blsslovakiavisa.com/malaysia" title="Malaysia" className="dropdown-item" role="menuitem"><img src="https://blsslovakiavisa.com/assets/images/malaysia.svg" style={{ width: '20px', height: '14px',  }} alt="Malaysia" /> &nbsp;Malaysia</a>

							<a href="https://blsslovakiavisa.com/mongolia" title="Mongolia" className="dropdown-item" role="menuitem"><img src="https://blsslovakiavisa.com/assets/images/mongolia.svg" style={{ width: '20px', height: '14px',  }} alt="Mongolia" /> &nbsp;Mongolia</a>

							<a href="https://blsslovakiavisa.com/india" title="Nepal" className="dropdown-item" role="menuitem"><img src="https://www.blsslovakiavisa.com/india/assets/images/nepal.svg" style={{ width: '20px', height: '14px',  }} alt="Nepal" /> &nbsp;Nepal</a>

							<a href="https://blsslovakiavisa.com/palestine" title="palestine" className="gflag nturl dropdown-item" aria-label="Choose Palestine as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/palestine.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country palestine" /> Palestine</a>
														<a href="https://blsslovakiavisa.com/philippines" title="Philippines" className="gflag nturl dropdown-item" aria-label="Choose Philippines as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/philippines.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Philippines" /> Philippines</a>
														<a href="https://blsslovakiavisa.ru/" title="Russia" className="gflag nturl dropdown-item" aria-label="Choose Russia as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/russia.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Russia" /> Russia</a>
														<a href="https://blsslovakiavisa.com/ksa" title="Saudi Arbia" className="gflag nturl dropdown-item" aria-label="Choose Saudi Arabia as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/saudi-arabia.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Saudi Arbia" /> Saudi Arabia</a>
							
							<a href="https://blsslovakiavisa.com/south-africa" title="South Africa" className="dropdown-item" role="menuitem"><img src="https://blsslovakiavisa.com/assets/images/south-africa.svg" style={{ width: '20px', height: '14px',  }} alt="South Africa" /> &nbsp;South Africa</a>

							<a href="https://www.blsslovakiavisa.com/taiwan/" title="Taiwan" className="gflag nturl dropdown-item" aria-label="Choose Taiwan as your country"><img src="https://www.blsslovakiavisa.com/taiwan/assets/images/taiwan-flag-icon.svg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Taiwan" /> Taiwan</a>

							<a href="https://blsslovakiavisa.com/thailand" title="Thailand" className="gflag nturl dropdown-item" aria-label="Choose Thailand as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/thailand.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Thailand" /> Thailand</a>
														<a href="https://blsslovakiavisa.com/turkey/" title="Turkey" className="gflag nturl dropdown-item" aria-label="Choose Turkey as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/turkey.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Turkey" /> Turkey</a>
														<a href="https://blsslovakiavisa.com/uae/" title="UAE" className="gflag nturl dropdown-item" aria-label="Choose UAE as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/uae.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country UAE" /> UAE</a>

							<a href="https://blsslovakiavisa.com/uk-ireland" title="United Kingdom &amp; Ireland" className="dropdown-item" role="menuitem"><img src="https://blsslovakiavisa.com/assets/images/uk-flag.svg" style={{ width: '20px', height: '14px',  }} alt="United Kingdom" /> &nbsp;United Kingdom</a>
														<a href="https://blsslovakiavisa.com/uzbekistan/" title="Uzbekistan" className="gflag nturl dropdown-item" aria-label="Choose Uzbekistan as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/uzbekistan.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country Cyprus" /> Uzbekistan</a>
														<a href="https://blsslovakiavisa.com/usa" title="USA" className="gflag nturl dropdown-item" aria-label="Choose Belarus as your USA"><img src="https://blsslovakiavisa.com/global_content/country-flag/usa-flag.jpg" style={{ width: '20px', height: '14px',  }} alt="Choose your country USA" /> America</a>
														<a href="https://blsslovakiavisa.com/vietnam" title="Vietnam" className="gflag nturl dropdown-item" aria-label="Choose Vietnam as your country"><img src="https://blsslovakiavisa.com/global_content/country-flag/vietnam-flag.png" style={{ width: '20px', height: '14px',  }} alt="Choose your country Vietnam" /> Vietnam</a>
						</div>
						</div>					</ul>
					{/* ul className="social-links clearfix">
					<li style={{ color: '#fff',  }}><Phone className="flaticon-call" /><a href="tel:+000 0000000000">+00 (00) 0000-0000</a></li>
						<!--li><a href="#" target="_blank"><MessageCircle className="fab fa-twitter" /></a></li>
						<li><a href="#" target="_blank"><Users className="fab fa-facebook-f" /></a></li>
						<li><a href="#" target="_blank"><Briefcase className="fab fa-linkedin-in" /></a></li-- >
					</ul */}
				</div>
			</div>
		</div>
		<div className="header-upper">
			<div className="outer-container">

				<div className="outer-box clearfix">
					<div className="upper-left pull-left">
						<figure className="logo-box"><Link to="/index.php"><img src="/assets/images/logo-2.png" alt="BLS International" /></Link></figure>
						{/* <div className="btn-box"><Link to="/visa_checker_tool.php" className="theme-btn-two mt-3">Visa Checker Tool</Link></div> */}
					</div>
					<div className="menu-area pull-right">
						{/* Mobile Navigation Toggler */}
						<div className="mobile-nav-toggler"> <Menu className="icon-bar" /> </div>
						<nav className="main-menu navbar-expand-md navbar-light" style={{ marginRight: '100px',  }}>
							<div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
								<ul className="navigation clearfix">
								{/* li><Link to="/index.php"></Link></li */}
								<li><Link to="/index.php">Home</Link></li>
								{/* li><Link to="/about_us.php">About Us</Link></li */}
								<li className="dropdown"><Link to="/visa_types.php">Visa types&nbsp;<img src="/assets/images/down-chevron.png" alt="BLS International" /></Link>
										<div className="megamenu">
											<div className="row clearfix">
												<div className="col-lg-4 column">
													<ul>
														<li>
															<h4>Short Stay Visa</h4>
														</li>
														<li><Link to="/schengen_tourism.php">Tourism</Link></li>
														<li><Link to="/schengen_business.php">Business</Link></li>
														<li><Link to="/schengen_family_friends.php">Visit Family or Friends Visa</Link></li>
														{/* li><Link to="/schengen_conference.php">Conference</Link></li */}
													</ul>
												</div>
												<div className="col-lg-4 column">
													<ul>
														<li>
															<h4>Short Stay Visa</h4>
														</li>
														<li><Link to="/schengen_st_re_other.php">Study, Research or other types of Internship</Link></li>
														<li><Link to="/schengen_cul_spo_rel.php">Cultural, Sports or Religious events and for film crews</Link></li>
														<li><Link to="/schengen_medical.php">Medical Treatment</Link></li>
													</ul>
												</div>
												<div className="col-lg-4 column">
													<ul>
														<li>
															<h4>National Visa</h4>
														</li>
														<li><Link to="/national_employment.php">Employment</Link></li>
														{/* li><Link to="/national_highly_qualified_job_seeker.php">Highly Qualified Job Seeker</Link></li>
														<li><Link to="/national_relocated_employee.php">Relocated Employee</Link></li>
														<li><Link to="/national_family_member_of_the_relocated_employee.php">Family Member of the relocated employee</Link></li */}
													</ul>
												</div>
												
											</div>
										</div>
									</li>
									<li className="dropdown"><a href="#">Schedule an appointment&nbsp;<img src="/assets/images/down-chevron.png" alt="Slovakia USA" /></a>
										<div className="megamenu">
											<div className="row clearfix">
												<div className="col-lg-4 column">
													<ul>
														<li>
															<h4>Book Appointment</h4>
														</li>
														<li><a href="https://appointment.blsslovakiavisa.com/app_india/login" target="_blank">Book an appointment - India</a></li>
														<li><a href="https://software.blsslovakiavisa.com/appointments/login" target="_blank">Book an appointment - Nepal</a></li>
													</ul>
												</div>
												<div className="col-lg-4 column">
													<ul>
														<li>
															<h4>Book Appointment</h4>
														</li>
													<li><a href="https://appointment.blsslovakiavisa.com/app_india/login" target="_blank">Cancel appointment - India</a></li>
													<li><a href="https://software.blsslovakiavisa.com/appointments/login" target="_blank">Cancel appointment - Nepal</a></li>
													</ul>
												</div>
												<div className="col-lg-4 column">
													<ul>
														<li>
															<h4>Book Appointment</h4>
														</li>
													<li><a href="https://appointment.blsslovakiavisa.com/app_india/login" target="_blank">Reprint appointment letter - India</a></li>
													<li><a href="https://software.blsslovakiavisa.com/appointments/login" target="_blank">Reprint appointment letter - Nepal</a></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li className="dropdown"><a href="#">Information&nbsp;<img src="/assets/images/down-chevron.png" alt="BLS International" /></a>
										<div className="megamenu">
											<div className="row clearfix">
												<div className="col-lg-4 column">
													<ul>
														<li><h4>Information</h4></li>
														{/* li><Link to="/contact_us.php">Contact Us</Link></li */}
														<li><Link to="/additional_services.php">Value added services</Link></li>
														<li><Link to="/public_holiday.php">Public holidays / closures</Link></li>
														<li><Link to="/track_application.php">Track application</Link></li>
														{/* li><Link to="/faqs.php">FAQ's</Link></li */}
														{/* li><Link to="/feedback.php">Feedback</Link></li */}
														
													</ul>
												</div>
												<div className="col-lg-4 column">
													<ul>
														<li><h4>Information</h4></li>
													    <li><Link to="/useful_links.php">Useful links</Link></li>
													    <li><Link to="/security_rules.php">Security rules</Link></li>
														<li><Link to="/news_updates.php">News and updates</Link></li>
														
														
													</ul>
												</div>
												<div className="col-lg-4 column">
													<ul>
														<li><h4>Information</h4></li>
														<li><Link to="/faqs.php">FAQs</Link></li>
														{/* li><Link to="/customer_experience.php">Customer Experience</Link></li>
														<li><a href="privacy-policy.php">Privacy Policy</a></li */}
														{/* li><Link to="/track_application.php">Track Application</Link></li */}
														{/* li><Link to="/contact_us.php">Information</Link></li */}
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li><a href="mea-apostille-service.php">MEA Apostille Service</a></li>
									<li><Link to="/contact_us.php">Contact us</Link></li>
									{/*  <li><a href="https://www.tataaig.com/partner?utm_source=RB&utm_term=RB_OS" target="_blank">Travel Insurance</a></li>  */}
									{/* li><a href="https://rmportal.careinsurance.com/intermediary/blsinternational/index.php?token=VldEOVp2WS85Y1RyRUtrVzJjMVV1SHhmMnFneXB5ejlKSUN2K0Rtc3Y1Zz06Ojp5x3HZvzH9xIptxDtZ8Lc=" target="_blank">Travel Insurance</a></li */}
                  					{/* li><a href="https://www.tataaig.com/partner?utm_source=BLSInternationalService&utm_term=BLSInternationalTravel" target="_blank">Travel Insurance</a></li */}
									<li className="dropdown"><a href="#">Insurance&nbsp; <img src="/assets/images/down-chevron.png" alt="BLS International" /></a>
										<div className="megamenu">
											<div className="row clearfix">
												<div className="col-lg-12 column">
													<p className="mb-1"><b>Travel Insurance for Schengen Visa</b></p>
													<p className="mb-1">
														Travel Insurance certificate must be submitted at the visa
														application center as it is a mandatory requirement for applicants
														travelling to Slovakia. You may get your travel insurance from any
														authorized insurance company or <b>you may <a href="https://www.tataaig.com/partner?utm_source=RB&amp;utm_term=RB_OS" target="_blank" style={{ padding: '0px', display: 'inline', color: 'rgb(186, 150, 46)',  }}><b> Click
																Here</b></a> if you wish to avail this optional service now.</b>
													</p>
													<p style={{ fontSize: '11px',  }}><b style={{ fontWeight: '600',  }}><i> Disclaimer:-</i></b> <i> By clicking this link, you will be redirected to the third party website, 
														your personal data will be handled in accordance with their privacy policy. Please note that BLS does not collect or process any 
														information you provide on their site and does not hold any liability with respect to any dispute. </i>
													</p>
												</div>
											</div>
										</div>
										</li>


									{/* li className="dropdown"><a href="#">Information&nbsp;<img src="/assets/images/down-chevron.png" /></a>
										<div className="megamenu">
											<div className="row clearfix">
												<div className="col-lg-4 column">
													<ul>
														<li><a href="#">
																<h4>Information</h4>
															</a>
														</li>
														<li><Link to="/additional_services.php">Value Added Services</Link></li>
														<li><Link to="/public_holiday.php">Public Holidays / Closures</Link></li>
														<li><Link to="/useful_links.php">Useful Links</Link></li>
													</ul>
												</div>
												<div className="col-lg-4 column">
													<ul>
														<li><a href="#">
															<h4>Information</h4>
														</a>
													</li>
													<li><Link to="/security_rules.php">Security rules</Link></li>
														<li><Link to="/news_updates.php">News and Updates</Link></li>
														<li><a href="privacy-policy.php">Privacy Policy</a></li>
														
													</ul>
												</div>
												<div className="col-lg-4 column">
													<ul>
														<li><a href="#">
																<h4>Information</h4>
															</a>
														</li>
														<li><Link to="/track_application.php">Track Application</Link></li>
														<li><Link to="/faqs.php">FAQ's</Link></li>
														<li><Link to="/contact_us.php">Contact Us</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</li */}
									{/* li><Link to="/news_updates.php">News and Updates</Link></li */}
								</ul>
							</div>
						</nav>
						{/* div className="menu-right-content clearfix pull-left">
							<div className="search-box-outer">
								<div className="search-btn">
									<button type="button" className="search-toggler"><Search className="flaticon-search-1" /></button>
								</div>
							</div>
							<!--div className="support-box"> <Phone className="fas fa-phone-volume" />
								<p>Any Questions? Call us</p>
								<h3><a href="tel:+8801682648101">609-900-2509</a></h3>
							</div-- >
						</div */}
					</div>
				</div>
			</div>
		</div>
		{/* sticky Header */}
		{/* div className="sticky-header">
			<div className="auto-container">
				<div className="outer-box clearfix">
					<div className="logo-box pull-left">
						<figure className="logo"><Link to="/index.php"><img src="/assets/images/small-logo.png" alt="BLS International" /></Link></figure>
					</div>
					<div className="menu-area pull-right">
						<nav className="main-menu clearfix">
							<!--Keep This Empty / Menu will come through Javascript-- >
						</nav>
					</div>
				</div>
			</div>
		</div */}
	</header><div className="mobile-menu">
		<div className="menu-backdrop"></div>
		<div className="close-btn"><X className="fas fa-times" /></div>
		<nav className="menu-box">
			<div className="nav-logo"><Link to="/index.php"><img src="/assets/images/logo.png" alt="BLS International" title="" /></Link></div>
			<div className="menu-outer">
				{/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
			</div>
			{/* div className="contact-info">
				<h4>Contact Info</h4>
				<ul>
					<li><a href="tel:+8801682648101">609-900-2509</a></li>

				</ul>
			</div */}
			<div className="social-links">
				<ul className="clearfix">
					{/* li><a href="#" target="_blank"><MessageCircle className="fab fa-twitter" /></a></li>
					<li><a href="#" target="_blank"><Users className="fab fa-facebook-f" /></a></li>
					<li><a href="#" target="_blank"><Briefcase className="fab fa-linkedin-in" /></a></li */}
					{/* <li><a href="https://www.youtube.com/channel/UCxCxCmLwyLm8fAqcm_9sTvQ/featured" target="_blank"><Video className="fab fa-google-plus-g" /></a></li> */}
				</ul>
			</div>
		</nav>
	</div>
    </>
  );
};

export default Header;
