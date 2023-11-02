let data = [
  {
    id: 1,
    name: "Luke Skywalker",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    picture:
      "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    picture:
      "https://static.wikia.nocookie.net/starwars/images/b/b2/WedgeAntilles-Masterwork2020.png",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    picture:
      "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const show_btn = document.getElementById("show-button");
const hide_btn = document.getElementById("hide-button");
// const row_card = `<div class="col-4">  <div class="card" style="width: 18rem;">
// <img src="${data[0].picture}" class="card-img-top" alt="...">
// <div class="card-body">
//   <p class="card-text">
//   "id: " ${data[0].id} <br/>
//  "name: " ${data[0].name} <br/>
//  "homeworld: " ${data[0].homeworld} </p>
// </div>
// </div> </div>`
// let text = document.querySelector('#div');
// document.getElementById("div").innerHTML=row_card;
function showCharacters() {
  show_btn.classList.remove("show");
  hide_btn.classList.add("show");
  for (let i = 0; i < data.length; i++) {
    const card = `<div class="col-4"> <div class="card" style="width: 18rem;">
    <img src="${data[i].picture}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">
     ${data[i].name} <br/>
    ${data[i].homeworld ?? "unknown"} </p>
    </div>
    </div> </div>`;
    div.innerHTML += card;
  }
}
function hideCharacters() {
  show_btn.classList.add("show");
  hide_btn.classList.remove("show");
  let div = document.getElementById("div");
  div.innerHTML = "";
}
const homeWorldsraw = [];
for (let i = 0; i < data.length; i++) {
  homeWorldsraw.push(data[i].homeworld ?? 'other');
}

const homeWorldunique = [];

for (let j = 0;j< homeWorldsraw.length; j++) {
  if(homeWorldunique.includes(homeWorldsraw[j])===false){
    homeWorldunique.push(homeWorldsraw[j]);
  }
}
const homeWorlsLowerCase=[];
for(let k = 0 ; k<homeWorldunique.length;k++){
  homeWorlsLowerCase.push(homeWorldunique[k].toLowerCase())
}
const homeworlds = homeWorlsLowerCase;


const filters = document.getElementById('filters');

homeworlds.forEach((world,index) => {
  const div = document.createElement('div');
const radio = document.createElement('input');
const unique_id = "filter-radio-" + index;
radio.id = unique_id;
radio.type='radio';
radio.classList.value="me-1";
radio.value=world;
radio.name="homeworld";

const label = document.createElement('label');
label.for=unique_id;
label.innerText= world;


div.appendChild(radio);
div.appendChild(label);
filters.appendChild(div);
});
let filter_form = document.getElementById('filter-form');
filter_form.addEventListener("submit", (e) =>{ //event ekleme mantığı şöyle ki filter_form submit olduğunda yapacağımız şeyleri yazacaz buraya.
  e.preventDefault(); // bu method formu submit ettiğimizde sayfayı yenilemesini önlüyor ve böylece sayfayı yenilemeden işlemlerimizi yapabiliyoruz.
  let filteredHomeworld="";

  const formData = new FormData(filter_form);

  for(const entry of formData){
    filteredHomeworld=entry[1];
    console.log(filteredHomeworld);
  }
showFilteredCharacters(filteredHomeworld);
});
function showFilteredCharacters(filteredHomeworld) {
  if(div.innerHTML===""){
    show_btn.classList.remove("show");
  hide_btn.classList.add("show");
  }
  div.innerHTML="";
  
  for (let i = 0; i < data.length; i++) {
    if((data[i].homeworld??"other").toLowerCase() === filteredHomeworld|| !filteredHomeworld){
    const card = `<div class="col-4"> <div class="card" style="width: 18rem;">
    <img src="${data[i].picture}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">
    ${data[i].name} <br/>
     ${data[i].homeworld ?? "unknown"} </p>
    </div>
    </div> </div>`;
    div.innerHTML += card;
  }}
}










