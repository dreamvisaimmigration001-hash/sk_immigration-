import React from 'react';
import { Link } from 'react-router-dom';
import { Send, BookOpen, Files, ArrowUp } from 'lucide-react';

const UsefulLinks = () => {
  return (
    <>
<section className="page-title" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)',  }}>
			<div className="auto-container">
				<div className="content-box">
					<div className="title-box">
						<h1>Useful and Important Links</h1>
						<div className="dotted-box">
							<span className="dotted"></span>
							<span className="dotted"></span>
							<span className="dotted"></span>
						</div>
					</div>
					<ul className="bread-crumb clearfix">
						<li><Link to="/index.php">Home</Link></li>
						<li>Information</li>
						<li>Useful and important links</li>
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
                <h2>Useful and important links</h2>
                <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
              </div>
            </div>
			<p className="mb-2">Embassy of Slovakia/ Consulate General of Slovakia locations and contact details</p>
            <div className="content-style-two">
              <div className="inner-box">
                <div className="row clearfix">
                  <table border="0" cellspacing="0" cellpadding="0" width="100%" className="feetable">
                    <tbody><tr>
                      <th><strong>Location</strong></th>
					  <th><strong>Office to be contacted for consular work</strong></th>
                    </tr>
					<tr>
                      <td>
                        <p className="mb-2">Common Information</p>
                      </td>
                      <td>
                        <p className="mb-2"><u><a href="/assets/pdf/application_form/Comman_Information_Sheet.pdf" target="_blank">click here</a></u></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-2">Embassy of Slovakia</p>
                      </td>
                      <td>
                        <p className="mb-2"><u><a href="https://www.mzv.sk/dilli-en">https://www.mzv.sk/dilli-en</a></u></p>
                      </td>
                    </tr>
										{/* tr>
                      <td>
                        <p>The Ministry of Foreign and European Affairs</p>
                      </td>
                      <td>
                        <p><u><a href="https://www.mzv.sk/en/web/en">https://www.mzv.sk/en/web/en</a></u></p>
						<p>and</p>
						<p><u><a href="https://www.mzv.sk/sk/web/sk">https://www.mzv.sk/sk/web/sk</a></u></p>
                      </td>
                    </tr>
					<tr>
                      <td>
                        <p>Government of the Slovak Republic</p>
                      </td>
                      <td>
                        <p><u><a href="https://www.vlada.gov.sk/">https://www.vlada.gov.sk/</a></u></p>
                      </td>
                    </tr */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><button className="scroll-top scroll-to-target open" data-target="html" aria-label="Scroll to top">
  <ArrowUp className="fas fa-long-arrow-alt-up" aria-hidden="true" />
</button>
    </>
  );
};

export default UsefulLinks;
