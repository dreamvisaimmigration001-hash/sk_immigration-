import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ArrowUp } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
        {submitted ? (
          <div className="alert alert-success">Thank you for your message. We will get back to you shortly.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name</label>
              <input type="text" id="name" className="form-control" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
              <input type="email" id="email" className="form-control" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="phone" style={{ fontWeight: 'bold' }}>Phone</label>
              <input type="text" id="phone" className="form-control" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="message" style={{ fontWeight: 'bold' }}>Message</label>
              <textarea id="message" className="form-control" rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
            </div>
            <button type="submit" className="theme-btn style-four">Submit</button>
          </form>
        )}
      </div> */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/page-title.jpg)', }}>
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box">
              <h1>Contact us</h1>
              <div className="dotted-box">
                <span className="dotted"></span>
                <span className="dotted"></span>
                <span className="dotted"></span>
              </div>
            </div>
            <ul className="bread-crumb clearfix">
              <li><Link to="/index.php">Home</Link></li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </section><section className="service-style-two service-page-1 bg-color-3">
        <div className="auto-container">
          <div className="sec-title centred mb-2">
            <h2>Contact us</h2>
            <div className="dotted-box">
              <span className="dotted"></span>
              <span className="dotted"></span>
              <span className="dotted"></span>
            </div>
          </div>
          {/* p className="mb-2" align="center">For any queries, kindly contact us on our call center. You can also contact us by e-mail at</p */}
          <div className=" centred mb-1">
            {/* <p>Delhi: 0120 – 6917510, Mumbai: 0120 – 6917520 You can also contact us by e-mail at Delhi: info.del@blshelpline.com, Mumbai: info.bom@blshelpline.com. E-mail queries are responded Monday to Friday, within 2 working days.</p> */}
          </div>
          <div className="row clearfix">

            <div className="col-lg-6 col-md-6 col-sm-12 service-block">
              <div className="service-block-two">
                <div className="inner-box">
                  <div className="lower-content">
                    <div className="box">
                      <h3>Slovakia Visa Application center – Delhi</h3>
                      <p className="text-left"><b>Address: </b>Upper Ground Floor, <br />
                        Dr. Gopaldas Bhawan 28, <br />
                        Barakhamba Road, New Delhi – 110001</p>
                      <p className="text-left"><strong>Contact Number:&nbsp;</strong>0120-6917550</p>
                      <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiaind@blshelpline.com">info.slovakiaind@blshelpline.com</a> <a href="mailto:feedback.slovakiaind@blshelpline.com">feedback.slovakiaind@blshelpline.com</a></p>
                      <p className="text-left"><strong>Submission Time Normal -</strong> 09:00 to 14:00 hrs (Monday to Friday, Except Consular/National Holidays)</p>
                      <p className="text-left"><strong>Prime Time –</strong> 14:00 to 16:00 hrs (Monday to Friday)</p>
                      <p className="text-left"><strong>Passport Collection Time :</strong> 16:00 to 17:00 hrs  (Monday to Friday)</p><br />
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d875.4312744649765!2d77.21039014362196!3d28.638000082438584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd443a53a3c1%3A0x1378086bb617931f!2sBLS%20International%20Spain%20Visa%20Application%20Center!5e0!3m2!1sen!2sin!4v1697520291990!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0', }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <figure className="image-box"></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-block">
              <div className="service-block-two">
                <div className="inner-box">
                  <div className="lower-content">
                    <div className="box">
                      <h3>Slovakia Visa Application center – Bengaluru</h3>
                      <p className="text-left"><b>Address: </b>Smartworks Golden Millenium, <br />
                        69/1, Ground floor, <br />
                        Millers Rd. Bengaluru - 560052</p>
                      <p className="text-left"><strong>Contact Number:&nbsp;</strong>0120-6917550{/* 012069175550 */}</p>
                      <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiaind@blshelpline.com">info.slovakiaind@blshelpline.com</a> <a href="mailto:feedback.slovakiaind@blshelpline.com">feedback.slovakiaind@blshelpline.com</a></p>
                      <p className="text-left"><strong>Submission Time Normal -</strong> 09:00 to 14:00 hrs (Monday to Friday, Except Consular/National Holidays)</p>
                      <p className="text-left"><strong>Prime Time –</strong> 14:00 to 16:00 hrs (Monday to Friday)</p>
                      <p className="text-left"><strong>Passport Collection Time :</strong> 16:00 to 17:00 hrs  (Monday to Friday)</p><br />
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.7042253617237!2d77.5911939!3d12.99076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1642f33db5cd%3A0xac30c6dc93405221!2sSmartworks%20Golden%20Millenium!5e0!3m2!1sen!2sin!4v1694782137716!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0', }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <figure className="image-box"></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-block">
              <div className="service-block-two">
                <div className="inner-box">
                  <div className="lower-content">
                    <div className="box">
                      <h3>Slovakia Visa Application center – Mumbai</h3>
                      <p className="text-left"><b>Address: </b>
                        Unit No G1 &amp; G8,Dalamal Towers,<br />
                        Ground Floor,Free Press Journal Marg<br />
                        Nariman Point – Mumbai, Pin Code: 400021</p>
                      <p className="text-left"><strong>Contact Number:&nbsp;</strong>0120-6917550</p>
                      <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiaind@blshelpline.com">info.slovakiaind@blshelpline.com</a> <a href="mailto:feedback.slovakiaind@blshelpline.com">feedback.slovakiaind@blshelpline.com</a></p>
                      <p className="text-left"><strong>Submission Time Normal -</strong> 09:00 to 14:00 hrs (Monday to Friday, Except Consular/National Holidays)</p>
                      <p className="text-left"><strong>Prime Time –</strong> 14:00 to 16:00 hrs (Monday to Friday)</p>
                      <p className="text-left"><strong>Passport Collection Time :</strong> 16:00 to 17:00 hrs  (Monday to Friday)</p>
                      <br /><br />
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3774.150803331462!2d72.8229585!3d18.924718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1ebd76e1bbb%3A0x788297697058e022!2sDalamal%20Tower%2C%20Free%20Press%20Journal%20Marg%2C%20Nariman%20Point%2C%20Mumbai%2C%20Maharashtra%20400021!5e0!3m2!1sen!2sin!4v1635591964701!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0', }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                  </div>
                  <figure className="image-box"></figure>
                </div>
              </div>
            </div>



            <div className="col-lg-6 col-md-6 col-sm-12 service-block">
              <div className="service-block-two">
                <div className="inner-box">
                  <div className="lower-content">
                    <div className="box">
                      <h3>Slovakia Visa Application center – India (Kolkata)</h3>
                      <p className="text-left"><b>Address: </b>BLS International Services Ltd,<br />
                        S-201, South Block, Second Floor,<br />
                        11/1, Ideal Plaza, Sarat Bose Road,<br />
                        Kolkata - 700020(INDIA)</p>
                      <p className="text-left"><strong>Contact Number:&nbsp;</strong>0120-6917550</p>
                      <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiaind@blshelpline.com">info.slovakiaind@blshelpline.com</a> <a href="mailto:feedback.slovakiaind@blshelpline.com">feedback.slovakiaind@blshelpline.com</a></p>
                      <p className="text-left"><strong>Submission hours :</strong> 09:00 to 14:00 hrs (Monday to Friday, Except Consular/National Holidays)</p>
                      <p className="text-left"><b>Prime Time – </b>14:00 to 16:00 hrs (Monday to Friday)</p>
                      <p className="text-left"><b>Passport Collection Timing :</b> 16:00 to 17:00 hrs (Monday to Friday)</p>
                      <br /><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24605.528570273378!2d88.31818981083983!3d22.5389994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277af655f8a17%3A0xdf802f2dc24384aa!2sBLS%20Spain%20Visa%20Application%20Centre%20in%20Kolkata!5e1!3m2!1sen!2sin!4v1768455105877!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0', }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <figure className="image-box"></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-block">
              <div className="service-block-two">
                <div className="inner-box">
                  <div className="lower-content">
                    <div className="box">
                      <h3>Slovakia Visa Application center – India (Chennai)</h3>
                      <p className="text-left"><b>Address: </b>
                        BLS International ,<br />
                        03rd floor, Olympia National Tower,<br />
                        A3 &amp; A4, North, Guindy Industrial Estate,<br />
                        SIDCO Industrial Estate, Guindy, Chennai,<br />
                        Tamil Nadu 600032
                        {/* BLS International Services Ltd,</br>
								DBS Business Center, DBS House, 2nd floor,</br>
								Office Suite - 214, 31-A Cathedral Garden Road,</br>
								Nungambakkam, Chennai – 600034. */}</p>
                      <p className="text-left"><b>Email:</b> <a href="mailto:info.slovakiaind@blshelpline.com">info.slovakiaind@blshelpline.com</a><br />
                        <a href="mailto:feedback.slovakiaind@blshelpline.com">feedback.slovakiaind@blshelpline.com</a></p>
                      <p className="text-left"><b>Phone Number:</b> 0120-6917550</p>
                      <p className="text-left"><b>Submission Time Normal - </b>09:00 to 14:00 hrs (Monday to Friday, Except Consular/National Holidays)</p>
                      <p className="text-left"><b>Prime Time – </b>14:00 to 16:00 hrs (Monday to Friday)</p>
                      <p className="text-left"><b>Passport Collection Timing :</b> 16:00 to 17:00 hrs (Monday to Friday)</p>
                      <br /><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32735.77997218431!2d80.21358402024434!3d13.040432936994113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52641cccd1b1ef%3A0xdcb821f352dff629!2sBLS%20Spain%20Visa%20Application%20Centre!5e0!3m2!1sen!2sin!4v1718364874408!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0', }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <figure className="image-box"></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-block">
              <div className="service-block-two">
                <div className="inner-box">
                  <div className="lower-content">
                    <div className="box">
                      <h3>Slovakia Visa Application center – Nepal (Kathmandu)</h3>
                      <p className="text-left"><b>Address: </b>
                        BLS International Services Ltd,<br />
                        No. 344/9, Dashrath Chand Marg,<br />
                        Baluwatar,Kathmandu, Nepal.<br />
                        PO Box: 5657</p>
                      <p className="text-left"><b>Email:</b> <a href="mailto:info.slovakiainktm@blshelpline.com">info.slovakiainktm@blshelpline.com</a><br />
                        <a href="mailto:feedback.slovakiainktm@blshelpline.com">feedback.slovakiainktm@blshelpline.com</a></p>
                      <p className="text-left"><b>Phone Number:</b> 0120-6917550</p>
                      <p className="text-left"><b>Submission Timing Normal - </b> 09:00 to 14:00 hrs </p>
                      <p className="text-left"><b>Prime Time –</b> 14:30 to 15:30 hrs</p>
                      <p className="text-left"><b>Passport Collection Timing :</b> 16:00 to 17:00 hrs (Monday to Friday, Except Consular/National Holidays)</p>
                      <br /><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7902096024272!2d85.32869997488483!3d27.723762972126853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196cb2f70db5%3A0xee4dec4ed63abe4e!2sBLS%20International!5e0!3m2!1sen!2sin!4v1718365480810!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0', }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <figure className="image-box"></figure>
                </div>
              </div>
            </div>

            {/* div className="col-lg-6 col-md-6 col-sm-12 service-block">
          <div className="service-block-two">
            <div className="inner-box">
              <div className="lower-content">
                <div className="box">
                  <h3>Slovakia Visa Application center – Xi'an</h3>
                  <p className="text-left"><b>Address: </b>No. 09, 13th Floor, </br>
				  Foreign Affairs Building, </br>
				  No. 9 Chanba Avenue, Chanba Ecological Zone, </br>
				  Xi'an, Shaanxi Province</p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiainxia@blshelpline.com">info.slovakiainxia@blshelpline.com</a> <a href="mailto:feedback.slovakiainxia@blshelpline.com">feedback.slovakiainxia@blshelpline.com</a></p>
				  <p className="text-left"><strong>Submission hours :</strong> 09:00 am to 02:00 pm (Monday to Wednesday, Except Consular/National Holidays)</p>
				  <p className="text-left"><strong>Contact Number: </strong>029-88080126</p></br>
				  <img src="/assets/images/map/Xian_map_location.png" alt="Xian" style={{ width: '100%', height: '250px',  }} />
                  <!--p className="text-left"><b>Address</b></p>
                  <p className="text-left"><strong>Contact Number: </strong> -- </p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto: #"> -- </a></p>
                  <p className="text-left"><strong>Office Timings:</strong> --</p>
                  <p className="text-left"><strong>Application Submission Timings:</strong> -- </p>
                  <p className="text-left"><strong>Inquiry Hours:</strong> -- </p>
                  <!--iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2394370996076!2d-118.37030118478461!3d34.063375880602976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b938b8a80849%3A0x5c88e54bed878619!2s6380%20Wilshire%20Blvd%20%231100%2C%20Los%20Angeles%2C%20CA%2090048%2C%20USA!5e0!3m2!1sen!2sin!4v1685683879639!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0',  }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe-- >
                </div>
              </div>
              <figure className="image-box"></figure>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 service-block">
          <div className="service-block-two">
            <div className="inner-box">
              <div className="lower-content">
                <div className="box">
                  <h3>Slovakia Visa Application center – Fuzhou</h3>
                  <p className="text-left"><b>Address: </b>C3 Floor 6, </br>
				  International Jinlong Building, </br>
				  No.159,Wusi Road,</br>
				  Gulou district,Fuzhou</p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiainfuz@blshelpline.com">info.slovakiainfuz@blshelpline.com</a> <a href="mailto:feedback.slovakiainfuz@blshelpline.com">feedback.slovakiainfuz@blshelpline.com</a></p>
				  <p className="text-left"><strong>Submission hours :</strong> 08:00 am to 02:30 pm (Monday to Wednesday, Except Consular/National Holidays)</p>
				  <p className="text-left"><strong>Contact Number: </strong>0591-87327522</p></br>
				  <img src="/assets/images/map/Fuzhou.jpg" alt="Fuzhou" style={{ width: '100%', height: '250px',  }} />
                  <!--p className="text-left"><b>Address</b></p>
                  <p className="text-left"><strong>Contact Number: </strong> -- </p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto: #"> -- </a></p>
                  <p className="text-left"><strong>Office Timings:</strong> --</p>
                  <p className="text-left"><strong>Application Submission Timings:</strong> -- </p>
                  <p className="text-left"><strong>Inquiry Hours:</strong> -- </p>
                  <!--iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2394370996076!2d-118.37030118478461!3d34.063375880602976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b938b8a80849%3A0x5c88e54bed878619!2s6380%20Wilshire%20Blvd%20%231100%2C%20Los%20Angeles%2C%20CA%2090048%2C%20USA!5e0!3m2!1sen!2sin!4v1685683879639!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0',  }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe-- >
                </div>
              </div>
              <figure className="image-box"></figure>
            </div>
          </div>
        </div>
		<div className="col-lg-6 col-md-6 col-sm-12 service-block">
          <div className="service-block-two">
            <div className="inner-box">
              <div className="lower-content">
                <div className="box">
                  <h3>Slovakia Visa Application center – Nanjing</h3>
                  <p className="text-left"><b>Address: </b>Room 1019, Building E08-2,</br>
                  No. 268 Jiqingmen Street,</br>
                  Gulou District, </br>
				  Nanjing</p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiainnan@blshelpline.com">info.slovakiainnan@blshelpline.com</a> <a href="mailto:feedback.slovakiainnan@blshelpline.com">feedback.slovakiainnan@blshelpline.com</a></p>
				  <p className="text-left"><strong>Submission hours :</strong> 08:00 am to 02:30 pm pm (Monday to Wednesday, Except Consular/National Holidays)</p>
				  <p className="text-left"><strong>Contact Number: </strong>025-85600066 </p></br>
				  <img src="/assets/images/map/Nanjing.jpg" alt="Nanjing" style={{ width: '100%', height: '250px',  }} />
                  <!--p className="text-left"><strong>Email:</strong> <a href="mailto: #"> -- </a></p>
                  <p className="text-left"><strong>Office Timings:</strong> --</p>
                  <p className="text-left"><strong>Application Submission Timings:</strong> -- </p>
                  <p className="text-left"><strong>Inquiry Hours:</strong> -- </p>
                  <!--iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2394370996076!2d-118.37030118478461!3d34.063375880602976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b938b8a80849%3A0x5c88e54bed878619!2s6380%20Wilshire%20Blvd%20%231100%2C%20Los%20Angeles%2C%20CA%2090048%2C%20USA!5e0!3m2!1sen!2sin!4v1685683879639!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0',  }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe-- >
                </div>
              </div>
              <figure className="image-box"></figure>
            </div>
          </div>
        </div>
		<div className="col-lg-6 col-md-6 col-sm-12 service-block">
          <div className="service-block-two">
            <div className="inner-box">
              <div className="lower-content">
                <div className="box">
                  <h3>Slovakia Visa Application center – Changzhou (Hangzhou)</h3>
                  <p className="text-left"><b>Address: </b>Room 1307, 13th floor, </br>
				  Jiade Plaza, 118 Qingchun Road,</br>
                   Gongshu District, Hangzhou City, </br>
				   Zhejiang Province</p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiainchan@blshelpline.com">info.slovakiainchan@blshelpline.com</a> <a href="mailto:feedback.slovakiainchan@blshelpline.com">feedback.slovakiainchan@blshelpline.com</a></p>
				  <p className="text-left"><strong>Submission hours :</strong> 08:00 am to 02:30 pm pm (Monday to Wednesday, Except Consular/National Holidays)</p>
				  <p className="text-left"><strong>Contact Number: </strong>0571-56386207</p></br>
				  <img src="/assets/images/map/Hangzhou.jpg" alt="Hangzhou" style={{ width: '100%', height: '250px',  }} />
                  <!--p className="text-left"><b>Address</b></p>
                  <p className="text-left"><strong>Contact Number: </strong> -- </p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto: #"> -- </a></p>
                  <p className="text-left"><strong>Office Timings:</strong> --</p>
                  <p className="text-left"><strong>Application Submission Timings:</strong> -- </p>
                  <p className="text-left"><strong>Inquiry Hours:</strong> -- </p>
                  <!--iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2394370996076!2d-118.37030118478461!3d34.063375880602976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b938b8a80849%3A0x5c88e54bed878619!2s6380%20Wilshire%20Blvd%20%231100%2C%20Los%20Angeles%2C%20CA%2090048%2C%20USA!5e0!3m2!1sen!2sin!4v1685683879639!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0',  }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe-- >
                </div>
              </div>
              <figure className="image-box"></figure>
            </div>
          </div>
        </div>
		<div className="col-lg-6 col-md-6 col-sm-12 service-block">
          <div className="service-block-two">
            <div className="inner-box">
              <div className="lower-content">
                <div className="box">
                  <h3>Slovakia Visa Application center – Beijing</h3>
                  <p className="text-left"><b>Address: </b>5th Floor, Block A, </br>
				  Gateway Plaza, No. 18 </br>
				  East Third Ring North Road, </br>
				  Chaoyang District, Beijing</p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiainbei@blshelpline.com">info.slovakiainbei@blshelpline.com</a> <a href="mailto:feedback.slovakiainbei@blshelpline.com">feedback.slovakiainbei@blshelpline.com</a></p>
				  <p className="text-left"><strong>Submission hours :</strong> 09:00 am to 02:00 pm (Monday to Wednesday, Except Consular/National Holidays)</p>
				  <p className="text-left"><strong>Contact Number: </strong>13335978935</p></br>
				  <img src="/assets/images/map/Beijing_map_location.png" alt="Beijing" style={{ width: '100%', height: '250px',  }} />
                  <!--p className="text-left"><b>Address</b></p>
                  <p className="text-left"><strong>Contact Number: </strong> -- </p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto: #"> -- </a></p>
                  <p className="text-left"><strong>Office Timings:</strong> --</p>
                  <p className="text-left"><strong>Application Submission Timings:</strong> -- </p>
                  <p className="text-left"><strong>Inquiry Hours:</strong> -- </p>
                  <!--iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2394370996076!2d-118.37030118478461!3d34.063375880602976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b938b8a80849%3A0x5c88e54bed878619!2s6380%20Wilshire%20Blvd%20%231100%2C%20Los%20Angeles%2C%20CA%2090048%2C%20USA!5e0!3m2!1sen!2sin!4v1685683879639!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0',  }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe-- >
                </div>
              </div>
              <figure className="image-box"></figure>
            </div>
          </div>
        </div>
		<div className="col-lg-6 col-md-6 col-sm-12 service-block">
          <div className="service-block-two">
            <div className="inner-box">
              <div className="lower-content">
                <div className="box">
                  <h3>Slovakia Visa Application center – Guangzhou</h3>
                  <p className="text-left"><b>Address: </b>Room No.3A12, 4th Floor, </br>
				  North Tower, Fuliyingli, </br>
				  Huaqiang Road No.3, </br>
				  Tianhe District, Guangzhou</p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiaingua@blshelpline.com">info.slovakiaingua@blshelpline.com</a> <a href="mailto:feedback.slovakiaingua@blshelpline.com">feedback.slovakiaingua@blshelpline.com</a></p>
				  <p className="text-left"><strong>Submission hours :</strong> 09:00 am to 02:00 pm (Monday to Wednesday, Except Consular/National Holidays)</p>
				  <p className="text-left"><strong>Contact Number: </strong>020-85208574 </p></br>
				  <img src="/assets/images/map/Guangzhou.jpg" alt="Guangzhou" style={{ width: '100%', height: '250px',  }} />
                  <!--p className="text-left"><b>Address</b></p>
                  <p className="text-left"><strong>Contact Number: </strong> -- </p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto: #"> -- </a></p>
                  <p className="text-left"><strong>Office Timings:</strong> --</p>
                  <p className="text-left"><strong>Application Submission Timings:</strong> -- </p>
                  <p className="text-left"><strong>Inquiry Hours:</strong> -- </p>
                  <!--iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2394370996076!2d-118.37030118478461!3d34.063375880602976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b938b8a80849%3A0x5c88e54bed878619!2s6380%20Wilshire%20Blvd%20%231100%2C%20Los%20Angeles%2C%20CA%2090048%2C%20USA!5e0!3m2!1sen!2sin!4v1685683879639!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0',  }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe-- >
                </div>
              </div>
              <figure className="image-box"></figure>
            </div>
          </div>
        </div>
		<div className="col-lg-6 col-md-6 col-sm-12 service-block">
          <div className="service-block-two">
            <div className="inner-box">
              <div className="lower-content">
                <div className="box">
                  <h3>Slovakia Visa Application center – Chengdu</h3>
                  <p className="text-left"><b>Address: </b>Room No.2012, 20th Floor, </br>
				  Tower A, Oriental Hope Tianxiang Square,</br>
				  No. 530 Middle Section of Tianfu Avenue, </br>
				  Gaoxin District, Chengdu.</p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiainche@blshelpline.com">info.slovakiainche@blshelpline.com</a> <a href="mailto:feedback.slovakiainche@blshelpline.com">feedback.slovakiainche@blshelpline.com</a></p>
				  <p className="text-left"><strong>Submission hours :</strong> 09:00 am to 02:00 pm (Monday to Wednesday, Except Consular/National Holidays)</p>
				  <p className="text-left"><strong>Contact Number: </strong>028-60828617</p></br>
				  <img src="/assets/images/map/ChengduSVACnewAddress.jpg" alt="Chengdu" style={{ width: '100%', height: '250px',  }} />
                  <!--p className="text-left"><b>Address</b></p>
                  <p className="text-left"><strong>Contact Number: </strong> -- </p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto: #"> -- </a></p>
                  <p className="text-left"><strong>Office Timings:</strong> --</p>
                  <p className="text-left"><strong>Application Submission Timings:</strong> -- </p>
                  <p className="text-left"><strong>Inquiry Hours:</strong> -- </p>
                  <!--iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2394370996076!2d-118.37030118478461!3d34.063375880602976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b938b8a80849%3A0x5c88e54bed878619!2s6380%20Wilshire%20Blvd%20%231100%2C%20Los%20Angeles%2C%20CA%2090048%2C%20USA!5e0!3m2!1sen!2sin!4v1685683879639!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0',  }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe-- >
                </div>
              </div>
              <figure className="image-box"></figure>
            </div>
          </div>
        </div>
		<div className="col-lg-6 col-md-6 col-sm-12 service-block">
          <div className="service-block-two">
            <div className="inner-box">
              <div className="lower-content">
                <div className="box">
                  <h3>Slovakia Visa Application center – Shenyang</h3>
                  <p className="text-left"><b>Address: </b>Room 1902,</br>
				  Dongyu Building, No.2 </br>
				  Heping South Street, Heping District,</br>
				  Shenyang, Liaoning</p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiainshen@blshelpline.com">info.slovakiainshen@blshelpline.com</a> <a href="mailto:feedback.slovakiainshen@blshelpline.com">feedback.slovakiainshen@blshelpline.com</a></p>
				  <p className="text-left"><strong>Submission hours :</strong> 09:00 am to 02:00 pm (Monday to Wednesday, Except Consular/National Holidays)</p>
				  <p className="text-left"><strong>Contact Number: </strong>024-31328617</p></br>
				  <img src="/assets/images/map/Shenyang.jpg" alt="Shenyang" style={{ width: '100%', height: '250px',  }} />
                  <!--p className="text-left"><b>Address</b></p>
                  <p className="text-left"><strong>Contact Number: </strong> -- </p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto: #"> -- </a></p>
                  <p className="text-left"><strong>Office Timings:</strong> --</p>
                  <p className="text-left"><strong>Application Submission Timings:</strong> -- </p>
                  <p className="text-left"><strong>Inquiry Hours:</strong> -- </p>
                  <!--iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2394370996076!2d-118.37030118478461!3d34.063375880602976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b938b8a80849%3A0x5c88e54bed878619!2s6380%20Wilshire%20Blvd%20%231100%2C%20Los%20Angeles%2C%20CA%2090048%2C%20USA!5e0!3m2!1sen!2sin!4v1685683879639!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0',  }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe-- >
                </div>
              </div>
              <figure className="image-box"></figure>
            </div>
          </div>
        </div>
		<div className="col-lg-6 col-md-6 col-sm-12 service-block">
          <div className="service-block-two">
            <div className="inner-box">
              <div className="lower-content">
                <div className="box">
                  <h3>Slovakia Visa Application center – Shanghai</h3>
                  <p className="text-left"><b>Address: </b>Zhangyang Road, </br>
				  NO.588, Room 304-305 MORE MEE,</br>
                  Pudong New Area,</br>
				  Shanghai</p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto:info.slovakiainsha@blshelpline.com">info.slovakiainsha@blshelpline.com</a> <a href="mailto:feedback.slovakiainsha@blshelpline.com">feedback.slovakiainsha@blshelpline.com</a></p>
				  <p className="text-left"><strong>Submission hours :</strong> 08:00 am to 02:30 pm (Monday to Wednesday, Except Consular/National Holidays)</p>
				  <p className="text-left"><strong>Contact Number: </strong>021-50460128</p></br>
				  <img src="/assets/images/map/shanghai_map_location.png" alt="Shanghai" style={{ width: '100%', height: '250px',  }} />
                  <!--p className="text-left"><b>Address</b></p>
                  <p className="text-left"><strong>Contact Number: </strong> -- </p>
                  <p className="text-left"><strong>Email:</strong> <a href="mailto: #"> -- </a></p>
                  <p className="text-left"><strong>Office Timings:</strong> --</p>
                  <p className="text-left"><strong>Application Submission Timings:</strong> -- </p>
                  <p className="text-left"><strong>Inquiry Hours:</strong> -- </p>
                  <!--iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2394370996076!2d-118.37030118478461!3d34.063375880602976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b938b8a80849%3A0x5c88e54bed878619!2s6380%20Wilshire%20Blvd%20%231100%2C%20Los%20Angeles%2C%20CA%2090048%2C%20USA!5e0!3m2!1sen!2sin!4v1685683879639!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0',  }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe-- >
                </div>
              </div>
              <figure className="image-box"></figure>
            </div>
          </div>
        </div */}

          </div>
        </div>
      </section><button className="scroll-top scroll-to-target open" data-target="html" aria-label="Scroll to top">
        <ArrowUp className="fas fa-long-arrow-alt-up" />
      </button>
    </>
  );
};

export default ContactUs;
