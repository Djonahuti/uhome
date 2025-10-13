import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Email Validation Regex
  const validEmailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;

  // Handle Input Change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (id === "email") validateEmail(value);
  };

  // Validate Email
  const validateEmail = (email) => {
    if (validEmailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid Gmail, Yahoo, or Outlook email address.");
    }
  };

// Handle Form Submission
const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) return;
  
    // Form data conversion to URL-encoded format
    const formParams = new URLSearchParams(formData).toString();
  
    fetch("https://uhome.com.ng/mailto.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formParams,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setSuccessMessage(data.message);
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was a problem submitting your message. Please try again.");
      });
  };

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
      <div className="container-xxl pb-5" id="contact">
        <div className="container py-5">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">Let's Work Together</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a className="btn btn-primary py-3 px-5 my-btn" href="tel:816-746-2350"><i className="bi bi-telephone-fill"></i>  Say Hello</a>
            </div>
          </div>
        </ScrollAnimation>
          <div className="row g-5">
            <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              {/* Contact Information */}
              <p className="mb-2">My Address</p>
              <h3 className="fw-bold">Lagos Nigeria</h3>
              <hr className="w-100" />
              <p className="mb-2">Call me:</p>
              <h3 className="fw-bold">+234 816 746 2350</h3>
              <hr className="w-100" />
              <p className="mb-2">Mail me:</p>
              <h3 className="fw-bold">davidjonahuti@gmail.com</h3>
              <hr className="w-100" />
              <p className="mb-2">Other ways to reach me:</p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-primary me-2" href="https://wa.me/+2348167462350?text=urlencodedtext" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
                <a className="btn btn-square btn-primary me-2" href="https://compose.mail.yahoo.com/?to=davidjonah65@yahoo.com" target="_blank" rel="noopener noreferrer"><i className="fi fi-brands-yahoo"></i></a>
                <a className="btn btn-square btn-primary me-2" href="https://mail.google.com/mail/?view=cm&fs=1&to=djonah04@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fi fi-brands-google"></i></a>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              {/* Contact Form */}
              <p className="mb-4">I am Available. Let's Discuss your Project and Budget <i className="bi bi-emoji-smile-fill" style={{ color: "gold" }}></i>.</p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                      <label htmlFor="email">Your Email</label>
                      {emailError && <div className="text-danger mt-1">{emailError}</div>}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" style={{ height: "100px" }} value={formData.message} onChange={handleChange} required></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5 my-btn" type="submit">Send Message</button>
                  </div>
                  {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                </div>
              </form>
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

export default Contact;
