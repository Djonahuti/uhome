import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Certificate() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);
  
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
  
    return (
    <section className="py-me">
    <div className="container-fluid my-5 py-6" id="service">
        <div className="container">
            <div className="row g-5 mb-5">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
                <div className="col-lg-6">
                    <p className="display-6"><i class="bi bi-award-fill text-gradient"></i> My Certificates</p>
                </div>
                <div className="col-lg-6">
                <p className="display-5 mb-0"></p>
                </div>
            </ScrollAnimation>
            </div>
            <div className="row g-4">
                <div className="col-lg-6 shadox">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fi fi-brands-photoshop fa-2x text-gradient"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Adobe Photoshop</h4>
                            <p className="mb-3"><small>From</small> <span className="text-primary">EduCBA</span></p>
                            <span>Adobe Certified Associate in Visual Design Using Photoshop.</span>
                            <div className="mb-2 text-center">
                                <a href="https://www.educba.com/certificate/?c=EG603OCDZ" target="_blank" rel="noopener noreferrer">View <i class="bi bi-eye-fill"></i></a>
                            </div>
                        </div>
                    </div>
            </ScrollAnimation>
                </div>
                <div className="col-lg-6 shadox">
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={300}>
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fi fi-br-laptop-code fa-2x text-gradient"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Front-End Developer</h4>
                            <h6 className="mb-3"><small>From</small> <span className="text-primary">Udemy</span></h6>
                            <span>Ultimate Web Design and Development Mastery</span>
                            <div className="mb-2 text-center">
                                <a href="https://www.udemy.com/certificate/UC-a2723184-1db1-44b6-86fc-31d34f42f2b3/" target="_blank" rel="noopener noreferrer">View <i class="bi bi-eye-fill"></i></a>
                            </div>
                        </div>
                    </div>
            </ScrollAnimation>
                </div>
                <div className="col-lg-6 shadox">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={100}>
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="bi bi-file-earmark-excel fa-2x text-gradient"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Microsoft Excel</h4>
                            <h6 className="mb-3"><small>From</small> <span className="text-primary">EduCBA</span></h6>
                            <span>Microsoft Excel Course</span>
                            <div className="mb-2 text-center">
                                <a href="https://www.educba.com/certificate/?c=P0NR32E3J" target="_blank" rel="noopener noreferrer">View <i class="bi bi-eye-fill"></i></a>
                            </div>
                        </div>
                    </div>
            </ScrollAnimation>
                </div>
                <div className="col-lg-6 shadox">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fi fi-brands-python fa-2x text-gradient"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Python</h4>
                            <h6 className="mb-3"><small>From</small> <span className="text-primary">EduCBA</span></h6>
                            <span>Phyton Complete course</span>
                            <div className="mb-2 text-center">
                                <a href="https://www.educba.com/certificate/?c=LTX73FH-5" target="_blank" rel="noopener noreferrer">View <i class="bi bi-eye-fill"></i></a>
                            </div>
                        </div>
                    </div>
            </ScrollAnimation>
                </div>
                <div className="col-lg-6 shadox">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="bi bi-tools fa-2x text-gradient"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Computer Engineering</h4>
                            <h6 className="mb-3"><small>From</small> <span className="text-primary">JP Computers</span></h6>
                            <span>Diploma in Computer Engineering</span>
                            <div className="mb-2 text-center">
                                <a href="assets/Computer engineering cert.jpg" target="_blank" rel="noopener noreferrer">View <i class="bi bi-eye-fill"></i></a>
                            </div>
                        </div>
                    </div>
            </ScrollAnimation>
                </div>
                <div className="col-lg-6 shadox">
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={300}>
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fi fi-brands-java fa-2x text-gradient"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Java</h4>
                            <h6 className="mb-3"><small>From</small> <span className="text-primary">EduCBA</span></h6>
                            <span>Java Complete Course</span>
                            <div className="mb-2 text-center">
                                <a href="https://www.educba.com/certificate/?c=D1V6Q575T" target="_blank" rel="noopener noreferrer">View <i class="bi bi-eye-fill"></i></a>
                            </div>
                        </div>
                    </div>
            </ScrollAnimation>
                </div>
                <div className="col-lg-6 shadox">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300}>
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fi fi-ss-document-gear fa-2x text-gradient"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Project Management</h4>
                            <h6 className="mb-3"><small>From</small> <span className="text-primary">Udemy</span></h6>
                            <span>Certificate in Project Management</span>
                            <div className="mb-2 text-center">
                                <a href="#!" target="_blank" rel="noopener noreferrer">View <i class="bi bi-eye-fill"></i></a>
                            </div>
                        </div>
                    </div>
            </ScrollAnimation>
                </div>
                <div className="col-lg-6 shadox">
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={300}>
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="bi bi-shield-shaded fa-2x text-gradient"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Cyber Security</h4>
                            <h6 className="mb-3"><small>From</small> <span className="text-primary">Udemy</span></h6>
                            <span>Cyber Security Program</span>
                            <div className="mb-2 text-center">
                                <a href="#!" target="_blank" rel="noopener noreferrer">View <i class="bi bi-eye-fill"></i></a>
                            </div>
                        </div>
                    </div>
            </ScrollAnimation>
                </div>
            </div>
        </div>
    </div>

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

export default Certificate;
