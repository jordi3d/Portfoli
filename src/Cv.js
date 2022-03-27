import "./Cv.css";
import React from "react";
import { useState } from "react";
import { idiomes_web } from "./idiomes";
import { educacio } from "./formacio";
import {
  experiencia_professional,
  entrevistes_i_conferencies,
} from "./experiencia";
import { nom, altres } from "./altres";
import Carrusel from "./Carrusel";
import Logo from "./Logo";
import ExperienciaProfessional from "./ExperienciaProfessional";
import Entrevistes from "./Entrevistes";
import Conferencies from "./Conferencies";
import FormacioReglada from "./FormacioReglada";
import Cursos from "./Cursos";
import Congressos from "./Congressos";
import IdiomesExtrangers from "./IdiomesExtrangers";
import Afiliacions from "./Afiliacions";
import Aficions from "./Aficions";
import Peu from "./Peu";

/*const escapeHTML = (str) =>
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[tag] || tag)
  );*/

export default function Cv() {
  const [language, setLanguage] = useState("CAT");

  function changeLanguage() {
    let tmp = idiomes_web.indexOf(language);
    if (tmp >= idiomes_web.length - 1) tmp = -1;
    let next = idiomes_web[tmp + 1];
    setLanguage(next);
    return next;
  }
  return (
    <div className="cv">
      <header>
        <div id="barraMenu">
          <nav>
            <Logo language={language} />
          </nav>
          <div id="titol"> {nom[0][language]} </div>
          <div id="idioma" onClick={() => changeLanguage()}>
            {language}
          </div>
        </div>
        <div id="separador"> </div>
        <Carrusel />
        {/*<div id="fotoMain"></div>*/}
      </header>
      <section>
        <h1 className="main"> {experiencia_professional[0][language]} </h1>
        <ExperienciaProfessional language={language} />
      </section>
      <section>
        <h1 className="main">{entrevistes_i_conferencies[0][language]}</h1>
        <Entrevistes language={language} />
        <Conferencies language={language} />
      </section>
      <section>
        <h1 className="main">{educacio[0][language]}</h1>
        <FormacioReglada language={language} />
        <Cursos language={language} />
        <Congressos language={language} />
        <IdiomesExtrangers language={language} />
      </section>
      <section>
        <h1 className="main">{altres[0][language]}</h1>
        <Afiliacions language={language} />
        <Aficions language={language} />
      </section>
      <footer>
        <section>
          <Peu language={language} />
        </section>
      </footer>
    </div>
  );
}
