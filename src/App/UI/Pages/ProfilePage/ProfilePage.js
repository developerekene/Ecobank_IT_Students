import React from "react";
import "./ProfilePage.css"
import user from "../../../Images/png/user.png"

function ProfilePage() {
    return (
        <div className="containers">
<<<<<<< Updated upstream
            <div id="sideL">
                <div className="sideImg"><img src={user} alt="profile" /></div>
                <h3>Brambifa Peter</h3>
                <ul className="listi">
                    <li className="listing">
                        <a className="anchor" href="#">Account </a>
                    </li>
                    <li className="listing">
                        <a className="anchor" href="#">Profile</a>
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
                <h3 className="account">User Profile</h3>
            </div>
            <div id="content1">
                <div class="contentName">
                    <label for="firstName" class="form-label">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" required="" />
                </div>

                <div class="contentName">
                        <label for="lastName" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder=""  required="" />
                </div>

                <div class="contentUsername">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Username" required="" />
                </div>

                <div class="contentUsername">
                    <label for="username" class="form-label">Phone Number</label>
                    <div class="phoneNumber">
                        <select class="form-select" id="countrycode" required="">
                            <option value="" />
                            <option>+234</option>
                            <option>+1</option>
                        </select>
                    <input type="text" class="form-control" id="phonenumber" placeholder="Phone Number" required="" />
                    </div>
                </div>

                <div class="contentEmail">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                </div>

                <div class="contentAddressOne">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="" required="" />
                </div>

                <div class="contentAddressTwo">
                    <label for="address2" class="form-label">Address 2 <span class="text-body-secondary">(Optional)</span></label>
                    <input type="text" class="form-control" id="address2" placeholder="" />
                </div>

                <div className="contentBottom">
                    <div class="contentCountry">
                        <label for="country" class="form-label">Country</label>
                        <select class="form-select" id="country" required="">
                            <option value="">Choose...</option>
                            <option>Nigeria</option>
                            <option>United States</option>
                            <option>Canada</option>
                        </select>
                    </div>

                    <div class="contentState">
                        <label for="state" class="form-label">State</label>
                        <select class="form-select" id="state" required="">
                            <option value="">Choose...</option>
                            <option>Lagos</option>
                            <option>Washington</option>
                            <option>Ottawa</option>
                        </select>
                    </div>

                    <div class="contentZip">
                    <label>Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required="" />
                    </div>
=======
            <div className="side">
                <div className="sideImg"><img src={user} /></div>
                <div className="sideText">
                    <h3>Brambifa Peter</h3>
                    <ul className="sideList">
                        <li><a href="/setting-page">Account </a></li>
                        <li><a href="#" style={{color: "#006400"}}><strong>Profile</strong></a></li>
                        <li><a href="#">Photo </a></li>
                        <li><a href="#">Account security</a></li>
                        <li><a href="#"> Subscriptions</a></li>
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Notifications</a></li>
                        <li><a href="#">Close Account</a></li>
                    </ul>
>>>>>>> Stashed changes
                </div>
            </div>
            <div id="content2">
            <div className="contentButton">
                    <a href="#"><button>Submit</button></a>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;

