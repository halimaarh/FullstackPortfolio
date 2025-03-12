"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import walletImg from "../assets/vaultix.png";
import mongodb from "../assets/MongoDB.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Vaultix",
      category: "web",
      image: walletImg,
      description: "A fully responsive walletsystem with paystack integration.",
      link: "vaultix.vercel.app",
    },
    {
      id: 2,
      title: "Fair Bay City Bikes - Case Study",
      category: "database",
      image: mongodb,
      description:
        "A case study on how MongoDB was used to design and implement a scalable bike-sharing system",
      link: "https://example.com/dashboard",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="project-filters animate-on-scroll">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Web
          </button>
          <button
            className={`filter-btn ${filter === "database" ? "active" : ""}`}
            onClick={() => setFilter("database")}
          >
            Database
          </button>
          {/* <button
            className={`filter-btn ${filter === "mobile" ? "active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </button> */}
        </div>

        <div className="projects-grid animate-on-scroll">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-buttons">
                  <Link to={`/project/${project.id}`} className="btn-view">
                    View Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
