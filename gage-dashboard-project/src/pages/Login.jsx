import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showSSO, setShowSSO] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSSO(true);
    }
  };

  return (
    <div className="d-flex vh-100 vw-100">
      {/* Left Panel */}
      <div className="d-flex flex-column justify-content-center align-items-center text-center w-50 bg-success-subtle">
        <h1 className="display-1 fw-bold text-success">G.A.G.E.</h1>
        <h5 className="text-success-emphasis mt-3">Grow Above Green Energy</h5>
      </div>

      {/* Right Panel */}
      <div className="d-flex justify-content-center align-items-center w-50 bg-white">
        <form 
          onSubmit={handleLogin} 
          className="p-4 shadow rounded" 
          style={{ width: '100%', maxWidth: '400px' }}
        >
          <h3 className="mb-4 text-center">Log in to continue</h3>

          {!showSSO ? (
            <>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              <div className="mb-3 text-end">
                <a href="#" className="text-danger small">Forgot your Password?</a>
              </div>

              <button type="submit" className="btn btn-success w-100">
                LOG IN
              </button>
            </>
          ) : (
            <>
              <p className="mb-4">
                For a secure login, you will be redirected to a single-sign on page for logging into GAGE Dashboard.
              </p>
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={() => {
                  console.log("Redirecting to SSO...");
                  // window.location.href = "https://your-sso-provider.com/auth";
                }}
              >
                LOGIN VIA SSO
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
