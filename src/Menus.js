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
  //const [mostrar1, setMostrar1] = useState("");
  const [mostrar2, setMostrar2] = useState("");
  const [mostrar3, setMostrar3] = useState("");
  const [mostrar4, setMostrar4] = useState("");
  const [mostrar404, setMostrar404] = useState("");
  const [mostrar5, setMostrar5] = useState("");
  return (
    <header>
      <div className="nav__container">
        <div className="nav__mobile">
          <div className="nav__btn">
            <a
              href="#100"
              aria-label="Mobile menu"
              className="nav-toggle fade active"
            >
              <span></span>
              <span className="mrg"></span>
              <span className="mrg"></span>
            </a>
          </div>
          <div className="nav__logo">Jordi&nbsp;Alonso</div>
          <div>&nbsp;&nbsp;CAT</div>
        </div>
        <nav className="menu-toggle active">
          <ul className="nav__menu">
            <li className="dropdown active">
              <a
                href="#200"
                onClick={() =>
                  mostrar2 === "show" ? setMostrar2("") : setMostrar2("show")
                }
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
            <li className="dropdown active">
              <a
                href="#300"
                onClick={() =>
                  mostrar3 === "show" ? setMostrar3("") : setMostrar3("show")
                }
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
            <li className="dropdown active">
              <a
                href="#400"
                onClick={() =>
                  mostrar4 === "show" ? setMostrar4("") : setMostrar4("show")
                }
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
                <li className="dropdown second-level">
                  <a
                    href="#404"
                    onClick={() =>
                      mostrar404 === "show"
                        ? setMostrar404("")
                        : setMostrar404("show")
                    }
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
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown active">
              <a
                href="#500"
                onClick={() =>
                  mostrar5 === "show" ? setMostrar5("") : setMostrar5("show")
                }
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
