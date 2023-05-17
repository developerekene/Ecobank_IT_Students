import React from "react";
import "./CoursePage.css";
import atomImage from "../../../Images/png/Atom.png";
import geo from "../../../Images/jpeg/Geography.jpg";
import physics from "../../../Images/jpeg/Physics.jpg";
import biology from "../../../Images/jpeg/Biology.jpg";
import civic from "../../../Images/jpeg/Civic.jpg";
import history from "../../../Images/jpeg/history.jpg";
import social from "../../../Images/jpeg/social.jpg";
import html from "../../../Images/jpeg/html.jpg";
import javascript from "../../../Images/jpeg/javascript.jpg";
import react from "../../../Images/jpeg/reac.jpg";
import java from "../../../Images/jpeg/java.jpg";

function CoursePage() {
  return (
    <section id="course">
      <div className="container">
        <div className="row">
          <div className="header popular">
            <h2 className="section-title">Our Popular Courses</h2>
            <p className="section-subtitle">
              Pick the best course for what you want to do
            </p>
            <hr className="line" />
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="course course-one">
              <div className="image image-one">
                <img src={atomImage} alt="atom" width="350px" height="220px" />
              </div>
              <div className="text">
                <a className="course-anchor" href="#">
                  <h3>Introduction to Advanced Chemistry</h3>
                </a>
                <p className="names">Adetokunbo David</p>

                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <p>₦15,000</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="course course-two">
              <div className="image image-two">
                <img src={physics} alt="Physics" width="350px" height="220px" />
              </div>
              <div className="text">
                <a className="course-anchor" href="#">
                  <h3>Introduction to Advanced Physics</h3>
                </a>
                <p className="names">Chukwemeka Charles</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <p>₦13,000</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="course course-three">
              <div className="image image-three">
                <img src={biology} alt="Biology" width="350px" height="220px" />
              </div>
              <div className="text">
                <a className="course-anchor" href="#">
                  <h3>Introduction to Advanced Biology</h3>
                </a>
                <p className="names">Brambifa Peter</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <p>#15,000</p>
              </div>
            </div>
          </div>

          <br />
          <hr className="line" />

          <div className="header free">
            <h2 className="section-title">Free Courses</h2>
            <p className="section-subtitle">
              Pick the best course for what you want to do
            </p>
          </div>
          <hr className="line" />
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="courses course-four">
                  <div className="image-two">
                    <img src={civic} alt="Civic" width="267px" height="200px" />
                  </div>
                  <div className="text">
                    <a className="course-anchor" href="#">
                      <h3>Civic Education</h3>
                    </a>
                    <p className="names">Chukwemeka Charles</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <p>₦10,000</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="courses course-five">
                  <div className="image-two">
                    <img
                      src={history}
                      alt="History"
                      width="267px"
                      height="200px"
                    />
                  </div>
                  <div className="text">
                    <a className="course-anchor" href="#">
                      <h3>History</h3>
                    </a>
                    <p className="names">Brambifa Peter</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>

                    <p>₦12,000</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="courses course-six">
                  <div className="image-two">
                    <img
                      src={geo}
                      alt="Geography"
                      width="267px"
                      height="200px"
                    />
                  </div>
                  <div className="text">
                    <a className="course-anchor" href="#">
                      <h3>Geography</h3>
                    </a>
                    <p className="names">Adetokunbo David</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <p>₦13,000</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="courses course-six">
                  <div className="image-two">
                    <img
                      src={social}
                      alt="Social"
                      width="267px"
                      height="200px"
                    />
                  </div>
                  <div className="text">
                    <a className="course-anchor" href="#">
                      <h3>Social Studies</h3>
                    </a>
                    <p className="names">Brambifa Peter</p>

                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <p>₦12,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="line" />

          <div className="header best">
            <h2 className="section-title">BestSellers</h2>
            <p className="section-subtitle">
              Pick the best course for what you want to do
            </p>
          </div>

          <hr className="line" />
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="courses course-seven">
                  <div className="image">
                    <img src={html} alt="HTML" width="267px" height="200px" />
                  </div>
                  <div className="text">
                    <a className="course-anchor" href="#">
                      <h3>Fundamentals of HTML and CSS</h3>
                    </a>
                    <p className="names">Chukwemeka Charles</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <p>₦17,000</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="courses course-seven">
                  <div className="image-three">
                    <img
                      src={javascript}
                      alt="JavaScript"
                      width="267px"
                      height="200px"
                    />
                  </div>
                  <div className="text">
                    <a className="course-anchor" href="#">
                      <h3>React tutorials and Project courses</h3>
                    </a>
                    <p className="names">Adetokunbo David</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <p>₦23,000</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="courses course-eight">
                  <div className="image-two">
                    <img src={react} alt="Reac" width="267px" height="200px" />
                  </div>
                  <div className="text">
                    <a className="course-anchor" href="#">
                      <h3>Javscript and Its Components</h3>
                    </a>
                    <p className="names">Brambifa Peter </p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <p>₦20,000</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="courses course-nine">
                  <div className="image-two">
                    <img src={java} alt="Java" width="267px" height="200px" />
                  </div>
                  <div className="text">
                    <a className="course-anchor" href="#">
                      <h3>Learn Everything Java</h3>
                    </a>
                    <p className="names">Adetokunbo David</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <p>₦19,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursePage;
