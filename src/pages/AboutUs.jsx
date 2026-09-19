import React from 'react';
import { Link } from 'react-router-dom';
import { Send, BookOpen, Files, ArrowUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
<section className="page-title" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)',  }}>
			<div className="auto-container">
				<div className="content-box">
					<div className="title-box">
						<h1>About us</h1>
						<div className="dotted-box">
							<span className="dotted"></span>
							<span className="dotted"></span>
							<span className="dotted"></span>
						</div>
					</div>
					<ul className="bread-crumb clearfix">
						<li><Link to="/index.php">Home</Link></li>
						<li>About</li>
					</ul>
				</div>
			</div>
		</section><section className="about-section mt-0 pb-5">
    <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/pattern-1.png)',  }}></div>
    <div className="auto-container">
      <div className="row align-items-center clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12 content-column">
          <div id="content_block_1">
            <div className="content-box">
              <div className="sec-title">
                <h2>Welcome to the Slovakia Visa Application - India &amp; Nepal</h2>
                <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 content-column">
          <div id="content_block_1">
            <div className="content-box">
              <div className="bold-text">
                {/*  <p>BLS International Services Ltd. (known as Visa Processing Services), under the flagship of BLS Group, started operating in the year 2001 with their head office situated in New Delhi, India. Since its incorporation BLS International Services has been associated as a trusted partner with many Esteemed Embassies and High Commissions for their visa / passport processing, visa verification, commercial verification and other services.</p>  */}
                <p><b>BLS International Services Ltd.</b> is a globally trusted, tech-enabled, AI-powered service partner for governments and citizens, 
					with a legacy spanning two decades. Since its inception in <b>2005</b>, the company has emerged as one of the top two players in visa, 
					passport, consular, and citizen services. </p>
					<p>Collaborating with over 46 client governments—including Diplomatic Missions, Embassies, and Consulates—BLS International ensures the highest 
					levels of data security and operational efficiency through cutting-edge technology and robust processes. Its operations span 
					over 70 countries, with a global footprint of more than <b>50,000 centres</b>, supported by a workforce of <b>60,000 employees</b> 
					and associates. This expansive network is further strengthened by <b>9 global training centers</b> and <b>8 global contact centers</b>, enhancing the 
					company’s capability to provide world-class consular, biometric, and citizen services.</p>
					<p>To date, BLS International and its subsidiaries have successfully processed over <b>360 million applications</b>, reflecting their unmatched 
					expertise and reliability. Its continued focus on innovation, transparency, and service excellence positions it as a strategic partner to 
					governments worldwide.</p>
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

export default AboutUs;
