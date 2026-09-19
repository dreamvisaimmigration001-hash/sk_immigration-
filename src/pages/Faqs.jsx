import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqs = [
    {"question":"Q: Do I need an appointment to submit my visa application?","answer":"<p class=\"mb-2\"><strong>Ans: </strong>You would need an appointment to submit your application. For appointment booking, you may refer to the BLS website.</p>"},
    {"question":"Q: Can I fill in my application in a language other than English?","answer":"<p class=\"mb-2\"><strong>Ans: </strong>Application forms must be filled in English.</p>"},
    {"question":"Q: Should I buy my medical insurance before my visa is issued?","answer":"<p class=\"mb-2\"><strong>Ans: </strong>Yes, You must show a proof of a valid Medical Travel Insurance for the entire period of expected stay in the Schengen area and the minimum coverage amount should be 30,000 Euros.</p>"},
    {"question":"Q: Do I need to file my visa application in person?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> All applicants (above 12 years age) need to submit their applications in person due to the collection of biometric data (fingerprints). Applicants below 12 years age are exempted from collection of fingerprints and hence their application can be submitted by the primary applicant. For more information, please go through the documents required section and checklist.</p>"},
    {"question":"Q: Can I apply for the visa at the Slovakia Visa Application Center, even if I intend to visit other Schengen countries?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> The diplomatic mission of the Schengen state, which is the main destination of your visit, is competent to process your visa application.</p>\n<p class=\"mb-2\">If you are going to visit several Schengen states, the Slovak diplomatic mission is competent to process your visa application if the Slovak Republic is the main destination of your stay(s) in Schengen in terms of the lengths and purpose of stay. If no main destination can be determined, the Slovak diplomatic mission is competent to process your visa application if Slovakia is the country of your first entry into the territory of the Schengen area.</p>"},
    {"question":"Q: What happens if my visa application has been refused?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> The decision of the refusal of a Schengen visa are notified to the visa applicant in writing by means of a standard form, containing also the information on the possible remedies.</p>"},
    {"question":"Q: Can I use my visa for repeated travels from/to the Schengen area?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> A short-stay Schengen visa can be issued for one or several entries. If you have been granted a single entry visa and you leave the Schengen area, you cannot use the same visa for the re-entry. A multiple entry visa entitles you to repeatedly enter and leave the Schengen area during the period of its validity and permitted duration of stay.</p>"},
    {"question":"Q: Can I use a Schengen visa issued by a Slovak diplomatic mission to enter Slovakia via an airport outside the Slovak territory?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> Yes. A valid Schengen visa entitles you to enter the Schengen area via any Schengen border crossing or airport.</p>"},
    {"question":"Q: I have a valid Schengen visa in my passport. Can I be denied entry to Slovakia?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> Your Schengen visa allows you to travel to Slovakia and usually to other Schengen States. But it does not automatically entitle you to enter the Schengen area. When arriving at the border checkpoint you may be asked to justify the purpose and conditions of your intended stay, and to provide documents confirming they you have sufficient means of subsistence, both for the duration of the intended stay and for the return to your country of origin or transit to a third country into which you are certain to be admitted, or that you are in a position to acquire such means lawfully.</p>"},
    {"question":"Q: I want to visit my friends/relatives. My own funds are sufficient so I am paying for the trip myself. What kind of invitation should I submit?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> Just ask your friends/relatives to send you an informal invitation. Name, address and a copy of the friend's/relative's passport. A copy of the residence permit is an additional requirement if your friend/relative in Germany is not a German national. If your friends/relatives pay for your travel expenses you will need to submit an official affidavit of support.</p>"},
    {"question":"Q: I have my own business and therefore cannot bring an employment letter. What documents should I submit?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> Please include your business registration, your tax returns and your latest bank statement to complete your Application.</p>"},
    {"question":"Q: Why am I required to have a health insurance coverage for Germany?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> Imagine you have an accident during your stay in Germany. Please check carefully whether your medical insurance will also cover costs for medical treatment abroad. If yours does not, you need to submit a health insurance covering your stay in Europe when applying for the visa.</p>\n<p class=\"mb-2\">In general all major US medical insurance companies cover costs for emergency medical treatment abroad. </p>"},
    {"question":"Q: My U.S. Resident Alien Card/U.S. visa has expired and has to be renewed/extended. How can I apply for a visa to Germany?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> We can only accept applicants holding a vaild U.S. Resident Alien Card/U.S. visa. If yours has expired, please contact the U.S. Immigration and Naturalization Service first for renewal/Extension.<br /></p>\n<p class=\"mb-2\"><a href=\"https://www.uscis.gov/\" target=\"_blank\">US Immigration and Naturalization Service</a></p>"},
    {"question":"Q: I am a visitor to the US with a B1/B2 visa and would like to spend two weeks in Germany after my trip to the US. Where do I apply for a visa?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> We can only accept visa applicants of legal resident aliens in the US. If you are only visiting you need to apply at the German Embassy or Consulate in your home Country.</p>"},
    {"question":"Q: How long will I have to wait for my visa?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> The processing time for visa applications (short stay) takes up to 15 days. If long-term residence permits or visa for employment in Germany are applied for, the processing time will be up to several months.</p>\n<p class=\"mb-2\">Please Note: Although the information on this website has been prepared with utmost care, we can not accept any responsibility for inaccuracies contained herein.</p>"},
    {"question":"Q: How can I file a complaint about the conduct of the consular staff or the visa application process?","answer":"<p class=\"mb-2\"><strong>Ans:</strong> Applicants for a Schengen visa may submit a complaint regarding the conduct of the consular staff or the application process, by using the contact form on <a href=\"/contact_us.php\">the Contact Us page</a> of our website.</p>\n<p class=\"mb-2\">In the drop down menu of the <a href=\"/contact_us.php\">contact form</a>, please choose the option “Complaints regarding the Schengen visa application process in …”. Please note that complaints can only be submitted in German or English. Complaints in a different language cannot be investigated.</p>\n<p class=\"mb-2\">You may enter one of the two following options in the subject line:</p>\n<ol class=\"rte--list rte__ordered-list\">\n<li class=\"rte__list-item\">Complaint about the conduct of the consular staff</li>\n<li class=\"rte__list-item\">Complaint about the process of the visa Application</li>\n</ol>\n<p class=\"mb-2\">We will investigate your complaint.</p>\n<p class=\"mb-2\"><strong>Important note:</strong> Visa applicants cannot use the contact form to file an appeal (“Remonstration”) against decisions made in terms of refusal, annulment or cancelation of a visa.</p>"}
  ];

  return (
    <ul className="accordion-box">
      {faqs.map((faq, index) => (
        <li key={index} className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}>
          <div className={`acc-btn ${activeIndex === index ? 'active' : ''}`} onClick={() => setActiveIndex(activeIndex === index ? -1 : index)} style={{ cursor: 'pointer' }}>
            <div className="icon-outer"><ChevronDown /></div>
            <h5 dangerouslySetInnerHTML={{ __html: faq.question }}></h5>
          </div>
          <div className={`acc-content ${activeIndex === index ? 'current' : ''}`} style={{ display: activeIndex === index ? 'block' : 'none' }}>
            <div dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Faqs = () => {
  return (
    <>
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/page-title.jpg)' }}>
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box">
              <h1>Frequently asked questions</h1>
              <div className="dotted-box">
                <span className="dotted"></span>
                <span className="dotted"></span>
                <span className="dotted"></span>
              </div>
            </div>
            <ul className="bread-crumb clearfix">
              <li><Link to="/">Home</Link></li>
              <li>Frequently asked questions</li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 content-side">
              <div className="coaching-details-content service-details-content">
                <div className="content-style-one">
                  <div className="group-title">
                    <h2>Frequently asked questions</h2>
                    <div className="dotted-box"> <span className="dotted"></span> <span className="dotted"></span> <span className="dotted"></span> </div>
                  </div>
                  <div className="text">
                    <FaqAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
