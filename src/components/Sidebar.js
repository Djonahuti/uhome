import React from "react";

function Sidebar({ currentPage, setCurrentPage }) {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion" id="sidenavAccordion">
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: `url(assets/biglap.jpg)` }}
            ></div>
            <h1 id="my-info">
              <a href="https://www.uhome.com.ng">David Utibe Jonah</a>
            </h1>
            <span className="pow">
              <a href="https://www.uhome.com.ng">WEB DEVELOPER</a><small className="dav-fs"> from Nigeria</small>
            </span>
          </div>
          <div className="sb-sidenav-menu">
            <div className="nav">
              <ul>
                <li>
                  <a
                    href="#home"
                    onClick={() => setCurrentPage("home")}
                    data-nav-section="home"
                    className={currentPage === "home" ? "active-link" : ""}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => setCurrentPage("about")}
                    data-nav-section="about"
                    className={currentPage === "about" ? "active-link" : ""}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    onClick={() => setCurrentPage("work")}
                    data-nav-section="work"
                    className={currentPage === "work" ? "active-link" : ""}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    onClick={() => setCurrentPage("education")}
                    data-nav-section="education"
                    className={currentPage === "education" ? "active-link" : ""}
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#certificate"
                    onClick={() => setCurrentPage("certificate")}
                    data-nav-section="cerificate"
                    className={currentPage === "certificate" ? "active-link" : ""}
                  >
                    Certificates
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={() => setCurrentPage("projects")}
                    data-nav-section="work"
                    className={currentPage === "projects" ? "active-link" : ""}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setCurrentPage("contact")}
                    data-nav-section="contact"
                    className={currentPage === "contact" ? "active-link" : ""}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <p>
              <small>
                &copy;Copyright U Home 2018 All rights reserved. Made
                with <i className="bi bi-heart-fill" aria-hidden="true" style={{ color: "orange" }}></i> by
                <a href="#!"> David Utibe Jonah</a>
              </small>
            </p>
            <ul>
              <li>
                <a className="text-gradient" href="#!">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li>
                <a
                  className="text-gradient"
                  href="https://github.com/Djonahuti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a
                  className="text-gradient"
                  href="https://www.linkedin.com/in/david-utibe-jonah-482210234/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;