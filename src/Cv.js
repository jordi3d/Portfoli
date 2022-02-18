import "./Cv.css";
import { useState } from "react";
let idiomes = ["CAT", "ES", "EN", "FR", "RU", "DE", "IT", "PT", "ZH"];
let titolsH1 = [
  {
    CAT: "Experiència Professional",
    ES: "Experiencia Profesional",
    EN: "Professional Experience",
    FR: "Expérience Professionnelle",
    RU: "Профессиональный опыт",
    DE: "Berufserfahrung",
    IT: "Esperienza Professionale",
    PT: "Experiência Profissional",
    ZH: "专业经验",
  },
  {
    CAT: "Formació Reglada",
    ES: "Formación Reglada",
    EN: "Regulated Training",
    FR: "Formation Réglementée",
    RU: "Регулируемая обучение",
    DE: "Reguliertes Training",
    IT: "Formazione Regolata",
    PT: "Formação Regulada",
    ZH: "监管培训",
  },
  {
    CAT: "Afiliacions",
    ES: "Afiliaciones",
    EN: "Affiliations",
    FR: "Affiliations",
    RU: "Принадлежности",
    DE: "Angelegenheiten",
    IT: "Affiliazioni",
    PT: "Afiliações",
    ZH: "隶属关系",
  },
  {
    CAT: "Idiomes",
    ES: "Idiomas",
    EN: "Languages",
    FR: "Langues",
    RU: "Языки",
    DE: "Sprachen",
    IT: "Idiomas",
    PT: "LÍNGUAS",
    ZH: "语言",
  },
];
let titolsH2 = [
  {
    CAT: "Empresari",
    ES: "Empresario",
    EN: "Businessman",
    FR: "Entrepreneur",
    RU: "Бизнесмен",
    DE: "Geschäftsmann",
    IT: "Uomo d'affari",
    PT: "Homem de negocios",
    ZH: "商人",
  },
  {
    CAT: "Entrevistes",
    ES: "Entrevista",
    EN: "Interviews",
    FR: "Interviews",
    RU: "Интервью",
    DE: "Interviews",
    IT: "Colloquio",
    PT: "Entrevistas",
    ZH: "面试",
  },
  {
    CAT: "Articulista",
    ES: "Articulista",
    EN: " ",
    FR: " ",
    RU: " ",
    DE: " ",
    IT: " ",
    PT: " ",
    ZH: " ",
  },
  {
    CAT: "Conferències",
    ES: "Conferencias",
    EN: "Conferences",
    FR: "Conférences",
    RU: "Конференции",
    DE: "Konferenzen",
    IT: "Conferenze",
    PT: "Conferências",
    ZH: "会议",
  },
  {
    CAT: "Cursos",
    ES: "Cursos",
    EN: "Courses",
    FR: "Cours",
    RU: "Курсы",
    DE: "Kurse",
    IT: "Corsi",
    PT: "Cursos",
    ZH: "培训班",
  },
  {
    CAT: "Aficions",
    ES: "Aficiones",
    EN: "Hobbies",
    FR: "Passe-temps",
    RU: "Хобби",
    DE: "Hobbys",
    IT: "Africations",
    PT: "Hobbies",
    ZH: "爱好",
  },
];
let titolsH3 = [
  {
    CAT: "Congressos",
    ES: "Congresos",
    EN: "Congresses",
    FR: "Congrès",
    RU: "Конгрессы",
    DE: "Kongresse",
    IT: "Congressi",
    PT: "Congressos",
    ZH: "国会",
  },
];
let feines = [
  {
    CAT: "Director Tècnic",
    ES: "Director Técnico",
    EN: "CTO",
    FR: "Directeur technique",
    RU: "Технический директор",
    DE: "Technischer Direktor",
    IT: "Direttore tecnico",
    PT: "Diretor técnico",
    ZH: "技术总监",
  },
  {
    CAT: "Cap de Projectes",
    ES: "Director de Proyectos",
    EN: "Project Manager",
    FR: "Chef de projets",
    RU: "Руководитель проекта",
    DE: "Projektmanager",
    IT: "Manager di Proyecto",
    PT: "Gestor de projeto",
    ZH: "专案经理",
  },
  {
    CAT: "Responsable de serveis al client",
    ES: "Responsable de servicio al cliente",
    EN: "Service Account Manager",
    FR: "Gestionnaire de service de comptes",
    RU: "Менеджер по обслуживанию учетной записи",
    DE: "Service Account Manager",
    IT: "Amministratore dei servizio del conteggi",
    PT: "Gerente de serviço de conta",
    ZH: "服务客户经理",
  },
  {
    CAT: "Mestre",
    ES: "Profesor",
    EN: "Teacher",
    FR: "Prof",
    RU: "Учитель",
    DE: "Lehrer",
    IT: "Professore",
    PT: "Professor",
    ZH: "老师",
  },
  {
    CAT: "Desenvolupador Web",
    ES: "Desarrollador Web",
    EN: "Web Developer",
    FR: "Développeur web",
    RU: "веб-разработчик",
    DE: "Web-Entwickler",
    IT: "Sviluppatore web",
    PT: "Desenvolvedor da Web",
    ZH: "Web开发人员",
  },
];
let llengues = [
  {
    CAT: "Català",
    ES: "Catalán",
    EN: "Catalan",
    FR: "Catalan",
    RU: "Каталон",
    DE: "Katalanisch",
    IT: "Catalano",
    PT: "Catalão",
    ZH: "加泰罗尼亚州",
  },
  {
    CAT: "Castellà",
    ES: "Español",
    EN: "Spanish",
    FR: "Espagnol",
    RU: "испанский",
    DE: "Spanisch",
    IT: "Spagnolo",
    PT: "Espanhol",
    ZH: "西班牙语",
  },
  {
    CAT: "Anglès",
    ES: "Inglés",
    EN: "English",
    FR: "Anglais",
    RU: "английский",
    DE: "Englisch",
    IT: "Inglese",
    PT: "Inglês",
    ZH: "英语",
  },
  {
    CAT: "Francès",
    ES: "Francés",
    EN: "French",
    FR: "Français",
    RU: "Французский",
    DE: "Französisch",
    IT: "Francese",
    PT: "Francês",
    ZH: "法语",
  },
  {
    CAT: "Rus",
    ES: "Ruso",
    EN: "Russian",
    FR: "Russe",
    RU: "русский",
    DE: "Russisch",
    IT: "Ruso",
    PT: "Russo",
    ZH: "俄语",
  },
  {
    CAT: "Alemany",
    ES: "Alemán",
    EN: "German",
    FR: "Allemand",
    RU: "Немецкий",
    DE: "Deutsch",
    IT: "Tedesco",
    PT: "Alemão",
    ZH: "德语",
  },
  {
    CAT: "Italià",
    ES: "Italiano",
    EN: "Italian",
    FR: "Italien",
    RU: "Итальянский",
    DE: "Italienisch",
    IT: "Italiano",
    PT: "Italiano",
    ZH: "意大利人",
  },
  {
    CAT: "Portuguès",
    ES: "Portugués",
    EN: "Portuguese",
    FR: "Portugais",
    RU: "португальский",
    DE: "Portugiesisch",
    IT: "Portoghese",
    PT: "Português",
    ZH: "葡萄牙语",
  },
  {
    CAT: "Xinès",
    ES: "Chino",
    EN: "Chinese",
    FR: "Chinois",
    RU: "китайский",
    DE: "Chinesisch",
    IT: "Chino",
    PT: "Chinês",
    ZH: "中国人",
  },
];

