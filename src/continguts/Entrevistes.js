import { entrevistes } from "./experiencia";

export default function Entrevistes({ language }) {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{entrevistes[0][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a
              href="https://www.barcelonadot.com/radio-el-cotxe-electric-amb-jordi-alonso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                El cotxe el&egrave;ctric a Barcelona Dot: 27/10/2022
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <figcaption>Amb Tom&agrave;s Cascante</figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.youtube.com/watch?v=XadyIOiavgk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                VR al 360 Film Fest de Barcelona
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.ccma.cat/catradio/alacarta/el-mat-de-catalunya-rdio-manel-fuentes/avatar/audio/398359/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                3D als Matins de Catr&agrave;dio 18/12/2009
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <figcaption>
                Als matins de Catalunya R&agrave;dio amb Manel Fuentes
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="http://www.tv3.cat/videos/2843310/Telenoticies-vespre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                TV3 Telenot&iacute;cies 16/04/2010 cine3D (minut 37)
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
          </article>
          <article>
            <a
              href="http://www.catradio.com/pcatradio/crPrograma.jsp?hiPrograma=156908479&amp;hiEmissora=cr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>CATRADIO internet v&iacute;deo 17/06/2006 @cine.com</h3>
            </a>
            <figure>
              <figcaption>
                Menci&oacute; al final del programa La Finestra Indiscreta amb
                &Agrave;lex Gorina
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#53">BTV (betev&eacute;) 17/05/2006</a>
            <figure>
              <figcaption>
                Infonit Not&iacute;cies a les 21:50. Desc&agrave;rregues per
                internet
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://play.cadenaser.com/audio/20060404csrcsr_5.Aes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                CadenaSER: Hoy por Hoy 4/04/2006 @cine.com
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
          </article>
          <article>
            <a href="#54">El Pa&iacute;s 4/04/2006 @cine.com</a>
            <figure>
              <figcaption>
                Suplemento de Tecnolog&iacute;a: Paso a Paso. Cine legal en
                Internet
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#55">
              <h3>RTVE TVE1 14/03/2006 @cine.com</h3>
            </a>
            <figure>
              <figcaption>
                Telediario mediod&iacute;a (15:00) y noche (21:00) y Canal
                Internacional
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#56">
              <h3>El Mundo del siglo XXI 9/03/2006 @cine.com</h3>
            </a>
            <figure>
              <figcaption>
                Art&iacute;culo de Quico Alsedo en la secci&oacute;n de cultura,
                con motivo del estreno simult&aacute;neo de "Catarsis"
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#57">
              <h3>Canal+ Estrena simult&agrave;nia de Catarsis</h3>
            </a>
          </article>
          <article>
            <a href="#58">
              <h3>La Vanguardia el 12/02/2006 @cine.com</h3>
            </a>
            <figure>
              <figcaption>
                Art&iacute;culo de Alex Barnet "El ocaso de la gran pantalla:
                Internet y las nuevas tecnolog&iacute;as arrebatan espectadores
                a las salas de cine"
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="
              http://www.catradio.com/pcatradio/crPrograma.jsp?hiPrograma=109447807&amp;hiEmissora=cr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>CATRADIO internet v&iacute;deo 28/01/2006 @cine.com</h3>
            </a>
            <figure>
              <figcaption>
                Entrevista al programa L&apos;Internauta amb Vicent Partal
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="http://www.comradio.com/programes/programa.asp?id=10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>COMRadio internet v&iacute;deo 25/01/2006 @cine.com</h3>
            </a>
            <figure>
              <figcaption>
                Entrevista al programa La Malla de COM R&agrave;dio
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#59">
              <h3>El Peri&oacute;dico de Catalunya 18/01/2006 @cine.com</h3>
            </a>
            <figure>
              <figcaption>
                Lanzamiento del servicio online en cine.com P&aacute;gina 37
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#60">
              <h3>e-commerce @reg2.net</h3>
            </a>
          </article>
        </div>
      </div>
    </>
  );
}
