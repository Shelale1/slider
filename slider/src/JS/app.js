const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


let index = 0;

prev.addEventListener("click", () => {
  removeActives();
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }

  setSlides();
});

next.addEventListener("click", () => {
  removeActives();
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  setSlides();
});

function setSlides() {
  slides[index].classList.add("active");
  document.body.style.backgroundImage= `url("${slides[index].firstElementChild.src}")`
}
function removeActives() {
  slides.forEach((item) => {
    item.classList.remove("active");
  });
}



const cards = document.querySelector('.cards');

const api = "http://localhost:3000/data"
// console.log(api);



async function name(){ 
  const res = await fetch(api);
  const json = await res.json();
  const data = json;

let text = "";
  data.forEach((item) => {
    text += `
    
    <div key=${item.id} class="card">
                    <div class="card-inner">
                        <h3>${item.title}</h3>
                        <p>${item.number}</p>
                    </div>
                </div>
    
    
    `
  })

  cards.innerHTML  = text;
  
}

// data




name()




