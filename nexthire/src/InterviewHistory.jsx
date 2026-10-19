import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  History,
  Search,
  CalendarDays,
  Clock3,
  Trophy,
  TrendingUp,
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";

import "./InterviewHistory.css";

const sampleInterviews = [
  {
    id: 1,
    role: "Frontend Developer",
    type: "Internship",
    date: "Oct 18, 2026",
    duration: "25 min",
    score: 85,
  },
  {
    id: 2,
    role: "Java Developer",
    type: "Full-Time",
    date: "Oct 15, 2026",
    duration: "30 min",
    score: 78,
  },
  {
    id: 3,
    role: "React Developer",
    type: "Internship",
    date: "Oct 12, 2026",
    duration: "20 min",
    score: 92,
  },
];

function InterviewHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedInterview, setSelectedInterview] = useState(null);

  const filteredInterviews = sampleInterviews.filter((interview) => {
    const matchesSearch = interview.role
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "All" || interview.type === filter;

    return matchesSearch && matchesFilter;
  });

  const averageScore = Math.round(
    sampleInterviews.reduce(
      (total, interview) => total + interview.score,
      0
    ) / sampleInterviews.length
  );

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
    <div className="history-layout">
      <aside className="history-sidebar">
        <div className="history-brand">
          <span className="brand-star">✦</span>
          <span>NextHire</span>
        </div>

        <p className="history-sidebar-label">WORKSPACE</p>

        <nav className="history-navigation">
          <button onClick={() => openPage("dashboard")}>
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </button>

          <button onClick={() => openPage("resume")}>
            <FileText size={19} />
            <span>Resume Analyzer</span>
          </button>

          <button onClick={() => openPage("mock-interview")}>
            <MessageSquare size={19} />
            <span>Mock Interview</span>
          </button>

          <button
            className="active"
            onClick={() => openPage("history")}
          >
            <History size={19} />
            <span>Interview History</span>
          </button>
        </nav>

        <div className="history-sidebar-card">
          <div className="sidebar-card-icon">✦</div>
          <h3>Ready to level up?</h3>
          <p>
            Practice regularly and keep improving your interview skills.
          </p>

          <button onClick={() => openPage("mock-interview")}>
            Start practicing <ArrowRight size={15} />
          </button>
        </div>

        <div className="history-sidebar-footer">
          Your next big opportunity starts here.
        </div>
      </aside>

      <main className="history-main">
        <header className="history-topbar">
          <div>
            <p className="history-eyebrow">YOUR PROGRESS</p>
            <h1>Interview History</h1>
            <p className="history-subtitle">
              Review your practice sessions and track your growth.
            </p>
          </div>

          <button
            className="history-start-button"
            onClick={() => openPage("mock-interview")}
          >
            <MessageSquare size={17} />
            New Interview
          </button>
        </header>

        <section className="history-stats">
          <div className="history-stat-card">
            <div className="history-stat-top">
              <span>Total Interviews</span>
              <div className="history-stat-icon purple">
                <History size={20} />
              </div>
            </div>
            <h2>{sampleInterviews.length}</h2>
            <p>Sample practice sessions</p>
          </div>

          <div className="history-stat-card">
            <div className="history-stat-top">
              <span>Average Score</span>
              <div className="history-stat-icon blue">
                <TrendingUp size={20} />
              </div>
            </div>
            <h2>{averageScore}%</h2>
            <p>Across sample sessions</p>
          </div>

          <div className="history-stat-card">
            <div className="history-stat-top">
              <span>Completed</span>
              <div className="history-stat-icon green">
                <Trophy size={20} />
              </div>
            </div>
            <h2>{sampleInterviews.length}</h2>
            <p>Sample completed sessions</p>
          </div>
        </section>

        <section className="history-list-section">
          <div className="history-list-heading">
            <div>
              <h2>Previous Interviews</h2>
              <p>Your recent interview practice sessions.</p>
            </div>

            <span className="history-count">
              {filteredInterviews.length} sessions
            </span>
          </div>

          <div className="history-toolbar">
            <div className="history-search">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search by job role..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>

            <div className="history-filter">
              <BriefcaseBusiness size={17} />

              <select
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                aria-label="Filter by interview type"
              >
                <option value="All">All Types</option>
                <option value="Internship">Internship</option>
                <option value="Full-Time">Full-Time</option>
              </select>
            </div>
          </div>

          <div className="history-table">
            <div className="history-table-header">
              <span>INTERVIEW</span>
              <span>DATE & DURATION</span>
              <span>SCORE</span>
              <span>ACTION</span>
            </div>

            {filteredInterviews.map((interview) => (
              <div className="history-row" key={interview.id}>
                <div className="history-role-cell">
                  <div className="history-role-icon">
                    <BriefcaseBusiness size={19} />
                  </div>

                  <div>
                    <h3>{interview.role}</h3>
                    <span>{interview.type}</span>
                  </div>
                </div>

                <div className="history-date-cell">
                  <p>
                    <CalendarDays size={15} />
                    {interview.date}
                  </p>
                  <span>
                    <Clock3 size={14} />
                    {interview.duration}
                  </span>
                </div>

                <div className="history-score-cell">
                  <strong>{interview.score}%</strong>
                  <div className="history-score-track">
                    <div
                      className="history-score-fill"
                      style={{ width: `${interview.score}%` }}
                    />
                  </div>
                </div>

                <div>
                  <button
                    className="history-view-button"
                    onClick={() => setSelectedInterview(interview)}
                  >
                    View <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}

            {filteredInterviews.length === 0 && (
              <div className="history-empty">
                <Search size={28} />
                <h3>No interviews found</h3>
                <p>Try another search or change your filter.</p>
              </div>
            )}
          </div>
        </section>

        <footer className="history-footer">
          <span>© 2026 NextHire</span>
          <span>Keep learning. Keep growing.</span>
        </footer>
      </main>

      {selectedInterview && (
        <div
          className="history-modal-overlay"
          onClick={() => setSelectedInterview(null)}
        >
          <section
            className="history-modal"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="history-modal-close"
              onClick={() => setSelectedInterview(null)}
            >
              ×
            </button>

            <div className="history-modal-icon">
              <Trophy size={25} />
            </div>

            <p className="history-eyebrow">INTERVIEW DETAILS</p>
            <h2>{selectedInterview.role}</h2>

            <div className="history-modal-score">
              {selectedInterview.score}%
              <span>Sample score</span>
            </div>

            <div className="history-modal-details">
              <p>
                <strong>Interview type</strong>
                <span>{selectedInterview.type}</span>
              </p>

              <p>
                <strong>Date</strong>
                <span>{selectedInterview.date}</span>
              </p>

              <p>
                <strong>Duration</strong>
                <span>{selectedInterview.duration}</span>
              </p>
            </div>

            <p className="history-demo-note">
              These are sample records. Real interview history will require
              backend and database integration.
            </p>

            <button
              className="history-start-button history-modal-button"
              onClick={() => setSelectedInterview(null)}
            >
              Close Details
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export default InterviewHistory;