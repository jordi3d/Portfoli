import "./Cv.css";
import { useState } from "react";
let titols1 = [
  {
    CAT: "Experiència Professional",
    ES: "Experiecnia profesional",
    EN: "Professional Experience",
    FR: "Experience Professionnel",
    RU: "rus",
  },
];

export default function Cv() {
  const [language, setLanguage] = useState("CAT");
  function changeLanguage(idioma) {
    let tmp = idioma;
    setLanguage(tmp);
    console.log("canviat idioma a %s", tmp);
    return tmp;
  }
  return (
    <div className="cv">
      <header>
        <div id="barraMenu">
          <img src="https://via.placeholder.com/60x60" alt="logo empresa" />{" "}
          JordiAlonso.com
          <div id="idioma" onClick={() => changeLanguage("ES")}>
            {language}
          </div>
        </div>
        <div id="fotoMain">
          <div id="texte">
            foto de perfil, amb una animació que va canviant-la segons temàtica:
            <br />
            -(APD, Huawei, NEOM)
            <br />
            -conferències
            <br />
            -formació i congressos
            <br />
            -afeccions
          </div>
        </div>
      </header>
      <section>
        <h1>{titols1[{ language }]}</h1>
        <h2>CTO</h2>
        <h2>Project Manager</h2>
        <h2>Service Account Manager</h2>
        <h2>Ensenyament donant classes</h2>
        <h3>ESADE Mentor alumnes del Màster</h3>
        <h3>La Salle</h3>
        <h3>ERAM</h3>
        <h3>MSc UPC</h3>
        <h3>Mediapro AutomaticTV</h3>
        <h3>Mediapro 3D</h3>
        <h3>RTVE Catalunya</h3>
        <h3>ESCAC</h3>
        <h2>Web developement</h2>
        <h2>Empresari</h2>
        <h3>Serveis de formació</h3>
        <h3>crypto mining</h3>
        <h3>Domainer 1.200 dominis -ara 110-</h3>
        <h3>cine.com descàrregues legals de vídeo</h3>
        <h3>Iberseller e-commerce solutions</h3>
        <h3>CADAT Informàtica importacions, muntatge de PC's</h3>
      </section>
      <section>
        <h2>Entrevistes</h2>
        <h3>VR</h3>
        <h3>Canal+ estrena simultània</h3>
        <h3>TV3</h3>
        <h3>internet video a cine.com</h3>
        <h3>e-commerce a reg2.net</h3>
      </section>
      <section>
        <h2>Conferències</h2>
        <h3>APD XR: the next big thing?</h3>
        <h3>GITEX Huawei 5G Keynote</h3>
        <h3>La Liga Technology Showcase Shanghai</h3>
        <h3>La Liga Technology Showcase BCN</h3>
        <h3>COEIC media &amp; IT</h3>
        <h3>Mediapro 2020 3D Media</h3>
        <h3>IBC 2020 3D Media</h3>
        <h3>CGIx Glory Day</h3>
        <h3>Festival de cinema de Sitges cine.com</h3>
        <h3>Torre Agbar cine.com</h3>
        <h3>Santiago de Compostela cine.com</h3>
      </section>
      <section>
        <h2>Formació</h2>
        <h3>MSc Photonics a UPC</h3>
        <h3>MBA a ESADE</h3>
        <h3>MA Computer Animation a ESCAC</h3>
        <h3>BSc Computer Graphics a UAB</h3>
        <h3>Cursos i Certificacions</h3>
        <h4>Front-end web developer</h4>
        <h4>Coursera ML</h4>
        <h4>ITIL</h4>
        <h4>PMI</h4>
        <h4>Softimage 3D</h4>
        <h4>Avid DS</h4>
      </section>
      <section>
        <h3>Congressos</h3>
        <h4>SIGGRAPH</h4>
        <h4>NAB</h4>
        <h4>IBC</h4>
        <h4>MWC</h4>
        <h4>Suècia</h4>
        <h4>Helsinki</h4>
      </section>
      <section>
        <h2>Afiliacions</h2>
      </section>
      <section>
        <h2>Afeccions</h2>
        <h3>Tennis</h3>
        <h3>Tennis taula</h3>
        <h3>Golf</h3>
        <h3>Esquí</h3>
        <h3>Trekking</h3>
        <h3>Beat Saber</h3>
        <h3>Música: Guitarra i Piano</h3>
        <h3>Lectura</h3>
        <h3>Fotografia de viatges</h3>
      </section>
      <footer>
        <section>
          <h1>Xarxes Socials</h1>
          <h2>LinkedIn</h2>
          <h2>Twitter</h2>
          <h2>Instagram</h2>
          <h2>Facebook</h2>
          <h2>Pinterest</h2>
        </section>
        <section>
          <h1>Contacte</h1>
          <h2>Email</h2>
          <h2>Telèfon</h2>
        </section>
        <section>
          <h5 id="copy">&copy; 2022 Jordi Alonso</h5>
        </section>
      </footer>
    </div>
  );
}
