import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url('./assets/images/login-bg.webp')",
        height: "700px"
      }}
    >
      <div className="row">
        <div className="col-sm-3"></div>

        <div className="col-md-6 mt-5">
          <div className="login-section">
            <h2 className="text-center pt-4" style={{ fontWeight: "bold" }}>
              Login
            </h2>

            <h6 className="login-w-icon text-center mt-4 mb-4">
              Login with Socials
            </h6>

            <div className="socials-icons mb-2 mt-4 d-flex justify-content-center">
              <div className="iconss mx-2">
                <a href="#">
                  <img src="./assets/images/google.svg" alt="Google" />
                </a>
              </div>
              <div className="iconss mx-2">
                <a href="#">
                  <img src="./assets/images/facebook.svg" alt="Facebook" />
                </a>
              </div>
              <div className="iconss mx-2">
                <a href="#">
                  <img src="./assets/images/linkin.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>

            <h6 className="login-w-icon text-center mt-4 mb-4">
              Or Login with Email
            </h6>

            <form style={{ paddingBottom: "40px" }}>
              <div className="form-groups mb-2">
                <input
                  type="text"
                  className="form-controls"
                  placeholder="User name, Email address, Mobile number"
                  name="email"
                  required
                />
              </div>

              <div className="form-groups d-flex align-items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-controls"
                  placeholder="Password"
                  id="inputPassword"
                  name="text2"
                />
                <div className="hide-pass ms-2">
                  <img
                    src="./assets/images/hide.svg"
                    className="hide-eye"
                    onClick={togglePassword}
                    alt="Toggle Password"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>

              <div className="register-page-link d-flex justify-content-between w-100 pl-5 mt-3">
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label ms-1"
                    htmlFor="flexCheckDefault"
                  >
                    Remember Me
                  </label>
                </div>

                <a href="#">
                  <p className="forgot">Forgot Password?</p>
                </a>
              </div>

              <div className="login-bt mt-3">
                <button
                  type="button"
                  className="btn btn-forgot btn-lg btn-block"
                >
                  Login
                </button>

                <a href="./signup.html">
                  <p className="create-an-account mt-2">Create an Account</p>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="col-sm-3"></div>
      </div>
    </div>
  );
};

export default Login;
