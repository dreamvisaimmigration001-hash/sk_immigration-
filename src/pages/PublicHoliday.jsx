import React from 'react';
import { Link } from 'react-router-dom';
import { Send, BookOpen, Files, ArrowUp } from 'lucide-react';

const PublicHoliday = () => {
  return (
    <>
<section className="page-title" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)',  }}>
			<div className="auto-container">
				<div className="content-box">
					<div className="title-box">
						<h1>Public holidays / closures</h1>
						<div className="dotted-box">
							<span className="dotted"></span>
							<span className="dotted"></span>
							<span className="dotted"></span>
						</div>
					</div>
					<ul className="bread-crumb clearfix">
						<li><Link to="/index.php">Home</Link></li>
						<li>Information</li>
						<li>Public holidays / closures</li>
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
                <h2>Public Holidays / Closures-2026</h2>
                <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
              </div>
            </div>
			<h4 className="mb-2">Holiday List 2026</h4>
			<p className="mb-2">The BLS Slovakia Visa application centers will close for business on the following public holidays in 2026</p>
			<div className="content-style-two">
			<table border="0" cellspacing="0" cellpadding="0" width="100%" className="feetable">
        <thead>
          <tr>
            <th>DATE</th>
            <th>DAY</th>
            <th>HOLIDAY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st January</td>
            <td>Friday</td>
            <td>Day of the Establishment of the Slovak Republic</td>
          </tr>
          <tr>
            <td>6th January</td>
            <td>Tuesday</td>
            <td>Epiphany (Three kings)</td>
          </tr>
          <tr>
            <td>26th January</td>
            <td>Monday</td>
            <td>Republic Day</td>
          </tr>
          <tr>
            <td>4th March</td>
            <td>Wednesday</td>
            <td>Holi</td>
          </tr>
          <tr>
            <td>3rd April</td>
            <td>Friday</td>
            <td>Good Friday</td>
          </tr>
          <tr>
            <td>6th April</td>
            <td>Monday</td>
            <td>Easter Monday</td>
          </tr>
          <tr>
            <td>1st May</td>
            <td>Friday</td>
            <td>International Worker’s Day</td>
          </tr>
          {/*  <tr>
            <td>8th May</td>
            <td>Friday</td>
            <td>Day of Victory over Fascism</td>
          </tr>  */}
          <tr>
            <td>5th July</td>
            <td>Sunday</td>
            <td>St. Cyril and Methodius Day</td>
          </tr>
          <tr>
            <td>29th August</td>
            <td>Saturday</td>
            <td>Slovak National Uprising Anniversary</td>
          </tr>
          {/* tr>
            <td>1st September</td>
            <td>Tuesday</td>
            <td>Day of the Constitution of the Slovak Republic</td>
          </tr>
          <tr>
            <td>15th September</td>
            <td>Tuesday</td>
            <td>Day of Our Lady of the Seven Sorrows</td>
          </tr */}
          <tr>
            <td>2nd October</td>
            <td>Friday</td>
            <td>Gandhi Jayanti</td>
          </tr>
          <tr>
            <td>20th October</td>
            <td>Tuesday</td>
            <td>Dusshera</td>
          </tr>
          <tr>
            <td>1st November</td>
            <td>Sunday</td>
            <td>All Saints’ Day</td>
          </tr>
          <tr>
            <td>24th December</td>
            <td>Thursday</td>
            <td>Christmas Eve</td>
          </tr>
          <tr>
            <td>25th December</td>
            <td>Friday</td>
            <td>Christmas Day</td>
          </tr>
          <tr>
            <td>26th December</td>
            <td>Saturday</td>
            <td>St. Stephen's Day</td>
          </tr>
        </tbody>
      </table>
              {/* table border="0" cellspacing="0" cellpadding="0" width="100%" className="feetable">
                <tbody>
                  <tr>
                    <th><strong>DATE</strong></th>
                    <th><strong>DAY</strong></th>
                    <th><strong>HOLIDAY</strong></th>
                  </tr>
                  <!--tr>
                    <td><p>01 January</p></td>
                    <td><p>Sunday</p></td>
                    <td><p>Slovak Republic Day</p></td>
                  </tr>
                  <tr>
                    <td><p>06 January</p></td>
                    <td><p>Friday</p></td>
                    <td><p>Epiphany</p></td>
                  </tr>
                  <tr>
                    <td><p>07 April</p></td>
                    <td><p>Friday</p></td>
                    <td><p>Good Friday</p></td>
                  </tr>
                  <tr>
                    <td><p>10 April</p></td>
                    <td><p>Monday</p></td>
                    <td><p>Easter Monday</p></td>
                  </tr>
                  <tr>
                    <td><p>1 May</p></td>
                    <td><p>Monday</p></td>
                    <td><p>International Worker’s Day</p></td>
                  </tr>
                  <tr>
                    <td><p>8 May</p></td>
                    <td><p>Monday</p></td>
                    <td><p>Day of Victory over Fascism</p></td>
                  </tr>
                  <tr>
                    <td><p>5 July</p></td>
                    <td><p>Tuesday</p></td>
                    <td><p>St. Cyril and St. Methodius Day</p></td>
                  </tr>
                  <tr>
                    <td><p>29 August</p></td>
                    <td><p>Tuesday</p></td>
                    <td><p>Slovak National uprising Day</p></td>
                  </tr>
                  <tr>
                    <td><p>1 September</p></td>
                    <td><p>Friday</p></td>
                    <td><p>Constitution Memorial Day</p></td>
                  </tr>
                  <tr>
                    <td><p>15 September</p></td>
                    <td><p>Friday</p></td>
                    <td><p>Day of the Virgin Mary of the Seven Sorrows</p></td>
                  </tr>
                  <tr>
                    <td><p>1 November</p></td>
                    <td><p>Wednesday</p></td>
                    <td><p>All Saints Day</p></td>
                  </tr>
                  <tr>
                    <td><p>17 November</p></td>
                    <td><p>Friday</p></td>
                    <td><p>Day of the Fight for Freedom and Democracy</p></td>
                  </tr>
                  <tr>
                    <td><p>24 December</p></td>
                    <td><p>Sunday</p></td>
                    <td><p>Christmas Eve</p></td>
                  </tr>
                  <tr>
                    <td><p>25-Dec</p></td>
                    <td><p>Monday</p></td>
                    <td><p>Christmas Day</p></td>
                  </tr>
                  <tr>
                    <td><p>26-Dec</p></td>
                    <td><p>Tuesday</p></td>
                    <td><p>St. Stephen's Day</p></td>
                  </tr>
                </tbody>
              </table */}
			  {/* p className="mb-2">Please noted, the Visa Application Centre is closed on Saturdays and Sundays.</p */}
			  {/* p className="mb-2">Please noted, the Visa Application Centre is closed on Saturdays and Sundays.</p */}
              {/* strong>Normal operational hours:</strong></br>
              <p>Office Timings:  9 AM to 5:00 PM (Monday to Friday)</p>
              <p>Application Submission Timings:  10.00 AM to 02:00 PM (Monday to Friday)</p>
              <p>Passport collection Timings:  03:00 PM to 04:00 PM (Monday to Friday)</p>
              <!--p>Submission Timings: 10.00 AM &ndash; 04:00 PM</p>
              <p>Passport collection Timings: 10.00 AM &ndash; 04:00 PM</p>
              <p>Operational days: Monday &ndash; Friday (other than public holidays)</p */}
              <p>&nbsp;</p>
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

export default PublicHoliday;
