# Portfoli de Jordi Alonso

Exercicis del meu curs de front-end web development a Tecnocampus Mataró<br/>
Professors: David Rodenas i Pol Valés<br/>
gener-abril 2022<br/>

## El més difícil

El més difícil és decidir el format del portfoli.<br/>
Ja ho tinc clar (14-2-22), i m'hi posaré aviat<br/>

## Mobile First

S'ha de provar en un mòbil.
Avui finalitzo una primera versió
v1.0 19-02-22

### Notes v1.0

Data de publicació: 19-02-2022
Com es gestionen les versions? Pregunta per classe

Desplegables fets amb CSS
Les "a" són els items del menú
Per la v1.1, voldria separar les seccions del CV en components
En versions posteriors molaria MOLT, poder fer "click" en les parts dels items que es volen incloure en el CV, i convertir el Portfoli en un configurador de CV,
que em permeti seleccionar els items i l'idioma i de sortida, generés un CV en pdf customitzat.

### Notes v1.5

Data de publicació: 12-03-2022
Actualitzat l'àrab i afegida molta informació d'entrevistes i fotos
Afegir els textos multiidioma en arxius externs a l'App.js, que es vagin cridant

### Notes v2.0

Caldria usar els desplegables fets servir al curs (slider), no m'agrada com es comporten els que tinc actualment
També usar el Carrousel
El carrusel, ha de mostrar transicions d'animació al passar d'una imatge a una altra
La versió de mòbil, s'ha de repensar perquè funcioni millor
https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
Cal fer animació del logo quan s'està :hover
El desplegable principal, podria fer que filtrés per temàtiques o per anys?
Mirar d'agrupar temes amb els tags semàntics side, main i content
Els items que tenen link activat, mostrar-los amb una icona del món, similar a la de Mediapro?
Potser estaria bé fixar la posició de l'idioma per si vols anar canviant d'idioma al fer click

### Notes v3.0

Fer camps ocults/visibles, per activar/desactivar parts del CV
Activar/Desactivar dates
Agrupar experiències dient "5 anys d'experiència com a professor"
Posar explicació de les tasques desenvolupades a cada feina
Traduir els continguts dels submenús als diferents idiomes
Caldria identificar per IP el país de connexió, i donar per defecte l'idioma principal:
Andorra, País Valencià, Catalunya i Balears: català.
Sudamèrica i Espanya: castellà.
Fer servir cookies per visites repetides.
Canviar els numerals a aràbic o a xinès...
Aràbic: https://www.saitak.com/number
Xinès: https://chinese.gratis/tools/chinesenumbers/
