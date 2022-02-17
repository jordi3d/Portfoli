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
    FR: " ",
    RU: " ",
    DE: " ",
    IT: " ",
    PT: " ",
    ZH: " ",
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
          <div id="logo"></div>
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
        <h2>-{feines[1][language]}</h2>
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
        <h2>-{feines[4][language]}</h2>
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
        <h3>-APD XR: the next big thing?</h3>
        <h3>-GITEX Huawei 5G Keynote</h3>
        <h3>-La Liga Technology Showcase Shanghai</h3>
        <h3>-La Liga Technology Showcase BCN</h3>
        <h3>-COEIC media &amp; IT</h3>
        <h3>-Mediapro 2020 3D Media</h3>
        <h3>-IBC 2020 3D Media</h3>
        <h3>-CGIx Glory Day</h3>
        <h3>-Festival de cinema de Sitges cine.com</h3>
        <h3>-Torre Agbar cine.com</h3>
        <h3>-Santiago de Compostela cine.com</h3>
      </section>
      <section>
        <h1>+{titolsH1[1][language]}</h1>
        <h2>-MSc Photonics a UPC</h2>
        <h2>-MBA a ESADE</h2>
        <h2>-MA Computer Animation a ESCAC</h2>
        <h2>-BSc Computer Graphics a UAB</h2>
        <h2>+{titolsH2[3][language]}</h2>
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
        <h4>-Suècia</h4>
        <h4>-Helsinki</h4>
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
        <h2>+{titolsH2[4][language]}</h2>
        <h3>-Tennis</h3>
        <h4>--</h4>
        <h3>-Tennis taula</h3>
        <h4>--</h4>
        <h3>-Golf</h3>
        <h4>--</h4>
        <h3>-Esquí</h3>
        <h4>--</h4>
        <h3>-Trekking</h3>
        <h4>--</h4>
        <h3>-Beat Saber</h3>
        <h4>--</h4>
        <h3>-Guitarra</h3>
        <h4>--</h4>
        <h3>-Piano</h3>
        <h4>--</h4>
        <h3>-Lectura</h3>
        <h4>--</h4>
        <h3>-Fotografia de viatges</h3>
        <h4>--</h4>
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
        </section>
        <section>
          <div id="contacte">
            <a href="mailto:jordi_alonso@hotmail.com?subject=He vist en seu CV a la seva web">
              <img src="./img/wechat.svg" alt="email" width="40" />
            </a>
            <a href="tel:+34905-115-050">
              <img src="./img/wechat.svg" alt="email" width="40" />
            </a>
          </div>
        </section>
      </footer>
      <section>
        <div id="copy">
          <h5>&copy; 2022 Synthespian SL. Tots els drets reservats</h5>
        </div>
      </section>
    </div>
  );
}
