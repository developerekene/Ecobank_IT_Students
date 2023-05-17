import React from "react";
import "./Contact.css";
import cp from "../../../Images/png/contactperson.png";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <section className="mainPage">
      <div className="mainContainer">
        <div className="contOne">
          <img src={cp} alt="contact-person" width={"500px"} />
        </div>
        <div className="contTwo">
          <h1 className="cHead">CONTACT US</h1>
          <h3 className="csHead">Can we help you?</h3>
          <p className="about-c">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            suscipit maximus erat vitae ornare. Cras id justo vitae odio
            vestibulum ultrices. Proin fermentum tempus enim, ac aliquet mi
            placerat imperdiet. Ut molestie porttitor odio, et rhoncus sem
            maximus vitae.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            suscipit maximus erat vitae ornare. Cras id justo vitae odio
            vestibulum ultrices. Proin fermentum tempus enim, ac aliquet mi
            placerat imperdiet. Ut molestie porttitor odio, et rhoncus sem
            maximus vitae.
          </p>
          <div className="bList">
            <div className="bListO">
              <button className="cButton">CONTACT</button>
            </div>
            <div className="bListT">
              <ul className="contact-icon">
                <li>
                  <a href="#" className="whatsapp">
                    <i className="fa fa-whatsapp icon-size" ></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="fa fa-instagram icon-size"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook icon-size"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<Footer />
      
    </section>
  );
};

export default Contact;
