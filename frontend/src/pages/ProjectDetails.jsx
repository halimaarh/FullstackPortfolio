"use client";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetails.css";
import walletImg from "../assets/vaultix.png";
import mongodb from "../assets/MongoDB.png";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // In a real application, this would fetch from an API
    // For demo purposes, we'll use mock data
    const fetchProject = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock project data
        const projectData = {
          1: {
            id: 1,
            title: "Vaultix",
            category: "web",
            image: walletImg,
            description:
              "A fully responsive walletsystem with paystack integration.",
            longDescription: `
              Vaultix is a secure and user-friendly platform designed to handle your financial transactions with ease. 
              Whether you need to send, receive, or deposit money, Vaultix offers a seamless experience, ensuring that 
              your funds are managed efficiently and safely. 
            
              The platform features Paystack integration for secure transactions, robust profile management, and an intuitive 
              user interface that enhances the overall experience. Vaultix is built with scalability in mind, ensuring smooth 
              and reliable financial operations.
            `,
            technologies: ["React", "JavaScript", "Rest API", "Paystack"],
            features: [
              "Secure Paystack integration for seamless transactions",
              "User-friendly dashboard for managing funds",
              "Profile management with authentication",
              "Send, receive, and deposit money with ease",
              "Transaction history and tracking",
              "Responsive design for all devices",
            ],
            challenges: `
              One of the key challenges was ensuring fast and secure transaction processing while maintaining an intuitive 
              user experience. Implementing Paystack integration required thorough testing to guarantee seamless payments, 
              while profile management needed to be both secure and accessible for users.
            `,
            link: "vaultix.vercel.app",
          },
          2: {
            id: 2,
            title: "Fair Bay City Bikes - Case Study",
            category: "database",
            image: mongodb,
            description:
              "A case study on how MongoDB was used to design and implement a scalable bike-sharing system for Fair Bay City.",
            longDescription: `
              This case study explores how MongoDB was utilized to support the Fair Bay City Bikes project, 
              an initiative proposed to address urban transportation challenges in Fair Bay City. 
          
              Fair Bay, a rapidly expanding city, faced issues such as crowded public transport, rising fuel prices, 
              traffic congestion, and poor air quality. To tackle these concerns, the Fair Bay City Council 
              encouraged innovative solutions, leading to the development of Fair Bay City Bikes—an eco-friendly, 
              cost-effective bike-sharing platform.
          
              The project required a robust, scalable, and cost-effective IT infrastructure, and MongoDB was chosen 
              as the database solution due to its flexible schema and JSON-based data structure. The implementation 
              involved designing key database entities such as users, vehicles, rides, and ride logs to ensure seamless 
              tracking and analytics.
            `,
            technologies: ["Ms Word", "MongoDB Atlas", "MongoDB Compass"],
            features: [
              "Dockless bike-sharing system",
              "Real-time tracking and ride analytics",
              "User-friendly booking and management platform",
              "Flexible schema for future enhancements",
              "Seamless integration with MongoDB Atlas",
            ],
            challenges: `
              The major challenge was designing a database that could efficiently handle ride tracking, 
              user management, and real-time analytics while keeping infrastructure costs low. 
              MongoDB's document-based approach allowed for flexible schema design and scalability, 
              addressing these challenges effectively.
            `,
            link: "https://example.com/dashboard",
          },
        };

        setProject(projectData[id]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project:", error);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="project-details-loading">
        <div className="loader">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn-back">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="project-details fade-in">
      <div className="project-header">
        <div className="container">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </div>

      <div className="container">
        <div className="project-content">
          <div className="project-image">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
            />
          </div>

          <div className="project-info-grid">
            <div className="project-description">
              <h2>Project Overview</h2>
              <p>{project.longDescription}</p>
            </div>

            <div className="project-meta">
              <div className="meta-item">
                <h3>Technologies</h3>
                <ul className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="meta-item">
                <h3>Key Features</h3>
                <ul className="feature-list">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-challenges">
              <h2>Challenges & Solutions</h2>
              <p>{project.challenges}</p>
            </div>

            <div className="project-cta">
              <Link to="/#projects" className="btn-back">
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
