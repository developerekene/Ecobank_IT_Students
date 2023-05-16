import React from "react";
import pic from "../../../Images/png/peter1.png"
import google from "../../../Images/png/google.png"
import mit from "../../../Images/png/MIT.png"
import oxford from "../../../Images/png/oxford.png"
import duke from "../../../Images/png/duke.png"
import stanford from "../../../Images/png/stanford.png"
import ibm from "../../../Images/png/ibm.png"
import cambridge from "../../../Images/png/cambridge.png"

function Image() {
    return (
        <img src={pic} alt="teens-reading"/>
    )
}

function Google() {
    return (
        <img src={google} alt="teens-reading"/>
    )
}

function MIT() {
    return (
        <img src={mit} alt="teens-reading"/>
    )
}

function Oxford() {
    return (
        <img src={oxford} alt="teens-reading"/>
    )
}

function Duke() {
    return (
        <img src={duke} alt="teens-reading"/>
    )
}

function Stanford() {
    return (
        <img src={stanford} alt="teens-reading"/>
    )
}

function IBM() {
    return (
        <img src={ibm} alt="teens-reading"/>
    )
}

function Cambridge() {
    return (
        <img src={cambridge} alt="teens-reading"/>
    )
}

export default Image;
export {Google, MIT, Oxford, Duke, Stanford, IBM, Cambridge};