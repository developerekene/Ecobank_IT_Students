import React from "react";
import "./HomePage.css";
import Image from "../../../Images/png/peter1.png";
import Google from "../../../Images/png/google.png";
import MIT from "../../../Images/png/MIT.png";
import Oxford from "../../../Images/png/oxford.png";
import Duke from "../../../Images/png/duke.png";
import Stanford from "../../../Images/png/stanford.png";
import IBM from "../../../Images/png/ibm.png";
import Cambridge from "../../../Images/png/cambridge.png";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <div className="body">
        <div className="body-text">
          <h1>Learn without limits</h1>
          <p>
            Start, switch, or advance your career with more than 500 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <div className="body-button">
            <div className="button-1">
              <button>Login</button>
            </div>
            <div className="button-2">
              <button>Sign Up</button>
            </div>
          </div>
        </div>
        <div className="body-img">
          <img src={Image} />
        </div>
      </div>
      <hr />
      <div id="colab-div">
        <div className="colab-text">
          <h4>
            We collaborate with{" "}
            <span>
              <a href="#">50+ universities and companies</a>
            </span>{" "}
            to provide you with the best learning experience
          </h4>
        </div>
        <div className="colab-comp">
          <a href="https://www.google.com/" className="listItems">
            <img src={Google} />
          </a>
          <a href="https://www.mit.edu/" className="listItems">
            <img src={MIT} />
          </a>
          <a href="https://www.ox.ac.uk/" className="listItems">
            <img src={Oxford} />
          </a>
          <a href="https://duke.edu/" className="listItems">
            <img src={Duke} />
          </a>
          <a href="https://www.stanford.edu/" className="listItems">
            <img src={Stanford} />
          </a>
          <a href="https://www.ibm.com/us-en/" className="listItems">
            <img src={IBM} />
          </a>
          <a href="https://www.cam.ac.uk/" className="listItems">
            <img src={Cambridge} />
          </a>
        </div>
      </div>
      <Footer />
    </div>
   
  );
};

export default HomePage;
