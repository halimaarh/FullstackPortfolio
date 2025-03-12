"use client";

import { useEffect, useRef } from "react";
import "./Hero.css";
import heroImage from "../assets/Img.jpg";

const Hero = () => {
  const typingTextRef = useRef(null);

  useEffect(() => {
    const typingText = typingTextRef.current;
    const text = "Front-End Developer | Problem Solver";
    let i = 0;

    const typeWriter = () => {
      if (i < text.length && typingText) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    setTimeout(typeWriter, 1000);

    return () => {
      i = text.length; // Stop the typing animation on unmount
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Shifatu Halimah</span>
          </h1>
          <p className="hero-subtitle" ref={typingTextRef}></p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <div className="shape"></div>
            <img src={heroImage} alt="Hero" height="400" width="300" />
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll-text">Scroll Down</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
