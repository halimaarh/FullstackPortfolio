import "./About.css";
import heroImage from "../assets/Img.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content animate-on-scroll">
          <div className="about-image">
            <img src={heroImage} alt="Profile" height="400" width="400" />
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate front-end developer with a strong foundation in
              modern web technologies. With over 2 years of experience in the
              industry, I've worked on projects that have refined my skills in
              creating responsive, user-friendly, and visually appealing
              interfaces. While my expertise lies in front- end development, I'm
              also dabbling in back-end technologies, particularly Spring Boot,
              to broaden my understanding of full-stack development.
            </p>
            <p>
              My journey in web development began during my high school years,
              and since then, I've been continuously learning and adapting to
              new technologies. I believe in creating clean, efficient, and
              user-friendly websites that provide exceptional user experiences.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Shifatu Halimah</span>
              </div>
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">shifatuhalimah20@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">
                  24,Rabiatu Thompson Crescent,Surulere,Lagos,Nigeria
                </span>
              </div>
              <div className="info-item">
                <span className="info-title">Availability:</span>
                <span className="info-value">Freelance/Part-time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
