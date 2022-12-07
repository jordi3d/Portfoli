import React from "react";
import { formacio_reglada } from "./formacio";
export default function FormacioReglada({ language }) {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{formacio_reglada[0][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a
              href="https://photonics.masters.upc.edu/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>MSc Photonics a la UPC</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/logoUPC.png"}
                alt="Logo UPC"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a
              href="https://www.esade.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>MBA a ESADE -no acabat-</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/esade.jpg"}
                alt="Logo ESADE"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a
              href="https://www.escac.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>MA Computer Animation a l&apos;ESCAC</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/escac.jpg"}
                alt="Logo ESCAC"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a
              href="https://www.uab.cat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>BSc Computer Science a la UAB</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/uab.png"}
                alt="Logo UAB"
                width="250"
              />
            </figure>
          </article>
        </div>
      </div>
    </>
  );
}
