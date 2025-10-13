import React from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <>
      <nav className="sb-topnav navbar navbar-expand">
        {/* Navbar-Brand */}
        <a className="navbar-brand ps-3 text-gradient" href="#!" onClick={() => setCurrentPage("home")}>
          U Home
        </a>
        {/* Sidebar Toggle*/}
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars"></i>
        </button>
        {/* Navbar Search*/}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group dav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              <li className="nav-item">
                <a
                  className={`nav-link ${currentPage === "home" ? "active-link" : ""}`}
                  href="#home"
                  onClick={() => setCurrentPage("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${currentPage === "about" ? "active-link" : ""}`}
                  href="#about"
                  onClick={() => setCurrentPage("about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${currentPage === "work" ? "active-link" : ""}`}
                  href="#work"
                  onClick={() => setCurrentPage("work")}
                >
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${currentPage === "education" ? "active-link" : ""}`}
                  href="#education"
                  onClick={() => setCurrentPage("education")}
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${currentPage === "certificate" ? "active-link" : ""}`}
                  href="#certificate"
                  onClick={() => setCurrentPage("certificate")}
                >
                  Certificates
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${currentPage === "projects" ? "active-link" : ""}`}
                  href="#projects"
                  onClick={() => setCurrentPage("projects")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${currentPage === "contact" ? "active-link" : ""}`}
                  href="#contact"
                  onClick={() => setCurrentPage("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </form>
        {/* Navbar */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
