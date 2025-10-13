import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Education() {
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
      <div className="container-fluid my-5 py-6">
        <div className="container">
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
      <div className="row g-5 mb-1">
        <div className="col-lg-6 col-xs-6">
        <p className="display-6"><i class="bi bi-mortarboard-fill text-gradient"></i> Education</p>
        </div>
        <div className="col-lg-6 col-xs-6 mb-0">
        <p className="display-5 mb-0"></p>
        </div>
      </div>
    </ScrollAnimation>
    {/* Education Card 1 */}
    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300}>
    <div className="card bg-white shadow border-0 rounded-4 mb-5">
        <div className="card-body p-5">
            <div className="row align-items-center gx-5">
                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-litx p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">2019 - 2023</div>
                        <div className="mb-2">
                            <div className="small fw-bolder">National Open University Of Nigeria</div>
                            <div className="small text-muted">Lagos Nigeria</div>
                        </div>
                        <div className="fst-italic">
                            <div className="small text-muted">Bachelor's Degree</div>
                            <div className="small text-muted">Computer science</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8"><div>The B.Sc. Computer Science program provided me with the fundamental knowledge and skills needed to work in various computing areas and develop a strong understanding of applied mathematics. The program covered essential information technology concepts that many people are not familiar with, and it also gave me the tools for computational techniques and critical thinking. I gained a solid foundation in computing processes and principles through this degree program.</div></div>
            </div>
        </div>
    </div>
    </ScrollAnimation>
    {/* Education Card 2 */}
    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={300}>
    <div className="card bg-white shadow border-0 rounded-4 mb-5">
        <div className="card-body p-5">
            <div className="row align-items-center gx-5">
                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-litx p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">2023 - 2024</div>
                        <div className="mb-2">
                            <div className="small fw-bolder">Coding College</div>
                            <div className="small text-muted">Udemy</div>
                        </div>
                        <div className="fst-italic">
                            <div className="small text-muted">Degree</div>
                            <div className="small text-muted">Web Design & Development Mastery</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8"><div>The "Web Design & Development Mastery" course was exceptionally well-structured, comprehensive, and practical. I gained hands-on experience building over 23 custom projects, mastering over 18 professional disciplines, and creating my website from scratch. Key skills include expert-level HTML & CSS, responsive web design, UX/UI principles, and modern tools such as Figma and Adobe XD. The course also covered PHP, MySQL, and WordPress management, preparing me for both freelancing and full-time web design roles.</div></div>
            </div>
        </div>
    </div>
    </ScrollAnimation>
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

export default Education;
