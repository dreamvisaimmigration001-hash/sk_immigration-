import React from 'react';
import { Link } from 'react-router-dom';
import { Send, BookOpen, Files, ArrowUp, ChevronDown } from 'lucide-react';

const MeaApostilleService = () => {
  return (
    <>
<section className="page-title" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)',  }}>
			<div className="auto-container">
				<div className="content-box">
					<div className="title-box">
						<h1>MEA Apostille Service</h1>
						<div className="dotted-box">
							<span className="dotted"></span>
							<span className="dotted"></span>
							<span className="dotted"></span>
						</div>
					</div>
					<ul className="bread-crumb clearfix">
						<li><Link to="/index.php">Home</Link></li>
						<li>MEA Apostille Service</li>
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
                <h2>MEA Apostille Service</h2>
                <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 content-column">
          <div id="content_block_1">
            <div className="content-box">
              <div className="bold-text">
                <p className="mb-2">Dear Applicants ,</p>
                <p className="mb-2">Please be informed that you can submit your documents for MEA Apostille issued by Indian Authorities at our Slovakia Visa Application Center (Delhi, Mumbai &amp; Bengaluru) and make the benefit of getting it back within 48 hours. No documents for MEA Apostille will be accepted on the date of appointment for the submission of your documents, hence you are requested to submit before the same.</p>
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

export default MeaApostilleService;