export default function Cv() {
  const [language, setLanguage] = useState("CAT");
  function changeLanguage() {
    let tmp = idiomes.indexOf(language);
    if (tmp >= idiomes.length - 1) tmp = -1;
    let next = idiomes[tmp + 1];
    setLanguage(next);
    return next;
  }
  return (
    <div className="cv">
      <header>
        <div id="barraMenu">
          <nav>
            <div id="logo">
              <img src="./img/LOGO.png" alt="Logo" />
            </div>
          </nav>
          <div id="titol">JordiAlonso.com</div>
          <div id="idioma" onClick={() => changeLanguage()}>
            {language}
          </div>
        </div>
        <div id="separador"></div>
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
        <h1>+{titolsH1[0][language]}</h1>
        <h2>-{feines[0][language]}</h2>
        Afegir foto a Stadio da luz
        <figure>
          <img
            src="./img/obvan_ext2.jpg"
            alt="Unitat mòbil 3D de Medialuso. Palacio da Música (Porto)"
            width="500"
          />
          <figcaption>
            Unitat mòbil 3D de Medialuso. Klepth Live 3D al Palacio da Música de
            Porto
          </figcaption>
        </figure>
        <figure>
          <img
            src="./img/cartell3d_elclasico.png"
            alt="Cartell de promoció del Clásico en 3D"
            width="500"
            heigth="375"
          />
          <figcaption>
            Primera retransmissió d'El Clásico en 3D en directe
          </figcaption>
        </figure>
        <h2>-{feines[1][language]}</h2>
        <h3>--NEOM The Line 2020</h3>
        <h3>--TZoH v2 2020</h3>
        <h3>--Messi 10 by Cirque du Soleil 2019</h3>
        <h3>--BTS Woody Allen's visit to Spain 2019</h3>
        <h3>--NEOM Tourism Book &amp; Map 2019</h3>
        <h3>--NEOM Immersive 2019 </h3>
        <h3>--NEOM Smart City 2019</h3>
        <h3>--Messi Experience Park 2018</h3>
        <h3>--VR Live 2018</h3>
        <h3>--AutomaticTV 2014</h3>
        <h3>--Immersive TV 2010</h3>
        <h3>--Project FINE 2010</h3>
        <h3>--Fútbol 3D 2010</h3>
        <h3>--2020 3D Media 2008</h3>
        <h3>--i3media 2008</h3>
        <h3>--IPRacine 2008</h3>
        <h2>-{feines[2][language]}</h2>
        <h2>-{feines[3][language]}</h2>
        <h3>--ESADE Mentor alumnes del Màster</h3>
        <h3>--La Salle</h3>
        <h3>--ERAM</h3>
        <h3>--MSc UPC</h3>
        <h3>--Mediapro AutomaticTV</h3>
        <h3>--Mediapro 3D</h3>
        <h3>--RTVE Catalunya</h3>
        <h3>--ESCAC</h3>
        <h2>-VFX SV</h2>
        <h3>--Glory Day</h3>
        <h3>--Anunci Catalunya Música</h3>
        <h3>--Anunci La Agenda</h3>
        <h3>--Short Film</h3>
        <h2>-{feines[4][language]}</h2>
        <h3>
          --HTML5, CSS4, JS, SVG, ReactJS, ThreeJS, Web3D per Portfolio personal
        </h3>
        <h3>--HTML, CSS, JS, AJAX, JQuery, MariaDB, plugin 360 per Mediapro</h3>
        <h3>--Macromedia Flash per Webs de clients</h3>
        <h3>--HTML, CSS, JS per video online a cine.com</h3>
        <h3>--HTML, CSS, JS per e-commerce a reg2.net</h3>
        <h2>+{titolsH2[0][language]}</h2>
        <h3>-Serveis de formació</h3>
        <h3>-crypto mining</h3>
        <h3>-Domainer 1.200 dominis -ara 110-</h3>
        <h3>-cine.com descàrregues legals de vídeo</h3>
        <h3>-Iberseller e-commerce solutions</h3>
        <h3>-CADAT Informàtica importacions, muntatge de PC's</h3>
      </section>
      <section>
        <h2>+{titolsH2[1][language]}</h2>
        <h3>-VR</h3>
        <h3>-3D als Matins de Catradio</h3>
        <h3>-Canal+ Estrena simultània</h3>
        <h3>-TV3 Telenotícies</h3>
        <h3>-CadenaSER @cine.com</h3>
        <h3>-CATRADIO internet video @cine.com</h3>
        <h3>-internet video @cine.com</h3>
        <h3>-e-commerce @reg2.net</h3>
      </section>
      <section>
        <h2>+{titolsH2[2][language]}</h2>
        <h3>-Blog Veni Vidi Vici</h3>
        <h3>-Blog cine3D.com</h3>
        <h3>-Blog cine.com</h3>
        <figure>
          <img
            src="./img/DougTrumbull_Sitges.jpg"
            alt="entrevista a Doug Trumbull"
            width="500"
            heigth="375"
          />
          <figcaption>
            Entrevista a Doug Trumbull durant el festival de Sitges 2007 per
            cine.com
          </figcaption>
        </figure>
        <h3>-El Periódico de Catalunya</h3>
        <figure>
          <img
            src="./img/Elperiodico1.jpg"
            alt="Article#1 El Periódico"
            width="500"
            heigth="375"
          />{" "}
          <figcaption>
            Article a El Periódico de Catalunya (suplement de tecnologia)
          </figcaption>
        </figure>
        <figure>
          <img
            src="./img/Elperiodico2.jpg"
            alt="Article#2 El Periódico"
            width="500"
            heigth="375"
          />
          <figcaption>
            Article a El Periódico de Catalunya (suplement de tecnologia)
          </figcaption>
        </figure>
        <h3>-3D Magazine</h3>
      </section>
      <section>
        <h2>+{titolsH2[3][language]}</h2>
        <h3>-APD XR: the next big thing?</h3>
        <h3>-GITEX Huawei 5G Keynote</h3>
        <h3>-La Liga Technology Showcase Shanghai</h3>
        <h3>-La Liga Technology Showcase BCN</h3>
        <h3>-COEIC media &amp; IT</h3>
        <h3>-Auditori Mediapro 2020 3D Media</h3>
        <h3>-IBC 2020 3D Media</h3>
        <h3>-CGIx Glory Day</h3>
        <figure>
          <img
            src="./img/CGIx.jpg"
            alt="CGIx a Barcelona el 1999"
            width="500"
          />
          <figcaption>
            Presentació del projecte "Glory Day" al CGIx de Barcelona 04-02-1999
          </figcaption>
        </figure>
        <h3>-Festival de cinema de Sitges cine.com</h3>
        <h3>-Torre Agbar cine.com</h3>
        <figure>
          <img
            src="./img/CPAC_24-04-2008-Agbar.jpg"
            alt="CPAC r-evolució difital 24-04-08 a Torre Agbar"
            width="500"
            heigth="375"
          />
          <figcaption>
            Conferència a la Torre Agbar 24-04-2008 per CPAC: r-evolució digital
            (cine.com)
          </figcaption>
        </figure>
        <h3>-Santiago de Compostela cine.com</h3>
      </section>
      <section>
        <h1>+{titolsH1[1][language]}</h1>
        <h2>-MSc Photonics a UPC</h2>
        <h2>-MBA a ESADE</h2>
        <h2>-MA Computer Animation a ESCAC</h2>
        <h2>-BSc Computer Graphics a UAB</h2>
        <h2>+{titolsH2[4][language]}</h2>
        <h3>-Front-end web developer</h3>
        <h4>--Certificació Tecnocampus</h4>
        <h3>-Machine Learning</h3>
        <h4>--Certificació Coursera/Stanford</h4>
        <h3>-ITIL Essentials</h3>
        <h4>--Certificació EXIN</h4>
        <h3>-Project Manager</h3>
        <h4>--Certificació PMI</h4>
        <h3>-Softimage 3D</h3>
        <h4>--Certificació Softimage 101-501</h4>
        <h3>-Avid DS</h3>
        <h4>--Certificació Avid DS 101-501</h4>
      </section>
      <section>
        <h3>+{titolsH3[0][language]}</h3>
        <h4>-SIGGRAPH</h4>
        <h4>-NAB</h4>
        <h4>-IBC</h4>
        <h4>-MWC</h4>
        <h4>EU COST Action. 2017 Stockholm-Helsinki</h4>
        <a
          href="https://www.3d-contournet.eu/cost-training-school-3d-avcom-2015/"
          target="_blank"
          rel="noreferrer"
        >
          <h4>3D-AVCom Training School. EU COST Action. 2015 Lisbon</h4>
        </a>
        <a
          href="https://www.3d-contournet.eu/plenoptics-2013/"
          target="_blank"
          rel="noreferrer"
        >
          <h4>3D-ConTourNet Training School. EU COST Action. 2013 Sundsvall</h4>
        </a>
      </section>
      <section>
        <h1>+{titolsH1[2][language]}</h1>
        <h2>-SIGGRAPH</h2>
        <h2>-COEIC</h2>
        <h2>-VRARA</h2>
        <h2>-MENSA</h2>
      </section>
      <section>
        <h1>+{titolsH1[3][language]}</h1>
        <h2>-{llengues[0][language]}</h2>
        <h3>--Idioma Matern</h3>
        <h3>--Certificació C1</h3>
        <h2>-{llengues[1][language]}</h2>
        <h3>--Idioma Matern</h3>
        <h2>-{llengues[2][language]}</h2>
        <h3>--Nivell negociació</h3>
        <h3>--Michigan Proficiency</h3>
        <h2>-{llengues[3][language]}</h2>
        <h3>--Estudiat durant 7 anys a l'escola</h3>
        <h3>--Cal refrescar-lo</h3>
        <h2>-{llengues[4][language]}</h2>
        <h3>--Principiant</h3>
        <h3>--Estudiat fins 2on curs a l'EOI Barcelona-Drassanes</h3>
        <h2>-{llengues[5][language]}</h2>
        <h3>--Principiant</h3>
        <h3>--Curs online d'iniciació</h3>
        <h2>-{llengues[6][language]}</h2>
        <h3>--Principiant</h3>
        <h3>--Curs online d'iniciació</h3>
        <h2>-{llengues[7][language]}</h2>
        <h3>--Principiant</h3>
        <h3>--Curs online d'iniciació</h3>
        <h2>-{llengues[8][language]}</h2>
        <h3>--Principiant</h3>
        <h3>--Curs online d'iniciació</h3>
        <h3>--Classes particulars</h3>
      </section>
      <section>
        <h2>+{titolsH2[5][language]}</h2>
        <h3>-Tennis</h3>
        <h4>--3ª Categoria Grup 8</h4>
        <h3>-Tennis taula</h3>
        <h4>--3ª Categoria</h4>
        <h3>-Golf</h3>
        <h4>--Handicap 19.9</h4>
        <h3>-Esquí</h3>
        <h3>-Trekking</h3>
        <h3>-Beat Saber</h3>
        <h4>--Nivell Expert</h4>
        <h3>-Guitarra</h3>
        <h4>--Crusos online</h4>
        <h3>-Piano</h3>
        <h4>--4rt de Solfeig</h4>
        <h3>-Lectura</h3>
        <h4>--Darrer llibre: 01/2022 A Thousand Minds</h4>
        <h3>-Cinema</h3>
        <h4>--Veig totes les pelis en 3D i d'altres</h4>
        <h3>-Fotografia de viatges</h3>
        <figure>
          <img
            src="./img/kiruna.jpg"
            alt="Sol de mitjanit a Kiruna"
            width="500"
          />
          <figcaption>
            Sol de mitjanit a Kiruna (Suècia) + Superlluna 23-06-2013
          </figcaption>
        </figure>
        <figure>
          <img
            src="./img/kiruna.jpg"
            alt="Sol de mitjanit a Kiruna"
            width="500"
          />
          <figcaption>
            Giorgios Wreckage NEOM (Arabia Saudita), 30-09-2018
          </figcaption>
        </figure>
      </section>
      <footer>
        <section>
          <div id="xxss">
            <a
              href="https://linkedin.com/in/jordialonso"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/linkedin.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://twitter.com/jordialonso"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/twitter.svg" alt="twitter" />
            </a>
            <a
              href="https://instagram.com/jordialonso"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/instagram.svg" alt="instagram" />
            </a>
            <a
              href="https://facebook.com/jordi.alonso"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/facebook.svg" alt="facebook" />
            </a>
            <a
              href="https://youtube.com/user/cine3Dtv/videos"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/youtube.svg" alt="youtube" />
            </a>
          </div>

          <div id="contacte">
            <a href="mailto:jordi_alonso@hotmail.com?subject=He vist en seu CV a la seva web">
              <img src="./img/wechat.svg" alt="email" width="40" />
            </a>
            <a href="tel:+34905-115-050">
              <img src="./img/wechat.svg" alt="tel" width="40" />
            </a>
          </div>
          <div className="break"></div>
          <div id="copy">
            <h5>&copy; 2022 Synthespian SL. Tots els drets reservats</h5>
          </div>
        </section>
      </footer>
    </div>
  );
}
