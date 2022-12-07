import "./Carrusel.css";
import React, { useState } from "react";

let fotos = [
  "/img/Foto3.jpg",
  "/img/Foto2.jpg",
  "/img/Foto4.jpg",
  "/img/Foto5.jpg",
  "/img/Foto7.jpg",
  "/img/Foto8.jpg",
].map((f) => process.env.PUBLIC_URL + f);

export default function Carrusel() {
  //const [tancat, setTancat] = useState(false);
  const [imatge, setImatge] = useState(0);
  const [amaga, setMostra] = useState("amaga");
  //if (tancat) return null;
  return (
    <>
      <div
        id="carrusel"
        onMouseOver={() => setMostra("mostra")}
        onMouseOut={() => setMostra("amaga")}
        style={{ backgroundImage: "url('" + fotos[imatge] + "')" }}
      >
        <div
          id="anterior"
          className={amaga}
          onClick={() =>
            imatge ? setImatge(imatge - 1) : setImatge(fotos.length - 1)
          }
        >
          &lt;
        </div>
        <div
          id="seguent"
          className={amaga}
          onClick={() =>
            imatge < fotos.length - 1 ? setImatge(imatge + 1) : setImatge(0)
          }
        >
          &gt;
        </div>

        <div id="navegador" className={amaga}>
          {fotos.map((n, index) => (
            <div
              key={n}
              className={index === imatge ? "puntas" : "punt"}
              onClick={() =>
                imatge !== index ? setImatge(index) : setImatge(imatge)
              }
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
