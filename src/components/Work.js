import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Work() {
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
    <div className="dav-narrow-content">
      <div className="row">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300}>
        <div className="col-md-6 col-md-offset-3 col-md-pull-3">
          <span className="heading-meta">Experience</span>
          <h2 className="dav-heading">Work Experience</h2>
        </div>
      </ScrollAnimation>
      </div>
      <div className="row">
        <div className="col-md-12">
             <div className="timeline-centered">
             <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300}>
               <article className="timeline-entry">
                  <div className="timeline-entry-inner">

                     <div className="timeline-icon color-1">
                        <i className="bi bi-pen-fill"></i>
                     </div>

                     <div className="timeline-label">
                        <h2><a href="#!">Front-End Developer at <strong>UT Express</strong></a> <span>2018 - Present</span></h2>
                        <p>I am proficient in using programming languages like Javascript to develop user-friendly web pages. I excel in maintaining and improving websites, as well as optimizing applications for maximum speed. I am skilled in designing mobile-based features and collaborating with back-end developers and web designers to enhance usability. I excel at obtaining feedback from users and customers and delivering effective solutions. I have experience in writing functional requirement documents and guides, creating quality mockups and prototypes, and ensuring high-quality graphic standards and consistency.</p>
                     </div>
                  </div>
               </article>
             </ScrollAnimation>
               
               <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={300}>
               <article className="timeline-entry">
                  <div className="timeline-entry-inner">
                     <div className="timeline-icon color-2">
                        <i className="bi bi-pen-fill"></i>
                     </div>
                     <div className="timeline-label">
                       <h2><a href="#!">Information Technology Manager at <strong>Bespoke Event Management</strong></a> <span>2021 - Present</span></h2>
                        <p>In my role as a Technology Manager, I excel at designing and configuring ICT systems tailored to specific client requirements. I adeptly provide innovative solutions and devise strategies to facilitate the achievement of the company's IT goals. Additionally, I offer expert guidance in the selection and seamless implementation of cutting-edge technology solutions.</p>
                     </div>
                  </div>
               </article>
               </ScrollAnimation>
               
               <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300}>
               <article className="timeline-entry">
                  <div className="timeline-entry-inner">
                     <div className="timeline-icon color-3">
                        <i className="bi bi-pen-fill"></i>
                     </div>
                     <div className="timeline-label">
                       <h2><a href="#!">IT Intern at <strong>Webb Fontaine Nigeria LTD.</strong></a> <span>2020-2021</span></h2>
                        <p>Throughout my internship, I took charge of managing and optimizing IT equipment to improve operational efficiency and client delivery times. I meticulously monitored network flow and server performance, delivering daily reports to supervisors to ensure top-notch network operations. I adeptly resolved technical issues and swiftly replaced faulty components, minimizing downtime and upholding system reliability. I efficiently handled routine system maintenance tasks, including software updates and backups, to maintain the stability of our IT infrastructure. Additionally, I diligently documented IT processes, user manuals, and equipment records to ensure operational continuity and foster knowledge sharing.</p>
                     </div>
                  </div>
               </article>
               </ScrollAnimation>

               <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
               <article className="timeline-entry">
                  <div className="timeline-entry-inner">
                     <div className="timeline-icon color-4">
                        <i className="bi bi-pen-fill"></i>
                     </div>
                     <div className="timeline-label">
                       <h2><a href="#!">Computer Engineer & Sales Representative at <strong>JP Computers</strong></a> <span>2014-2017</span></h2>
                        <p>During my time at JP Computers, I oversaw and maintained the organization's computer systems and networks, resulting in a commendable 99% uptime rate and a notable 30% reduction in system failures. I installed and configured over 200 computer systems, with minimal disruption to operational activities. I diagnosed and resolved technical issues with a 95% first-contact resolution rate, implemented troubleshooting protocols, and contributed to the development of 10+ innovative products. Additionally, I tailored hardware solutions, resulting in a substantial 15% increase in sales and a noticeable 10% improvement in customer satisfaction.</p>
                     </div>
                  </div>
               </article>
               </ScrollAnimation>

               <ScrollAnimation animateIn="fadeInBottom" animateOnce={true} delay={300}>
               <article className="timeline-entry begin">
                  <div className="timeline-entry-inner">
                     <div className="timeline-icon color-none">
                     </div>
                  </div>
               </article>
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

export default Work;
