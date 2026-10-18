import {useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import ResumeAnalyzer from "./ResumeAnalyzer";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  useEffect(() => {
  const openResume = () => setCurrentPage("resume");

  window.addEventListener("open-resume-analyzer", openResume);

  return () => {
    window.removeEventListener("open-resume-analyzer", openResume);
  };
}, []);

  function handleLogin() {
    setCurrentPage("dashboard");
  }

  function handleSignup() {
    setCurrentPage("signup");
  }

  if (currentPage === "signup") {
    return (
      <Signup
        onLogin={() => setCurrentPage("login")}
        onSignup={handleLogin}
      />
    );
  }

  if (currentPage === "resume") {
    return <ResumeAnalyzer />;
  }

  if (currentPage === "dashboard") {
    return <Dashboard />;
  }

  return (
    <Login
      onLogin={handleLogin}
      onSignup={handleSignup}
    />
  );
}

export default App;