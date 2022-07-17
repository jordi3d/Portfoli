import { feines } from "./experiencia";

export default function ExperienciaProfessional({ language }) {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{feines[0][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a
              href="https://www.youtube.com/watch?v=aPbVrFLgIgE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                El cl&agrave;sico en VR
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/clasicoVR.jpg"}
                alt="Prova de concepte de F&ugrave;tbol en VR des del Santiago Bernab&egrave;u"
                width="500"
              />
              <figcaption>
                Prova de concepte de futbol VR. El Cl&agrave;sico 2018
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.mundodeportivo.com/futbol/laliga/20180302/441187363437/la-tecnologia-que-hay-detras-de-laliga-explicada-al-detalle.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Not&igrave;cia a El Mundo Deportivo</h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.youtube.com/watch?v=ZYNbuYREyeE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                La Rosa de Foc 3D
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/Larosadefoc.jpg"}
                alt="Cartell de La Rosa de Foc"
                width="500"
              />
              <figcaption>Cartell de la pel·l&iacute;cula</figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.live-production.tv/news/4k-8k-arising/mediapro-group-produced-live-3d-concert-portuguese-group-deolinda.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                Deolinda 3D des del Coliseu, Lisboa 28/01/2011
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.youtube.com/watch?v=AlTtevooKGE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                Abrunhosa 3D des del Coliseu, Porto 20/11/2010
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.youtube.com/watch?v=NU2ZXZFZhY4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                Klepth 3D des de Casa da M&ugrave;sica, Porto 30/10/2010
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/obvan_ext2.jpg"}
                alt="Unitat mòbil 3D de Medialuso. Casa da Música (Porto)"
                width="500"
              />
              <figcaption>
                Unitat m&ograve;bil 3D de Medialuso a Casa da M&ugrave;sica de
                Porto
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.youtube.com/watch?v=zEckoGCYMkY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                RIP Curl World Cup of Surfing, Peniche 8-10/10/2010
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/RIPCurlPeniche.jpg"}
                alt="Mundial de Surf a Peniche"
                width="500"
                heigth="375"
              />
              <figcaption>
                RIP Curl World Cup of Surfing des de Peniche, Portugal
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.live-production.tv/news/4k-8k-arising/3d-screening-bar%C3%A7a-%E2%80%93-madrid-match-was-big-success.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                Futbol 3D Live 10/12/2010
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
                <img
                  src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                  alt="mediapro"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/cartellFutbol3D.jpg"}
                alt="Cartell de promoci&ograve; del Cl&agrave;sico en 3D"
                width="500"
                heigth="375"
              />
              <figcaption>
                Primera retransmissi&ograve; d&apos;El Cl&agrave;sico en 3D en
                directe
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#1">
              <h3>Benfica-Sporting de Lisboa 3D 28/11/2009</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img"}
                alt="Est&aacute;dio da Luz, Lisboa"
                width="500"
              />
              <figcaption>Primer partit 3D a Portugal</figcaption>
            </figure>
          </article>
          <article>
            <a href="#1">
              <h3>Catalunya-Col&ograve;mbia 3D 28/12/2008</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img"}
                alt="Nou Camp"
                width="500"
              />
              <figcaption>
                Primeres proves de 3D amb c&agrave;meres de cinema
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{feines[1][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a
              href="https://twitter.com/YBVR360/status/1547902321706733569"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Media Manager for Wimbledon 2022 in 360º</h3>
              <img
                src={process.env.PUBLIC_URL + "/img/yt20.png"}
                alt="youtube"
                style={{ margin: "0px 0px 0px 15px" }}
              />
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/wimbledon01.jpg"}
                alt="Wimbledon 2022"
                width="500"
                heigth="375"
              />
              <figcaption>Wimbledon 2022 in 360º</figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.neom.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>NEOM The Line 2020</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/NEOM_theline.jpg"}
                alt="NEOM The Line"
                width="500"
                heigth="375"
              />
              <figcaption>
                Mapa de The Line a NEOM, Nord-oest de l&apos;Ar&agrave;bia
                Saudita
              </figcaption>
            </figure>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/NEOM_theline2.jpg"}
                alt="NEOM The Line Detalls"
                width="500"
                heigth="375"
              />
              <figcaption>Detalls de The Line a NEOM</figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.youtube.com/watch?v=OLIpvPvQ14E"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                The Zone of Hope
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/tzoh.png"}
                alt="The Zone oh Hope"
                width="500"
                heigth="375"
              />
              <figcaption>
                The Zone of Hope v1 per Aig&uuml;es de Barcelona
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://mediaproexhibitions.com/ca/project/messi-challenge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Messi Challenge: sigues Messi per un dia</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/messi10.jpg"}
                alt="Messi Challenge"
                width="500"
                heigth="375"
              />
              <figcaption>
                Messi Challenge a la representaci&oacute; Messi10 de Cirque du
                Soleil. Setembre 2019
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#7">
              <h3>BTS Woody Allen&apos;s visit to Spain 2019</h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.neom.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>NEOM Tourism Book &amp; Map 2019</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/NEOM_tourism.jpg"}
                alt="Book and Tourism map"
                width="500"
              />
              <figcaption>
                Primer llibre i mapa tur&iacute;stic de NEOM
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.wtm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>NEOM Immersive 2019</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/NEOM_immersive.jpg"}
                alt="Interior al World Travel Market de Londres"
                width="500"
              />
              <figcaption>
                NEOM Immersive, presentat amb motiu de la fira mundial del
                turisme de Londres
              </figcaption>
            </figure>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/NEOM_immersive2.jpg"}
                alt="Stand al World Tourism Expo a Londres"
                width="500"
              />
              <figcaption>
                Stand de NEOM a la fira mundial del turisme de Londres
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.neom.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>NEOM Smart City 2019</h3>
            </a>
          </article>
          <article>
            <a
              href="https://mediaproexhibitions.com/ca/project/mep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>MEP (Messi Experience Park) 2018</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/mep.jpg"}
                alt="Messi Experience Park"
                width="500"
                heigth="375"
              />
              <figcaption>Messi Experience Park a Nanjing, China</figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.youtube.com/watch?v=bKJ9cW0xRuw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                VR Live Gulf League 2018
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/vrlive.jpg"}
                alt="VR Live Gulf League 2018"
                width="500"
                heigth="375"
              />
              <figcaption>VR Live: Gulf Fooball League. Dubai, EAU</figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.youtube.com/watch?v=5M49dCMpQJw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                AutomaticTV 2014
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/automatictv.jpg"}
                alt="AutomaticTV"
                width="500"
                heigth="375"
              />
              <figcaption>
                AutomaticTV: producci&oacute; autom&agrave;tica de continguts en
                directe
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#14">
              <h3>ImmersiveTV 2010</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/immersivetv.jpg"}
                alt="ImmersiveTV"
                width="500"
              />
              <figcaption>ImmersiveTV: projecte de recerca nacional</figcaption>
            </figure>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/immersivetv2.jpg"}
                alt="ImmersiveTV #2"
                width="500"
              />
              <figcaption>
                &Uacute;s de diferents tecnologies immersives 2D i 3D
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://vimeo.com/41780222"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                Project FINE 2010
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/ProjectFINE.jpg"}
                alt="Roll up de ProjectFINE"
                width="500"
              />
              <figcaption>
                Andr&egrave;s Iniesta va cedir la seva imatge al projecte de
                recerca Europeu
              </figcaption>
            </figure>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/FINE_IBC2012.jpg"}
                alt="IBC2012"
                width="500"
              />
              <figcaption>
                Guanyadors de la distinci&oacute; "What Caught My Eye"
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.futbol3d.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Futbol 3D Temporades 2010-11 i 2011-12</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/futbol3d.jpg"}
                alt="Logo Fútbol 3D"
              />
              <figcaption>
                Transmissions via sat&egrave;l·lit:
                <br />
                FCB-RMA 5-0 29/11/2010 9 posicions de c&agrave;mera 3D i
                visionat al Palacio de Congresos de Madrid
                <br />
                FCB-MAL 4-1 15/01/2011 Visionat a M&agrave;laga
                <br />
                ATM-ATH 0-2 30/01/2011 Visionat a Bilbao
                <br />
                RMA-FCB 1-1 16/04/2011 Visionat a Imagina
                <br />
                RMA-FCB 1-3 10/12/2011 6 c&agrave;meres 3D i visionat a Imagina
                <br />
                FCB-VAL 5-1 18/02/2012 Visionat a Val&egrave;ncia
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#16">
              <h3>APIDIS 2009</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/apidis.jpg"}
                alt="Logo APIDIS"
              />
            </figure>
          </article>
          <article>
            <a href="#17">
              <h3>2020 3D Media 2008</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/20203DMedia.jpg"}
                alt="Logo 2020 3D Media"
              />
            </figure>
          </article>
          <article>
            <a href="#18">
              <h3>i3media 2008</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/i3media.png"}
                alt="Logo i3media"
                width="250"
              />
            </figure>
          </article>
          <article>
            <a href="#19">
              <h3>IP-racine 2008</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/ipracine.jpg"}
                alt="Logo IP-racine"
                width="250"
              />
            </figure>
          </article>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{feines[2][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a
              href="https://www.thevrara.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>VRARA: The VR/AR Association</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/VRARA.png"}
                alt="VR/AR Association"
                width="250"
              />
              <figcaption>Chapter President</figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.sun.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Sun Microsystems</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/sun.jpg"}
                alt="Sun Microsystems"
                width="250"
              />
              <figcaption>
                Technical Account Manager for Strategic Accounts
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.netscape.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Netscape</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/Netscape.png"}
                alt="Netscape"
                width="250"
              />
              <figcaption>
                Enterprise Service Account Manager iPlanet products
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{feines[3][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a
              href="https://www.esade.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>ESADE Mentor alumnes del M&agrave;ster</h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.salleurl.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                <em>La Salle URL - Grau en Arts Digitals</em>
              </h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.eram.cat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>ERAM UdG</h3>
            </a>
          </article>
          <article>
            <a href="#26">
              <h3>MSc UPC</h3>
            </a>
          </article>
          <article>
            <a href="#27">
              <h3>Mediapro AutomaticTV</h3>
            </a>
          </article>
          <article>
            <a href="#28">
              <h3>Mediapro 3D</h3>
            </a>
          </article>
          <article>
            <a href="#29">
              <h3>RTVE Catalunya</h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.escac.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>ESCAC Escola Superior de Cinema</h3>
            </a>
          </article>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{feines[4][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a href="#23">
              <h3>Brainstorm Studio</h3>
            </a>
          </article>
          <article>
            <a href="#23">
              <h3>Softimage 3D</h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.youtube.com/watch?v=Crq3--XXwxc"
              alt="Vídeo demo Accom Elset any 1999 a Broadcat Madrid"
              rel="noopener noreferrer"
            >
              <h3>
                Accom Elset Live NT
                <img
                  src={process.env.PUBLIC_URL + "/img/yt20.png"}
                  alt="youtube"
                  style={{ margin: "0px 0px 0px 15px" }}
                />
              </h3>
            </a>
          </article>
          <article>
            <a href="#25">
              <h3>Avid DS</h3>
            </a>
          </article>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{feines[5][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a
              href="https://www.thevrara.com/barcelona"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>The VR/AR Association Catalonia Chapter</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/VRARA1.jpg"}
                alt="Sopar gala VRARA foto1"
                width="500"
              />
              <figcaption>Sopar de Gala anual durant el MWC</figcaption>
            </figure>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/VRARA3.jpg"}
                alt="Sopar gala VRARA foto2"
                width="500"
              />
              <figcaption>Sopar de Gala anual durant el MWC</figcaption>
            </figure>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/VRARA5.jpg"}
                alt="Una de les sessions trimestrals"
                width="500"
              />
              <figcaption>
                Sessi&oacute; trimestral a Can&ograve;drom BCN
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#23">
              <h3>Promovisa Catalunya</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/promovisa.jpg"}
                alt="Logo Promovisa"
              />
              <figcaption>Delegat regional per Catalunya i Balears</figcaption>
            </figure>
          </article>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{feines[6][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a href="#31">
              <h3>Glory Day: The mystery of the Sagrada Familia</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/gloryday.jpg"}
                alt="Caixa CD-ROM de Glory Day"
                width="500"
              />
              <figcaption>
                La pel·l&igrave;cula mai no es va acabar, per&agrave; es va
                editar un CD-ROM
              </figcaption>
            </figure>
          </article>
          <article>
            <a href="#32">
              <h3>Cap&ccedil;alera Sitges Film Festival</h3>
            </a>
          </article>
          <article>
            <a href="#33">
              <h3>Anunci Catalunya M&uacute;sica</h3>
            </a>
          </article>
          <article>
            <a href="#34">
              <h3>Anunci La Agenda</h3>
            </a>
          </article>
          <article>
            <a href="#35">
              <h3>Dobles: Curtmetratge</h3>
            </a>
          </article>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{feines[7][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a href="#36">
              <h3>
                HTML5, CSS3, JS, SVG, ReactJS, ThreeJS, Web3D per Portfolio
                personal
              </h3>
            </a>
          </article>
          <article>
            <a href="#37">
              <h3>
                SEO, SEM, Wordpress, Python, Keras, PHP, MySQL per webs pròpies
              </h3>
            </a>
          </article>
          <article>
            <a href="#38">
              <h3>
                HTML5, CSS2, JS, Ajax, jQuery, PHP, MariaDB, krpano (plugin 360
                per Mediapro)
              </h3>
            </a>
          </article>
          <article>
            <a href="#39">
              <h3>Macromedia Flash per Webs de clients</h3>
            </a>
          </article>
          <article>
            <a href="#40">
              <h3>HTML4, CSS2, JS, PHP per video online a cine.com</h3>
            </a>
          </article>
          <article>
            <a href="#41">
              <h3>HTML4, CSS2, JS per e-commerce a reg2.net</h3>
            </a>
          </article>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{feines[8][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a
              href="https://www.jordialonso.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Blog Veni Vidi Vici</h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.cine3d.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Blog cine3D.com</h3>
            </a>
          </article>
          <article>
            <a href="#42">Blog cine.com</a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/DougTrumbull_Sitges.jpg"}
                alt="entrevista a Doug Trumbull"
                width="500"
                heigth="375"
              />
              <figcaption>
                Entrevista a Doug Trumbull durant el festival de Sitges 2007 per
                cine.com
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://jordialonso.wordpress.com/2011/02/04/entrevista-a-steve-schklair-ceo-de-3ality-en-ibc-2010/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Entrevista a Steve Schklair, CEO de 3ALITY</h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.elperiodico.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>El Peri&ograve;dico de Catalunya</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/Elperiodico1.jpg"}
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
                src={process.env.PUBLIC_URL + "/img/Elperiodico2.jpg"}
                alt="Article#2 El Periódico"
                width="500"
                heigth="375"
              />
              <figcaption>
                Article a El Peri&ograve;dico de Catalunya (suplement de
                tecnologia)
              </figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.3dmagazine.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>3D Magazine</h3>
            </a>
          </article>
          <article>
            <a href="#43">
              <h3>Onda Cero Radio. Mar&ccedil; 2010</h3>
            </a>
          </article>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{feines[9][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a href="#44">
              <h3>
                Serveis de formaci&ograve; CGI, 3D, XR, web, Presentacions en
                p&ugrave;blic
              </h3>
            </a>
          </article>
          <article>
            <a href="#45">
              <h3>SEO, SEM, Optimitzaci&ograve; de webs WordPress</h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.openvino.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                Blockchain/NFT: Projecte OpenVino.org &amp; OpenCava.org (2017)
              </h3>
            </a>
          </article>
          <article>
            <a href="#46">
              <h3>Crypto: mineria &amp; trading (2013)</h3>
            </a>
          </article>
          <article>
            <a href="#47">
              <h3>Domainer: +1.000 dominis (actualment +100)</h3>
            </a>
          </article>
          <article>
            <a href="#48">
              <h3>VoD: cine.com desc&agrave;rregues legals (1999)</h3>
            </a>
          </article>
          <article>
            <a href="#49">
              <h3>Iberseller e-commerce solutions (1997)</h3>
            </a>
          </article>
          <article>
            <a href="#50">
              <h3>AI: Sistema Expert en PDC-PROLOG/UNIX (1992)</h3>
            </a>
          </article>
          <article>
            <a href="#51">
              <h3>
                CADAT Inform&ograve;tica: importacions, muntatge de PC&apos;s
                (1988)
              </h3>
            </a>
          </article>
          <article>
            <a href="#52">
              <h3>
                Desenvolupament d&apos;aplicacions en Clipper/MS-DOS (1987)
              </h3>
            </a>
          </article>
        </div>
      </div>
    </>
  );
}
