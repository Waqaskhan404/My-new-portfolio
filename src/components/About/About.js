import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <main className="about" data-aos="fade-right">
        <section className="right-left">
          <section className="left-section">
            <img src="./images/me.png" alt="waqas" />
            <div>
              <p>
                <b>Name:</b> Waqas Khan
              </p>
              <p>
                <b>Birth Date:</b> Feb 20 199
              </p>
              <p>
                <b>Phone Number:</b> +923045454166
              </p>
              <p>
                <b>Gmail:</b> waqas.khan.40004@gmail.com
              </p>
              <p>
                <b>Address:</b> Peshawar Pakistan
              </p>
            </div>
          </section>
          <section className="right-section">
            <h2>
              Who am I <i className="fa fa-question"></i>
            </h2>
            <p>
              My name is <b>Waqas Khan</b>, and I'm an Pakistani{" "}
              <b>Frontend Web Developer</b> who was born in 1999.
            </p>
            <p>
              I have about <b>2 years of experience</b> with frontend web
              development and its technologies such as HTML5, CSS3,
              JavaScript(ES6), Bootstrap, React and GitHub.
            </p>
            <p>
              I prefer learning from Documentations rather than youtube
              tutorials.
            </p>
            <p>
              I'm seeking to have an opportunity that matches my skills, to
              improve my knowledge, experience and skills, technical and
              communicational ones.
            </p>

            <h2>Education :-</h2>
            <p>
              Studies Bachelor of Software Engineering, Comsats University
              Islamabad Abottabad Campus.
            </p>

            <h2>Certificates :-</h2>
            <p>1&#41; IOT</p>
            <p>2&#41; React+Redux certified Frontend Web Developer</p>
            <p>3&#41; JavaScript certified </p>
            <div>
              <a
                href="https://github.com/Waqaskhan404"
                rel="noreferrer"
                target="_blank"
              >
                View More
              </a>
            </div>
          </section>
        </section>

        <section>
          <h2 className="text-center">My Skills</h2>
          <section className="skills-container">
            <div>
              <div className="skill" data-aos="fade-right">
                <div>
                  <img src="./images/skills/html.png" alt="HTML5" />
                </div>
                <h4>HTML5</h4>
              </div>
            </div>

            <div>
              <div className="skill" data-aos="fade-right">
                <div>
                  <img src="./images/skills/css.png" alt="CSS3" />
                </div>
                <h4>CSS3</h4>
              </div>
            </div>

            <div>
              <div className="skill" data-aos="fade-right">
                <div>
                  <img src="./images/skills/js.jpg" alt="JavaScript (ES6)" />
                </div>
                <h4>JavaScript (ES6)</h4>
              </div>
            </div>

            <div>
              <div className="skill" data-aos="fade-right">
                <div>
                  <img src="./images/skills/bootstrap.png" alt="Bootstrap" />
                </div>
                <h4>Bootstrap</h4>
              </div>
            </div>
            <div>
              <div className="skill" data-aos="fade-right">
                <div>
                  <img src="./images/skills/react.png" alt="React" />
                </div>
                <h4>React</h4>
              </div>
            </div>
          </section>
        </section>
      </main>
    );
  }
}

export default About;
