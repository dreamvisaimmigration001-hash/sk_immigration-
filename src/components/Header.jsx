import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  useEffect(() => {
    const $ = window.$;
    if (typeof $ === "function") {
      // Bind mobile menu dropdown toggles (now present in the static HTML)
      $(".mobile-menu li.dropdown .dropdown-btn")
        .off("click")
        .on("click", function (e) {
          e.preventDefault();
          $(this).toggleClass("open");
          $(this).siblings("ul").slideToggle(500);
          $(this).siblings(".megamenu").slideToggle(900);
        });

      $(".mobile_nav_icon, .mobile-nav-toggler")
        .off("click")
        .on("click", function () {
          $("body").addClass("mobile-menu-visible");
        });
      $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn")
        .off("click")
        .on("click", function () {
          $("body").removeClass("mobile-menu-visible");
        });

      // Close mobile menu when a navigation link is clicked
      $(".mobile-menu a")
        .off("click")
        .on("click", function () {
          // Prevent closing if the link is just a dropdown toggler (e.g., href="#")
          if ($(this).attr("href") !== "#") {
            $("body").removeClass("mobile-menu-visible");
          }
        });
    }
  }, []);

  return (
    <>
      <div className="disablebg"></div>
      <div className="bloggerform" id="pop">
        <a href="javascript:;" className="cl">
          <img
            src="/assets/images/ic_close.png"
            alt="Close"
            className="pop-close"
          />
        </a>
        <div className="ct">
          <h2 style={{ textAlign: "center" }}>Website Disclaimer</h2>
          <p className="mb-2" style={{ fontWeight: "bold" }}>
            DO NOT FALL INTO FRAUD AND BEWARE OF SCAMS !
          </p>
          <p className="mb-2">
            BLS International advises visa applicants to exercise caution and
            vigilance regarding the following points:
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              • Our staff never ask visa applicants to make cash payments or any
              other form of payment to obtain an appointment, expedite the visa
              application process, secure an earlier appointment, or influence
              decision-making.
            </li>
            <li>
              • We do not recommend any direct payments into personal bank
              accounts.
            </li>
            <li>
              • Appointments must be booked exclusively through the BLS website.
              Please refer to the website for authorized service fees payable to
              BLS International.
            </li>
            <li>
              • Always request a receipt for optional value-added services
              available at our center.
            </li>
            <li>
              • The decision regarding visa applications is made solely by the
              competent authorities, and BLS International has no role or
              influence in this process. If you receive such a request (in
              writing or verbally), please report it immediately by completing
              the complaint form or by sending an email to{" "}
              <a href="mailto:antifraud@blsinternational.com">
                antifraud@blsinternational.com
              </a>
              .
            </li>
          </ul>
          <p className="mb-2">
            Be cautious of intermediaries selling visa appointments under the
            name of BLS International or individually outside our center. All
            appointments must be booked through the BLS International website.
            Please refrain from purchasing appointments through a third party:
            this is a fraudulent practice that BLS International strongly
            condemns. As a responsible service provider, we make every effort to
            inform applicants to be wary of fraudulent intermediaries charging
            fees to clients for appointment bookings.
          </p>
          <p className="mb-2" style={{ fontWeight: "bold" }}>
            All applicants are hereby informed that there are certain
            individuals/Agents charging exorbitant amount of money in exchange
            of Appointments or submission of their visa application. Please be
            informed that BLS does not charge or encourage any unapproved fees
          </p>
          <p className="mb-2" style={{ fontWeight: "bold" }}>
            BLS Employee must provide receipt for all the services availed and
            paid at BLS Slovakia Visa Application Centre. Please write to
            Mumbai:{" "}
            <a href="mailto:feedback.bom@blshelpline.com">
              feedback.bom@blshelpline.com
            </a>{" "}
            , Delhi:{" "}
            <a href="mailto:feedback.del@blshelpline.com">
              feedback.del@blshelpline.com
            </a>{" "}
            if you have not received receipt for any payments made in the
            Slovakia Visa Application Centre.
          </p>
          <p className="mb-2" style={{ fontWeight: "bold" }}>
            <u>Accessibility</u>
          </p>
          <p className="mb-2">
            Customers who have a disability or need accessibility requirements
            are requested to inform our customer care team prior to the date of
            appointment so that our staff will be available to assist them in
            the visa center.
          </p>
        </div>
      </div>

      <header className="main-header style-one">
        <div className="header-top">
          <div className="top-inner clearfix">
            <div className="lang pull-left">
              <div className="dropdown" onMouseLeave={() => setLangOpen(false)}>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  onClick={() => setLangOpen(!langOpen)}
                  aria-expanded={langOpen}
                  aria-label="Select Language"
                  tabIndex="0"
                >
                  Select Language
                </button>
                <ul
                  className={`dropdown-menu ${langOpen ? "show" : ""}`}
                  role="menu"
                  aria-label="Select language"
                  style={{
                    display: langOpen ? "block" : "none",
                    minWidth: "150px",
                  }}
                >
                  <li role="none" style={{ fontSize: "16px" }}>
                    <button
                      className="dropdown-item"
                      type="button"
                      role="menuitem"
                      onClick={() => window.doGTranslate("es|en")}
                      aria-label="English"
                    >
                      <img src="/assets/images/img-usa.jpg" alt="USA flag" />{" "}
                      English
                    </button>
                  </li>
                  <li role="none" style={{ fontSize: "16px" }}>
                    <button
                      className="dropdown-item"
                      type="button"
                      role="menuitem"
                      onClick={() => window.doGTranslate("es|ru")}
                      aria-label="Russian"
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/russia.jpg"
                        alt="Russian flag"
                        style={{ width: "20px", height: "14px" }}
                      />{" "}
                      Russian
                    </button>
                  </li>
                  <li role="none" style={{ fontSize: "16px" }}>
                    <button
                      className="dropdown-item"
                      type="button"
                      role="menuitem"
                      onClick={() => window.doGTranslate("es|az")}
                      aria-label="Azerbaijani"
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/azerbaijan.png"
                        alt="Azerbaijan flag"
                        style={{ width: "20px", height: "14px" }}
                      />{" "}
                      Azerbaijani
                    </button>
                  </li>
                  <li role="none" style={{ fontSize: "16px" }}>
                    <button
                      className="dropdown-item"
                      type="button"
                      role="menuitem"
                      onClick={() => window.doGTranslate("es|sk")}
                      aria-label="Slovak"
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/slovakia.jpg"
                        alt="Slovakia flag"
                        style={{ width: "20px", height: "14px" }}
                      />{" "}
                      Slovak
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="top-left pull-left">
              <ul className="info clearfix">
                <li style={{ fontSize: "28px", color: "#fff" }}>
                  Slovakia Visa Application Centers - India{" "}
                  <span>
                    <img
                      src="/assets/images/india-flag.jpg"
                      alt="India flag"
                      width="40"
                    />
                  </span>{" "}
                  &nbsp;&amp; Nepal{" "}
                  <span>
                    <img
                      src="/assets/images/nepal.svg"
                      alt="Nepal flag"
                      width="40"
                    />
                  </span>
                </li>
              </ul>
            </div>

            <div className="top-right pull-right">
              <div className="social-links clearfix">
                <div
                  className="dropdown"
                  onMouseLeave={() => setCountryOpen(false)}
                >
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    onClick={() => setCountryOpen(!countryOpen)}
                    aria-expanded={countryOpen}
                  >
                    Select country
                  </button>
                  <div
                    className={`dropdown-menu ${countryOpen ? "show" : ""}`}
                    role="menu"
                    aria-label="Country selector"
                    style={{
                      height: "160px",
                      overflowY: "scroll",
                      display: countryOpen ? "block" : "none",
                    }}
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Argentina"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://www.blsslovakiavisa.com/assets/images/argentina.png"
                        style={{ width: "20px", height: "14px" }}
                        alt="Argentina"
                      />{" "}
                      &nbsp;Argentina
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Armenia"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://www.blsslovakiavisa.com/assets/images/armenia.png"
                        style={{ width: "20px", height: "14px" }}
                        alt="Armenia"
                      />{" "}
                      &nbsp;Armenia
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Azerbaijan"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/azerbaijan.png"
                        style={{ width: "20px", height: "14px" }}
                        alt="Azerbaijan"
                      />{" "}
                      &nbsp;Azerbaijan
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Bahrain"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="/assets/images/bahrain.png"
                        style={{ width: "20px", height: "14px" }}
                        alt="Bahrain"
                      />{" "}
                      &nbsp;Bahrain
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Bolivia"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://www.blsslovakiavisa.com/assets/images/Bolivia.png"
                        style={{ width: "20px", height: "14px" }}
                        alt="Bolivia"
                      />{" "}
                      &nbsp;Bolivia
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Belarus"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/belarus.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Belarus"
                      />{" "}
                      &nbsp;Belarus
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Brazil"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/assets/images/brazil.png"
                        style={{ width: "20px", height: "14px" }}
                        alt="Brazil"
                      />{" "}
                      &nbsp;Brazil
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Cambodia"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/assets/images/cambodia.png"
                        style={{ width: "20px", height: "14px" }}
                        alt="Cambodia"
                      />{" "}
                      &nbsp;Cambodia
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="China"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/china.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="China"
                      />{" "}
                      &nbsp;China
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Cyprus"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/cyprus.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Cyprus"
                      />{" "}
                      &nbsp;Cyprus
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Egypt"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/egypt.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Egypt"
                      />{" "}
                      &nbsp;Egypt
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="India"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/india.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="India"
                      />{" "}
                      &nbsp;India
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Indonesia"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/indonesia.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Indonesia"
                      />{" "}
                      &nbsp;Indonesia
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Ireland"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="/assets/images/ireland.png"
                        style={{ width: "20px", height: "14px" }}
                        alt="Ireland"
                      />{" "}
                      &nbsp;Ireland
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Israel"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/assets/images/israel.svg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Israel"
                      />{" "}
                      &nbsp;Israel
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Kazakhstan"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/Kazakhstan.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Kazakhstan"
                      />{" "}
                      &nbsp;Kazakhstan
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Kenya"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://www.blsslovakiavisa.com/kenya/assets/images/kenya.svg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Kenya"
                      />{" "}
                      &nbsp;Kenya
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Kuwait"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/kuwait.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Kuwait"
                      />{" "}
                      &nbsp;Kuwait
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Kyrgyzstan"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/kyrgyzstan.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Kyrgyzstan"
                      />{" "}
                      &nbsp;Kyrgyzstan
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Laos"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/assets/images/laos.svg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Laos"
                      />{" "}
                      &nbsp;Laos
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Lebanon"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="/assets/images/lebanon.svg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Lebanon"
                      />{" "}
                      &nbsp;Lebanon
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Malaysia"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/assets/images/malaysia.svg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Malaysia"
                      />{" "}
                      &nbsp;Malaysia
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Mongolia"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/assets/images/mongolia.svg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Mongolia"
                      />{" "}
                      &nbsp;Mongolia
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Nepal"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://www.blsslovakiavisa.com/india/assets/images/nepal.svg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Nepal"
                      />{" "}
                      &nbsp;Nepal
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Palestine"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/palestine.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Palestine"
                      />{" "}
                      &nbsp;Palestine
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Philippines"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/philippines.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Philippines"
                      />{" "}
                      &nbsp;Philippines
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Russia"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/russia.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Russia"
                      />{" "}
                      &nbsp;Russia
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Saudi Arabia"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/saudi-arabia.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Saudi Arabia"
                      />{" "}
                      &nbsp;Saudi Arabia
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="South Africa"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/assets/images/south-africa.svg"
                        style={{ width: "20px", height: "14px" }}
                        alt="South Africa"
                      />{" "}
                      &nbsp;South Africa
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Taiwan"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://www.blsslovakiavisa.com/taiwan/assets/images/taiwan-flag-icon.svg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Taiwan"
                      />{" "}
                      &nbsp;Taiwan
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Thailand"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/thailand.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Thailand"
                      />{" "}
                      &nbsp;Thailand
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Turkey"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/turkey.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Turkey"
                      />{" "}
                      &nbsp;Turkey
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="UAE"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/uae.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="UAE"
                      />{" "}
                      &nbsp;UAE
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="United Kingdom"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/assets/images/uk-flag.svg"
                        style={{ width: "20px", height: "14px" }}
                        alt="United Kingdom"
                      />{" "}
                      &nbsp;United Kingdom
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Uzbekistan"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/uzbekistan.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="Uzbekistan"
                      />{" "}
                      &nbsp;Uzbekistan
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="USA"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/usa-flag.jpg"
                        style={{ width: "20px", height: "14px" }}
                        alt="USA"
                      />{" "}
                      &nbsp;USA
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.reload();
                      }}
                      title="Vietnam"
                      className="dropdown-item"
                      role="menuitem"
                      style={{ fontSize: "16px" }}
                    >
                      <img
                        src="https://blsslovakiavisa.com/global_content/country-flag/vietnam-flag.png"
                        style={{ width: "20px", height: "14px" }}
                        alt="Vietnam"
                      />{" "}
                      &nbsp;Vietnam
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-upper">
          <div className="outer-container">
            <div className="outer-box clearfix">
              <div className="upper-left pull-left">
                <figure className="logo-box">
                  <Link to="/" tabIndex="0" style={{ fontSize: "15px" }}>
                    <img
                      src="/assets/images/logo-2.png"
                      alt="BLS International"
                      height="80"
                    />
                  </Link>
                </figure>
              </div>
              <div className="menu-area pull-right">
                <div className="mobile-nav-toggler">
                  {" "}
                  <i className="icon-bar"></i> <i className="icon-bar"></i>{" "}
                  <i className="icon-bar"></i>{" "}
                </div>
                <nav
                  className="main-menu navbar-expand-md navbar-light"
                  style={{ marginRight: "100px" }}
                >
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li style={{ fontSize: "15px" }}>
                        <Link to="/" tabIndex="0">
                          Home
                        </Link>
                      </li>

                      <li
                        className="dropdown"
                        style={{ fontSize: "15px", position: "relative" }}
                      >
                        <Link to="/visa_types.php" tabIndex="0">
                          Visa types{" "}
                          <img
                            src="/assets/images/down-chevron.png"
                            alt="BLS International"
                          />
                        </Link>
                        <div
                          className="megamenu"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: "-200px",
                            backgroundColor: "#fff",
                            padding: "20px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                            minWidth: "600px",
                            zIndex: 100,
                            display: "none",
                          }}
                        >
                          <div className="row clearfix">
                            <div className="col-lg-4 column">
                              <ul style={{ padding: 0, listStyle: "none" }}>
                                <li style={{ fontSize: "15px" }}>
                                  <h4
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                      marginBottom: "10px",
                                    }}
                                  >
                                    Short Stay Visa
                                  </h4>
                                </li>
                                <li
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <Link to="/schengen_tourism.php">
                                    Tourism
                                  </Link>
                                </li>
                                <li
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <Link to="/schengen_business.php">
                                    Business
                                  </Link>
                                </li>
                                <li style={{ fontSize: "15px" }}>
                                  <Link to="/schengen_family_friends.php">
                                    Visit Family or Friends Visa
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4 column">
                              <ul style={{ padding: 0, listStyle: "none" }}>
                                <li style={{ fontSize: "15px" }}>
                                  <h4
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                      marginBottom: "10px",
                                      visibility: "hidden",
                                    }}
                                  >
                                    Short Stay Visa
                                  </h4>
                                </li>
                                <li
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <Link to="/schengen_st_re_other.php">
                                    Study, Research or other types of Internship
                                  </Link>
                                </li>
                                <li
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <Link to="/schengen_cul_spo_rel.php">
                                    Cultural, Sports or Religious events
                                  </Link>
                                </li>
                                <li style={{ fontSize: "15px" }}>
                                  <Link to="/schengen_medical.php">
                                    Medical Treatment
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4 column">
                              <ul style={{ padding: 0, listStyle: "none" }}>
                                <li style={{ fontSize: "15px" }}>
                                  <h4
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                      marginBottom: "10px",
                                    }}
                                  >
                                    National Visa
                                  </h4>
                                </li>
                                <li style={{ fontSize: "15px" }}>
                                  <Link to="/national_employment.php">
                                    Employment
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        className="dropdown"
                        style={{ fontSize: "15px", position: "relative" }}
                      >
                        <a href="#" tabIndex="0">
                          Schedule an appointment{" "}
                          <img
                            src="/assets/images/down-chevron.png"
                            alt="Schedule an appointment"
                          />
                        </a>
                        <div
                          className="megamenu"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: "-200px",
                            backgroundColor: "#fff",
                            padding: "20px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                            minWidth: "500px",
                            zIndex: 100,
                            display: "none",
                          }}
                        >
                          <div className="row clearfix">
                            <div className="col-lg-4 column">
                              <ul style={{ padding: 0, listStyle: "none" }}>
                                <li style={{ fontSize: "15px" }}>
                                  <h4
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                      marginBottom: "10px",
                                    }}
                                  >
                                    Book Appointment
                                  </h4>
                                </li>
                                <li
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <a
                                    href="https://appointment.blsslovakiavisa.com/app_india/login"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Book an appointment - India
                                  </a>
                                </li>
                                <li style={{ fontSize: "15px" }}>
                                  <a
                                    href="https://software.blsslovakiavisa.com/appointments/login"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Book an appointment - Nepal
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4 column">
                              <ul style={{ padding: 0, listStyle: "none" }}>
                                <li style={{ fontSize: "15px" }}>
                                  <h4
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                      marginBottom: "10px",
                                      visibility: "hidden",
                                    }}
                                  >
                                    Book Appointment
                                  </h4>
                                </li>
                                <li
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <a
                                    href="https://appointment.blsslovakiavisa.com/app_india/login"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Cancel appointment - India
                                  </a>
                                </li>
                                <li style={{ fontSize: "15px" }}>
                                  <a
                                    href="https://software.blsslovakiavisa.com/appointments/login"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Cancel appointment - Nepal
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4 column">
                              <ul style={{ padding: 0, listStyle: "none" }}>
                                <li style={{ fontSize: "15px" }}>
                                  <h4
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                      marginBottom: "10px",
                                      visibility: "hidden",
                                    }}
                                  >
                                    Book Appointment
                                  </h4>
                                </li>
                                <li
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <a
                                    href="https://appointment.blsslovakiavisa.com/app_india/login"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Reprint appointment letter - India
                                  </a>
                                </li>
                                <li style={{ fontSize: "15px" }}>
                                  <a
                                    href="https://software.blsslovakiavisa.com/appointments/login"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Reprint appointment letter - Nepal
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li
                        className="dropdown"
                        style={{ fontSize: "15px", position: "relative" }}
                      >
                        <a href="#" tabIndex="0">
                          Information{" "}
                          <img
                            src="/assets/images/down-chevron.png"
                            alt="Information"
                          />
                        </a>
                        <div
                          className="megamenu"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: "-300px",
                            backgroundColor: "#fff",
                            padding: "20px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                            minWidth: "600px",
                            zIndex: 100,
                            display: "none",
                          }}
                        >
                          <div className="row clearfix">
                            <div className="col-lg-4 column">
                              <ul style={{ padding: 0, listStyle: "none" }}>
                                <li style={{ fontSize: "15px" }}>
                                  <h4
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                      marginBottom: "10px",
                                    }}
                                  >
                                    Information
                                  </h4>
                                </li>
                                <li
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <Link to="/additional_services.php">
                                    Value added services
                                  </Link>
                                </li>
                                <li
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <Link to="/public_holiday.php">
                                    Public holidays / closures
                                  </Link>
                                </li>
                                <li style={{ fontSize: "15px" }}>
                                  <Link to="/track_application.php">
                                    Track application
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4 column">
                              <ul style={{ padding: 0, listStyle: "none" }}>
                                <li style={{ fontSize: "15px" }}>
                                  <h4
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                      marginBottom: "10px",
                                      visibility: "hidden",
                                    }}
                                  >
                                    Information
                                  </h4>
                                </li>
                                <li
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <Link to="/useful_links.php">
                                    Useful links
                                  </Link>
                                </li>
                                <li
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <Link to="/security_rules.php">
                                    Security rules
                                  </Link>
                                </li>
                                <li style={{ fontSize: "15px" }}>
                                  <Link to="/news_updates.php">
                                    News and updates
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4 column">
                              <ul style={{ padding: 0, listStyle: "none" }}>
                                <li style={{ fontSize: "15px" }}>
                                  <h4
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                      marginBottom: "10px",
                                      visibility: "hidden",
                                    }}
                                  >
                                    Information
                                  </h4>
                                </li>
                                <li style={{ fontSize: "15px" }}>
                                  <Link to="/faqs.php">FAQs</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li style={{ fontSize: "15px" }}>
                        <Link to="/mea-apostille-service.php">
                          MEA Apostille Service
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link to="/contact_us.php">Contact us</Link>
                      </li>

                      <li
                        className="dropdown"
                        style={{ fontSize: "15px", position: "relative" }}
                      >
                        <a href="#" tabIndex="0">
                          Insurance{" "}
                          <img
                            src="/assets/images/down-chevron.png"
                            alt="Insurance"
                          />
                        </a>
                        <div
                          className="megamenu"
                          style={{
                            position: "absolute",
                            top: "100%",
                            right: "0",
                            backgroundColor: "#fff",
                            padding: "20px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                            minWidth: "400px",
                            zIndex: 100,
                            display: "none",
                          }}
                        >
                          <div className="row clearfix">
                            <div className="col-lg-12 column">
                              <p
                                className="mb-1"
                                style={{ fontSize: "14px", fontWeight: "bold" }}
                              >
                                Travel Insurance for Schengen Visa
                              </p>
                              <p
                                className="mb-1"
                                style={{ fontSize: "14px", lineHeight: "1.5" }}
                              >
                                Travel Insurance certificate must be submitted
                                at the visa application center as it is a
                                mandatory requirement for applicants travelling
                                to Slovakia. You may get your travel insurance
                                from any authorized insurance company or{" "}
                                <b>
                                  you may{" "}
                                  <a
                                    href="https://www.tataaig.com/partner?utm_source=RB&amp;utm_term=RB_OS"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      padding: "0px",
                                      display: "inline",
                                      color: "rgb(186, 150, 46)",
                                      fontSize: "14px",
                                    }}
                                  >
                                    <b> Click Here</b>
                                  </a>{" "}
                                  if you wish to avail this optional service
                                  now.
                                </b>
                              </p>
                              <p
                                style={{
                                  fontSize: "11px",
                                  marginTop: "10px",
                                  lineHeight: "1.5",
                                }}
                              >
                                <b>
                                  <i> Disclaimer:-</i>
                                </b>{" "}
                                <i>
                                  {" "}
                                  By clicking this link, you will be redirected
                                  to the third party website, your personal data
                                  will be handled in accordance with their
                                  privacy policy. Please note that BLS does not
                                  collect or process any information you provide
                                  on their site and does not hold any liability
                                  with respect to any dispute.{" "}
                                </i>
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <i className="fas fa-times"></i>
        </div>
        <nav className="menu-box mCustomScrollbar _mCS_1 mCS_no_scrollbar">
          <div
            id="mCSB_1"
            className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
            style={{ maxHeight: "992px" }}
            tabIndex="0"
          >
            <div
              id="mCSB_1_container"
              className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
              style={{ position: "relative", top: 0, left: 0 }}
              dir="ltr"
            >
              <div className="nav-logo">
                <Link to="/" style={{ fontSize: "13px" }}>
                  <img
                    src="/assets/images/logo-2.png"
                    alt="BLS International"
                    title=""
                    className="mCS_img_loaded"
                  />
                </Link>
              </div>
              <div className="menu-outer">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li style={{ fontSize: "13px" }}>
                      <Link to="/" style={{ fontSize: "15px" }}>
                        Home
                      </Link>
                    </li>
                    <li className="dropdown" style={{ fontSize: "13px" }}>
                      <Link to="/visa_types.php" style={{ fontSize: "15px" }}>
                        Visa types&nbsp;
                        <img
                          src="/assets/images/down-chevron.png"
                          alt="BLS International"
                          className="mCS_img_loaded"
                        />
                      </Link>
                      <div className="megamenu">
                        <div className="row clearfix">
                          <div className="col-lg-4 column">
                            <ul>
                              <li style={{ fontSize: "13px" }}>
                                <h4 style={{ fontSize: "24px" }}>
                                  Short Stay Visa
                                </h4>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/schengen_tourism.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Tourism
                                </Link>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/schengen_business.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Business
                                </Link>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/schengen_family_friends.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Visit Family or Friends Visa
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 column">
                            <ul>
                              <li style={{ fontSize: "13px" }}>
                                <h4 style={{ fontSize: "24px" }}>
                                  Short Stay Visa
                                </h4>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/schengen_st_re_other.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Study, Research or other types of Internship
                                </Link>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/schengen_cul_spo_rel.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Cultural, Sports or Religious events and for
                                  film crews
                                </Link>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/schengen_medical.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Medical Treatment
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 column">
                            <ul>
                              <li style={{ fontSize: "13px" }}>
                                <h4 style={{ fontSize: "24px" }}>
                                  National Visa
                                </h4>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/national_employment.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Employment
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-btn">
                        <span
                          className="fas fa-angle-down"
                          style={{ fontSize: "16px" }}
                        ></span>
                      </div>
                    </li>
                    <li className="dropdown" style={{ fontSize: "13px" }}>
                      <a href="#" style={{ fontSize: "15px" }}>
                        Schedule an appointment&nbsp;
                        <img
                          src="/assets/images/down-chevron.png"
                          alt="Schedule"
                          className="mCS_img_loaded"
                        />
                      </a>
                      <div className="megamenu">
                        <div className="row clearfix">
                          <div className="col-lg-4 column">
                            <ul>
                              <li style={{ fontSize: "13px" }}>
                                <h4 style={{ fontSize: "24px" }}>
                                  Book Appointment
                                </h4>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <a
                                  href="https://appointment.blsslovakiavisa.com/app_india/login"
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ fontSize: "16px" }}
                                >
                                  Book an appointment - India
                                </a>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <a
                                  href="https://software.blsslovakiavisa.com/appointments/login"
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ fontSize: "16px" }}
                                >
                                  Book an appointment - Nepal
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 column">
                            <ul>
                              <li style={{ fontSize: "13px" }}>
                                <h4 style={{ fontSize: "24px" }}>
                                  Book Appointment
                                </h4>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <a
                                  href="https://appointment.blsslovakiavisa.com/app_india/login"
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ fontSize: "16px" }}
                                >
                                  Cancel appointment - India
                                </a>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <a
                                  href="https://software.blsslovakiavisa.com/appointments/login"
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ fontSize: "16px" }}
                                >
                                  Cancel appointment - Nepal
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 column">
                            <ul>
                              <li style={{ fontSize: "13px" }}>
                                <h4 style={{ fontSize: "24px" }}>
                                  Book Appointment
                                </h4>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <a
                                  href="https://appointment.blsslovakiavisa.com/app_india/login"
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ fontSize: "16px" }}
                                >
                                  Reprint appointment letter - India
                                </a>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <a
                                  href="https://software.blsslovakiavisa.com/appointments/login"
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ fontSize: "16px" }}
                                >
                                  Reprint appointment letter - Nepal
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-btn">
                        <span
                          className="fas fa-angle-down"
                          style={{ fontSize: "16px" }}
                        ></span>
                      </div>
                    </li>
                    <li className="dropdown" style={{ fontSize: "13px" }}>
                      <a href="#" style={{ fontSize: "15px" }}>
                        Information&nbsp;
                        <img
                          src="/assets/images/down-chevron.png"
                          alt="Information"
                          className="mCS_img_loaded"
                        />
                      </a>
                      <div className="megamenu">
                        <div className="row clearfix">
                          <div className="col-lg-4 column">
                            <ul>
                              <li style={{ fontSize: "13px" }}>
                                <h4 style={{ fontSize: "24px" }}>
                                  Information
                                </h4>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/additional_services.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Value added services
                                </Link>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/public_holiday.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Public holidays / closures
                                </Link>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/track_application.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Track application
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 column">
                            <ul>
                              <li style={{ fontSize: "13px" }}>
                                <h4 style={{ fontSize: "24px" }}>
                                  Information
                                </h4>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/useful_links.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Useful links
                                </Link>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/security_rules.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  Security rules
                                </Link>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/news_updates.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  News and updates
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 column">
                            <ul>
                              <li style={{ fontSize: "13px" }}>
                                <h4 style={{ fontSize: "24px" }}>
                                  Information
                                </h4>
                              </li>
                              <li style={{ fontSize: "13px" }}>
                                <Link
                                  to="/faqs.php"
                                  style={{ fontSize: "16px" }}
                                >
                                  FAQs
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-btn">
                        <span
                          className="fas fa-angle-down"
                          style={{ fontSize: "16px" }}
                        ></span>
                      </div>
                    </li>
                    <li style={{ fontSize: "13px" }}>
                      <Link
                        to="/mea-apostille-service.php"
                        style={{ fontSize: "15px" }}
                      >
                        MEA Apostille Service
                      </Link>
                    </li>
                    <li style={{ fontSize: "13px" }}>
                      <Link to="/contact_us.php" style={{ fontSize: "15px" }}>
                        Contact us
                      </Link>
                    </li>
                    <li className="dropdown" style={{ fontSize: "13px" }}>
                      <a href="#" style={{ fontSize: "15px" }}>
                        Insurance&nbsp;{" "}
                        <img
                          src="/assets/images/down-chevron.png"
                          alt="Insurance"
                          className="mCS_img_loaded"
                        />
                      </a>
                      <div className="megamenu">
                        <div className="row clearfix">
                          <div className="col-lg-12 column">
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              <b>Travel Insurance for Schengen Visa</b>
                            </p>
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                              Travel Insurance certificate must be submitted at
                              the visa application center as it is a mandatory
                              requirement for applicants travelling to Slovakia.
                              You may get your travel insurance from any
                              authorized insurance company or{" "}
                              <b>
                                you may{" "}
                                <a
                                  href="https://www.tataaig.com/partner?utm_source=RB&amp;utm_term=RB_OS"
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{
                                    padding: "0px",
                                    display: "inline",
                                    color: "rgb(186, 150, 46)",
                                    fontSize: "14px",
                                  }}
                                >
                                  <b> Click Here</b>
                                </a>{" "}
                                if you wish to avail this optional service now.
                              </b>
                            </p>
                            <p style={{ fontSize: "11px" }}>
                              <b style={{ fontWeight: 600 }}>
                                <i> Disclaimer:-</i>
                              </b>{" "}
                              <i>
                                {" "}
                                By clicking this link, you will be redirected to
                                the third party website, your personal data will
                                be handled in accordance with their privacy
                                policy. Please note that BLS does not collect or
                                process any information you provide on their
                                site and does not hold any liability with
                                respect to any dispute.{" "}
                              </i>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-btn">
                        <span
                          className="fas fa-angle-down"
                          style={{ fontSize: "16px" }}
                        ></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="social-links">
                <ul className="clearfix">{/* social links */}</ul>
              </div>
            </div>
            <div
              id="mCSB_1_scrollbar_vertical"
              className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
              style={{ display: "none" }}
            >
              <div className="mCSB_draggerContainer">
                <div
                  id="mCSB_1_dragger_vertical"
                  className="mCSB_dragger"
                  style={{
                    position: "absolute",
                    minHeight: "0px",
                    height: "0px",
                    top: "0px",
                  }}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <div
                    className="mCSB_dragger_bar"
                    style={{ lineHeight: "0px" }}
                  ></div>
                </div>
                <div className="mCSB_draggerRail"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .header-upper {
          padding: 10px 0 !important;
        }
        .header-upper-right ul > li:hover .megamenu {
          display: block !important;
        }
        .header-upper-right a {
          color: #000;
          text-decoration: none;
        }
        .megamenu a:hover {
          color: #d1b161;
        }
        .header-top {
          background-color: #3b3f42;
          padding: 10px 0;
        }
      `,
        }}
      />
    </>
  );
};

export default Header;
