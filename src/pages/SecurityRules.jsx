import React from 'react';
import { Link } from 'react-router-dom';
import { Send, BookOpen, Files, ArrowUp } from 'lucide-react';

const SecurityRules = () => {
  return (
    <>
<section className="page-title" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)',  }}>
			<div className="auto-container">
				<div className="content-box">
					<div className="title-box">
						<h1>Security rules</h1>
						<div className="dotted-box">
							<span className="dotted"></span>
							<span className="dotted"></span>
							<span className="dotted"></span>
						</div>
					</div>
					<ul className="bread-crumb clearfix">
						<li><Link to="/index.php">Home</Link></li>
						<li>Information</li>
						<li>Security rules</li>
					</ul>
				</div>
			</div>
		</section><div className="sidebar-page-container">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12 content-side">
          <div className="coaching-details-content service-details-content">
            <div className="content-style-one">
              <div className="group-title">
                <h2>Security rules</h2>
                <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
              </div>
              {/* div className="text">
                <h3>Security Regulations do not permit you the following:</h3>
              </div */}
            </div>
			<p className="mb-2" style={{ fontSize: '15px',  }}>Security Notice for Applicants Visiting BLS Slovakia Visa Application Center in India.</p>
			<p className="mb-2" style={{ fontSize: '15px',  }}>Please note that access to the Visa Application Centre is restricted to visa applicants only. The only exceptions to this policy are:</p>
            <div className="two-column">
              <div className="row align-items-center clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <ul className="list clearfix" style={{ fontSize: '14px',  }}>
                      <li>Children less than 18 years of age need to be accompanied by a parent or guardian. This cannot be a member of the Visa Application Centre staff.</li>
                      <li><p className="mb-2">Elderly, medically infirm or disabled applicants who require assistance in order to submit their applications. Applicants who fall into these categories should advise the security staff on arrival at the Visa Application Centre.</p>
					  <p className="mb-2">Mobile phones are Not permitted in the Visa Application Centre, but they must be switched to silent or vibrate mode. They should be switched on before entering the Visa Application Centre and provided to the security team.</p>
					  <p className="mb-2">Under no circumstances is photography, filming or audio recording permitted. No bags can be taken into the Visa Application Centre and must be stored elsewhere.</p>
					  <p className="mb-2">For security reasons the following items will not be permitted inside the Visa Application Centre.</p></li>
                      <li>All battery operated or electronic items such cameras, tablets, audio/video cassettes, compact discs, MP3s, floppies, laptops, or portable music players, hard disk drive (HDDs), spy devices, audio recorders, or other devices which can hinder the center’s functioning.</li>
                      <li>Sealed envelopes or packages.</li>
                      <li>Any inflammable item such as matchboxes/ lighters/ electric cigarettes /fuel.</li>
                      <li>Any sharp objects such as scissors, pen knives or nail filers.</li>
					  <li>Weapons, weapon - like objects or explosive material of any kind.</li>
					  <p className="mb-2">Other items may be prohibited based on security staff discretion.</p>
					  <p className="mb-2">Please Note: The Visa Application Centre is unable to store prohibited items. Applicants should make other arrangements to store these belongings before they enter the Visa Application Centre.</p>
					  <p className="mb-2">All Visa Application centres are under 24 hours CCTV surveillance. The images are constantly recorded for the purposes of crime prevention, detection and public safety.</p>
					  <p className="mb-2">In the interest of safety and security, we reserve the right to conduct random bag searches of applicants and visitors.</p>
					  <p className="mb-2">Our staff have the right to work without fear of abuse or intimidation. Threatening or abusive words or behavior towards our staff will not be tolerated under any circumstances.</p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>          </div>
        </div>
      </div>
    </div>
  </div><button className="scroll-top scroll-to-target open" data-target="html" aria-label="Scroll to top">
  <ArrowUp className="fas fa-long-arrow-alt-up" aria-hidden="true" />
</button>
    </>
  );
};

export default SecurityRules;
