import "./Cv.css";

export function Cv() {
  return (
    <div className="cv">
      <ul>
        <li>
          LOGO + NOM en barra semitransparent, que és permanent i només s'amaga
          si es fa scroll vertical
        </li>
        <li>
          foto de perfil, amb una animació que va canviant-la segons temàtica:
          <br />
          -(APD, Huawei, NEOM)
          <br />
          -conferències
          <br />
          -formació i congressos
          <br />
          -afeccions
          <br />
        </li>
        <li>Segons menú mostrar (i idioma)</li>
        <ul>
          <li>
            Experiències per competències, de més important a menys o de més
            recent a menys, segons convingui
          </li>
          <li>Feines</li>
          <ul>
            <li>CTO</li>
            <li>Project Management</li>
            <li>Service Account Manager</li>
            <li>Formació</li>
            <ul>
              <li>ESADE Mentor</li>
              <li>La Salle</li>
              <li>ERAM</li>
              <li>MSc UPC</li>
              <li>Mediapro AutomaticTV</li>
              <li>Mediapro 3D</li>
              <li>RTVE Catalunya</li>
              <li>ESCAC</li>
            </ul>
            <li>Web developement</li>
            <li>Empresari</li>
          </ul>
          <li>Entrevistes</li>
          <ul>
            <li>VR</li>
            <li>Canal+ estrena simultània</li>
            <li>TV3</li>
            <li>internet video a cine.com</li>
            <li>e-commerce a reg2.net</li>
          </ul>
          <li>Conferències</li>
          <ul>
            <li>APD XR: the next big thing?</li>
            <li>GITEX Huawei 5G Keynote</li>
            <li>La Liga Technology Showcase Shanghai</li>
            <li>La Liga Technology Showcase BCN</li>
            <li>COEIC media &and; IT</li>
            <li>Mediapro 2020 3D Media</li>
            <li>IBC 2020 3D Media</li>
            <li>CGIx Glory Day</li>
            <li>Festival de cinema de Sitges cine.com</li>
            <li>Torre Agbar cine.com</li>
            <li>Santiago de Compostela cine.com</li>
          </ul>
          <li>Formació</li>
          <ul>
            <li>MSc Photonics a UPC</li>
            <li>MBA a ESADE</li>
            <li>MA Compueter Animation a ESCAC</li>
            <li>BSc Computer Graphics a UAB</li>
            <li>Cursos i Certificacions</li>
            <ul>
              <li>Front-end web developer</li>
              <li>Coursera ML</li>
              <li>ITIL</li>
              <li>PMI</li>
              <li>Softimage 3D</li>
              <li>Avid DS</li>
            </ul>
            <li>Congressos</li>
            <ul>
              <li>SIGGRAPH</li>
              <li>NAB</li>
              <li>IBC</li>
              <li>MWC</li>
              <li>Suècia</li>
              <li>Helsinki</li>
            </ul>
          </ul>
          <li>Afiliacions</li>
          <li>Afeccions</li>
          <ul>
            <li>Tennis</li>
            <li>Tennis taula</li>
            <li>Golf</li>
            <li>Esquí</li>
            <li>Trekking</li>
            <li>Beat Saber</li>
            <li>Música: Guitarra i Piano</li>
            <li>Lectura</li>
            <li>Fotografia de viatges</li>
          </ul>
        </ul>
      </ul>
    </div>
  );
}
