import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup"; // Import CountUp

function About({ currentPage, setCurrentPage }) {
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
<>
    <section className="py-me">
      <div className="container-xxl py-6" id="about">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                <div className="d-flex align-items-center mb-5">
                  <div className="years flex-shrink-0 text-center me-4">
                    <h1 className="display-1 mb-0">
                    <CountUp start={0} end={3} delay={0.5} duration={2} /></h1>
                    <h5 className="mb-0">Years</h5>
                  </div>
                  <h3 className="lh-base mb-0">of working experience in Information Technology Management</h3>
                </div>
                <p className="mb-4">
                  I am deeply committed to fostering innovation within the realm of information and communication technology (ICT). My specialization lies in the meticulous tailoring of ICT systems to precisely align with the distinctive requirements of clients, ensuring that their IT strategies effectively underpin their business objectives. My academic background encompasses a degree in Computer Science from the esteemed National Open University of Nigeria, serving as the cornerstone of my proficiency in network design and administration.
                </p>
                {/* List of competencies */}
                <p className="mb-2 fw-bold text-uppercase text-decoration-underline">Core Competencies</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Technical support and troubleshooting</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Computer Hardware Repairs / Integration</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Analytical thinking</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Creative problem solving</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Leadership and Collaboration</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Project Management</p>
              </ScrollAnimation>
            </div>
            <div className="col-lg-6">
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={300}>
                <div className="d-flex align-items-center mb-5">
                  <div className="years flex-shrink-0 text-center me-4">
                    <h1 className="display-1 mb-0">
                    <CountUp start={0} end={7} delay={0.5} duration={2} /></h1>
                    <h5 className="mb-0">Years</h5>
                  </div>
                  <h3 className="lh-base mb-0">of working experience as a Front-End web developer</h3>
                </div>
                <p className="mb-4">
                  I possess advanced capabilities in the utilization of programming languages, notably JavaScript, to craft sophisticated and user-centric web pages. My expertise extends to the proficient maintenance and enhancement of websites, as well as the optimization of applications to attain peak performance. Furthermore, my skill set encompasses the adept design of mobile-based features and seamless collaboration with back-end developers and web designers to elevate overall usability. A hallmark of my professional aptitude is the adept collection of feedback from users and clientele, coupled with the delivery of effective and tailored solutions. Additionally, I bring to the table extensive experience in the composition of functional requirement documents and guides, the creation of refined mockups and prototypes, and the preservation of exacting graphic standards and uniformity.
                </p>
                {/* List of Services */}
                <p className="mb-2 fw-bold text-uppercase text-decoration-underline">Quality Of Service</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Affordable Prices</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>High Quality Product</p>
                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>On Time Project Delivery</p>
                <a className="btn btn-primary py-3 px-5 mt-3 my-btn mb-3" href="#!" onClick={() => setCurrentPage("contact")}>Hire Me!</a>

                {/* Happy Clients Counter */}
                <div className="d-flex align-items-center mb-3">
                  <h5 className="border-end pe-3 me-3 mb-0">Happy Clients</h5>
                  <h2 className="text-primary fw-bold mb-0">
                    <CountUp start={0} end={43} delay={0.5} duration={2} />
                  </h2>
                </div>

                {/* Projects Completed Counter */}
                <div className="d-flex align-items-center mb-3">
                  <h5 className="border-end pe-3 me-3 mb-0">Projects Completed</h5>
                  <h2 className="text-primary fw-bold mb-0">
                    <CountUp start={0} end={58} delay={0.5} duration={2} />
                  </h2>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Skills */}

    <section className="dav-skills" data-section="skills">
    <div className="dav-narrow-content">
        <div className="row row-cols-1 row-cols-lg-2">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={100}>
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                    <h2 className="colorlib-heading animate-box">My Skills</h2>
                    <span className="heading-meta">My Specialty</span>
                </div>
            </ScrollAnimation>
        </div>
        <div className="row">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={100}>
                <div className="col-md-12">
                    <p>I specialize in front-end technologies such as JavaScript (React, Vue.js), CSS3 (SASS, Bootstrap), PHP, and HTML5. I’m also skilled in front-end performance optimization, responsive design, and the integration of RESTful APIs to create dynamic, user-driven experiences. My approach ensures that each project meets modern web standards and accessibility guidelines.</p>
                </div>
            </ScrollAnimation>
        </div>

        <div className="container">
        {/* Skills 1st grid*/}
        <div className="row row-cols-1 row-cols-lg-2">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
                    <div className="col">
                        <div className="progress-wrap mb-2">
                            <h3 className="mb-2">JavaScript</h3>
                            <div className="progress">
                                 <div className="progress-bar color-1" role="progressbar" aria-valuenow="70"
                                  aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                <span>70%</span>
                                  </div>
                            </div>
                        </div>
                    </div>              
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={100}>
                    <div className="col">
                        <div className="progress-wrap mb-2">
                            <h3 className="mb-2">React JS</h3>
                            <div className="progress">
                                 <div className="progress-bar color-2" role="progressbar" aria-valuenow="80"
                                  aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                <span>80%</span>
                                  </div>
                            </div>
                        </div>
                    </div>              
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={100}>
                    <div className="col">
                        <div className="progress-wrap mb-2">
                            <h3 className="mb-2">Web Development</h3>
                            <div className="progress">
                                 <div className="progress-bar color-3" role="progressbar" aria-valuenow="90"
                                  aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                <span>90%</span>
                                  </div>
                            </div>
                        </div>
                    </div>              
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={100}>
            <div className="col">
                <div className="progress-wrap mb-2">
                    <h3 className="mb-2">TypeScript</h3>
                    <div className="progress">
                         <div className="progress-bar color-4" role="progressbar" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>
                        <span>50%</span>
                          </div>
                    </div>
                </div>
            </div>             
        </ScrollAnimation>
        </div>

        {/* Skills 2nd grid*/}
        <div className="row row-cols-1 row-cols-lg-2">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={100}>
            <div className="col">
                <div className="progress-wrap mb-2">
                    <h3 className="mb-2">WordPress</h3>
                    <div className="progress">
                         <div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
                          aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                        <span>70%</span>
                          </div>
                    </div>
                </div>
            </div>              
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={100}>
            <div className="col">
                <div className="progress-wrap mb-2">
                    <h3 className="mb-2">Network Security</h3>
                    <div className="progress">
                         <div className="progress-bar color-1" role="progressbar" aria-valuenow="90"
                          aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                        <span>90%</span>
                          </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={100}>
            <div className="col">
                <div className="progress-wrap mb-2">
                    <h3 className="mb-2">Larvel PHP</h3>
                    <div className="progress">
                         <div className="progress-bar color-6" role="progressbar" aria-valuenow="70"
                          aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                        <span>70%</span>
                          </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={100}>
            <div className="col">
                <div className="progress-wrap mb-2">
                    <h3 className="mb-2">Next JS</h3>
                    <div className="progress">
                         <div className="progress-bar color-3" role="progressbar" aria-valuenow="60"
                          aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                        <span>60%</span>
                          </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        </div>
        </div>
        </div>
    </section>

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

</>
  );
}

export default About;
