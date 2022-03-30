//import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
import "./Menus.css";
import "./fonts/font-awesome.min.css";
import React, { useState } from "react";

export default function Menus() {
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  /*function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }*/
  const [mostrar1, setMostrar1] = useState("");
  const [mostrar2, setMostrar2] = useState("");
  const [mostrar3, setMostrar3] = useState("");
  const [mostrar4, setMostrar4] = useState("");
  const [mostrar404, setMostrar404] = useState("");
  const [mostrar5, setMostrar5] = useState("");
  const [desplega1, setDesplega1] = useState("");
  const [desplega2, setDesplega2] = useState("");
  const [desplega3, setDesplega3] = useState("");
  const [desplega4, setDesplega4] = useState("");
  const [desplega404, setDesplega404] = useState("");
  const [desplega5, setDesplega5] = useState("");
  function tancatot() {
    setMostrar1("");
    setMostrar2("");
    setMostrar3("");
    setMostrar4("");
    setMostrar404("");
    setMostrar5("");
    setDesplega1("");
    setDesplega2("");
    setDesplega3("");
    setDesplega4("");
    setDesplega404("");
    setDesplega5("");
  }
  return (
    <header>
      <div className="nav__container">
        <div className="nav__mobile">
          <div className="nav__btn">
            <a
              href="#100"
              aria-label="Mobile menu"
              className={"nav-toggle fade " + mostrar1}
              onClick={() => {
                if (mostrar1 === "open") tancatot();
                else {
                  setMostrar1("open");
                  setDesplega1("active");
                }
              }}
            >
              <span></span>
              <span className="mrg"></span>
              <span className="mrg"></span>
            </a>
          </div>
          <div className="nav__logo">Jordi&nbsp;Alonso</div>
          <div>&nbsp;&nbsp;CAT</div>
        </div>
        <nav className={"menu-toggle " + desplega1}>
          <ul className="nav__menu">
            <li className={"dropdown " + desplega2}>
              <a
                href="#200"
                onClick={() => {
                  if (mostrar2 === "show") {
                    setMostrar2("");
                    setDesplega2("");
                  } else {
                    setMostrar2("show");
                    setDesplega2("active");
                  }
                }}
              >
                Experiència Professional
              </a>
              <ul className={mostrar2}>
                <li>
                  <a href="#201">Mestre</a>
                </li>
                <li>
                  <a href="#202">Responsable de Producte</a>
                </li>
                <li>
                  <a href="#203">Delegat Regional</a>
                </li>
                <li>
                  <a href="#204">Supervisor d'Efectes Visuals</a>
                </li>
                <li>
                  <a href="#205">Desenvolupador Web</a>
                </li>
                <li>
                  <a href="#206">Periodista</a>
                </li>
                <li>
                  <a href="#207">Empresari</a>
                </li>
              </ul>
            </li>
            <li className={"dropdown " + desplega3}>
              <a
                href="#300"
                onClick={() => {
                  if (mostrar3 === "show") {
                    setMostrar3("");
                    setDesplega3("");
                  } else {
                    setMostrar3("show");
                    setDesplega3("active");
                  }
                }}
              >
                Entrevistes i Conferències
              </a>
              <ul className={mostrar3}>
                <li>
                  <a href="#301">Entrevistes</a>
                </li>
                <li>
                  <a href="#302">Conferències</a>
                </li>
              </ul>
            </li>
            <li className={"dropdown " + desplega4}>
              <a
                href="#400"
                onClick={() => {
                  if (mostrar4 === "show") {
                    setMostrar4("");
                    setDesplega4("");
                  } else {
                    setMostrar4("show");
                    setDesplega4("active");
                  }
                }}
              >
                Educació
              </a>
              <ul className={mostrar4}>
                <li>
                  <a href="#401">Formació Reglada</a>
                </li>
                <li>
                  <a href="#402">Cursos</a>
                </li>
                <li>
                  <a href="#403">Congressos</a>
                </li>
                <li className={"dropdown second-level " + desplega404}>
                  <a
                    href="#404"
                    onClick={() => {
                      if (mostrar404 === "show") {
                        setMostrar404("");
                        setDesplega404("");
                      } else {
                        setMostrar404("show");
                        setDesplega404("active");
                      }
                    }}
                  >
                    Idiomes
                  </a>
                  <ul className={mostrar404}>
                    <li>
                      <a href="#4041">Català</a>
                    </li>
                    <li>
                      <a href="#4042">Castellà</a>
                    </li>
                    <li>
                      <a href="#4043">Anglès</a>
                    </li>
                    <li>
                      <a href="#4044">Francès</a>
                    </li>
                    <li>
                      <a href="#4045">Rus</a>
                    </li>
                    <li>
                      <a href="#4046">Alemany</a>
                    </li>
                    <li>
                      <a href="#4047">Italià</a>
                    </li>
                    <li>
                      <a href="#4048">Portuguès</a>
                    </li>
                    <li>
                      <a href="#4049">Xinès</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={"dropdown " + desplega5}>
              <a
                href="#500"
                onClick={() => {
                  if (mostrar5 === "show") {
                    setMostrar5("");
                    setDesplega5("");
                  } else {
                    setMostrar5("show");
                    setDesplega5("active");
                  }
                }}
              >
                Altres
              </a>
              <ul className={mostrar5}>
                <li>
                  <a href="#501">Afiliacions</a>
                </li>
                <li>
                  <a href="#502">Aficions</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    /* <div className="topnav" id="myTopnav">
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="#home" className="icon" onClick={() => myFunction()}>
        <i className="fa fa-bars"></i>
      </a>
    </div>*/
  );
}
