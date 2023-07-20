console. log("Hello world!");

const blink = document.querySelector('#blink');

function duracionAleatoria() {
  return Math.random() * 0.1 + 1.5;
}

function retrasoAleatorio() {
  return Math.random() * 2;
}

function iniciarParpadeo() {
  const duracion = duracionAleatoria() + 's';
  const retraso = retrasoAleatorio() + 's';
  
  blink.style.animationDuration = duracion;
  blink.style.animationDelay = retraso;

  blink.addEventListener('animationiteration', iniciarParpadeo);
}

if (blink) {
iniciarParpadeo();
}

// Nav Bar

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
  nav.classList.add("visible");
})

abrir.addEventListener("click", () => {
  abrir.classList.add("invisible");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
})

cerrar.addEventListener("click", () => {
  abrir.classList.remove("invisible");
})
