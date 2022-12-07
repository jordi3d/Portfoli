import React from "react";
export default function Logo({ language }) {
  return (
    <>
      <div id="logo">
        <div className="dropdownbis">
          <div className="dropbtnbis">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              xmlns="https://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" fill="#F4BA07" />
              <path
                id="cleft"
                d="M 30 40
           A 11 10, 0, 0, 1, 30 18
           L 30 38 Z"
                fill="black"
              />
              <rect id="cam" x="30" y="14" width="0" height="10" fill="black" />
              <path
                id="cright"
                d="M 30 40
           A 11 10, 0, 0, 0, 30 18
           L 30 38 Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="dropdown-contentbis">
            <a
              href="https://www.jordialonso.com"
              target="_self"
              rel="noopener noreferrer"
            >
              Anar al Blog Veni Vidi Vici
            </a>
            <a href="#0bis">Experi&egrave;ncia Professional</a>
            <a href="#0ter">Entrevistes i Confer&egrave;ncies</a>
            <a href="#0quad">Educaci&oacute;</a>
            <a href="#0penta">Altres</a>
            <a href="#0hexa">Descarregar CV</a>
          </div>
        </div>
      </div>
    </>
  );
}
