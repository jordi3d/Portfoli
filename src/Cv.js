import "./Cv.css";
import { useState } from "react";

let idiomes_web = ["CAT", "ES", "EN", "FR", "RU", "DE", "IT", "PT", "NL", "ZH"];
let nom = [
  {
    CAT: "Jordi Alonso",
    ES: "Jorge Alonso",
    EN: "George Alonso",
    FR: "George Alonso",
    RU: "Хорди Алонсо ",
    DE: "George Alonso",
    IT: "Giorgio Alonso",
    PT: "Jorge Alonso",
    NL: "Jordi Alonso",
    ZH: "安桥笛",
  },
];
let experiencia_profesional = [
  {
    CAT: "Experiència Professional",
    ES: "Experiencia Profesional",
    EN: "Professional Experience",
    FR: "Expérience Professionnelle",
    RU: "Профессиональный опыт",
    DE: "Berufserfahrung",
    IT: "Esperienza Professionale",
    PT: "Experiência Profissional",
    NL: "Professionele ervaring",
    ZH: "专业经验",
  },
];
let feines = [
  {
    CAT: "Director Tècnic",
    ES: "Director Técnico",
    EN: "CTO",
    FR: "Directeur Technique",
    RU: "Технический директор",
    DE: "Technischer Direktor",
    IT: "Direttore Tecnico",
    PT: "Diretor Técnico",
    NL: "Technisch Directeur",
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
    NL: "Projectleider",
    ZH: "专案经理",
  },
  {
    CAT: "Responsable de Servei al Client",
    ES: "Responsable de Servicio al Cliente",
    EN: "Service Account Manager",
    FR: "Gestionnaire de Service de Comptes",
    RU: "Менеджер по обслуживанию учетной записи",
    DE: "Service Account Manager",
    IT: "Amministratore dei Servizio del Conteggi",
    PT: "Gerente de Serviço de Conta",
    NL: "Service Account Manager",
    ZH: "服务客户经理",
  },
  {
    CAT: "Mestre",
    ES: "Profesor",
    EN: "Teacher",
    FR: "Prof",
    RU: "Преподаватель",
    DE: "Lehrer",
    IT: "Professore",
    PT: "Professor",
    NL: "Docent",
    ZH: "老师",
  },
  {
    CAT: "Responsable de Producte",
    ES: "Jefe de Producto",
    EN: "Product Manager",
    FR: "Responsable du produit",
    RU: "Менеджер по продукту",
    DE: "Produktmanager",
    IT: "Gestione del prodotto",
    PT: "Gerente de produto",
    NL: "Verantwoordelijk voor product",
    ZH: "负责产品",
  },
  {
    CAT: "Delegat Regional",
    ES: "Delegado Regional",
    EN: "Branch Manager",
    FR: "Délégué Régional",
    RU: "Менеджер филиала",
    DE: "Manager der Niederlassung",
    IT: "Delegato regionale",
    PT: "Gerente de Branch",
    NL: "Regionale afgevaardigde",
    ZH: "区域代表",
  },
  {
    CAT: "Supervisor d'Efectes Visuals",
    ES: "Supervisor de efectos visuales",
    EN: "Visual effects Supervisor",
    FR: "Superviseur des effets visuels",
    RU: "Руководитель визуальных эффектов",
    DE: "Supervisor für visuelle Effekte",
    IT: "Supervisore degli effetti visivi",
    PT: "Supervisor de efeitos visuais",
    NL: "Supervisor van visuele effecten",
    ZH: "视觉效果的主管",
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
    NL: "Webontwikkelaar",
    ZH: "Web开发人员",
  },
  {
    CAT: "Periodista",
    ES: "Periodista",
    EN: "Journalist",
    FR: "Journaliste",
    RU: "Журналист",
    DE: "Journalist",
    IT: "Giornalista",
    PT: "Jornalista",
    NL: "Journalist",
    ZH: "记者",
  },
  {
    CAT: "Empresari",
    ES: "Empresario",
    EN: "Businessman",
    FR: "Entrepreneur",
    RU: "Бизнесмен",
    DE: "Geschäftsmann",
    IT: "Uomo d'affari",
    PT: "Homem de negocios",
    NL: "Zakenman",
    ZH: "商人",
  },
];
let entrevistes_i_conferencies = [
  {
    CAT: "Entrevistes i Conferències",
    ES: "Entrevistas y conferencias",
    EN: "Interviews and conferences",
    FR: "Entretiens et conférences",
    RU: "Интервью и конференции",
    DE: "Interviews und Konferenzen",
    IT: "Interviste e conferenze",
    PT: "Entrevistas e Conferências",
    NL: "Interviews en conferenties",
    ZH: "访谈和会议",
  },
];
let entrevistes = [
  {
    CAT: "Entrevistes",
    ES: "Entrevista",
    EN: "Interviews",
    FR: "Entretiens",
    RU: "Интервью",
    DE: "Interviews",
    IT: "Colloquio",
    PT: "Entrevistas",
    NL: "Sollicitatiegesprekken",
    ZH: "面试",
  },
];
let conferencies = [
  {
    CAT: "Conferències",
    ES: "Conferencias",
    EN: "Conferences",
    FR: "Conférences",
    RU: "Конференции",
    DE: "Konferenzen",
    IT: "Conferenze",
    PT: "Conferências",
    NL: "Conferenties",
    ZH: "会议",
  },
];
let educacio = [
  {
    CAT: "Educació",
    ES: "Educación",
    EN: "Education",
    FR: "Éducation",
    RU: "Образование",
    DE: "Bildung",
    IT: "Formazione scolastica",
    PT: "Educação",
    NL: "Opleiding",
    ZH: "教育",
  },
];
let formacio_reglada = [
  {
    CAT: "Formació Reglada",
    ES: "Formación Reglada",
    EN: "Regulated Training",
    FR: "Formation Réglementée",
    RU: "Регулируемая обучение",
    DE: "Reguliertes Training",
    IT: "Formazione Regolata",
    PT: "Formação Regulada",
    NL: "Gereguleerde training",
    ZH: "监管培训",
  },
];
let cursos = [
  {
    CAT: "Cursos",
    ES: "Cursos",
    EN: "Courses",
    FR: "Cours",
    RU: "Курсы",
    DE: "Kurse",
    IT: "Corsi",
    PT: "Cursos",
    NL: "Cursussen",
    ZH: "培训班",
  },
];
let congressos = [
  {
    CAT: "Congressos",
    ES: "Congresos",
    EN: "Congresses",
    FR: "Congrès",
    RU: "Конгрессы",
    DE: "Kongresse",
    IT: "Congressi",
    PT: "Congressos",
    NL: "Congressen",
    ZH: "国会",
  },
];
let idiomes = [
  {
    CAT: "Idiomes",
    ES: "Idiomas",
    EN: "Languages",
    FR: "Langues",
    RU: "Языки",
    DE: "Sprachen",
    IT: "Idiomas",
    PT: "Línguas",
    NL: "Talen",
    ZH: "语言",
  },
];
let altres = [
  {
    CAT: "Altres",
    ES: "Otros",
    EN: "Others",
    FR: "Autres",
    RU: "Другие",
    DE: "Andere",
    IT: "Ottros",
    PT: "Outras",
    NL: "Andere",
    ZH: "其他",
  },
];
let afiliacions = [
  {
    CAT: "Afiliacions",
    ES: "Afiliaciones",
    EN: "Affiliations",
    FR: "Affiliations",
    RU: "Принадлежности",
    DE: "Angelegenheiten",
    IT: "Affiliazioni",
    PT: "Afiliações",
    NL: "Affiliaties",
    ZH: "隶属关系",
  },
];
let aficions = [
  {
    CAT: "Aficions",
    ES: "Aficiones",
    EN: "Hobbies",
    FR: "Passe-temps",
    RU: "Хобби",
    DE: "Hobbys",
    IT: "Africations",
    PT: "Hobbies",
    NL: "Hobby&apos;s",
    ZH: "爱好",
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
    NL: "Catalaans",
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
    NL: "Spaans",
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
    NL: "Engels",
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
    NL: "Frans",
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
    NL: "Russisch",
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
    NL: "Duits",
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
    NL: "Italiaans",
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
    NL: "Portugees",
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
    NL: "Portugees",
    ZH: "中国人",
  },
];
let copyright = [
  {
    CAT: "Tots els drets reservats",
    ES: "Reservados todos los derechos",
    EN: "All rights reserved",
    FR: "Tous droits réservés",
    RU: "Все права защищены",
    DE: "Alle Rechte vorbehalten",
    IT: "Tutti i diritti riservati",
    PT: "Todos os direitos reservados",
    NL: "Alle rechten voorbehouden",
    ZH: "版权所有",
  },
];

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
            <div id="logo">
              <div className="dropdownbis">
                <div className="dropbtnbis">
                  <img src="./img/LOGO60x60.png" alt="Logo" />
                </div>
                <div className="dropdown-contentbis">
                  <a
                    href="https://www.jordialonso.com"
                    target="_self"
                    rel="noreferrer"
                  >
                    Anar al Blog Veni Vidi Vici
                  </a>
                  <a href="#0bis">Experiència Professional</a>
                  <a href="#0ter">Entrevistes i Conferències</a>
                  <a href="#0quad">Educació</a>
                  <a href="#0penta">Altres</a>
                  <a href="#0hexa">Descarregar CV</a>
                </div>
              </div>
            </div>
          </nav>
          <div id="titol"> {nom[0][language]} </div>
          <div id="idioma" onClick={() => changeLanguage()}>
            {language}
          </div>
        </div>
        <div id="separador"> </div>
        <div id="fotoMain"></div>
      </header>
      <section>
        <h1 className="main"> {experiencia_profesional[0][language]} </h1>
        <div className="dropdown">
          <div className="dropbtn">{feines[0][language]}</div>
          <div className="dropdown-content">
            <a
              href="https://www.youtube.com/watch?v=aPbVrFLgIgE"
              target="_blank"
              rel="noreferrer"
            >
              El clásico en VR
              <img
                src="./img/yt20.png"
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
              <img
                src="./img/mediapro.png"
                alt="mediapro"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <figure>
              <img
                src="./img/"
                alt="Prova de concepte de Fútbol en VR des del Santiago Bernabéu"
                width="500"
              />
              <figcaption>
                Prova de concepte de fútbol VR. El Clásico 2018.
              </figcaption>
            </figure>
            <a
              href="https://www.mundodeportivo.com/futbol/laliga/20180302/441187363437/la-tecnologia-que-hay-detras-de-laliga-explicada-al-detalle.html"
              target="_blank"
              rel="noreferrer"
            >
              Notícia a El Mundo Deportivo
            </a>
            <a href="#1">Benfica-Sporting de Lisboa 3D</a>
            <figure>
              <img
                src="./img"
                alt="Est&aacute;dio da Luz, Lisboa"
                width="500"
              />
              <figcaption>Afegir foto</figcaption>
            </figure>
            <a
              href="https://www.youtube.com/watch?v=NU2ZXZFZhY4"
              target="_blank"
              rel="noreferrer"
            >
              Klepth Live 3D a Casa da M&uacute;sica de Porto
              <img
                src="./img/yt20.png"
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
              <img
                src="./img/mediapro.png"
                alt="mediapro"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <figure>
              <img
                src="./img/obvan_ext2.jpg"
                alt="Unitat mòbil 3D de Medialuso. Palacio da Música (Porto)"
                width="500"
              />
              <figcaption>
                Unitat mòbil 3D de Medialuso. Klepth Live 3D a Casa da Música de
                Porto
              </figcaption>
            </figure>
            <a
              href="https://www.youtube.com/watch?v=AlTtevooKGE"
              target="_blank"
              rel="noreferrer"
            >
              Abrunhosa 3D des del Coliseu de Porto
              <img
                src="./img/yt20.png"
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
              <img
                src="./img/mediapro.png"
                alt="mediapro"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <a
              href="https://www.live-production.tv/news/4k-8k-arising/mediapro-group-produced-live-3d-concert-portuguese-group-deolinda.html"
              target="_blank"
              rel="noreferrer"
            >
              Deolinda 3D des de Lisboa
              <img
                src="./img/mediapro.png"
                alt="mediapro"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=zEckoGCYMkY"
              target="_blank"
              rel="noreferrer"
            >
              RIP Curl World Cup of surfing des de Peniche, Portugal
              <img
                src="./img/yt20.png"
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
              <img
                src="./img/mediapro.png"
                alt="mediapro"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <a
              href="https://www.live-production.tv/news/4k-8k-arising/3d-screening-bar%C3%A7a-%E2%80%93-madrid-match-was-big-success.html"
              target="_blank"
              rel="noreferrer"
            >
              Fútbol 3D Live
              <img
                src="./img/yt20.png"
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
              <img
                src="./img/mediapro.png"
                alt="mediapro"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <figure>
              <img
                src="./img/cartell3d_elclasico.png"
                alt="Cartell de promoció del Clásico en 3D"
                width="500"
                heigth="375"
              />
              <figcaption>
                Primera retransmissió d&apos;El Clásico en 3D en directe
              </figcaption>
            </figure>

            <a
              href="https://www.youtube.com/watch?v=ZYNbuYREyeE"
              target="_blank"
              rel="noreferrer"
            >
              La Rosa de Foc 3D
              <img
                src="./img/yt20.png"
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
              <img
                src="./img/mediapro.png"
                alt="mediapro"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <figure>
              <img
                src="./img/Larosadefoc.jpg"
                alt="Cartell de La Rosa de Foc"
                width="500"
              />
              <figcaption>Cartell de la pel·l&iacute;cula</figcaption>
            </figure>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[1][language]}</div>
          <div className="dropdown-content">
            <a href="#4">NEOM The Line 2020</a>
            <figure>
              <img
                src="./img/theline.jpg"
                alt="NEOM The Line"
                width="500"
                heigth="375"
              />
              <figcaption>
                Mapa de The Line a NEOM, Noroest de l&apos;Aràbia Saudita
              </figcaption>
            </figure>
            <figure>
              <img
                src="./img/theline2.jpg"
                alt="NEOM The Line Detalls"
                width="500"
                heigth="375"
              />
              <figcaption>Detalls de The Line a NEOM</figcaption>
            </figure>
            <a
              href="https://www.youtube.com/watch?v=OLIpvPvQ14E"
              target="_blank"
              rel="noreferrer"
            >
              The Zone of Hope
              <img
                src="./img/yt20.png"
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <figure>
              <img
                src="./img/tzoh.png"
                alt="The Zone oh Hope"
                width="500"
                heigth="375"
              />
              <figcaption>
                The Zone of Hope v1 per Aigües de Barcelona
              </figcaption>
            </figure>
            <a
              href="https://mediaproexhibitions.com/ca/project/messi-challenge"
              target="_blank"
              rel="noreferrer"
            >
              Messi Challenge: sigues Messi per un dia
            </a>
            <figure>
              <img
                src="./img/messi10.jpg"
                alt="Messi Challenge"
                width="500"
                heigth="375"
              />
              <figcaption>
                Messi Challenge at Messi10 by Cirque du Soleil. Setembre 2019
              </figcaption>
            </figure>
            <a href="#7">BTS Woody Allen&apos;s visit to Spain 2019</a>
            <a href="#8">NEOM Tourism Book &amp; Map 2019</a>
            <a href="#9">NEOM Immersive 2019</a>
            <a href="#10">NEOM Smart City 2019</a>
            <a
              href="https://mediaproexhibitions.com/ca/project/mep"
              target="_blank"
              rel="noreferrer"
            >
              MEP (Messi Experience Park) 2018
            </a>
            <figure>
              <img
                src="./img/mep.jpg"
                alt="Messi Experience Park"
                width="500"
                heigth="375"
              />
              <figcaption>Messi Experience Park a Nanjing, China</figcaption>
            </figure>
            <a
              href="https://www.youtube.com/watch?v=bKJ9cW0xRuw"
              target="_blank"
              rel="noreferrer"
            >
              VR Live Gulf League 2018
              <img
                src="./img/yt20.png"
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <figure>
              <img
                src="./img/vrlive.jpg"
                alt="VR Live Gulf League 2018"
                width="500"
                heigth="375"
              />
              <figcaption>VR Live: Gulf Fooball League. Dubai, EAU</figcaption>
            </figure>
            <a
              href="https://www.youtube.com/watch?v=5M49dCMpQJw"
              target="_blank"
              rel="noreferrer"
            >
              AutomaticTV 2014
              <img
                src="./img/yt20.png"
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <figure>
              <img
                src="./img/automatictv.jpg"
                alt="AutomaticTV"
                width="500"
                heigth="375"
              />
              <figcaption>
                AutomaticTV: producció automàtica de continguts en directe
              </figcaption>
            </figure>
            <a href="#14">ImmersiveTV 2010</a>
            <a
              href="https://vimeo.com/41780222"
              target="_blank"
              rel="noreferrer"
            >
              Project FINE 2010
              <img
                src="./img/yt20.png"
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <figure>
              <img
                src="./img/ProjectFINE.jpg"
                alt="Roll up de ProjectFINE"
                width="500"
              />
              <figcaption>
                Andrés Iniesta va cedir la seva imatge al projecte de recerca
                Europeu
              </figcaption>
            </figure>
            <a href="#15">Fútbol 3D 2010</a>
            <a href="#16">APIDIS 2009</a>
            <a href="#17">2020 3D Media 2008</a>
            <a href="#18">i3media 2008</a>
            <a href="#19">IPRacine 2008</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[2][language]}</div>
          <div className="dropdown-content">
            <a href="#20">VRARA President del capítol de Catalunya</a>
            <a href="#21">Sun Microsystems</a>
            <a href="#22">Netscape</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[3][language]}</div>
          <div className="dropdown-content">
            <a href="#23">ESADE Mentor alumnes del Màster</a>
            <a href="#24">La Salle*</a>
            <a href="#25">ERAM UdG</a>
            <a href="#26">MSc UPC</a>
            <a href="#27">Mediapro AutomaticTV</a>
            <a href="#28">Mediapro 3D</a>
            <a href="#29">RTVE Catalunya</a>
            <a href="#30">ESCAC Escola Superior de Cinema</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[4][language]}</div>
          <div className="dropdown-content">
            <a href="#23">Brainstorm Studio</a>
            <a href="#23">Softimage 3D</a>
            <a
              href="https://www.youtube.com/watch?v=Crq3--XXwxc"
              alt="Vídeo demo Accom Elset any 1999 a Broadcat Madrid"
              rel="noreferrer"
            >
              Accom Elset Live NT
              <img
                src="./img/yt20.png"
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <a href="#25">Avid DS</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[5][language]}</div>
          <div className="dropdown-content">
            <a href="#23">The VR/AR Association Catalonia Chapter</a>
            <figure>Posar fotos sopar MWC</figure>
            <figcaption></figcaption>
            <a href="#23">Promovisa Catalunya</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[6][language]}</div>
          <div className="dropdown-content">
            <a href="#31">Glory Day</a>
            <a href="#32">Capçalera Sitges Film Festival</a>
            <a href="#33">Anunci Catalunya Música</a>
            <a href="#34">Anunci La Agenda</a>
            <a href="#35">Dobles: Curtmetratge</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[7][language]}</div>
          <div className="dropdown-content">
            <a href="#36">
              HTML5, CSS3, JS, SVG, ReactJS, ThreeJS, Web3D per Portfolio
              personal
            </a>
            <a href="#37">
              SEO, SEM, Wordpress, PHP, Python, MySQL per webs pròpies
            </a>
            <a href="#38">
              HTML5, CSS2, JS, Ajax, jQuery, PHP, MariaDB, plugin 360 per
              Mediapro
            </a>
            <a href="#39">Macromedia Flash per Webs de clients</a>
            <a href="#40">HTML4, CSS2, JS per video online a cine.com</a>
            <a href="#41">HTML4, CSS2, JS per e-commerce a reg2.net</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[8][language]}</div>
          <div className="dropdown-content">
            <a
              href="https://www.jordialonso.com"
              target="_blank"
              rel="noreferrer"
            >
              Blog Veni Vidi Vici
            </a>
            <a href="https://www.cine3d.com" target="_blank" rel="noreferrer">
              Blog cine3D.com
            </a>
            <a href="#51">Blog cine.com</a>
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
            <a
              href="https://www.elperiodico.com"
              target="_blank"
              rel="noreferrer"
            >
              El Periódico de Catalunya
            </a>
            <figure>
              <img
                src="./img/Elperiodico1.jpg"
                alt="Article#1 El Periódico"
                width="500"
                heigth="375"
              />
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
            <a
              href="https://www.3dmagazine.com"
              target="_blank"
              rel="noreferrer"
            >
              3D Magazine
            </a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[9][language]}</div>
          <div className="dropdown-content">
            <a href="#42">
              Serveis de formació CGI, 3D, XR, web, Presentacions en públic
            </a>
            <a href="#43">SEO, SEM, Optimització de webs WordPress</a>
            <a href="https://www.openvino.org" target="_blank" rel="noreferrer">
              Blockchain/NFT: Projecte OpenVino.org &amp; OpenCava.org (2017)
            </a>
            <a href="#45">Crypto: mineria &amp; trading (2013)</a>
            <a href="#46">Domainer: +1.000 dominis (actualment +100)</a>
            <a href="#47">VoD: cine.com descàrregues legals (1999)</a>
            <a href="#48">Iberseller e-commerce solutions (1997)</a>
            <a href="#49">AI: Sistema Expert en PDC-PROLOG/UNIX (1992)</a>
            <a href="#50">
              CADAT Informàtica: importacions, muntatge de PC&apos;s (1988)
            </a>
            <a href="#51">
              Desenvolupament d&apos;aplicacions en Clipper/MS-DOS (1987)
            </a>
          </div>
        </div>
      </section>
      <section>
        <h1 className="main">{entrevistes_i_conferencies[0][language]}</h1>
        <section>
          <div className="dropdown">
            <div className="dropbtn">{entrevistes[0][language]}</div>
            <div className="dropdown-content">
              <a
                href="https://www.youtube.com/watch?v=XadyIOiavgk"
                target="_blank"
                rel="noreferrer"
              >
                VR al 360 Film Fest de Barcelona
              </a>
              <a
                href="https://www.ccma.cat/catradio/alacarta/el-mat-de-catalunya-rdio-manel-fuentes/avatar/audio/398359/"
                target="_blank"
                rel="noreferrer"
              >
                3D als Matins de Catradio
              </a>
              <a href="#54">Canal+ Estrena simultània</a>
              <a href="#55">TV3 Telenotícies @cine.com</a>
              <a
                href="https://play.cadenaser.com/audio/20060404csrcsr_5.Aes/"
                target="_blank"
                rel="noreferrer"
              >
                HoyPorHoy, CadenaSER @cine.com
              </a>
              <a href="#57">CATRADIO internet video @cine.com</a>
              <a href="#58">Internet video @cine.com</a>
              <a href="#59">e-commerce @reg2.net</a>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">{conferencies[0][language]}</div>
            <div className="dropdown-content">
              <a
                href="https://www.youtube.com/watch?v=einYD7AtS2M"
                target="_blank"
                rel="noreferrer"
              >
                5º Congreso APD. XR: the next big thing?
                <img
                  src="./img/yt20.png"
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a href="#61">
                GITEX 2019. Huawei 5G Keynote
                <img
                  src="./img/mediapro.png"
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
                <figure>
                  <img
                    src="./img/huawei2.jpg"
                    alt="keynote 5G per Huawei a GITEX Dubai"
                    width="500"
                  />
                  <figcaption>
                    Xerrada sobre 5G per Huawei durant el GITEX 2019 de Dubai
                  </figcaption>
                </figure>
              </a>
              <a href="#62">
                La Liga Technology Showcase Shanghai. 15-07-2019
                <img
                  src="./img/yt20.png"
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
                <img
                  src="./img/mediapro.png"
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <figure>
                <img
                  src="./img/LaLigaASIA.png"
                  alt="LaLiga Technology Showcase. Shanghai"
                  width="500"
                />
                <figcaption>
                  Presentació de la prova de concepte de futbol en VR per LaLiga
                </figcaption>
              </figure>
              <a href="#63">
                La Liga Technology Showcase BCN. 04-03-2019
                <img
                  src="./img/mediapro.png"
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <figure>
                <img
                  src="./img/LaLigaBCN.jpg"
                  alt="LaLiga Technology Showcase. RCD Stadium"
                  width="500"
                />
                <figcaption>
                  Presentació de la prova de concepte de futbol en VR per LaLiga
                </figcaption>
              </figure>
              <a href="#64">
                COEIC media &amp; IT
                <img
                  src="./img/mediapro.png"
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a href="#65">
                Auditori Mediapro 2020 3D Media
                <img
                  src="./img/mediapro.png"
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a href="#66">
                IBC 2020 3D Media
                <img
                  src="./img/mediapro.png"
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a href="#67">
                REBUILD 2018. Construcci&oacute; 4.0
                <img
                  src="./img/mediapro.png"
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a href="#68">Festival de cinema de Sitges cine.com</a>
              <a href="#69">Torre Agbar cine.com</a>
              <figure>
                <img
                  src="./img/CPAC_24-04-2008-Agbar.jpg"
                  alt="CPAC r-evolució difital 24-04-08 a Torre Agbar"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  Conferència a la Torre Agbar 24-04-2008 per CPAC: r-evolució
                  digital(cine.com)
                </figcaption>
              </figure>
              <a href="#70">Santiago de Compostela cine.com</a>
              <a href="#70bis">CGIx Glory Day</a>
              <figure>
                <img
                  src="./img/CGIx.jpg"
                  alt="CGIx a Barcelona el 1999"
                  width="500"
                />
                <figcaption>
                  Presentació del projecte "Glory Day" al CGIx de Barcelona
                  04-02-1999
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </section>
      <section>
        <section>
          <h1 className="main">{educacio[0][language]}</h1>
          <div className="dropdown">
            <div className="dropbtn">{formacio_reglada[0][language]}</div>
            <div className="dropdown-content">
              <a href="#71">MSc Photonics a UPC</a>
              <a href="#72">MBA a ESADE -no acabat-</a>
              <a href="#73">MA Computer Animation a ESCAC</a>
              <a href="#74">BSc Computer Science a UAB</a>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">{cursos[0][language]}</div>
            <div className="dropdown-content">
              <a href="#75">Front-end web developer</a>
              <figure>Certificació Tecnocampus</figure>
              <a href="#76">Machine Learning</a>
              <figure>Certificació Coursera/Stanford</figure>
              <a href="#77">SCRUM/Agile</a>
              <figure>Certificació Mediapro</figure>
              <a href="#78">ITIL Essentials</a>
              <figure>Certificació EXIN</figure>
              <a href="#79">Project Manager</a>
              <figure>Certificació PMI</figure>
              <a href="#79">6-sigma</a>
              <figure>Certificació Sun Microsystems</figure>
              <a href="#80">Arduino</a>
              <figure>Certificació UPC</figure>
              <a href="#81">Avid DS</a>
              <figure>Certificació Avid DS 101-501</figure>
              <a href="#82">Softimage 3D</a>
              <figure>Certificació Softimage 101-501</figure>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">{congressos[0][language]}</div>
            <div className="dropdown-content">
              <a
                href="https://www.siggraph.org"
                target="_blank"
                rel="noreferrer"
              >
                SIGGRAPH
              </a>
              <a
                href="https://www.nabshow.com"
                target="_blank"
                rel="noreferrer"
              >
                NAB
              </a>
              <a href="https://www.ibc.org" target="_blank" rel="noreferrer">
                IBC
              </a>
              <a
                href="https://www.mwcbarcelona.com"
                target="_blank"
                rel="noreferrer"
              >
                MWC
              </a>
              <a
                href="https://3dtv-con.org/silja-serenade/"
                target="_blank"
                rel="noreferrer"
              >
                3DTV-CON Training School IEEE. 2018 Stockholm-Helsinki
              </a>
              <a
                href="https://www.3d-contournet.eu/cost-training-school-3d-avcom-2015/"
                target="_blank"
                rel="noreferrer"
              >
                3D-AVCom Training School. EU COST Action. 2015 Lisbon
              </a>
              <a
                href="https://www.3d-contournet.eu/plenoptics-2013/"
                target="_blank"
                rel="noreferrer"
              >
                3D-ConTourNet Training School. EU COST Action. 2013 Sundsvall
              </a>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">{idiomes[0][language]}</div>
            <div className="dropdown-content">
              <a href="#86">{llengues[0][language]}</a>
              <figure>Idioma Nadiu</figure>
              <figure>Certificació C1</figure>
              <a href="#87">{llengues[1][language]}</a>
              <figure>Idioma Nadiu</figure>
              <a href="#88">{llengues[2][language]}</a>
              <figure>Nivell negociació</figure>
              <figure>Michigan Proficiency</figure>
              <a href="#89">{llengues[3][language]}</a>
              <figure>Estudiat durant 7 anys a l&apos;escola</figure>
              <figure>Cal refrescar-lo</figure>
              <a href="#90">{llengues[4][language]}</a>
              <figure>Principiant</figure>
              <figure>
                Estudiat fins 2on curs a l&apos;EOI Barcelona-Drassanes
              </figure>
              <a href="#91">{llengues[5][language]}</a>
              <figure>Principiant</figure>
              <figure>Curs online d&apos;iniciació</figure>
              <a href="#92">{llengues[6][language]}</a>
              <figure>Principiant</figure>
              <figure>Curs online d&apos;iniciació</figure>
              <a href="#93">{llengues[7][language]}</a>
              <figure>Principiant</figure>
              <figure>Curs online d&apos;iniciació</figure>
              <a href="#94">{llengues[8][language]}</a>
              <figure>Principiant</figure>
              <figure>Curs online d&apos;iniciació</figure>
              <figure>Classes particulars</figure>
            </div>
          </div>
        </section>
      </section>
      <section>
        <h1 className="main">{altres[0][language]}</h1>
        <section>
          <div className="dropdown">
            <div className="dropbtn">{afiliacions[0][language]}</div>
            <div className="dropdown-content">
              <a href="#95">SIGGRAPH Pioneers</a>
              <a href="#95bis">ACM</a>
              <a href="#95ter">Advanced Imaging Society</a>
              <a href="#96">COEIC</a>
              <a href="#97">The VR/AR Association</a>
              <a href="#98">Open Neuralink</a>
              <a href="#99">MENSA</a>
              <a href="#99bis">Barcelon@ Connection</a>
              <a href="#100">CT Barcino</a>
              <a href="#100bis">FCG</a>
              <a href="#101">ACPJG</a>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">{aficions[0][language]}</div>
            <div className="dropdown-content">
              <a href="#102">Tennis</a>
              <figure>3ª Categoria Grup 8</figure>
              <a href="#103">Tennis taula</a>
              <figure>3ª Categoria</figure>
              <a href="#104">Golf</a>
              <figure>Millor h&agrave;ndicap 15.5</figure>
              <a href="#105">Esquí</a>
              <a href="#106">Submarinisme</a>
              <figure>FEDAS 1*</figure>
              <a href="#107">Trekking</a>
              <a href="#108">Beat Saber</a>
              <figure>Nivell Expert</figure>
              <a href="#109">Guitarra</a>
              <figure>Cursos online</figure>
              <a href="#110">Piano</a>
              <figure>M&apos;han donat classes particulars</figure>
              <figure>4rt de solfeig</figure>
              <a href="#111">Lectura</a>
              <figure>Darrers llibres:</figure>
              <figure>04/2022 The Cerebral Cortex</figure>
              <figure>03/2022 A Thousand Minds</figure>
              <figure>02/2022 JavaScript The Definitive Guide</figure>
              <figure>01/2022 LifeSpan</figure>
              <figure>12/2021 El Mecanisme</figure>
              <a href="#112">Cuina</a>
              <a href="#113">Cinema</a>
              <figure>
                Veig totes les pel·lis en 3D i tamb&eacute; d&apos;altres
              </figure>
              <a
                href="https://www.fototurismo.net"
                target="_blank"
                rel="noreferrer"
              >
                Fotografia de viatges
              </a>
              <figure>
                <img
                  src="./img/kiruna.jpg"
                  alt="Sol de mitjanit a Kiruna"
                  width="500"
                />
                <figcaption>
                  Sol de mitjanit+Superlluna a Kiruna (Su&egrave;cia) 23-06-2013
                </figcaption>
              </figure>
              <figure>
                <img
                  src="./img/Giorgios.jpg"
                  alt="Giorgios Wreckage by Ben Thouard"
                  width="500"
                />
                <figcaption>
                  Giorgios Wreckage a NEOM (Ar&agrave;bia Saudita), 30-09-2018
                </figcaption>
              </figure>
              <figure>
                <img
                  src="./img/fototurismo.jpg"
                  alt="Web personal de fotos de turisme"
                  width="500"
                />
                <figcaption>Més fotos a la meva web FotoTurismo.net</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </section>
      <footer>
        <section>
          <div id="peu">
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
            <a href="mailto:info@synthespian.net?subject=Web de Jordi Alonso">
              <img id="email" src="./img/email.svg" alt="email" width="45" />
            </a>
          </div>
          <div className="break"></div>
          <div id="copy">
            <h5>&copy; 2022 Jordi Alonso. {copyright[0][language]}</h5>
          </div>
        </section>
      </footer>
    </div>
  );
}
