import "./Resume.css";
import { useState } from "react";

const Resume = () => {
  const [loading, setLoading] = useState(false);
  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/resume`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to download resume. Status: ${response.status} (${response.statusText})`
        );
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "myCV.docx";
      document.body.appendChild(a);
      a.click();

      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 100);
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Error downloading resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">My Resume</h2>

        <div className="resume-content animate-on-scroll">
          <div className="resume-download">
            <h3>Download My Resume</h3>
            <p>
              Get a comprehensive overview of my skills, experience, and
              education by downloading my resume.
            </p>
            <button className="download-btn" onClick={handleDownload}>
              <span className="btn-text">
                {loading ? "Downloading..." : "Download Resume"}
              </span>
              <span className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </span>
            </button>
          </div>

          <div className="resume-timeline">
            <div className="timeline-section">
              <h3 className="timeline-title">Education</h3>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>MasterMind Series(Full-Stack Development)</h4>
                  <h5>National Institution Of Information Technology(NIIT)</h5>
                  <p className="timeline-date">2022 - Present</p>
                  <p>Specialized in Front-End Development</p>
                </div>
              </div>
            </div>

            <div className="timeline-section">
              <h3 className="timeline-title">Experience</h3>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Front-End Developer</h4>
                  <h5>Freelance</h5>
                  <p className="timeline-date">2022 - Present</p>
                  <p>
                    Developed a secure digital wallet using React.js, developed
                    and maintained a responsive portfolio website to showcase
                    projects,integrated third-party APIs to enhance
                    functionality and streamline the user experience. Recreated
                    the Netflix interface using React Native and Expo,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
