import { cursos } from "./formacio";
export default function Cursos({ language }) {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{cursos[0][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a href="#75">
              <h3>Front-end web developer</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/tecnocampus.jpg"}
                alt="Logo Tecnocampus"
                width="250"
              />
              <figcaption>Certificaci&oacute; Tecnocampus</figcaption>
            </figure>
          </article>
          <article>
            <a href="#76">
              <h3>Machine Learning</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/coursera_stanford.jpg"}
                alt="Coursera-Stanford"
                width="500"
              />
              <figcaption>
                Certificaci&oacute; Coursera/Stanford University
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#77">
              <h3>SCRUM/Agile</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/scrum-agile.png"}
                alt="Logo SCRUM Agile"
                width="250"
              />
              <figcaption>Certificaci&oacute; Mediapro</figcaption>
            </figure>
          </article>
          <article>
            <a href="#78">
              <h3>ITIL Essentials</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/itil.jpg"}
                alt="Logo ITIL"
                width="250"
              />
              <figcaption>Certificaci&oacute; EXIN</figcaption>
            </figure>
          </article>
          <article>
            <a href="#79">
              <h3>Project Manager</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/PMI_logo.gif"}
                alt="Logo PMI"
                width="250"
              />
              <figcaption>Certificaci&oacute; PMI</figcaption>
            </figure>
          </article>
          <article>
            <a href="#79">
              <h3>Lean 6-sigma</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/lean6sigma.png"}
                alt="Logo Lean 6 Sigma"
                width="250"
              />
              <figcaption>Certificaci&oacute; Sun Microsystems</figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://telecos.upc.edu/ca/noticies/cursos-destiu-aess"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Arduino Basic &amp; Advanced 2014</h3>
            </a>
            <figure>Certificaci&oacute; UPC</figure>
          </article>
          <article>
            <a href="#80bis">
              <h3>S3 Campus Juny 2012</h3>
            </a>
            <figure>
              Stage a Par&iacute;s amb el gran estereoscopista Alain
              D&eacute;robe
            </figure>
          </article>
          <article>
            <a
              href="https://en.wikipedia.org/wiki/Avid_DS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Avid DS</h3>
            </a>
            <figure>Certificaci&oacute; Avid DS 101-501</figure>
          </article>
          <article>
            <a
              href="https://en.wikipedia.org/wiki/Softimage_3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Softimage 3D</h3>
            </a>
            <figure>Certificaci&oacute; Softimage 101-501</figure>
          </article>
          <article>
            <a
              href="https://en.wikipedia.org/wiki/Silicon_Graphics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>VR amb SGI</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/sgi.jpg"}
                alt="Curs VR al 1993"
                width="500"
              />
            </figure>
          </article>
        </div>
      </div>
    </>
  );
}
