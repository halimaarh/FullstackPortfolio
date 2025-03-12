"use client";

import { useState } from "react";
import "./Certificates.css";
import wTec from "../assets/Certificates/W.Tec.jpg";
import gs from "../assets/Certificates/GlobalShapers.png";
import circular from "../assets/Certificates/Circular.png";
import cavista from "../assets/Certificates/Cavista.jpg";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Sample certificate data - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: "Women in Technology Empowerment Certification",
      issuer: "W.Tec",
      date: "August 2019",
      image: wTec,
    },
    {
      id: 2,
      title: "Climate Reality Leadership Training",
      issuer: "Global Shapers Community",
      date: "November 2023",
      image: gs,
    },
    {
      id: 3,
      title: "Circular Exchange",
      issuer: "Circular Lagos",
      date: "February 2024",
      image: circular,
    },
    {
      id: 4,
      title: "Cavista's Hackathon",
      issuer: "Cavista",
      date: "February 2025",
      image: cavista,
    },
  ];

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Close modal when clicking outside the image
  const handleModalClick = (e) => {
    if (e.target.classList.contains("certificate-modal")) {
      closeCertificate();
    }
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">My Certificates</h2>

        <div className="certificates-grid animate-on-scroll">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="certificate-card"
              onClick={() => openCertificate(certificate)}
            >
              <div className="certificate-img">
                <img
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>{certificate.title}</h3>
                    <p>{certificate.issuer}</p>
                    <p className="certificate-date">{certificate.date}</p>
                    <span className="view-certificate">Click to view</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="certificate-modal" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close-modal" onClick={closeCertificate}>
              &times;
            </span>
            <h3>{selectedCertificate.title}</h3>
            <p>
              {selectedCertificate.issuer} - {selectedCertificate.date}
            </p>
            <div className="modal-image-container">
              <img
                src={selectedCertificate.image || "/placeholder.svg"}
                alt={selectedCertificate.title}
                className="modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
