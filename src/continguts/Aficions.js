import React from "react";
import { aficions } from "./altres";
export default function Aficions({ language }) {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{aficions[0][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a href="#102">
              <h3>Tennis</h3>
            </a>
            <figure>3ª Categoria Grup 8</figure>
          </article>
          <article>
            <a href="#103">
              <h3>Tennis taula</h3>
            </a>
            <figure>3ª Categoria</figure>
          </article>
          <article>
            <a href="#104">
              <h3>Golf</h3>
            </a>
            <figure>Millor h&agrave;ndicap 15.5</figure>
          </article>
          <article>
            <a href="#105">
              <h3>Esqu&iacute;</h3>
            </a>
          </article>
          <article>
            <a href="#106">
              <h3>Submarinisme</h3>
            </a>
            <figure>FEDAS 1*</figure>
          </article>
          <article>
            <a href="#107">
              <h3>Trekking</h3>
            </a>
          </article>
          <article>
            <a href="#108">
              <h3>Beat Saber</h3>
            </a>
            <figure>Nivell Expert</figure>
          </article>
          <article>
            <a href="#109">
              <h3>Guitarra</h3>
            </a>
            <figure>Cursos online</figure>
          </article>
          <article>
            <a href="#110">
              <h3>Piano</h3>
            </a>
            <figure>M&apos;han donat classes particulars</figure>
            <figure>4rt de solfeig</figure>
          </article>
          <article>
            <a href="#111">
              <h3>Lectura</h3>
            </a>
            <figure>
              <strong>Darrers llibres:</strong>
            </figure>
            <figure>04/2023 The Cerebral Cortex</figure>
            <figure>03/2023 A Thousand Minds</figure>
            <figure>02/2023 La Muerte de la muerte</figure>
            <figure>01/2023 LifeSpan</figure>
            <figure>12/2022 El Mecanisme</figure>
            <figure>11/2022 JavaScript The Definitive Guide</figure>
          </article>
          <article>
            <a href="#112">
              <h3>Cuina</h3>
            </a>
          </article>
          <article>
            <a href="#113">
              <h3>Cinema</h3>
            </a>
            <figure>
              Veig totes les pel·lis en 3D i tamb&eacute; d&apos;altres
            </figure>
          </article>
          <article>
            <a
              href="https://www.fototurismo.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Fotografia de viatges</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/kiruna.jpg"}
                alt="Sol de mitjanit a Kiruna"
                width="500"
              />
              <figcaption>
                Sol de mitjanit+Superlluna a Kiruna (Su&egrave;cia) 23/06/2013
              </figcaption>
            </figure>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/Georgios.jpg"}
                alt="Georgios G. Shipwreck at NEOM by Ben Thouard"
                width="500"
              />
              <figcaption>
                Georgios G. shipwreck a NEOM (Ar&agrave;bia Saudita), 30/09/2018
              </figcaption>
            </figure>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/fototurismo.jpg"}
                alt="Web personal de fotos de turisme"
                width="500"
              />
              <figcaption>
                M&egrave;s fotos a la meva web FotoTurismo.net
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
    </>
  );
}
