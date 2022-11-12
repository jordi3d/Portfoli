import { idiomes, llengues } from "./idiomes";
export default function IdiomesEstrangers({ language }) {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{idiomes[0][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a href="#86">
              <h3>{llengues[0][language]}</h3>
            </a>
            <figure>Idioma Nadiu</figure>
            <figure>Certificacions C1 i C2</figure>
          </article>
          <article>
            <a href="#87">
              <h3>{llengues[1][language]}</h3>
            </a>
            <figure>Idioma Nadiu</figure>
          </article>
          <article>
            <a href="#88">
              <h3>{llengues[2][language]}</h3>
            </a>
            <figure>Nivell negociaci&oacute;</figure>
            <figure>Michigan Proficiency</figure>
          </article>
          <article>
            <a href="#89">
              <h3>{llengues[3][language]}</h3>
            </a>
            <figure>Estudiat durant 7 anys a l&apos;escola</figure>
            <figure>Cal refrescar-lo</figure>
          </article>
          <article>
            <a href="#90">
              <h3>{llengues[4][language]}</h3>
            </a>
            <figure>Principiant</figure>
            <figure>
              Estudiat fins 2on curs a l&apos;EOI Barcelona-Drassanes
            </figure>
          </article>
          <article>
            <a href="#91">
              <h3>{llengues[5][language]}</h3>
            </a>
            <figure>Principiant</figure>
            <figure>Curs online d&apos;iniciaci&oacute;</figure>
          </article>
          <article>
            <a href="#92">
              <h3>{llengues[6][language]}</h3>
            </a>
            <figure>Principiant</figure>
            <figure>Curs online d&apos;iniciaci&oacute;</figure>
          </article>
          <article>
            <a href="#93">
              <h3>{llengues[7][language]}</h3>
            </a>
            <figure>Principiant</figure>
            <figure>Curs online d&apos;iniciaci&oacute;</figure>
          </article>
          <article>
            <a href="#94">
              <h3>{llengues[8][language]}</h3>
            </a>
            <figure>Principiant</figure>
            <figure>Curs online d&apos;iniciaci&oacute;</figure>
            <figure>Classes particulars</figure>
          </article>
        </div>
      </div>
    </>
  );
}
