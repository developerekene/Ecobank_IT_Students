import React from "react";
import "./Footer.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>CharPeD</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          gravida risus lacus, ac consectetur metus volutpat non. Donec nec elit
          tincidunt, faucibus nisl et, feugiat mauris.
        </p>

        <ul className="socials">
          <li>
            <a href="" className="fa fa-facebook"></a>
          </li>
          <li>
            <a href="" className="fa fa-twitter"></a>
          </li>
          <li>
            <a href="" className="fa fa-google-plus"></a>
          </li>
          <li>
            <a href="" className="fa fa-youtube"></a>
          </li>
          <li>
            <a href="" className="fa fa-instagram"></a>
          </li>
        </ul>

        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="">PROFILE</a>
            </li>
            <li>
              <a href="">COURSES</a>
            </li>
            <li>
              <a href="/about-us">ABOUT US</a>
            </li>
            <li>
              <a href="">SETTING</a>
            </li>
            <li>
              <a href="/contact-us">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-cred">
        <p>CharPeD@{year}</p>
      </div>
    </footer>
  );
};

export default Footer;
