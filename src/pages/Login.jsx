import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add("loaded");
    return () => {
      document.body.classList.remove("loaded");
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://api-immigration.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Dynamic CSS for the Login page ONLY */}
      <link
        href="/assets/appointment/css/style.css"
        type="text/css"
        rel="stylesheet"
      />
      <link
        href="/assets/appointment/css/mobile-responsive.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/assets/appointment/css/flexdropdown.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/assets/appointment/css/app.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/assets/appointment/css/app-orange.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/assets/appointment/css/datepicker.css"
        rel="stylesheet"
        type="text/css"
      />

      <header
        className="row headerSection pull_left"
        style={{ width: "99.5%" }}
      >
        <div
          className="row paddingInBoxExtra white"
          style={{
            background: "rgba(0,0,0,0.8)",
            position: "fixed",
            bottom: "0px",
          }}
          id="popup"
        >
          <div className="wrap"></div>
        </div>

        <div className="wrap">
          <div
            className="row borderBottom"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 className="logoSection">
              <Link to="/">
                <img
                  src="/assets/appointment/images/bls-logo.png"
                  alt="BLS Logo"
                  title="BLS Logo"
                />
              </Link>
            </h1>

            <div className="menuIcon">
              <img
                src="/assets/appointment/images/mobicon.png"
                width="20"
                height="20"
                alt="Menu"
              />
            </div>

            <div
              className="paddingInBox paddingRightNone paddingBottomNone mobilebody"
              style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "15px" }}
            >
              <select 
                value={name} 
                onChange={(e) => navigate(`/${e.target.value}/login`)}
                style={{ padding: '5px', borderRadius: '4px' }}
              >
                <option value="app_india">India</option>
                <option value="app_china">China</option>
                <option value="app_russia">Russia</option>
                <option value="app_uae">UAE</option>
              </select>
              
              <div className="padding-sm paddingRightNone paddingTopNone">
                <h3 className="baseColor label" style={{ margin: 0 }}>
                  <img
                    src="/assets/appointment/images/flag.png"
                    style={{ height: "41px", width: "80px", display: "block" }}
                    className="borderAll"
                    alt="Flag"
                  />
                </h3>
                <div className="marginLeft paddingLeft lineheightExtra languges"></div>
              </div>
            </div>
          </div>

          <nav className="navigationPanel">
            <Link to="/">Back to Home</Link>
          </nav>
        </div>
      </header>

      <div className="row innerbodypanel">
        <section className="row aboutUsPanel">
          <div className="wrap">
            <div
              className="col-sm-8 container"
              id="slideup_div"
              style={{ float: "none", margin: "0 auto" }}
            >
              <h1
                className="row fontweightNone alignCenter black marginBottom"
                style={{ textAlign: "center" }}
              >
                Sign in to your account
              </h1>
              <p style={{ textAlign: "center" }}>
                Please enter your username and password to log in.
              </p>

              <div
                className="col-sm-8 container blueBG paddingInBoxExtra roundCornerExtra white"
                style={{ float: "none", margin: "0 auto" }}
              >
                <div className="row font11 paddingBottom marginBottom">
                  <div>
                    Fields marked with{" "}
                    <span style={{ color: "#F00", float: "none" }}>*</span> are
                    mandatory.
                  </div>
                  <div className="pull_right">
                    Kindly fill this form in english only
                  </div>
                </div>

                <div className="auth-content">
                  {error && <div style={{ color: '#ffcccc', backgroundColor: '#cc0000', padding: '10px', borderRadius: '4px', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
                  <form
                    onSubmit={handleLogin}
                    id="thisForm"
                    name="thisForm"
                    noValidate
                  >
                    <div className="col-sm-12 container">
                      <div className="row">
                        <div className="col-sm-4 label">
                          Username/Email{" "}
                          <span style={{ color: "#F00", float: "none" }}>
                            *
                          </span>
                        </div>
                        <div className="col-sm-6">
                          <input
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Valid username or email"
                            required
                            aria-required="true"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-4 label">
                          Password{" "}
                          <span style={{ color: "#F00", float: "none" }}>
                            *
                          </span>
                        </div>
                        <div className="col-sm-6">
                          <input
                            autoComplete="off"
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Valid Password"
                            required
                            aria-required="true"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-4 label"></div>
                        <div className="col-sm-6">
                          <button
                            type="submit"
                            name="action"
                            className="btn btn-block btn-primary"
                            value="valContinue"
                            disabled={loading}
                          >
                            {loading ? 'Logging in...' : 'Login'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="responsive-bootstrap-toolkit">
        <div className="device-xs hidden-sm-up"></div>
        <div className="device-sm hidden-xs-down hidden-md-up"></div>
        <div className="device-md hidden-sm-down hidden-lg-up"></div>
        <div className="device-lg hidden-md-down hidden-xl-up"></div>
        <div className="device-xl hidden-lg-down"></div>
      </div>
    </>
  );
};

export default Login;
