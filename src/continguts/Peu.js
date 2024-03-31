import React from "react";
import { nom, copyright } from "./altres";
export default function Peu({ language }) {
  return (
    <>
      <div id="peu">
        <a
          href="https://linkedin.com/in/jordialonso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/linkedin.svg"}
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://twitter.com/jordialonso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/twitter.svg"}
            alt="twitter"
          />
        </a>
        <a
          href="https://instagram.com/jordialonso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/instagram.svg"}
            alt="instagram"
          />
        </a>
        <a
          href="https://facebook.com/jordi.alonso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/facebook.svg"}
            alt="facebook"
          />
        </a>
        <a
          href="https://youtube.com/user/cine3Dtv/videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/youtube.svg"}
            alt="youtube"
          />
        </a>
        <a href="mailto:info@synthespian.net?subject=Web de Jordi Alonso">
          <img
            id="email"
            src={process.env.PUBLIC_URL + "/img/email.svg"}
            alt="email"
            width="45"
          />
        </a>
      </div>
      <div className="break"></div>
      <div id="copy">
        <h5>
          &copy; 2021-2024 {nom[0][language] + "."} {copyright[0][language]}
        </h5>
      </div>
    </>
  );
}
