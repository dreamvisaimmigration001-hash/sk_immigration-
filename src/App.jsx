import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import VisaTypes from "./pages/VisaTypes";
import SchengenTourism from "./pages/SchengenTourism";
import SchengenBusiness from "./pages/SchengenBusiness";
import SchengenFamilyFriends from "./pages/SchengenFamilyFriends";
import SchengenMedical from "./pages/SchengenMedical";
import NationalEmployment from "./pages/NationalEmployment";
import ContactUs from "./pages/ContactUs";
import SchengenStReOther from "./pages/SchengenStReOther";
import SchengenCulSpoRel from "./pages/SchengenCulSpoRel";

import AboutUs from "./pages/AboutUs";
import AdditionalServices from "./pages/AdditionalServices";
import PublicHoliday from "./pages/PublicHoliday";
import TrackApplication from "./pages/TrackApplication";
import UsefulLinks from "./pages/UsefulLinks";
import SecurityRules from "./pages/SecurityRules";
import NewsUpdates from "./pages/NewsUpdates";
import Faqs from "./pages/Faqs";
import MeaApostilleService from "./pages/MeaApostilleService";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function AppContent() {
  const location = useLocation();
  const isLoginRoute = location.pathname.endsWith('/login');
  const isDashboardRoute = location.pathname.startsWith('/dashboard');
  const hideHeaderFooter = isLoginRoute || isDashboardRoute;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!hideHeaderFooter && <Header />}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/:name/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/index.php" element={<Home />} />
          <Route path="/schengen_tourism.php" element={<SchengenTourism />} />
          <Route path="/schengen_business.php" element={<SchengenBusiness />} />
          <Route path="/visa_types.php" element={<VisaTypes />} />
          <Route
            path="/schengen_family_friends.php"
            element={<SchengenFamilyFriends />}
          />
          <Route path="/schengen_medical.php" element={<SchengenMedical />} />
          <Route path="/schengen_st_re_other.php" element={<SchengenStReOther />} />
          <Route path="/schengen_cul_spo_rel.php" element={<SchengenCulSpoRel />} />
          <Route
            path="/national_employment.php"
            element={<NationalEmployment />}
          />
          <Route path="/contact_us.php" element={<ContactUs />} />
          
          <Route path="/about_us.php" element={<AboutUs />} />
          <Route path="/additional_services.php" element={<AdditionalServices />} />
          <Route path="/public_holiday.php" element={<PublicHoliday />} />
          <Route path="/track_application.php" element={<TrackApplication />} />
          <Route path="/useful_links.php" element={<UsefulLinks />} />
          <Route path="/security_rules.php" element={<SecurityRules />} />
          <Route path="/news_updates.php" element={<NewsUpdates />} />
          <Route path="/faqs.php" element={<Faqs />} />
          <Route path="/mea-apostille-service.php" element={<MeaApostilleService />} />

          <Route
            path="*"
            element={
              <div className="sidebar-page-container">
                <div className="auto-container">
                  <h2>Page Not Found</h2>
                  <p>The requested page could not be found.</p>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default AppContent;
