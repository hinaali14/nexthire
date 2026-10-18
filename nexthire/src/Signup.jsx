import { useState } from "react";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import "./Signup.css";

function Signup({ onLogin, onSignup }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSuccess(true);
  }

  return (
    <div className="signup-page">
      <section className="signup-visual">
        <div className="signup-brand">
          <div className="signup-brand-icon">
            <Sparkles size={22} />
          </div>

          <span>
            Next<span className="signup-brand-highlight">Hire</span>
          </span>
        </div>

        <div className="signup-visual-content">
          <span className="signup-eyebrow">
            YOUR FUTURE STARTS HERE
          </span>

          <h1>
            Take the next step
            <br />
            toward your <span>dream career.</span>
          </h1>

          <p>
            Build confidence, sharpen your interview skills,
            and get ready for your next big opportunity.
          </p>

          <div className="signup-benefits">
            <div>
              <CheckCircle2 size={20} />
              <span>Personalized interview practice</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Resume improvement insights</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Track your preparation progress</span>
            </div>
          </div>
        </div>

        <div className="signup-visual-footer">
          Small steps today. Big opportunities tomorrow.
        </div>
      </section>

      <section className="signup-form-section">
        <div className="signup-form-wrapper">
          <div className="signup-mobile-brand">
            <Sparkles size={21} />
            <span>NextHire</span>
          </div>

          {!success ? (
            <>
              <div className="signup-heading">
                <span className="signup-welcome">GET STARTED FOR FREE</span>

                <h2>Create your account</h2>

                <p>
                  Start your journey toward interview success.
                </p>
              </div>

              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="signup-field">
                  <label htmlFor="fullName">Full name</label>

                  <div className="signup-input-wrapper">
                    <UserRound size={19} />

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                  </div>
                </div>

                <div className="signup-field">
                  <label htmlFor="email">Email address</label>

                  <div className="signup-input-wrapper">
                    <Mail size={19} />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="signup-field">
                  <label htmlFor="password">Password</label>

                  <div className="signup-input-wrapper">
                    <LockKeyhole size={19} />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="new-password"
                    />

                    <button
                      type="button"
                      className="signup-eye-button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="signup-field">
                  <label htmlFor="confirmPassword">
                    Confirm password
                  </label>

                  <div className="signup-input-wrapper">
                    <LockKeyhole size={19} />

                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Enter your password again"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      autoComplete="new-password"
                    />

                    <button
                      type="button"
                      className="signup-eye-button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="signup-error" role="alert">
                    {error}
                  </p>
                )}

                <button className="signup-submit-button" type="submit">
                  Create account
                  <ArrowRight size={18} />
                </button>
              </form>

              <p className="signup-login-text">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    if (onLogin) {
                      onLogin();
                    } else {
                      setError("Login navigation is not connected yet.");
                    }
                  }}
                >
                  Log in
                </button>
              </p>

              <p className="signup-terms">
                By continuing, you agree to our Terms of Service
                and Privacy Policy.
              </p>
            </>
          ) : (
            <div className="signup-success">
              <div className="signup-success-icon">
                <CheckCircle2 size={38} />
              </div>

              <h2>You're all set!</h2>

              <p>
                Your signup form looks good. Account creation is
                currently a frontend demo and has not saved your account.
              </p>

              <button
                className="signup-submit-button"
                type="button"
                onClick={() => {
                  if (onLogin) {
                    onLogin();
                  } else {
                    setSuccess(false);
                  }
                }}
              >
                Back to login
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Signup;