
// muda o background do header no scroll
window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.querySelector(".header-wrapper").style.backgroundColor = "var(--preto)";
  } else {
    document.querySelector(".header-wrapper").style.backgroundColor = "transparent";
  }
}   
// muda o background do header no scroll