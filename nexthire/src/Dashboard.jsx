
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  History,
  Settings,
  Bell,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target,
} from "lucide-react";

import "./App.css";

function Dashboard() {
  function openPage(page) {
    const events = {
      dashboard: "open-dashboard",
      resume: "open-resume-analyzer",
      "mock-interview": "open-mock-interview",
      history: "open-interview-history",
    };

    window.dispatchEvent(new Event(events[page]));
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">
          ✦ Next<span>Hire</span>
        </h2>

        <p className="menu-title">WORKSPACE</p>

        <nav className="navigation">
          <button
            className="nav-item active"
            onClick={() => openPage("dashboard")}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button
            className="nav-item"
            onClick={() => openPage("resume")}
          >
            <FileText size={20} />
            Resume Analyzer
          </button>

          <button
            className="nav-item"
            onClick={() => openPage("mock-interview")}
          >
            <MessageSquare size={20} />
            Mock Interview
          </button>

          <button
            className="nav-item"
            onClick={() => openPage("history")}
          >
            <History size={20} />
            Interview History
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <Sparkles size={24} />

            <h3>Ready to level up?</h3>

            <p>
              Practice smarter and prepare for your dream job.
            </p>

            <button
              className="upgrade-button"
              onClick={() => openPage("mock-interview")}
            >
              Start practicing <ArrowRight size={16} />
            </button>
          </div>

          <button className="nav-item">
            <Settings size={20} />
            Settings
          </button>

          <div className="user-profile">
            <div className="avatar">H</div>

            <div>
              <strong>Hena Ali</strong>
              <p>Free Plan</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <p className="breadcrumb">
            Workspace / Dashboard
          </p>

          <div className="topbar-right">
            <button
              className="icon-button"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>

            <div className="avatar">H</div>
          </div>
        </header>

        <section className="welcome">
          <div>
            <p className="eyebrow">YOUR CAREER JOURNEY</p>

            <h1>
              Welcome back, Hena <span>✦</span>
            </h1>

            <p className="subtitle">
              Your next opportunity is closer than you think.
              Let's get you interview-ready.
            </p>
          </div>

          <button
            className="primary-button"
            onClick={() => openPage("mock-interview")}
          >
            <Sparkles size={18} />
            Start a mock interview
          </button>
        </section>

        <section className="hero">
          <div className="hero-content">
            <span className="hero-label">
              ✦ YOUR PERSONAL AI CAREER COACH
            </span>

            <h2>
              Practice with confidence.
              <br />
              <span>Get hired with NextHire.</span>
            </h2>

            <p>
              Analyze your resume, sharpen your answers,
              and prepare for your dream role.
            </p>

            <button
              className="hero-button"
              onClick={() => openPage("mock-interview")}
            >
              Start practicing <ArrowRight size={18} />
            </button>
          </div>

          <div className="hero-illustration">
            <div className="hero-circle">
              <Sparkles size={55} />
            </div>

            <div className="floating-badge">
              <TrendingUp size={18} />
              Keep improving!
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon purple">
              <MessageSquare size={22} />
            </div>

            <p>Interviews practiced</p>
            <h2>12</h2>
            <span>Keep building confidence</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <Target size={22} />
            </div>

            <p>Average interview score</p>
            <h2>82%</h2>
            <span>Review your performance</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <TrendingUp size={22} />
            </div>

            <p>Practice hours</p>
            <h2>4.5 hrs</h2>
            <span>Every session counts</span>
          </div>
        </section>

        <section className="tools-section">
          <div className="section-heading">
            <div>
              <h2>Tools to help you succeed</h2>
              <p>
                Your personal toolkit for interview preparation.
              </p>
            </div>
          </div>

          <div className="tools-grid">
            <article className="tool-card">
              <div className="tool-icon purple">
                <FileText size={25} />
              </div>

              <span className="tool-label">AI POWERED</span>

              <h3>Resume Analyzer</h3>

              <p>
                Analyze your resume and discover strengths
                and areas for improvement.
              </p>

              <button
                className="text-button"
                onClick={() => openPage("resume")}
              >
                Analyze my resume <ArrowRight size={17} />
              </button>
            </article>

            <article className="tool-card">
              <div className="tool-icon green">
                <MessageSquare size={25} />
              </div>

              <span className="tool-label">PRACTICE MODE</span>

              <h3>Mock Interview</h3>

              <p>
                Practice interview questions and improve
                your communication skills.
              </p>

              <button
                className="text-button"
                onClick={() => openPage("mock-interview")}
              >
                Start an interview <ArrowRight size={17} />
              </button>
            </article>
          </div>
        </section>

        <footer className="footer">
          © 2026 NextHire. Built for your next big opportunity.
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
