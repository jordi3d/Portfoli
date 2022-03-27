import { congressos } from "./altres";
export default function Congressos({ language }) {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          <h2>{congressos[0][language]}</h2>
        </div>
        <div className="dropdown-content">
          <article>
            <a
              href="https://www.siggraph.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>SIGGRAPH</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/Siggraph.jpg"}
                alt="SIGGRAPH 2016"
                width="500"
              />
              <figcaption>Atenent ininterrompudament des de 1994</figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.nabshow.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>NAB</h3>
            </a>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/img/NABAutomaticTV.jpg"}
                alt="NAB 2018"
                width="500"
              />
              <figcaption>Stand d&apos;AutomaticTV al NAB Show</figcaption>
            </figure>
          </article>
          <article>
            <a
              href="https://www.ibc.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>IBC</h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.mwcbarcelona.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>MWC</h3>
            </a>
          </article>
          <article>
            <a
              href="https://3dtv-con.org/silja-serenade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>3DTV-CON Training School IEEE. 2018 Stockholm-Helsinki</h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.3d-contournet.eu/cost-training-school-3d-avcom-2015/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>3D-AVCom Training School (EU-COST Action) 2015 Lisbon</h3>
            </a>
          </article>
          <article>
            <a
              href="https://www.3d-contournet.eu/plenoptics-2013/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                3D-ConTourNet Training School (EU-COST Action) 2013 Sundsvall
              </h3>
            </a>
          </article>
        </div>
      </div>
    </>
  );
}
