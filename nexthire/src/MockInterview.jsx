import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  History,
  Settings,
  Bell,
  Sparkles,
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Clock3,
  CheckCircle2,
  Mic,
  Send,
  Bot,
  UserRound,
  RotateCcw,
} from "lucide-react";

import "./App.css";
import "./MockInterview.css";

function MockInterview() {
  const [interviewType, setInterviewType] = useState("Internship");
  const [jobRole, setJobRole] = useState("Frontend Developer");
  const [difficulty, setDifficulty] = useState("Medium");
  const [duration, setDuration] = useState("30 minutes");
  const [started, setStarted] = useState(false);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    "Tell me about yourself and your journey into software development.",
    "What is the difference between HTML, CSS, and JavaScript?",
    "Describe a project you worked on and the challenges you faced.",
  ];

  const [questionIndex, setQuestionIndex] = useState(0);

  function startInterview(event) {
    event.preventDefault();
    setStarted(true);
    setQuestionIndex(0);
    setAnswer("");
    setSubmitted(false);
  }

  function submitAnswer(event) {
    event.preventDefault();

    if (!answer.trim()) return;

    // Frontend demo only. Answers are not sent to an AI service.
    setSubmitted(true);
  }

  function nextQuestion() {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((previous) => previous + 1);
      setAnswer("");
      setSubmitted(false);
    } else {
      setStarted(false);
      setQuestionIndex(0);
      setAnswer("");
      setSubmitted(false);
      alert("Demo interview completed!");
    }
  }

  function resetInterview() {
    setStarted(false);
    setQuestionIndex(0);
    setAnswer("");
    setSubmitted(false);
  }

  return (
    <div className="app mock-app">
      <aside className="sidebar">
        <h2 className="logo">
          ✦ Next<span>Hire</span>
        </h2>

        <p className="menu-title">WORKSPACE</p>

        <nav className="navigation">
          <button
            className="nav-item"
            onClick={() => (window.location.hash = "#dashboard")}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button
            className="nav-item"
            onClick={() => (window.location.hash = "#resume-analyzer")}
          >
            <FileText size={20} />
            Resume Analyzer
          </button>

          <button className="nav-item active">
            <MessageSquare size={20} />
            Mock Interview
          </button>

          <button
            className="nav-item"
            onClick={() => (window.location.hash = "#history")}
          >
            <History size={20} />
            Interview History
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <Sparkles size={24} />
            <h3>Ready to level up?</h3>
            <p>Practice smarter and prepare for your dream job.</p>

            <button
              className="upgrade-button"
              onClick={() => {
                if (!started) {
                  document
                    .querySelector(".mock-setup-card")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
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

      <main className="main-content mock-main">
        <header className="topbar">
          <p className="breadcrumb">Workspace / Mock Interview</p>

          <div className="topbar-right">
            <button className="icon-button" aria-label="Notifications">
              <Bell size={20} />
            </button>
            <div className="avatar">H</div>
          </div>
        </header>

        <section className="mock-heading">
          <div>
            <p className="eyebrow">PRACTICE WITH CONFIDENCE</p>
            <h1>Mock Interview <Sparkles size={24} /></h1>
            <p className="subtitle">
              Build confidence through interview practice tailored to your
              career goals.
            </p>
          </div>

          <div className="mock-heading-badge">
            <Mic size={17} />
            Practice mode
          </div>
        </section>

        {!started ? (
          <>
            <section className="mock-hero">
              <div className="mock-hero-content">
                <span className="mock-hero-label">
                  <Sparkles size={14} /> YOUR PERSONAL AI CAREER COACH
                </span>

                <h2>
                  Every great interview
                  <br />
                  starts with <span>practice.</span>
                </h2>

                <p>
                  Choose your interview preferences and get ready to put your
                  skills into words.
                </p>
              </div>

              <div className="mock-hero-art">
                <div className="mock-hero-circle">
                  <MessageSquare size={39} />
                  <Sparkles size={18} />
                </div>
              </div>
            </section>

            <div className="mock-section-heading">
              <div>
                <h2>Set up your interview</h2>
                <p>Personalize your practice session.</p>
              </div>

              <span>STEP 1 OF 2</span>
            </div>

            <form className="mock-setup-card" onSubmit={startInterview}>
              <div className="mock-field">
                <label>Interview type</label>

                <div className="mock-option-grid two-columns">
                  <button
                    type="button"
                    className={`mock-option ${
                      interviewType === "Internship" ? "selected" : ""
                    }`}
                    onClick={() => setInterviewType("Internship")}
                  >
                    <GraduationCap size={23} />
                    <span>
                      <strong>Internship</strong>
                      <small>Prepare for an internship</small>
                    </span>
                    {interviewType === "Internship" && (
                      <CheckCircle2 size={19} className="mock-option-check" />
                    )}
                  </button>

                  <button
                    type="button"
                    className={`mock-option ${
                      interviewType === "Full-time" ? "selected" : ""
                    }`}
                    onClick={() => setInterviewType("Full-time")}
                  >
                    <BriefcaseBusiness size={23} />
                    <span>
                      <strong>Full-time</strong>
                      <small>Prepare for a job</small>
                    </span>
                    {interviewType === "Full-time" && (
                      <CheckCircle2 size={19} className="mock-option-check" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mock-field">
                <label htmlFor="mock-role">Target job role</label>

                <select
                  id="mock-role"
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
                </select>
              </div>

              <div className="mock-field">
                <label>Difficulty level</label>

                <div className="mock-difficulty-grid">
                  {["Easy", "Medium", "Hard"].map((level) => (
                    <button
                      type="button"
                      key={level}
                      className={`mock-difficulty ${
                        difficulty === level ? "selected" : ""
                      }`}
                      onClick={() => setDifficulty(level)}
                    >
                      <span className="mock-difficulty-dot" />
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mock-field">
                <label>Interview duration</label>

                <div className="mock-duration-grid">
                  {["15 minutes", "30 minutes", "45 minutes"].map((time) => (
                    <button
                      type="button"
                      key={time}
                      className={`mock-duration ${
                        duration === time ? "selected" : ""
                      }`}
                      onClick={() => setDuration(time)}
                    >
                      <Clock3 size={17} />
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mock-setup-summary">
                <div className="mock-summary-icon">
                  <Sparkles size={21} />
                </div>

                <div>
                  <strong>Your practice session</strong>
                  <p>
                    {interviewType} · {jobRole} · {difficulty} · {duration}
                  </p>
                </div>
              </div>

              <button type="submit" className="mock-start-button">
                Start practice interview
                <ArrowRight size={18} />
              </button>

              <p className="mock-demo-note">
                This is a frontend demo with sample interview questions.
              </p>
            </form>
          </>
        ) : (
          <section className="mock-interview-room">
            <div className="mock-room-header">
              <div>
                <span className="mock-room-label">PRACTICE SESSION</span>
                <h2>You're doing great. Keep going!</h2>
                <p>
                  {interviewType} · {jobRole} · {difficulty}
                </p>
              </div>

              <button
                type="button"
                className="mock-exit-button"
                onClick={resetInterview}
              >
                <RotateCcw size={16} />
                End session
              </button>
            </div>

            <div className="mock-progress">
              <div className="mock-progress-info">
                <span>
                  Question {questionIndex + 1} of {questions.length}
                </span>
                <span>
                  {Math.round(
                    ((questionIndex + 1) / questions.length) * 100
                  )}
                  % complete
                </span>
              </div>

              <div className="mock-progress-track">
                <div
                  className="mock-progress-fill"
                  style={{
                    width: `${((questionIndex + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="mock-question-card">
              <div className="mock-question-top">
                <div className="mock-bot-icon">
                  <Bot size={25} />
                </div>
                <span>INTERVIEWER</span>
              </div>

              <h3>{questions[questionIndex]}</h3>

              <p>
                Take a moment to think about your answer, then write it below.
              </p>
            </div>

            <form className="mock-answer-card" onSubmit={submitAnswer}>
              <label htmlFor="mock-answer">Your answer</label>

              <textarea
                id="mock-answer"
                rows="6"
                placeholder="Type your answer here..."
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                disabled={submitted}
              />

              {!submitted ? (
                <button
                  type="submit"
                  className="mock-start-button"
                  disabled={!answer.trim()}
                >
                  Submit answer
                  <Send size={17} />
                </button>
              ) : (
                <div className="mock-demo-feedback">
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>Answer saved for this demo</strong>
                    <p>
                      AI evaluation is not connected. You can continue to the
                      next sample question.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="mock-next-button"
                    onClick={nextQuestion}
                  >
                    {questionIndex < questions.length - 1
                      ? "Next question"
                      : "Finish demo"}
                    <ArrowRight size={17} />
                  </button>
                </div>
              )}
            </form>

            <div className="mock-room-footer">
              <UserRound size={17} />
              <span>
                {duration} session · Your answers stay in this demo page only.
              </span>
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

export default MockInterview;