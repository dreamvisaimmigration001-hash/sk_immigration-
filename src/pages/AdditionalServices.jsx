import React from 'react';
import { Link } from 'react-router-dom';
import { Send, BookOpen, Files, ArrowUp } from 'lucide-react';

const AdditionalServices = () => {
  return (
    <>
<section className="page-title" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)',  }}>
			<div className="auto-container">
				<div className="content-box">
					<div className="title-box">
						<h1>Value added services</h1>
						<div className="dotted-box">
							<span className="dotted"></span>
							<span className="dotted"></span>
							<span className="dotted"></span>
						</div>
					</div>
					<ul className="bread-crumb clearfix">
						<li><Link to="/index.php">Home</Link></li>
						<li>Information</li>
						<li>Value added services</li>
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
                <h2>Additional services</h2>
                <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
              </div>
              <div className="text">
				<p className="mb-2">BLS International constantly strives to offer a range of high-end services to enhance customer satisfaction. As part of our constant and ongoing endeavor to add value to your experience we offer optional services designed to make the process easy and effortless. Clients who wish to avail of the optional services will have to pay an extra fee in addition to the convenience fee.</p>
				<p className="mb-2">Additional services are optional, voluntary and in no way amplify the right to obtain a visa, a fast-track appointment, an overbooking, or faster processing of your application by the Embassy.</p>
				<p className="mb-2" style={{ fontWeight: 'bold',  }}>Kindly Note: - The Value added services (VAS services) are optional and are provided by BLS</p>
				<p className="mb-2">Using the premium lounge &amp; other VAS service does not mean that your visa will be processed faster. Issue of visa / passport is purely at the discretion of the Embassy of Slovakia.</p>
              {/* BLS International constantly strives to offer a range of high-end services to enhance customer satisfaction. As part of our constant and ongoing endeavor to add value to your experience we offer optional services designed to make the process easy and effortless. Clients who wish to avail of the optional services will have to pay an extra fee in addition to the convenience fee. */}
              </div>
            </div>
            <div className="two-column">
              <div className="row align-items-center clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
            <div className="content-style-two">
			<h3>Value added services{/* VAS fee */}</h3>
              <div className="content-box">
              <table border="0" cellspacing="0" cellpadding="0" width="100%" className="feetable">
    <tbody>
        <tr>
            <th><strong>Service</strong></th>
            <th><strong>Details</strong></th>
            <th><strong>Price (In INR)</strong></th>
        </tr>
		<tr>
            <td style={{ width: '20%',  }}>Courier</td>
            <td style={{ width: '50%',  }}>Passport delivery at your home / office address to avoid the hassle of travelling to the application centre for a personal collection of the processed documents.</td>
            <td style={{ width: '30%',  }}>800{/* 690 */} INR per passport</td>
        </tr>
		<tr>
            <td>SMS</td>
            <td>Convenience of automated message to the applicant's mobile phone at various stages of the visa application process. </td>
            <td>300{/* 230 */} INR  per passport</td>
        </tr>
		<tr>
            <td>Call back service(STS)</td>
            <td>Convenience of automated voice call to the applicant's mobile phone at various stages of the visa application process.</td>
            <td>450{/* 402 */} INR</td>
        </tr>
		<tr>
            <td>Premium Lounge</td>
            <td>Avail the delightful experience of enjoying our premium lounge services at our application centre.</td>
            <td>4800{/* 3450 */} INR per passport</td>
        </tr>
		{/* tr>
            <td>Internet Kiosk</td>
            <td>For your convenience, we provide facilities of internet at our centre to help with browsing, application/ document download/ sending emails etc.</td>
            <td>165 INR  per 20 minutes</td>
        </tr */}
		<tr>
            <td>Printing</td>
            <td>Taking Prints is made much more convenient with printing services provided at Visa application Centre for printing your hotel reservations/ tickets/ itinerary etc.</td>
            <td>25{/* 19 */} INR  per page</td>
        </tr>
		<tr>
            <td>Form Filling</td>
            <td>Staff will help applicants in regards to filling up application forms</td>
            <td>2000{/* 138 */} INR  per application</td>
        </tr>
		<tr>
            <td>Flexi hours – Passport collection</td>
            <td>Applicants can collect passport out of allotted collection time – on Weekdays 09:00 AM to 04:00 PM.</td>
            <td>400{/* 345 */} INR per passport</td>
        </tr>
		<tr>
            <td>Door Step Services</td>
            <td>Applicants, who are unable to visit VAC for their application submission, can avail this service. For more information, visit our website.</td>
            <td>11000{/* 11000/ */} INR + logistics</td>
        </tr>
		<tr>
            <td>Prime Time Appointment</td>
            <td>Applicants can book an appointment for the submission outside post regular submission hours.</td>
            <td>4300{/* 3450 */} per application</td>
        </tr>
		<tr>
            <td>Photo booth</td>
            <td>If you don’t carry your photograph or don’t have the correct specification of the photographs, you can now avail the facility at our Visa application without the inconvenience of having to look for a service outside.</td>
            <td>300{/* 216 */} INR  for 3 photographs</td>
        </tr>
		<tr>
            <td>Travel Insurance</td>
            <td colspan="2">
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
            </td>
        </tr>
		{/*  <tr>
            <td><a href="https://www.tataaig.com/partner?utm_source=RB&utm_term=RB_OS" target="_blank">Travel Insurance</a></td>
            <td>Applicants may get the travel insurance from the authorized Insurance companies.</td>
            <td>Depending on the plan selected by an applicant.</td>
        </tr>  */}
		<tr>
            <td>Courier Assurance</td>
            <td>Assured Passport delivery along at your home / office address to avoid the hassle of travelling to the application centre for a personal collection of the processed documents.</td>
            <td>960{/* 835 */} INR</td>
        </tr>
		<tr>
            <td>Hold at Location </td>
            <td>Applicant has an option to collect their passport from BLS center in New Delhi.{/* Applicant has an option to select any VAC for his /her passport collection post selecting mode of delivery at VAC. */}</td>
            <td>800{/* 690 */} INR per passport.</td>
        </tr>
        <tr>
            <td>Photocopy</td>
            <td>Photo copier facility</td>
            <td>5{/* 2 */} INR per page</td>
        </tr>
        <tr>
            <td>Doctor on Call</td>
            <td>&nbsp;</td>
            <td>410 INR</td>
        </tr>
        <tr>
            <td>Forex Card</td>
            <td>&nbsp;</td>
            <td>Free of Cost </td>
        </tr>
        <tr>
            <td>Sim Card- International Card(10 GB)</td>
            <td>&nbsp;</td>
            <td>1815 INR</td>
        </tr>
        <tr>
            <td>Sim Card- International Card(6GB)</td>
            <td>&nbsp;</td>
            <td>1575 INR</td>
        </tr>
        <tr>
            <td>Nepal Courier </td>
            <td>&nbsp;</td>
            <td>5000{/* 1500 */} INR</td>
        </tr>
        <tr>
            <td>Email Notification</td>
            <td>&nbsp;</td>
            <td>300 INR</td>
        </tr>
    </tbody>
</table>
<p className="mb-2">Note: All above mentioned services are purely optional and have no role in processing of your visa application. {/* Please be informed that two way courier charges of 1380 INR would be applicable if the submission is done in Mumbai & Bengaluru visa center. */}</p>            </div>
            <div className="two-column">
              <div className="row align-items-center clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                  {/* <div className="content-box">
                    <p className="mb-2">Please Note: </p>
                    <ol style={{ marginLeft: '35px',  }}>
                      <li style={{ listStyle: 'decimal
 !important',  }}>The above mentioned services are optional in nature.</li>
                      <li style={{ listStyle: 'decimal
 !important',  }}>These charges are non-refundable and are subject to change without prior notice</li>
                      <li style={{ listStyle: 'decimal
 !important',  }}>Availing these services doesn’t have any impact on the decision of your visa application or processing time.</li>
                    </ol>
                  </div>
 */}
                </div>
              </div>
            </div>
          </div>
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

export default AdditionalServices;
