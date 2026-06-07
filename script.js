/* =========================
   GLOBALS
========================= */

let currentLanguage = "en";
let map = null;

/* =========================
   STOPS
========================= */

const stops = [

{
number:1,
title:{
en:"Introduction",
pl:"Wprowadzenie"
},
image:"Templo_de_Karnak,_Luxor,_Egipto,_2022-04-03,_DD_170-172_HDR.jpg",
coords:[25.717140,32.656518],
description:{
en:"Welcome to Karnak Temple.",
pl:"Witamy w świątyni Karnak."
}
},

{
number:2,
title:{
en:"First Pylon",
pl:"Pierwszy Pylon"
},
image:"Templo_de_Karnak,_Luxor,_Egipto,_2022-04-03,_DD_145.jpg",
coords:[25.718335,32.656205],
description:{
en:"The monumental entrance gateway.",
pl:"Monumentalne wejście."
}
},

{
number:3,
title:{
en:"Great Court",
pl:"Wielki Dziedziniec"
},
image:"Karnak_Temple_Luxor_Egypt_(2504854811).jpg",
coords:[25.718910,32.656450],
description:{
en:"The huge open ceremonial court.",
pl:"Ogromny ceremonialny dziedziniec."
}
},

{
number:4,
title:{
en:"Taharqa Kiosk",
pl:"Kiosk Taharki"
},
image:"Karnak_temple_complex_2012.JPG",
coords:[25.719220,32.656590],
description:{
en:"The famous surviving papyrus column.",
pl:"Słynna zachowana kolumna."
}
},

{
number:5,
title:{
en:"Ramesses III Temple",
pl:"Świątynia Ramzesa III"
},
image:"Monumenti_dell'Egitto_e_della_Nubia-plate-0032.jpg",
coords:[25.718780,32.655860],
description:{
en:"A small temple within Karnak.",
pl:"Mała świątynia w Karnaku."
}
},

{
number:6,
title:{
en:"Great Hypostyle Hall",
pl:"Wielka Sala Hypostylowa"
},
image:"Karnak_temple_Großer_Säulensaal_9509.jpg",
coords:[25.720080,32.656350],
description:{
en:"The forest of 134 giant columns.",
pl:"Las 134 gigantycznych kolumn."
}
},

{
number:7,
title:{
en:"Second Pylon",
pl:"Drugi Pylon"
},
image:"Templo_de_Karnak,_Luxor,_Egipto,_2022-04-03,_DD_156.jpg",
coords:[25.719660,32.656320],
description:{
en:"Gateway between major temple areas.",
pl:"Brama między głównymi częściami świątyni."
}
},

{
number:8,
title:{
en:"Obelisk of Hatshepsut",
pl:"Obelisk Hatszepsut"
},
image:"Templo_de_Karnak,_Luxor,_Egipto,_2022-04-03,_DD_157.jpg",
coords:[25.720830,32.656540],
description:{
en:"One of Egypt's tallest obelisks.",
pl:"Jeden z najwyższych obelisków Egiptu."
}
},

{
number:9,
title:{
en:"Sacred Lake",
pl:"Święte Jezioro"
},
image:"Templo_de_Karnak,_Luxor,_Egipto,_2022-04-03,_DD_156.jpg",
coords:[25.720939,32.658203],
description:{
en:"Used for ritual purification.",
pl:"Używane do rytualnego oczyszczenia."
}
},

{
number:10,
title:{
en:"White Chapel",
pl:"Biała Kaplica"
},
image:"White_Chapel.jpg",
coords:[25.720350,32.657240],
description:{
en:"A reconstructed Middle Kingdom shrine.",
pl:"Zrekonstruowana kaplica Średniego Państwa."
}
},

{
number:11,
title:{
en:"Festival Hall of Thutmose III",
pl:"Sala Festiwalowa Totmesa III"
},
image:"S03_06_01_018_image_2398.jpg",
coords:[25.721710,32.656910],
description:{
en:"A unique ceremonial structure.",
pl:"Wyjątkowa ceremonialna budowla."
}
},

{
number:12,
title:{
en:"Temple of Ptah",
pl:"Świątynia Ptaha"
},
image:"Karnak_Ptah_07.jpg",
coords:[25.723550,32.655440],
description:{
en:"Temple dedicated to Ptah.",
pl:"Świątynia poświęcona Ptahowi."
}
},

{
number:13,
title:{
en:"Temple of Khonsu",
pl:"Świątynia Chonsu"
},
image:"Flickr_-_Gaspa_-_Tempio_di_Karnak,_ingresso.jpg",
coords:[25.715910,32.656240],
description:{
en:"Temple of the moon god.",
pl:"Świątynia boga księżyca."
}
},

{
number:14,
title:{
en:"Bubastite Portal",
pl:"Brama Bubastycka"
},
image:"Bubastis_portal_at_Karnak.jpg",
coords:[25.718440,32.657380],
description:{
en:"Decorated ceremonial gateway.",
pl:"Bogato zdobiona brama."
}
},

{
number:15,
title:{
en:"Temple of Opet",
pl:"Świątynia Opet"
},
image:"Karnak_R12.jpg",
coords:[25.714520,32.656120],
description:{
en:"Associated with rebirth.",
pl:"Związana z odrodzeniem."
}
},

{
number:16,
title:{
en:"Precinct of Mut",
pl:"Okręg Mut"
},
image:"Karnak_Sachmet_02.JPG",
coords:[25.711310,32.656900],
description:{
en:"Sacred precinct of Mut.",
pl:"Święty okręg bogini Mut."
}
},

{
number:17,
title:{
en:"Conclusion",
pl:"Zakończenie"
},
image:"Karnak_Temple_Ram_Road.jpg",
coords:[25.713220,32.656650],
description:{
en:"Thank you for visiting Karnak.",
pl:"Dziękujemy za odwiedzenie Karnaku."
}
}

];

