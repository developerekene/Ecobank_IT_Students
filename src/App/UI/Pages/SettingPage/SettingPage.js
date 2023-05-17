import React from "react";
import "./SettingPage.css";
import profile from "../../../Images/png/profile.png";

function SettingsPage() {
  return (
    <div className="containing">
      <div id="side">
      <div className="sideProfile">
        <img src={profile} alt="profile" />
        </div>
        <h3 className="myName">Adetokunbo David</h3>
        <ul className="listi">
          <li className="listing">
            <a className="anchor" href="#">Account </a>
          </li>
          <li className="listing">
            <a className="anchor" href="/profile-page">Profile</a>
          </li>
          <li className="listing">
            <a className="anchor" href="#">Photo </a>
          </li>
          <li className="listing">
            <a className="anchor" href="#">Account security</a>
          </li>
          <li className="listing">
            <a className="anchor" href="#"> Subscriptions</a>
          </li>
          <li className="listing">
            <a className="anchor" href="#">Payment Methods</a>
          </li>
          <li className="listing">
            <a className="anchor" href="#">Notifications</a>
          </li>
          <li className="listing">
            <a className="anchor" href="#">Close Account</a>
          </li>
        </ul>
      </div>
      <div id="nav">
        <h1 className="account">Account</h1>
        <p className="account">
          Edit your account settings and change your password here.
        </p>
      </div>
      <div id="content1">
        <label className="label" for="">
          Email
        </label>
        <br />
        <input className="box" type="text" placeholder="Enter your email" />
      </div>
      <div id="content2">
        <label className="label" for=""></label>
        <br />
        <input className="box" type="password" placeholder="Enter your password" />

        <label className="label" for=""></label>
        <br />
        <input className="box1" type="password" placeholder="Re-type your password" />
        <br />
        <button className="btn ">change password</button>
      </div>
      <div id="content3">
        <label className="label" for="">
          Any comments or suggestions?
        </label>
        <br />
        <div className="box">
          <textarea name="" id="" cols="60" rows="4"></textarea>
          <br />
        </div>
        <button className="btn">Submit</button>
        <br />
      </div>
    </div>
  );
}

export default SettingsPage;
