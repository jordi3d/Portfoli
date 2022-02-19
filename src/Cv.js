import "./Cv.css";
import { useState } from "react";

let idiomes_web = ["CAT", "ES", "EN", "FR", "RU", "DE", "IT", "PT", "ZH"];
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
    ZH: "专业经验",
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
    CAT: "Responsable de servei al client",
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
    CAT: "Supervisor d'Efectes Visuals",
    ES: "Supervisor de efectos visuales",
    EN: "Visual effects Supervisor",
    FR: "Superviseur des effets visuels",
    RU: "Руководитель визуальных эффектов",
    DE: "Supervisor für visuelle Effekte",
    IT: "Supervisore degli effetti visivi",
    PT: "Supervisor de efeitos visuais",
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
              <div class="dropdownbis">
                <div class="dropbtnbis">
                  <img src="./img/LOGO60x60.png" alt="Logo" />
                </div>
                <div class="dropdown-contentbis">
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
        <div id="fotoMain">
          <div id="texte">
            Foto de perfil, amb una animació que va canviant-la segons temàtica
            i fent servir el component Carrousel:
            <br />
            (APD, Huawei, NEOM)
            <br />
            (Lisboa, Futbol3D)
            <br />
            (Logos d'empreses -CV visual-)
            <br />
            (Obi Wan, Rambo)
          </div>
        </div>
      </header>
      <section>
        <h1 className="main"> {experiencia_profesional[0][language]} </h1>
        <div class="dropdown">
          <div class="dropbtn">{feines[0][language]}</div>
          <div class="dropdown-content">
            <a href="#1">Afegir foto a Stadio da luz</a>
            <a href="#2">
              <figure>
                <img
                  src="./img/obvan_ext2.jpg"
                  alt="Unitat mòbil 3D de Medialuso. Palacio da Música (Porto)"
                  width="500"
                />
                <figcaption>
                  Unitat mòbil 3D de Medialuso. Klepth Live 3D a Casa da Música
                  de Porto
                </figcaption>
              </figure>
            </a>
            <a href="#3">
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
            </a>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">{feines[1][language]}</div>
          <div class="dropdown-content">
            <a href="#4">NEOM The Line 2020</a>
            <figure>
              <img
                src="./img/theline.jpg"
                alt="NEOM The Line"
                width="500"
                heigth="375"
              />
              <figcaption>
                Mapa de The Line a NEOM, Noroest de l'Aràbia Saudita
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
              Vídeo: The Zone of Hope
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
              Vídeo de Messi Challenge: sigues Messi per un dia
            </a>
            <figure>
              <img
                src="./img/messi10.jpg"
                alt="Messi10 by Cirque du Soleil"
                width="500"
                heigth="375"
              />
              <figcaption>Messi10 by Cirque du Soleil</figcaption>
            </figure>
            <a href="#7">BTS Woody Allen's visit to Spain 2019</a>
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
              Video promo: VR Live Gulf League 2018
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
            <a href="#13">AutomaticTV 2014</a>
            <a href="#14">Immersive TV 2010</a>
            <a href="#15">Project FINE 2010</a>
            <a href="#16">Fútbol 3D 2010</a>
            <a href="#17">2020 3D Media 2008</a>
            <a href="#18">i3media 2008</a>
            <a href="#19">IPRacine 2008</a>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">{feines[2][language]}</div>
          <div class="dropdown-content">
            <a href="#20">VRARA President del capítol de Catalunya</a>
            <a href="#21">Sun Microsystems</a>
            <a href="#22">Netscape</a>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">{feines[3][language]}</div>
          <div class="dropdown-content">
            <a href="#23">ESADE Mentor alumnes del Màster</a>
            <a href="#24">La Salle</a>
            <a href="#25">ERAM</a>
            <a href="#26">MSc UPC</a>
            <a href="#27">Mediapro AutomaticTV</a>
            <a href="#28">Mediapro 3D</a>
            <a href="#29">RTVE Catalunya</a>
            <a href="#30">ESCAC</a>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">{feines[4][language]}</div>
          <div class="dropdown-content">
            <a href="#31">Glory Day</a>
            <a href="#32">Capçalera Festival de Sitges</a>
            <a href="#33">Anunci Catalunya Música</a>
            <a href="#34">Anunci La Agenda</a>
            <a href="#35">Dobles: Curtmetratge</a>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">{feines[5][language]}</div>
          <div class="dropdown-content">
            <a href="#36">
              HTML5, CSS3, JS, SVG, ReactJS, ThreeJS, Web3D per Portfolio
              personal
            </a>
            <a href="#37">SEO, SEM, Wordpress, PHP, MySQL per webs pròpies</a>
            <a href="#38">
              HTML5, CSS2, JS, Ajax, jQuery, PHP, MariaDB, plugin 360 per
              Mediapro
            </a>
            <a href="#39">Macromedia Flash per Webs de clients</a>
            <a href="#40">HTML4, CSS2, JS per video online a cine.com</a>
            <a href="#41">HTML4, CSS2, JS per e-commerce a reg2.net</a>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">{feines[6][language]}</div>
          <div class="dropdown-content">
            <a href="#49">Blog Veni Vidi Vici</a>
            <a href="#50">Blog cine3D.com</a>
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
            <a href="#52">El Periódico de Catalunya</a>
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
            <a href="#53">3D Magazine</a>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">{feines[7][language]}</div>
          <div class="dropdown-content">
            <a href="#42">
              Serveis de formació CGI, 3D, XR, web, Presentacions en públic
            </a>
            <a href="#43">SEO, SEM, Optimització de webs</a>
            <a href="#44">
              Blockchain/NFT: Projecte OpenVino.org &amp; OpenCava.org (2017)
            </a>
            <a href="#45">Crypto: mineria &amp; trading (2013)</a>
            <a href="#46">Domainer: +1.000 dominis (actualment +100)</a>
            <a href="#47">VoD: cine.com descàrregues legals (1999)</a>
            <a href="#48">Iberseller e-commerce solutions (1997)</a>
            <a href="#49">AI: Sistema Expert en PDC-PROLOG/UNIX</a>
            <a href="#50">CADAT Informàtica: importacions, muntatge de PC's</a>
            <a href="#51">Desenvolupament aplicacions en Clipper/MS-DOS</a>
          </div>
        </div>
      </section>
      <section>
        <h1 className="main">{entrevistes_i_conferencies[0][language]}</h1>
        <section>
          <div class="dropdown">
            <div class="dropbtn">{entrevistes[0][language]}</div>
            <div class="dropdown-content">
              <a href="#52">VR</a>
              <a href="#53">3D als Matins de Catradio</a>
              <a href="#54">Canal+ Estrena simultània</a>
              <a href="#55">TV3 Telenotícies</a>
              <a href="#56">CadenaSER @cine.com</a>
              <a href="#57">CATRADIO internet video @cine.com</a>
              <a href="#58">Internet video @cine.com</a>
              <a href="#59">e-commerce @reg2.net</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropbtn">{conferencies[0][language]}</div>
            <div class="dropdown-content">
              <a href="#60">5º Congreso APD, XR: the next big thing?</a>
              <a href="#61">GITEX 1998. Huawei 5G Keynote</a>
              <a href="#62">La Liga Technology Showcase Shanghai</a>
              <a href="#63">La Liga Technology Showcase BCN</a>
              <a href="#64">COEIC media &amp; IT</a>
              <a href="#65">Auditori Mediapro 2020 3D Media</a>
              <a href="#66">IBC 2020 3D Media</a>
              <a href="#67">CGIx Glory Day</a>
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
            </div>
          </div>
        </section>
      </section>
      <section>
        <section>
          <h1 className="main">{educacio[0][language]}</h1>
          <div class="dropdown">
            <div class="dropbtn">{formacio_reglada[0][language]}</div>
            <div class="dropdown-content">
              <a href="#71">MSc Photonics a UPC</a>
              <a href="#72">MBA a ESADE -no acabat-</a>
              <a href="#73">MA Computer Animation a ESCAC</a>
              <a href="#74">BSc Computer Graphics a UAB</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropbtn">{cursos[0][language]}</div>
            <div class="dropdown-content">
              <a href="#75">Front-end web developer</a>
              <h4>Certificació Tecnocampus</h4>
              <a href="#76">Machine Learning</a>
              <h4>Certificació Coursera/Stanford</h4>
              <a href="#77">ITIL Essentials</a>
              <h4>Certificació EXIN</h4>
              <a href="#78">Project Manager</a>
              <h4>Certificació PMI</h4>
              <a href="#79">Arduino</a>
              <h4>Certificació UPC</h4>
              <a href="#80">Avid DS</a>
              <h4>Certificació Avid DS 101-501</h4>
              <a href="#81">Softimage 3D</a>
              <h4>Certificació Softimage 101-501</h4>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropbtn">{congressos[0][language]}</div>
            <div class="dropdown-content">
              <a href="#82">SIGGRAPH</a>
              <a href="#83">NAB</a>
              <a href="#84">IBC</a>
              <a href="#85">MWC</a>
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
          <div class="dropdown">
            <div class="dropbtn">{idiomes[0][language]}</div>
            <div class="dropdown-content">
              <a href="#86">{llengues[0][language]}</a>
              <h3>Idioma Matern</h3>
              <h3>Certificació C1</h3>
              <a href="#87">{llengues[1][language]}</a>
              <h3>Idioma Matern</h3>
              <a href="#88">{llengues[2][language]}</a>
              <h3>Nivell negociació</h3>
              <h3>Michigan Proficiency</h3>
              <a href="#89">{llengues[3][language]}</a>
              <h3>Estudiat durant 7 anys a l'escola</h3>
              <h3>Cal refrescar-lo</h3>
              <a href="#90">{llengues[4][language]}</a>
              <h3>Principiant</h3>
              <h3>Estudiat fins 2on curs a l'EOI Barcelona-Drassanes</h3>
              <a href="#91">{llengues[5][language]}</a>
              <h3>Principiant</h3>
              <h3>Curs online d'iniciació</h3>
              <a href="#92">{llengues[6][language]}</a>
              <h3>Principiant</h3>
              <h3>Curs online d'iniciació</h3>
              <a href="#93">{llengues[7][language]}</a>
              <h3>Principiant</h3>
              <h3>Curs online d'iniciació</h3>
              <a href="#94">{llengues[8][language]}</a>
              <h3>Principiant</h3>
              <h3>Curs online d'iniciació</h3>
              <h3>Classes particulars</h3>
            </div>
          </div>
        </section>
      </section>
      <section>
        <h1 className="main">{altres[0][language]}</h1>
        <section>
          <div class="dropdown">
            <div class="dropbtn">{afiliacions[0][language]}</div>
            <div class="dropdown-content">
              <a href="#95">SIGGRAPH</a>
              <a href="#96">COEIC</a>
              <a href="#97">VRARA</a>
              <a href="#98">OPenNeuralink</a>
              <a href="#99">MENSA</a>
              <a href="#100">CT Barcino</a>
              <a href="#101">ACPJG</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropbtn">{aficions[0][language]}</div>
            <div class="dropdown-content">
              <a href="#102">Tennis</a>
              <h4>3ª Categoria Grup 8</h4>
              <a href="#103">Tennis taula</a>
              <h4>3ª Categoria</h4>
              <a href="#104">Golf</a>
              <h4>Handicap 19.9</h4>
              <a href="#105">Esquí</a>
              <a href="#106">Submarinisme</a>
              <h4>FEDAS 1*</h4>
              <a href="#107">Trekking</a>
              <a href="#108">Beat Saber</a>
              <h4>Nivell Expert</h4>
              <a href="#109">Guitarra</a>
              <h4>Cursos online</h4>
              <a href="#110">Piano</a>
              <h4>Classes Particulars</h4>
              <h4>4rt de Solfeig</h4>
              <a href="#111">Lectura</a>
              <h4>Darrer llibre: 01/2022 A Thousand Minds</h4>
              <a href="#112">Cinema</a>
              <h4>Veig totes les pelis en 3D i d'altres</h4>
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
                  Sol de mitjanit+Superlluna a Kiruna (Suècia) 23-06-2013
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
            <h5>&copy; 2022 Synthespian SL. {copyright[0][language]}</h5>
          </div>
        </section>
      </footer>
    </div>
  );
}
