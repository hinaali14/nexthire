import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  BriefcaseBusiness,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import "./Login.css";

function Login({ onLogin, onSignup }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (onLogin) {
      onLogin({
        email: email.trim(),
        rememberMe,
      });
    }
  }

  return (
    <main className="login-page">
      <section className="login-brand-panel">
        <a className="login-logo" href="#home">
          <span className="logo-symbol">
            <BriefcaseBusiness size={23} />
          </span>
          NextHire
        </a>

        <div className="brand-content">
          <span className="brand-tag">
            <Sparkles size={15} />
            YOUR AI CAREER PARTNER
          </span>

          <h1>
            Your next big
            <br />
            opportunity
            <br />
            <span>starts here.</span>
          </h1>

          <p>
            Prepare smarter, practice confidently, and take
            the next step toward your dream career.
          </p>

          <div className="brand-feature">
            <div className="feature-icon">
              <ShieldCheck size={21} />
            </div>

            <div>
              <strong>Your career journey, simplified.</strong>
              <p>One platform. More confidence.</p>
            </div>
          </div>
        </div>

        <div className="brand-footer">
          © 2026 NextHire. Built for your next opportunity.
        </div>

        <div className="decorative-circle circle-one" />
        <div className="decorative-circle circle-two" />
      </section>

      <section className="login-form-panel">
        <div className="login-form-container">
          <div className="mobile-logo">
            <BriefcaseBusiness size={22} />
            NextHire
          </div>

          <div className="form-heading">
            <span className="form-eyebrow">WELCOME BACK</span>

            <h2>Sign in to your account</h2>

            <p>
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="login-email">Email address</label>

              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <div className="password-label-row">
                <label htmlFor="login-password">Password</label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    setError(
                      "Password recovery will be available after account setup."
                    )
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="password-input-wrapper">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            <label className="remember-row">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <span>Remember me</span>
            </label>

            {error && (
              <p className="login-error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="sign-in-button">
              Sign in
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="signup-prompt">
            Don't have an account?{" "}
            <button type="button" onClick={onSignup}>
              Create account
            </button>
          </div>

          <div className="secure-note">
            <ShieldCheck size={16} />
            Your career journey starts with one step.
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;