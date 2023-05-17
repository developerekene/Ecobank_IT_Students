import React from "react";
import "./Card.css";
import kcee from "../../../../Images/jpg/kcee.jpg";
import peter from "../../../../Images/png/peter.png";
import david from "../../../../Images/jpg/david.jpg";

function Card() {
  return (
    <section className="top-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Behind CharPeD</h2>
            <p className="section-subtitle">
              We are here for <span className="subtitle">YOU</span> and{" "}
              <span className="subtitle">YOU</span> are here for{" "}
              <span className="subtitle">YOU</span>.
            </p>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={david} alt="image" className="team-img" />{" "}
              <h3>ADETOKUNBO DAVID</h3>
              <div className="team-info">
                <p>Head Manager</p>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque gravida risus lacus, ac consectetur metus
                  volutpat non. Donec nec elit tincidunt, faucibus nisl et,
                  feugiat mauris. Nam venenatis justo erat, quis condimentum
                  tellus facilisis id. Sed aliquam vehicula neque quis
                  pellentesque.{" "}
                </p>
                <hr />

                <ul className="team-icon">
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={kcee} alt="image" className="team-img" />
              <h3>CHUKWUEMEKA CHARLES</h3>
              <div className="team-info">
                <p>CEO</p>
                <hr />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque gravida risus lacus, ac consectetur metus
                  volutpat non. Donec nec elit tincidunt, faucibus nisl et,
                  feugiat mauris. Nam venenatis justo erat, quis condimentum
                  tellus facilisis id. Sed aliquam vehicula neque quis
                  pellentesque.{" "}
                </p>
                <hr />

                <ul className="team-icon">
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={peter} alt="image" className="team-img" />{" "}
              <h3>BRAMBIFA PETER</h3>
              <div className="team-info">
                <p>Head of Support</p>
                <hr />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque gravida risus lacus, ac consectetur metus
                  volutpat non. Donec nec elit tincidunt, faucibus nisl et,
                  feugiat mauris. Nam venenatis justo erat, quis condimentum
                  tellus facilisis id. Sed aliquam vehicula neque quis
                  pellentesque.{" "}
                </p>
                <hr />

                <ul className="team-icon">
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="line" />
    </section>
  );
}

export default Card;
