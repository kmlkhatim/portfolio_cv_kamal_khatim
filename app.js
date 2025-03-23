const btnMenu = document.querySelector(".btn-rond-menu");
const nav = document.querySelector(".nav-gauche");
const allItemNav = document.querySelectorAll(".nav-menu-item");
const ligne = document.querySelector(".cont-ligne");

btnMenu.addEventListener("click", () => {
  ligne.classList.toggle("active");
  nav.classList.toggle("menu-visible");
});

if (window.matchMedia("(max-width: 1300px)")) {
  allItemNav.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.toggle("menu-visible");
      ligne.classList.toggle("active");
    });
  });
}

// Animation écriture

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
  loop: false,
  deleteSpeed: 20
});

typewriter
  .pauseFor(1800)
  .changeDelay(20)
  .typeString('Moi, c\'est Kamal KHATIM')
  .pauseFor(300)
  .typeString(', <strong style="color: #39F500;">Développeur IT</strong> !')
  .pauseFor(1000)
  .deleteChars(18)
  .typeString(', <strong style="color: #394808;">Gestionnaire Logistique</strong> !')
  .start()
