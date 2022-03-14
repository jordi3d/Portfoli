import "./Cv.css";
import { useState } from "react";

let idiomes_web = [
  "CAT",
  "ES",
  "EN",
  "FR",
  "RU",
  "DE",
  "IT",
  "PT",
  "NL",
  "AR",
  "ZH",
];
let nom = [
  {
    CAT: "Jordi Alonso",
    ES: "Jorge Alonso",
    EN: "George Alonso",
    FR: "George Alonso",
    RU: "Хорди Алонсо",
    DE: "George Alonso",
    IT: "Giorgio Alonso",
    PT: "Jorge Alonso",
    NL: "Jordi Alonso",
    AR: "جوردي ألونسو",
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
    AR: "أون",
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
    AR: "مؤتمرات",
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
    AR: "مدير فرع",
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
    AR: "مدير المشروع",
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
    AR: "المدير الفني",
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
    AR: "معلم",
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
    AR: "مدير الإنتاج",
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
    AR: "مدير حساب الخدمة",
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
    AR: "كل الحقوق محفوظة",
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
    AR: "المشرف على المؤثرات المرئية",
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
    AR: "هوايات",
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
    AR: "اللغات",
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
    AR: "المؤتمرات",
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
    AR: "المقابلات والمؤتمرات",
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
    AR: "الخبرة العملية",
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
    AR: "آحرون",
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
    AR: "مقابلات",
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
    AR: "رجل اعمال",
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
    AR: "الانتماءات",
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
    AR: "تعليم",
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
    AR: "التدريب المنظم",
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
    AR: "الدورات",
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
    AR: "صحافي",
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
    AR: "الكاتالونية",
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
    AR: "الأسبانية",
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
    AR: "إنجليزي",
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
    AR: "الفرنسية",
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
    AR: "الروسية",
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
    AR: "ألمانية",
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
    AR: "الإيطالية",
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
    NL: "Chinese",
    AR: "البرتغالية",
    ZH: "中国人",
  },
];
let copyright = [
  {
    CAT: "Tots els drets reservats",
    ES: "Reservados todos los derechos",
    EN: "All rights reserved",
    FR: "Tous droits réservés",
    RU: "Всё права защищены",
    DE: "Alle Rechte vorbehalten",
    IT: "Tutti i diritti riservati",
    PT: "Todos os direitos reservados",
    NL: "Alle rechten voorbehouden",
    AR: "صينى",
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
              El cl&agrave;sico en VR
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
                src="./img/clasicoVR.jpg"
                alt="Prova de concepte de F&ugrave;tbol en VR des del Santiago Bernab&egrave;u"
                width="500"
              />
              <figcaption>
                Prova de concepte de f&ugrave;tbol VR. El Cl&agrave;sico 2018.
              </figcaption>
            </figure>
            <a
              href="https://www.mundodeportivo.com/futbol/laliga/20180302/441187363437/la-tecnologia-que-hay-detras-de-laliga-explicada-al-detalle.html"
              target="_blank"
              rel="noreferrer"
            >
              Not&igrave;cia a El Mundo Deportivo
            </a>
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
            <a
              href="https://www.live-production.tv/news/4k-8k-arising/mediapro-group-produced-live-3d-concert-portuguese-group-deolinda.html"
              target="_blank"
              rel="noreferrer"
            >
              Deolinda 3D des del Coliseu do Lisboa 28/01/2011
              <img
                src="./img/mediapro.png"
                alt="mediapro"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=AlTtevooKGE"
              target="_blank"
              rel="noreferrer"
            >
              Abrunhosa 3D des del Coliseu de Porto 20/11/2010
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
              href="https://www.youtube.com/watch?v=NU2ZXZFZhY4"
              target="_blank"
              rel="noreferrer"
            >
              Klepth Live 3D des de Casa da M&ugrave;sica de Porto 30/10/2010
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
                Unitat m&ograve;bil 3D de Medialuso a Casa da M&ugrave;sica de
                Porto
              </figcaption>
            </figure>
            <a
              href="https://www.youtube.com/watch?v=zEckoGCYMkY"
              target="_blank"
              rel="noreferrer"
            >
              RIP Curl World Cup of Surfing 8-10/10/2010
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
                src="./img/RIPCurlPeniche.jpg"
                alt="Mundial de Surf a Peniche"
                width="500"
                heigth="375"
              />
              <figcaption>
                RIP Curl World Cup of Surfing des de Peniche, Portugal
              </figcaption>
            </figure>
            <a
              href="https://www.live-production.tv/news/4k-8k-arising/3d-screening-bar%C3%A7a-%E2%80%93-madrid-match-was-big-success.html"
              target="_blank"
              rel="noreferrer"
            >
              F&uacute;tbol 3D Live 10/12/2010
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
                src="./img/cartellFutbol3D.jpg"
                alt="Cartell de promoci&ograve; del Cl&agrave;sico en 3D"
                width="500"
                heigth="375"
              />
              <figcaption>
                Primera retransmissi&ograve; d&apos;El Cl&agrave;sico en 3D en
                directe
              </figcaption>
            </figure>
            <a href="#1">Benfica-Sporting de Lisboa 3D 28/11/2009</a>
            <figure>
              <img
                src="./img"
                alt="Est&aacute;dio da Luz, Lisboa"
                width="500"
              />
              <figcaption>Primer partit 3D a Portugal</figcaption>
            </figure>
            <a href="#1">Catalunya-Col&ograve;mbia 3D 28/12/2008</a>
            <figure>
              <img src="./img" alt="Nou Camp" width="500" />
              <figcaption>
                Primeres proves de 3D amb c&agrave;meres de cinema
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[1][language]}</div>
          <div className="dropdown-content">
            <a href="https://www.neom.com" target="_blank" rel="noreferrer">
              NEOM The Line 2020
            </a>
            <figure>
              <img
                src="./img/NEOM_theline.jpg"
                alt="NEOM The Line"
                width="500"
                heigth="375"
              />
              <figcaption>
                Mapa de The Line a NEOM, Noroest de l&apos;Ar&agrave;bia Saudita
              </figcaption>
            </figure>
            <figure>
              <img
                src="./img/NEOM_theline2.jpg"
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
                The Zone of Hope v1 per Aig&uuml;es de Barcelona
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
                Messi Challenge a la representaci&oacute; Messi10 de Cirque du
                Soleil. Setembre 2019
              </figcaption>
            </figure>
            <a href="#7">BTS Woody Allen&apos;s visit to Spain 2019</a>
            <a href="https://www.neom.com" target="_blank" rel="noreferrer">
              NEOM Tourism Book &amp; Map 2019
            </a>
            <figure>
              <img
                src="./img/NEOM_tourism.jpg"
                alt="Book and Tourism map"
                width="500"
              />
              <figcaption>
                Primer llibre i mapa tur&iacute;stic de NEOM
              </figcaption>
            </figure>
            <a href="https://www.neom.com" target="_blank" rel="noreferrer">
              NEOM Immersive 2019
            </a>
            <figure>
              <img
                src="./img/NEOM_immersive.jpg"
                alt="Interior al World Tourism Expo a Londres"
                width="500"
              />
              <figcaption>
                NEOM Immersive, presentat amb motiu de la fira mundial del
                turisme de Londres
              </figcaption>
            </figure>
            <figure>
              <img
                src="./img/NEOM_immersive2.jpg"
                alt="Stand al World Tourism Expo a Londres"
                width="500"
              />
              <figcaption>
                Stand de NEOM a la fira mundial del turisme de Londres
              </figcaption>
            </figure>
            <a href="https://www.neom.com" target="_blank" rel="noreferrer">
              NEOM Smart City 2019
            </a>
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
                AutomaticTV: producci&oacute; autom&agrave;tica de continguts en
                directe
              </figcaption>
            </figure>
            <a href="#14">ImmersiveTV 2010</a>
            <figure>
              <img src="./img/immersivetv.jpg" alt="ImmersiveTV" width="500" />
              <figcaption>ImmersiveTV: projecte de recerca nacional</figcaption>
            </figure>
            <figure>
              <img
                src="./img/immersivetv2.jpg"
                alt="ImmersiveTV #2"
                width="500"
              />
              <figcaption>
                Us de diferents tecnologies immersives 2D i 3D
              </figcaption>
            </figure>
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
                Andr&egrave;s Iniesta va cedir la seva imatge al projecte de
                recerca Europeu
              </figcaption>
            </figure>
            <figure>
              <img src="./img/FINE_IBC2012.jpg" alt="IBC2012" width="500" />
              <figcaption>Guanyadors del premi: What Caught My Eye</figcaption>
            </figure>
            <a href="https://www.futbol3d.com" target="_blank" rel="noreferrer">
              F&ugrave;tbol 3D Temporades 2010-11 i 2011-12
            </a>
            <figure>
              <img src="./img/futbol3d.jpg" alt="Logo Fútbol 3D" />
              <figcaption>
                Transmissions via sat&egrave;l·lit:
                <br />
                FCB-RMA 5-0 29/11/2010 9 posicions de c&agrave;mera 3D i
                visionat al Palacio de Congresos de Madrid
                <br />
                FCB-MAL 4-1 15/01/2011 i visionat a M&agrave;laga
                <br />
                ATM-ATH 0-2 30/01/2011 i visionat a Bilbao
                <br />
                RMA-FCB 1-1 16/04/2011 i visionat a Imagina
                <br />
                RMA-FCB 1-3 10/12/2011 6 c&agrave;meres 3D i visionat a Imagina
                <br />
                FCB-VAL 5-1 18/02/2012 i visionat a Val&egrave;ncia
              </figcaption>
            </figure>
            <a href="#16">APIDIS 2009</a>
            <figure>
              <img src="./img/apidis.jpg" alt="Logo APIDIS" />
            </figure>
            <a href="#17">2020 3D Media 2008</a>
            <figure>
              <img src="./img/20203DMedia.jpg" alt="Logo 2020 3D Media" />
            </figure>
            <a href="#18">i3media 2008</a>
            <figure>
              <img src="./img/i3media.png" alt="Logo i3media" width="250" />
            </figure>
            <a href="#19">IP-racine 2008</a>
            <figure>
              <img src="./img/ipracine.jpg" alt="Logo IP-racine" width="250" />
            </figure>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[2][language]}</div>
          <div className="dropdown-content">
            <a href="https://www.thevrara.com" target="_blank" rel="noreferrer">
              VRARA: The VR/AR Association
            </a>
            <figure>
              <img src="./img/VRARA.png" alt="VR/AR Association" width="250" />
              <figcaption>Chapter President</figcaption>
            </figure>
            <a href="https://www.sun.com" target="_blank" rel="noreferrer">
              Sun Microsystems
            </a>
            <figure>
              <img src="./img/sun.jpg" alt="Sun Microsystems" width="250" />
              <figcaption>
                Technical Account Manager for Strategic Accounts
              </figcaption>
            </figure>
            <a href="https://www.netscape.com" target="_blank" rel="noreferrer">
              Netscape
            </a>
            <figure>
              <img src="./img/Netscape.png" alt="Netscape" width="250" />
              <figcaption>
                Enterprise Service Account Manager iPlanet products
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[3][language]}</div>
          <div className="dropdown-content">
            <a href="#23">ESADE Mentor alumnes del M&agrave;ster</a>
            <a href="#24">
              <i>La Salle*</i>
            </a>
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
            <a
              href="https://www.thevrara.com/barcelona"
              target="_blank"
              rel="noreferrer"
            >
              The VR/AR Association Catalonia Chapter
            </a>
            <figure>
              <img
                src="./img/VRARA1.jpg"
                alt="Sopar gala VRARA foto1"
                width="500"
              />
              <figcaption>Sopar de Gala anual durant el MWC</figcaption>
            </figure>
            <figure>
              <img
                src="./img/VRARA2.jpg"
                alt="Sopar gala VRARA foto2"
                width="500"
              />
              <figcaption>Sopar de Gala anual durant el MWC</figcaption>
            </figure>
            <a href="#23">Promovisa Catalunya</a>
            <figure>
              <img src="./img/promovisa.jpg" alt="Logo Promovisa" />
              <figcaption>Delegat regional per Catalunya i Balears</figcaption>
            </figure>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[6][language]}</div>
          <div className="dropdown-content">
            <a href="#31">Glory Day: The mystery of the Sagrada Familia</a>
            <figure>
              <img
                src="./img/gloryday.jpg"
                alt="Caixa CD-ROM de Glory Day"
                width="500"
              />
              <figcaption>
                La pel·l&igrave;cula mai no es va acabar, per&agrave; es va
                editar un CD-ROM
              </figcaption>
            </figure>
            <a href="#32">Cap&ccedil;alera Sitges Film Festival</a>
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
              SEO, SEM, Wordpress, Python, Keras, PHP, MySQL per webs pròpies
            </a>
            <a href="#38">
              HTML5, CSS2, JS, Ajax, jQuery, PHP, MariaDB, plugin 360 per
              Mediapro
            </a>
            <a href="#39">Macromedia Flash per Webs de clients</a>
            <a href="#40">HTML4, CSS2, JS, PHP per video online a cine.com</a>
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
            <a href="#42">Blog cine.com</a>
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
              href="https://jordialonso.wordpress.com/2011/02/04/entrevista-a-steve-schklair-ceo-de-3ality-en-ibc-2010/"
              target="_blank"
              rel="noreferrer"
            >
              Entrevista a Steve Schklair, CEO de 3ALITY
            </a>
            <a
              href="https://www.elperiodico.com"
              target="_blank"
              rel="noreferrer"
            >
              El Peri&ograve;dico de Catalunya
            </a>
            <figure>
              <img
                src="./img/Elperiodico1.jpg"
                alt="Article#1 El Periódico"
                width="500"
                heigth="375"
              />
              <figcaption>
                Article a El Peri&ograve;dico de Catalunya (suplement de
                tecnologia)
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
                Article a El Peri&ograve;dico de Catalunya (suplement de
                tecnologia)
              </figcaption>
            </figure>
            <a
              href="https://www.3dmagazine.com"
              target="_blank"
              rel="noreferrer"
            >
              3D Magazine
            </a>
            <a href="#43">Onda Cero Radio. Mar&ccedil; 2010</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">{feines[9][language]}</div>
          <div className="dropdown-content">
            <a href="#44">
              Serveis de formaci&ograve; CGI, 3D, XR, web, Presentacions en
              p&ugrave;blic
            </a>
            <a href="#45">SEO, SEM, Optimitzaci&ograve; de webs WordPress</a>
            <a href="https://www.openvino.org" target="_blank" rel="noreferrer">
              Blockchain/NFT: Projecte OpenVino.org &amp; OpenCava.org (2017)
            </a>
            <a href="#46">Crypto: mineria &amp; trading (2013)</a>
            <a href="#47">Domainer: +1.000 dominis (actualment +100)</a>
            <a href="#48">VoD: cine.com desc&agrave;rregues legals (1999)</a>
            <a href="#49">Iberseller e-commerce solutions (1997)</a>
            <a href="#50">AI: Sistema Expert en PDC-PROLOG/UNIX (1992)</a>
            <a href="#51">
              CADAT Inform&ograve;tica: importacions, muntatge de PC&apos;s
              (1988)
            </a>
            <a href="#52">
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
                <img
                  src="./img/yt20.png"
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a
                href="https://www.ccma.cat/catradio/alacarta/el-mat-de-catalunya-rdio-manel-fuentes/avatar/audio/398359/"
                target="_blank"
                rel="noreferrer"
              >
                3D als Matins de Catr&agrave;dio 18/12/2009
                <img
                  src="./img/yt20.png"
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <figure>
                <figcaption>
                  Als matins de Catalunya R&agrave;dio amb Manel Fuentes
                </figcaption>
              </figure>
              <a
                href="http://www.tv3.cat/videos/2843310/Telenoticies-vespre"
                target="_blank"
                rel="noreferrer"
              >
                TV3 Telenot&iacute;cies 16/04/2010 cine3D (minut 37)
                <img
                  src="./img/yt20.png"
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a
                href="http://www.catradio.com/pcatradio/crPrograma.jsp?hiPrograma=156908479&amp;hiEmissora=cr"
                target="_blank"
                rel="noreferrer"
              >
                CATRADIO internet video 17/06/2006 @cine.com
              </a>
              <figure>
                <figcaption>
                  Menci&oacute; al final del programa La Finestra Indiscreta amb
                  &Agrave;lex Gorina
                </figcaption>
              </figure>
              <a href="#53">BTV (betev&eacute;) 17/05/2006</a>
              <figure>
                <figcaption>
                  Infonit Not&iacute;cies a les 21:50. Desc&agrave;rregues per
                  internet
                </figcaption>
              </figure>
              <a
                href="https://play.cadenaser.com/audio/20060404csrcsr_5.Aes/"
                target="_blank"
                rel="noreferrer"
              >
                CadenaSER: Hoy por Hoy 4/04/2006 @cine.com
                <img
                  src="./img/yt20.png"
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a href="#54">El Pa&iacute;s 4/04/2006 @cine.com</a>
              <figure>
                <figcaption>
                  Suplemento de Tecnolog&iacute;a: Paso a Paso. Cine legal en
                  Internet
                </figcaption>
              </figure>
              <a href="#55">RTVE TVE1 14/03/2006 @cine.com</a>
              <figure>
                <figcaption>
                  Telediario mediod&iacute;a (15:00) y noche (21:00) y Canal
                  Internacional
                </figcaption>
              </figure>
              <a href="#56">El Mundo del siglo XXI 9/03/2006 @cine.com</a>
              <figure>
                <figcaption>
                  Artículo de Quico Alsedo en la sección de cultura, con motivo
                  del estreno simultáneo de "Catarsis"
                </figcaption>
              </figure>
              <a href="#57">Canal+ Estrena simult&agrave;nia de Catarsis</a>
              <a href="#58">La Vanguardia el 12/02/2006 @cine.com</a>
              <figure>
                <figcaption>
                  Artículo de Alex Barnet "El ocaso de la gran pantalla:
                  Internet y las nuevas tecnologías arrebatan espectadores a las
                  salas de cine"
                </figcaption>
              </figure>
              <a
                href="
              http://www.catradio.com/pcatradio/crPrograma.jsp?hiPrograma=109447807&amp;hiEmissora=cr"
                target="_blank"
                rel="noreferrer"
              >
                CATRADIO internet video 28/01/2006 @cine.com
              </a>
              <figure>
                <figcaption>
                  Entrevista al programa L&apos;Internauta amb Vicent Partal
                </figcaption>
              </figure>
              <a
                href="http://www.comradio.com/programes/programa.asp?id=10"
                target="_blank"
                rel="noreferrer"
              >
                COMRadio internet video 25/01/2006 @cine.com
              </a>
              <figure>
                <figcaption>
                  Entrevista al programa La Malla de COM R&agrave;dio
                </figcaption>
              </figure>
              <a href="#59">
                El Peri&oacute;dico de Catalunya 18/01/2006 @cine.com
              </a>
              <figure>
                <figcaption>
                  Lanzamiento del servicio online en cine.com P&aacute;gina 37
                </figcaption>
              </figure>
              <a href="#60">e-commerce @reg2.net</a>
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
                    src="./img/Huawei2.jpg"
                    alt="keynote 5G per Huawei a GITEX Dubai"
                    width="500"
                  />
                  <figcaption>
                    Xerrada sobre 5G per Huawei durant el GITEX 2019 de Dubai
                  </figcaption>
                </figure>
              </a>
              <a
                href="https://www.youtube.com/watch?v=B1ZwJULAiBU&amp;t=1203s"
                target="_blank"
                rel="noreferrer"
              >
                La Liga Technology Showcase Shanghai 15/07/2019
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
              <a href="#62">
                La Liga Technology Showcase BCN 4/03/2019
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
              <a href="#63">
                REBUILD 2018. Construcci&oacute; 4.0
                <img
                  src="./img/mediapro.png"
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a href="#64">
                COEIC media &amp; IT
                <img
                  src="./img/mediapro.png"
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a href="#64bis">IBC Project FINE 20/09/2012</a>
              <figure>
                <img
                  src="./img/FINE_IBC2012bis.jpg"
                  alt="IBC 2020 3D Media"
                  width="500"
                />
                <figcaption>
                  Xerrada a l&apos;equip de What Caught My Eye
                </figcaption>
              </figure>
              <a href="#65">
                Auditori Mediapro 2020 3D Media
                <img
                  src="./img/mediapro.png"
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a href="#66">
                IBC 2020 3D Media 03/09/2011
                <img
                  src="./img/mediapro.png"
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </a>
              <a href="#67">Radio +QueCine 12/12/2011</a>
              <a href="#68">Expo 3D 23-29/05/2011 a Madrid</a>
              <a
                href="https://jordialonso.wordpress.com/2008/10/11/jornadas-agapi-en-santiago-ultimo-dia/"
                target="_blank"
                rel="noreferrer"
              >
                AGAPI a Santiago de Compostela 10/10/2008 @cine.com
              </a>
              <figure>
                <img
                  src="./img/AGAPI.jpg"
                  alt="Conferencia sobre vídeo per internet a AGAPI"
                  width="500"
                />
                <figcaption>
                  Xerrada sobre v&iacute;deo per internet a Santiago de
                  Compostela, 9-10/10/2008
                </figcaption>
              </figure>
              <a href="#69">Torre Agbar 24/04/2008 @cine.com</a>
              <figure>
                <img
                  src="./img/cpac02.jpg"
                  alt="CPAC r-evolució difital 24/04/2008 a Torre Agbar"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  Conferència a la Torre Agbar 24/04/2008 pel CPAC: r-evolució
                  digital (cine.com)
                </figcaption>
              </figure>
              <a href="#70">
                Todos en Alta (TeA06) 14-18/06/2006 @cine.com
                <figure>
                  <figcaption>
                    Xerrada sobre la distribuci&oacute; de v&iacute;deo HD a
                    trav&eacute;s d&apos;IP
                  </figcaption>
                </figure>
              </a>
              <a href="#71">
                Festival de cinema Zoom Igualada 10/11/2005 @cine.com
                <figure>
                  <figcaption>
                    Xerrada sobre la distribuci&oacute; de cinema a
                    trav&eacute;s d&apos;internet
                  </figcaption>
                </figure>
              </a>
              <a href="#72">
                Foro HD en Barcelona 11/10/2005 @cine.com
                <figure>
                  <figcaption>
                    Xerrada sobre la distribuci&oacute; de v&iacute;deo HD a
                    trav&eacute;s d&apos;internet
                  </figcaption>
                </figure>
              </a>
              <a href="#72bis">Festival de cinema de Sitges @cine.com</a>
              <a href="#73">CGIx Glory Day</a>
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
              <a
                href="https://photonics.masters.upc.edu/en"
                target="_blank"
                rel="noreferrer"
              >
                MSc Photonics a UPC
              </a>
              <figure>
                <img src="./img/logoUPC.png" alt="Logo UPC" width="250" />
              </figure>
              <a href="https://www.esade.edu" target="_blank" rel="noreferrer">
                MBA a ESADE -no acabat-
              </a>
              <figure>
                <img src="./img/esade.jpg" alt="Logo ESADE" width="250" />
              </figure>
              <a href="https://www.escac.com" target="_blank" rel="noreferrer">
                MA Computer Animation a ESCAC
              </a>
              <figure>
                <img src="./img/escac.jpg" alt="Logo ESCAC" width="250" />
              </figure>
              <a href="https://www.uab.cat" target="_blank" rel="noreferrer">
                BSc Computer Science a UAB
              </a>
              <figure>
                <img src="./img/uab.png" alt="Logo UAB" width="250" />
              </figure>
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
              <figure>
                <img
                  src="./img/scrum-agile.png"
                  alt="Logo SCRUM Agile"
                  width="250"
                />
                <figcaption>Certificació Mediapro</figcaption>
              </figure>
              <a href="#78">ITIL Essentials</a>
              <figure>
                <img src="./img/itil.jpg" alt="Logo ITIL" width="250" />
                <figcaption>Certificació EXIN</figcaption>
              </figure>
              <a href="#79">Project Manager</a>
              <figure>
                <img src="./img/PMI_logo.gif" alt="Logo PMI" width="250" />
                <figcaption>Certificació PMI</figcaption>
              </figure>
              <a href="#79">Lean 6-sigma</a>
              <figure>
                <img
                  src="./img/lean6sigma.png"
                  alt="Logo Lean 6 Sigma"
                  width="250"
                />
                <figcaption>Certificació Sun Microsystems</figcaption>
              </figure>
              <a href="#80">Arduino</a>
              <figure>Certificació UPC</figure>
              <a href="#80bis">S3 Campus Juny 2012</a>
              <figure>
                Stage a Par&iacute;s amb el gran estereoscopista Alain
                D&eacute;robe
              </figure>
              <a href="#81">Avid DS</a>
              <figure>Certificació Avid DS 101-501</figure>
              <a href="#82">Softimage 3D</a>
              <figure>Certificació Softimage 101-501</figure>
              <a href="#82bis">VR amb SGI</a>
              <figure>
                <img src="./img/sgi.jpg" alt="Curs VR al 1993" width="500" />
              </figure>
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
              <figure>
                <img src="./img/Siggraph.jpg" alt="SIGGRAPH 2016" width="500" />
                <figcaption>Atenent ininterrompudament des de 1994</figcaption>
              </figure>
              <a
                href="https://www.nabshow.com"
                target="_blank"
                rel="noreferrer"
              >
                NAB
              </a>
              <figure>
                <img
                  src="./img/NABAutomaticTV.jpg"
                  alt="NAB 2018"
                  width="500"
                />
                <figcaption>Stand d&apos;AutomaticTV al NAB Show</figcaption>
              </figure>
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
              <a
                href="https://www.siggraph.org/connect/computer-graphics-pioneers/"
                target="_blank"
                rel="noreferrer"
              >
                SIGGRAPH Pioneers
              </a>
              <figure>
                <img src="./img/Siggraph.png" alt="Logo Siggraph" width="250" />
              </figure>
              <a href="https://www.acm.org/" target="_blank" rel="noreferrer">
                ACM
              </a>
              <figure>
                <img src="./img/acm.png" alt="Logo ACM" width="250" />
              </figure>
              <a
                href="https://theadvancedimagingsociety.com/"
                target="_blank"
                rel="noreferrer"
              >
                Advanced Imaging Society
              </a>
              <figure>
                <img src="./img/ais.jpg" alt="Logo AIS" width="250" />
              </figure>
              <a
                href="https://enginyeriainformatica.cat/"
                target="_blank"
                rel="noreferrer"
              >
                COEIC
              </a>
              <figure>
                <img src="./img/COEIC.png" alt="Logo COEIC" />
                <figcaption>Col·legiat 444</figcaption>
              </figure>
              <a
                href="https://www.thevrara.com"
                target="_blank"
                rel="noreferrer"
              >
                The VR/AR Association
              </a>
              <figure>
                <img src="./img/VRARA.png" alt="Logo VRARA" width="250" />
              </figure>
              <a
                href="https://www.neuralink.com"
                target="_blank"
                rel="noreferrer"
              >
                Open Neuralink
              </a>
              <figure>
                <img
                  src="./img/Neuralink.jpg"
                  alt="Logo NeuraLink"
                  width="250"
                />
              </figure>
              <a href="#99">MENSA</a>
              <figure>
                <img src="./img/mensa.png" alt="Logo Mensa" width="250" />
              </figure>
              <a href="#99bis">Barcelon@ Connection</a>
              <figure>
                <img
                  src="./img/bcnconnection.png"
                  alt="Barcelona Connection"
                  width="250"
                />
              </figure>
              <a
                href="https://www.ctbarcino.cat"
                target="_blank"
                rel="noreferrer"
              >
                CT Barcino
              </a>
              <figure>
                <img
                  src="./img/ctbarcino.jpg"
                  alt="Logo CT Barcino"
                  width="250"
                />
              </figure>
              <a href="#100bis">FCG</a>
              <figure>
                <img src="./img/fcg.jpg" alt="Logo FCG" width="250" />
              </figure>
              <a href="#101">ACPJG</a>
              <figure>
                <img src="./img/acpjg.jpg" alt="Logo ACPJG" width="250" />
              </figure>
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
                  src="./img/Georgios.jpg"
                  alt="Georgios G Wreck at NEOM by Ben Thouard"
                  width="500"
                />
                <figcaption>
                  Georgios G. Wreck a NEOM (Ar&agrave;bia Saudita), 30-09-2018
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
