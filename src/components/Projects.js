import React, { useState, useEffect, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Isotope from "isotope-layout"; // Import Isotope
import { projects } from "../utils/projectdata";

function Projects() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [filterKey, setFilterKey] = useState("*"); // State to manage the active filter
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [modalContent, setModalContent] = useState({}); // State to hold modal content
  const [viewCounts, setViewCounts] = useState({}); // State to hold view counts
  const isotope = useRef(); // Ref for Isotope instance

  // Scroll Button
  useEffect(() => {
    const handleScroll = () => {
      const isPageScrolled = window.scrollY > 0;
      const isBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 1;

      setIsScrolled(isPageScrolled);
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  // Initialize Isotope
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });
    // Cleanup on unmount
    return () => isotope.current.destroy();
  }, []);

  // Apply filter based on the selected filter key
  useEffect(() => {
    if (filterKey === "*") {
      isotope.current.arrange({ filter: "*" });
    } else {
      isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  // Handle filter click
  const handleFilterClick = (key) => {
    setFilterKey(key);
  };

  // Handle share icon click to show modal
  const handleShareClick = (project) => {
    setModalContent(project);
    setShowModal(true);
  };

  // Handle view count increment
  const handleViewClick = (projectId) => {
    setViewCounts((prevCounts) => ({
      ...prevCounts,
      [projectId]: (prevCounts[projectId] || 0) + 1,
    }));
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="dav-my-5">
      <div className="container-xxl py-6 pt-5" id="project">
        <div className="container">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
            <div className="row g-5 mb-5 align-items-center">
              <div className="col-lg-4 col-md-4 col-xs-4">
                <h1 className="display-5 mb-0">My Projects</h1>
              </div>
              <div className="col-lg-8 col-md-8 col-xs-8 text-lg-end">
                <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                  <li
                    className={`mx-3 ${filterKey === "*" ? "active" : ""}`}
                    onClick={() => handleFilterClick("*")}
                  >
                    All Projects
                  </li>
                  <li
                    className={`mx-3 ${filterKey === "php" ? "active" : ""}`}
                    onClick={() => handleFilterClick("php")}
                  >
                    PHP
                  </li>
                  <li
                    className={`mx-3 ${filterKey === "reactjs" ? "active" : ""}`}
                    onClick={() => handleFilterClick("reactjs")}
                  >
                    React JS
                  </li>
                  <li
                    className={`mx-3 ${filterKey === "reactts" ? "active" : ""}`}
                    onClick={() => handleFilterClick("reactts")}
                  >
                    React Native + TypeScript
                  </li>
                  <li
                    className={`mx-3 ${filterKey === "python" ? "active" : ""}`}
                    onClick={() => handleFilterClick("python")}
                  >
                    Python
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>
          <div className="row g-4 portfolio-container">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`col-lg-4 col-md-6 mb-3 portfolio-item ${project.select.toLowerCase().replace(/ /g, "-")}`}
                >
                  <div className="dav-project" style={{ backgroundImage: `url(${project.image})` }}>
                    <div className="desc">
                      <div className="con">
                        <h3><a href={project.link} target="_blank" rel="noopener noreferrer" className="projy-text">{project.title}</a></h3>
                        <span>{project.language}</span>
                        <p className="icon">
                          <span><a href="#!" onClick={() => handleShareClick(project)}><i className="bi bi-eye-fill"></i></a></span>
                          <span>
                            <a href="#!" onClick={() => handleViewClick(project.id)}>
                              <i className="bi bi-heart-fill"></i> {viewCounts[project.id] || 0}
                            </a>
                          </span>
                          <span><a href={project.link} target="_blank" rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="560"
              height="315"
              src={modalContent.iframe}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div id="proBox">
            <h3>{modalContent.title}</h3>
            <p>{modalContent.description}</p>
            </div>
            <div className="modal-footer">
              <button onClick={closeModal} className="my-btn">Close</button>
              <a href={modalContent.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary my-btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Button */}
      {isScrolled && (
            <button
              className="btn btn-primary scroll-btn"
              onClick={isAtBottom ? scrollToTop : scrollToBottom}
              aria-label={isAtBottom ? "Scroll to Top" : "Scroll to Bottom"}
            >
              <i className={isAtBottom ? "bi bi-arrow-up" : "bi bi-arrow-down"}></i>
            </button>
          )}
    </section>
  );
}

export default Projects;
