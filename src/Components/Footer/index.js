import React from "react";
import BasicButton from "../Button/index.js";

// import { Link } from "react-router-dom";
import "./index.css";

export default function Footer() {
  return (
    <footer>
      {/* <img className="footer-logo" src={mooBornLogo} alt="moo born logo" /> */}
      <ul className="footer-links">
        <BasicButton text={"About Us"} />
        <BasicButton text={"Contact Us"} />
      </ul>
    </footer>
  );
}
