import React from "react";
import { afiliacions } from "./altres";
export default function Afiliacions({ language }) {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{afiliacions[0][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a
              href="https://www.siggraph.org/connect/computer-graphics-pioneers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>SIGGRAPH Pioneers</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/Siggraph.png"}
                alt="Logo Siggraph"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a
              href="https://www.acm.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>ACM</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/acm.png"}
                alt="Logo ACM"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a
              href="https://theadvancedimagingsociety.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Advanced Imaging Society</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/ais.jpg"}
                alt="Logo AIS"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a
              href="https://enginyeriainformatica.cat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>COEINF</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/COEIC.png"}
                alt="Logo COEIC"
              />
              <figcaption>Col·legiat 444</figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.thevrara.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>The VR/AR Association</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/VRARA.png"}
                alt="Logo VRARA"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a
              href="https://www.neuralink.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Open Neuralink</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/Neuralink.jpg"}
                alt="Logo NeuraLink"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a href="#99">
              <h3>MENSA</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/mensa.png"}
                alt="Logo Mensa"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a href="#99bis">
              <h3>Barcelon@ Connection</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/bcnconnection.png"}
                alt="Barcelona Connection"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a href="#100">
              <h3>Virtual Production @Facebook</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/vp.jpg"}
                alt="Virtual Production"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a
              href="https://www.ctbarcino.cat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>CT Barcino</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/ctbarcino.jpg"}
                alt="Logo CT Barcino"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a
              href="https://www.catgolf.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>FCG</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/fcg.jpg"}
                alt="Logo FCG"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a
              href="https://www.periodistes.cat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>ACPJG</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/acpjg.jpg"}
                alt="Logo ACPJG"
                width="250"
              />
            </figure>
          </article>
        </div>
      </div>
    </>
  );
}
