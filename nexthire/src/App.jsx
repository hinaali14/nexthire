
import { useEffect, useState } from "react";

import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import ResumeAnalyzer from "./ResumeAnalyzer";
import MockInterview from "./MockInterview";
import InterviewHistory from "./InterviewHistory";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  useEffect(() => {
    function openDashboard() {
      setCurrentPage("dashboard");
    }

    function openResume() {
      setCurrentPage("resume");
    }

    function openMockInterview() {
      setCurrentPage("mock-interview");
    }

    function openHistory() {
      setCurrentPage("history");
    }

    window.addEventListener("open-dashboard", openDashboard);
    window.addEventListener("open-resume-analyzer", openResume);
    window.addEventListener("open-mock-interview", openMockInterview);
    window.addEventListener("open-interview-history", openHistory);

    return () => {
      window.removeEventListener("open-dashboard", openDashboard);
      window.removeEventListener("open-resume-analyzer", openResume);
      window.removeEventListener("open-mock-interview", openMockInterview);
      window.removeEventListener("open-interview-history", openHistory);
    };
  }, []);

  function handleLogin() {
    setCurrentPage("dashboard");
  }

  function handleSignup() {
    setCurrentPage("signup");
  }

  if (currentPage === "login") {
    return (
      <Login
        onLogin={handleLogin}
        onSignup={handleSignup}
      />
    );
  }

  if (currentPage === "signup") {
    return (
      <Signup
        onLogin={() => setCurrentPage("login")}
        onSignup={handleLogin}
      />
    );
  }

  if (currentPage === "dashboard") {
    return <Dashboard />;
  }

  if (currentPage === "resume") {
    return <ResumeAnalyzer />;
  }

  if (currentPage === "mock-interview") {
    return <MockInterview />;
  }

  if (currentPage === "history") {
    return <InterviewHistory />;
  }

  return (
    <Login
      onLogin={handleLogin}
      onSignup={handleSignup}
    />
  );
}

export default App;
