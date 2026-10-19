import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  History,
  Settings,
  Bell,
  UserRound,
  UploadCloud,
  FileCheck2,
  X,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BriefcaseBusiness,
  GraduationCap,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import "./App.css";
import "./ResumeAnalyzer.css";

function ResumeAnalyzer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobRole, setJobRole] = useState("Frontend Developer");
  const [experience, setExperience] = useState("Fresher");
  const [dragging, setDragging] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState("");

  function openPage(page) {
    if (page === "mock-interview") {
      window.dispatchEvent(new Event("open-mock-interview"));
    } else if (page === "dashboard") {
      window.dispatchEvent(new Event("open-dashboard"));
    } else if (page === "resume") {
      window.dispatchEvent(new Event("open-resume-analyzer"));
    } else {
      window.dispatchEvent(new Event("open-interview-history"));
    }
  }

  function handleFile(file) {
    setError("");
    setShowPreview(false);

    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file only.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10 MB.");
      return;
    }

    setSelectedFile(file);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!selectedFile) {
      setError("Please upload your resume before continuing.");
      return;
    }

    setError("");
    setShowPreview(true);
  }

  function removeFile() {
    setSelectedFile(null);
    setShowPreview(false);
    setError("");
  }

  return (
    <div className="app resume-app">
      <aside className="sidebar">
        <h2 className="logo">
          ✦ Next<span>Hire</span>
        </h2>

        <p className="menu-title">WORKSPACE</p>

        <nav className="navigation">
          <button
            className="nav-item"
            onClick={() => openPage("dashboard")}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button className="nav-item active">
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

      <main className="main-content resume-main">
        <header className="topbar">
          <p className="breadcrumb">
            Workspace / Resume Analyzer
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

        <section className="resume-heading">
          <div>
            <p className="eyebrow">YOUR CAREER TOOLKIT</p>

            <h1>
              Resume Analyzer <Sparkles size={24} />
            </h1>

            <p className="subtitle">
              Make your resume stand out and take one step closer to
              your dream job.
            </p>
          </div>

          <div className="resume-private-badge">
            <ShieldCheck size={17} />
            PDF only · Up to 10 MB
          </div>
        </section>

        <section className="resume-hero">
          <div className="resume-hero-content">
            <span className="resume-hero-label">
              <Sparkles size={14} /> YOUR NEXT OPPORTUNITY
            </span>

            <h2>
              Your experience deserves
              <br />
              to be noticed.
            </h2>

            <p>
              Prepare your resume for your target role with a clear,
              structured review experience.
            </p>
          </div>

          <div className="resume-hero-art">
            <div className="resume-document-art">
              <FileText size={43} />
              <span className="document-line long" />
              <span className="document-line" />
              <span className="document-line short" />

              <div className="document-check">
                <CheckCircle2 size={23} />
              </div>
            </div>

            <div className="resume-floating-sparkle">
              <Sparkles size={22} />
            </div>
          </div>
        </section>

        <div className="resume-section-heading">
          <div>
            <h2>Start with your resume</h2>
            <p>
              Upload your document and tell us about your target role.
            </p>
          </div>

          <span className="resume-step-label">STEP 1 OF 2</span>
        </div>

        <form className="resume-form" onSubmit={handleSubmit}>
          <section className="resume-card">
            <div className="resume-card-title">
              <div className="resume-card-icon">
                <UploadCloud size={22} />
              </div>

              <div>
                <h3>Upload your resume</h3>
                <p>Choose the latest version of your resume.</p>
              </div>
            </div>

            {!selectedFile ? (
              <div
                className={`resume-dropzone ${
                  dragging ? "dragging" : ""
                }`}
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(event) => {
                  event.preventDefault();
                  setDragging(false);
                  handleFile(event.dataTransfer.files[0]);
                }}
              >
                <input
                  id="resume-file-input"
                  className="resume-file-input"
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={(event) =>
                    handleFile(event.target.files[0])
                  }
                />

                <label
                  htmlFor="resume-file-input"
                  className="resume-upload-icon"
                >
                  <UploadCloud size={28} />
                </label>

                <h4>Drop your resume here</h4>

                <p>
                  or{" "}
                  <label
                    htmlFor="resume-file-input"
                    className="resume-browse-link"
                  >
                    browse files
                  </label>{" "}
                  from your device
                </p>

                <span>
                  PDF format only · Maximum file size 10 MB
                </span>
              </div>
            ) : (
              <div className="resume-selected-file">
                <div className="resume-file-icon">
                  <FileCheck2 size={25} />
                </div>

                <div className="resume-file-details">
                  <strong>{selectedFile.name}</strong>

                  <span>
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    {" "}· PDF document
                  </span>
                </div>

                <button
                  type="button"
                  className="resume-remove-file"
                  onClick={removeFile}
                  aria-label="Remove selected resume"
                >
                  <X size={19} />
                </button>
              </div>
            )}
          </section>

          <section className="resume-card">
            <div className="resume-card-title">
              <div className="resume-card-icon">
                <BriefcaseBusiness size={22} />
              </div>

              <div>
                <h3>Tell us about your target role</h3>
                <p>
                  Customize the resume review for your career goal.
                </p>
              </div>
            </div>

            <div className="resume-field">
              <label htmlFor="jobRole">Target job role</label>

              <select
                id="jobRole"
                value={jobRole}
                onChange={(event) => setJobRole(event.target.value)}
              >
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Java Developer</option>
                <option>Software Engineer</option>
                <option>Data Analyst</option>
                <option>UI/UX Designer</option>
                <option>Other</option>
              </select>
            </div>

            <div className="resume-field">
              <label>Experience level</label>

              <div className="resume-experience-options">
                <button
                  type="button"
                  className={`resume-experience-option ${
                    experience === "Student" ? "selected" : ""
                  }`}
                  onClick={() => setExperience("Student")}
                >
                  <GraduationCap size={20} />
                  <span>Student</span>
                </button>

                <button
                  type="button"
                  className={`resume-experience-option ${
                    experience === "Fresher" ? "selected" : ""
                  }`}
                  onClick={() => setExperience("Fresher")}
                >
                  <UserRound size={20} />
                  <span>Fresher</span>
                </button>

                <button
                  type="button"
                  className={`resume-experience-option ${
                    experience === "Experienced" ? "selected" : ""
                  }`}
                  onClick={() => setExperience("Experienced")}
                >
                  <BriefcaseBusiness size={20} />
                  <span>Experienced</span>
                </button>
              </div>
            </div>

            <div className="resume-note">
              <Clock3 size={17} />

              <p>
                This preview uses sample UI feedback. Actual resume
                analysis will be connected separately.
              </p>
            </div>

            {error && (
              <p className="resume-error" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="resume-analyze-button"
            >
              <Sparkles size={18} />
              Preview analysis screen
              <ArrowRight size={18} />
            </button>
          </section>
        </form>

        {showPreview && (
          <section className="resume-preview-results">
            <div className="resume-preview-heading">
              <div>
                <span className="resume-results-label">
                  DESIGN PREVIEW
                </span>

                <h2>Resume review preview</h2>

                <p>
                  {selectedFile.name} · {jobRole} · {experience}
                </p>
              </div>

              <span className="resume-demo-badge">
                Sample data
              </span>
            </div>

            <div className="resume-preview-grid">
              <article className="resume-score-card">
                <span>Resume score</span>
                <strong>
                  78<span>/100</span>
                </strong>
                <p>Sample score for the UI preview</p>
              </article>

              <article className="resume-result-card">
                <CheckCircle2 size={23} />
                <h3>Strengths</h3>
                <p>
                  Highlight relevant projects, technical skills, and
                  measurable achievements.
                </p>
              </article>

              <article className="resume-result-card">
                <Sparkles size={23} />
                <h3>Areas to improve</h3>
                <p>
                  Tailor your experience to the target role and use
                  clear, specific bullet points.
                </p>
              </article>
            </div>
          </section>
        )}

        <footer className="footer">
          © 2026 NextHire. Built for your next big opportunity.
        </footer>
      </main>
    </div>
  );
}

export default ResumeAnalyzer;