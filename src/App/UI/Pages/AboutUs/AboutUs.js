import React from "react";
import Card from "../../Components/About/CardAbout/Card";

import "./AboutUs.css";
import team from "../../../Images/png/team.png";
import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  return (
    <section id="Main">
      <div className="container">
        <div className="text">
          <h1 className="about-text">About Us</h1>
          <p className="about-p">
            CharPeD’s mission is to provide flexible, effective skill
            development to empower organizations and individuals.
          </p>
          <p className="about-p">
            We want to create a world where anyone can build something
            meaningful with technology, and everyone has the learning tools,
            resources, and opportunities to do so. CharPeD contains a world of
            possibilities — all that’s required is the curiosity and drive to
            learn. At CharPeD, we are committed to empowering all people,
            regardless of where they are in their journeys, to continue to
            learn, grow, and make an impact on the world around them.
          </p>
          <button className="about-button">LEARN MORE</button>
        </div>
        <div className="imgClass">
          <img src={team} alt="team-img" className="about-img" />
        </div>
      </div>
      <hr classNameName="line" />

      <section className="submain">
        <div className="icon-container">
          <div className="icon-one">
            <i
              class="fa-sharp fa-solid fa-check fa-beat size"
              style={{ color: " #1b4942" }}
            ></i>
            <h3 className="charac">SIMPLICITY</h3>
          </div>
          <div className="icon-one">
            <i
              class="fa-sharp fa-solid fa-face-smile fa-beat size"
              style={{ color: "#1b4942" }}
            ></i>
            <h3 className="charac">USER FRIENDLY</h3>
          </div>
          <div className="icon-one">
            <i
              class="fa-sharp fa-solid fa-heart fa-beat size"
              style={{ color: "#1b4942" }}
            ></i>
            <h3 className="charac">ATTRACTIVE INTERFACE</h3>
          </div>
        </div>
      </section>
      <hr classNameName="line" />
      <Card />
      <Footer />

    </section>
  );
};

export default AboutUs;