/* =========================
   SCREENS
========================= */

function showScreen(id){

document
.querySelectorAll(".screen")
.forEach(s=>s.classList.remove("active"));

document
.getElementById(id)
.classList.add("active");

}

/* =========================
   MENU
========================= */

function openLanguage(){
showScreen("languageScreen");
}

function setLanguage(lang){

currentLanguage = lang;

showScreen("homeScreen");

buildTour();

}

/* =========================
   HOME
========================= */

function startTour(){

showScreen("tourScreen");

}

function goHome(){

showScreen("homeScreen");

}

/* =========================
   TOUR CARDS
========================= */

function buildTour(){

const slider =
document.getElementById("tourSlider");

slider.innerHTML = "";

stops.forEach(stop=>{

slider.innerHTML += `

<div class="stop-card">

<img
src="images/${stop.image}"
alt="${stop.title.en}">

<div class="stop-content">

<div class="stop-number">
Stop ${stop.number}
</div>

<h2>
${stop.title[currentLanguage]}
</h2>

<p>
${stop.description[currentLanguage]}
</p>

</div>

</div>

`;

});

}

/* =========================
   MAP
========================= */

function showMap(){

showScreen("mapScreen");

setTimeout(()=>{

if(!map){

createMap();

}else{

map.invalidateSize();

}

},200);

}

function closeMap(){

showScreen("homeScreen");

}

function createMap(){

map = L.map("map",{

zoomControl:true

}).setView(
[25.718335,32.656205],
17
);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
maxZoom:20
}
).addTo(map);

const route =
stops.map(
s=>s.coords
);

L.polyline(route,{
weight:4
}).addTo(map);

stops.forEach(stop=>{

L.marker(stop.coords)
.addTo(map)
.bindPopup(
`${stop.number}. ${stop.title.en}`
);

});

}

/* =========================
   AUDIO PLACEHOLDER
========================= */

document
.getElementById("playBtn")
.addEventListener(
"click",
()=>{
alert(
"MP3 support will be added later."
);
}
);

/* =========================
   INIT
========================= */

buildTour();