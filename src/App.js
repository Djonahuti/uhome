import React, { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Spinner from "./components/Spinner"; // Import Spinner component

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Education = lazy(() => import("./components/Education"));
const Certificate = lazy(() => import("./components/Certificate"));
const Work = lazy(() => import("./components/Work"));

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => {
      const spinner = document.getElementById("spinner");
      if (spinner) spinner.classList.remove("show");
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case "about":
        return (
          <Suspense fallback={<Spinner message="Loading About..." />}>
            <About setCurrentPage={setCurrentPage} />
          </Suspense>
        );
      case "projects":
        return (
          <Suspense fallback={<Spinner message="Loading Projects..." />}>
            <Projects />
          </Suspense>
        );
      case "contact":
        return (
          <Suspense fallback={<Spinner message="Loading Contact Form..." />}>
            <Contact />
          </Suspense>
        );
      case "education":
        return (
          <Suspense fallback={<Spinner message="Loading Educational Background..." />}>
            <Education />
          </Suspense>
        );
      case "certificate":
        return (
          <Suspense fallback={<Spinner message="Loading Certificates..." />}>
            <Certificate />
          </Suspense>
        );
      case "work":
        return (
          <Suspense fallback={<Spinner message="Loading Job Experience..." />}>
            <Work />
          </Suspense>
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="sb-nav-fixed">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div id="layoutSidenav">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">{renderContent()}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
