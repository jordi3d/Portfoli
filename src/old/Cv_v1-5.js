import "./Cv.css";
import React from "react";
import { useState } from "react";
import { idiomes_web } from "../continguts/idiomes";
import { educacio } from "../continguts/formacio";
import {
  experiencia_professional,
  entrevistes_i_conferencies,
} from "../continguts/experiencia";
import { nom, altres } from "../continguts/altres";
import Carrusel from "../continguts/Carrusel";
import Logo from "../continguts/Logo";
import ExperienciaProfessional from "../continguts/ExperienciaProfessional";
import Entrevistes from "../continguts/Entrevistes";
import Conferencies from "../continguts/Conferencies";
import FormacioReglada from "../continguts/FormacioReglada";
import Cursos from "../continguts/Cursos";
import Congressos from "../continguts/Congressos";
import IdiomesExtrangers from "../continguts/IdiomesExtrangers";
import Afiliacions from "../continguts/Afiliacions";
import Aficions from "../continguts/Aficions";
import Peu from "../continguts/Peu";

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
