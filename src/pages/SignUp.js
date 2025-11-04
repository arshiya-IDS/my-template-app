import React, { useState } from "react";

export default function SignUp() {
  // ✅ Define states INSIDE the component
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url(./assets/images/login-bg.webp)",
        height: "700px",
      }}
    >
      <div className="row">
        <div className="col-sm-3"></div>

        <div className="col-md-6 mt-5">
          <div className="login-section">
            <h2 className="sign-heading pt-4">Sign up</h2>

            <h6 className="login-w-icon text-center mt-4 mb-4">
              Login with Sign up
            </h6>

            <div className="socials-icons mb-2 mt-4">
              <div className="iconss">
                <a href="">
                  <img src="./assets/images/google.svg" alt="Google" />
                </a>
              </div>

              <div className="iconss">
                <a href="">
                  <img src="./assets/images/facebook.svg" alt="Facebook" />
                </a>
              </div>

              <div className="iconss">
                <a href="">
                  <img src="./assets/images/linkin.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>

            <h6 className="login-w-icon text-center mt-4 mb-4">
              Or Login with Email
            </h6>

            <form action="/action_page.php" style={{ paddingBottom: "40px" }}>
              <div className="form-groups mb-3">
                <input
                  type="text"
                  className="form-controls"
                  placeholder="User name, Email address, Mobile number"
                  name="email"
                  required
                />
              </div>

              {/* Password field */}
              <div className="form-groups mb-2">
                <input
                  type={showPassword1 ? "text" : "password"}
                  className="form-controls"
                  placeholder="Password"
                  id="inputPassword1"
                  name="password"
                />
                <div className="hide-pass">
                  <img
                    src="./assets/images/hide.svg"
                    className="hide-eye"
                    onClick={() => setShowPassword1(!showPassword1)}
                    alt="toggle password"
                  />
                </div>
              </div>

              {/* Confirm Password field */}
              <div className="form-groups mb-2">
                <input
                  type={showPassword2 ? "text" : "password"}
                  className="form-controls"
                  placeholder="Confirm Password"
                  id="inputConfirmPassword"
                  name="confirmPassword"
                />
                <div className="hide-pass">
                  <img
                    src="./assets/images/hide.svg"
                    className="hide-eye"
                    onClick={() => setShowPassword2(!showPassword2)}
                    alt="toggle confirm password"
                  />
                </div>
              </div>

              <div className="login-bt">
                <button
                  type="button"
                  className="btn btn-forgot btn-lg btn-block"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}
