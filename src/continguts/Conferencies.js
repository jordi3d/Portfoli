import React from "react";
import { conferencies } from "./experiencia";
export default function Conferencies({ language }) {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{conferencies[0][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a
              href="https://www.youtube.com/watch?v=einYD7AtS2M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                5º Congreso APD. XR: the next big thing?
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/apd.jpg"}
                alt="Xerrada al 5º congreso APD sobre XR"
                width="500"
              />
              <figcaption>
                XR: the next big thing? durant el 5º Congreso APD 2019 al CCIB
                de Barcelona
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#61">
              <h3>
                GITEX 2019. Huawei 5G Keynote
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/Huawei2.jpg"}
                alt="keynote 5G per Huawei a GITEX Dubai"
                width="500"
              />
              <figcaption>
                Xerrada sobre 5G per Huawei durant el GITEX 2019 de Dubai
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.youtube.com/watch?v=B1ZwJULAiBU&amp;t=1203s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                La Liga Technology Showcase Shanghai 15/07/2019
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/LaLigaASIA.png"}
                alt="LaLiga Technology Showcase. Shanghai"
                width="500"
              />
              <figcaption>
                Presentaci&ograve; de la prova de concepte de futbol en VR per
                LaLiga
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#62">
              <h3>
                La Liga Technology Showcase BCN 4/03/2019
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/LaLigaBCN.jpg"}
                alt="LaLiga Technology Showcase. RCD Stadium"
                width="500"
              />
              <figcaption>
                Presentaci&oacute; de la prova de concepte de futbol en VR per
                LaLiga
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.rebuildexpo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                REBUILD 2018. Construcci&oacute; 4.0
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/rebuild2018.jpg"}
                alt="REBUILD Expo 2018"
                width="500"
              />
              <figcaption></figcaption>
            </figure>
          </article>
          <article>
            <a href="#64">
              <h3>
                COEIC media &amp; IT
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
          </article>
          <article>
            <a href="#64bis">
              <h3>IBC Project FINE 20/09/2012</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/FINE_IBC2012bis.jpg"}
                alt="IBC 2020 3D Media"
                width="500"
              />
              <figcaption>
                Xerrada a l&apos;equip de What Caught My Eye
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#65">
              <h3>
                Auditori Mediapro 2020 3D Media
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
          </article>
          <article>
            <a href="#66">
              <h3>
                IBC 2020 3D Media 03/09/2011
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
          </article>
          <article>
            <a href="#67">
              <h3>Radio +QueCine 12/12/2011</h3>
            </a>
          </article>
          <article>
            <a href="#68">
              <h3>Expo 3D 23-29/05/2011 a Madrid</h3>
            </a>
          </article>
          <article>
            <a
              href="https://jordialonso.wordpress.com/2008/10/11/jornadas-agapi-en-santiago-ultimo-dia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>AGAPI a Santiago de Compostela 10/10/2008 @cine.com</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/AGAPI.jpg"}
                alt="Conferencia sobre vídeo per internet a AGAPI"
                width="500"
              />
              <figcaption>
                Xerrada sobre v&iacute;deo per internet a Santiago de
                Compostela, 9-10/10/2008
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#69">
              <h3>Torre Agbar 24/04/2008 @cine.com</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/cpac02.jpg"}
                alt="CPAC r-evolució difital 24/04/2008 a Torre Agbar"
                width="500"
                heigth="375"
              />
              <figcaption>
                Confer&egrave;ncia a la Torre Agbar 24/04/2008 pel CPAC:
                r-evoluci&oacute; digital (cine.com)
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#70">
              <h3>Todos en Alta (TeA06) 14-18/06/2006 @cine.com</h3>
            </a>
            <figure>
              <figcaption>
                Xerrada sobre la distribuci&oacute; de v&iacute;deo HD a
                trav&eacute;s d&apos;IP
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#71">
              <h3>Festival de cinema Zoom Igualada 10/11/2005 @cine.com</h3>
            </a>
            <figure>
              <figcaption>
                Xerrada sobre la distribuci&oacute; de cinema a trav&eacute;s
                d&apos;internet
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#72">
              <h3>Foro HD en Barcelona 11/10/2005 @cine.com</h3>
            </a>
            <figure>
              <figcaption>
                Xerrada sobre la distribuci&oacute; de v&iacute;deo HD a
                trav&eacute;s d&apos;internet
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#72bis">
              <h3>Festival de cinema de Sitges @cine.com</h3>
            </a>
          </article>
          <article>
            <a href="#73">
              <h3>CGIx Glory Day</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/CGIx.jpg"}
                alt="CGIx a Barcelona el 1999"
                width="500"
              />
              <figcaption>
                Presentaci&oacute; del projecte "Glory Day" al CGIx de Barcelona
                4/02/1999
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
    </>
  );
}
