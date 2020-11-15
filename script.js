
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

//carousel

function right(car) {
  var pai = car.parentElement;
  var nome = pai.children[2];
  var valor = 6
  var tempo = setInterval(move, 1);
  function move() {
    if (valor == 96) {
      clearInterval(tempo);
    } else {
      valor = valor + 2;
      nome.style.left = "-" + valor + "vw";
    }
  }
  document.querySelector(".carousel-next").style.visibility = "hidden";
  document.querySelector(".carousel-previous").style.visibility = "visible";
}

function left(car) {
  var pai = car.parentElement;
  var nome = pai.children[2];
  var valor = 96
  var tempo = setInterval(move, 1);
  function move() {
    if (valor == 6) {
      clearInterval(tempo);
    } else {
      valor = valor - 2;
      nome.style.left = "-" + valor + "vw";
    }
  }
  document.querySelector(".carousel-next").style.visibility = "visible";
  document.querySelector(".carousel-previous").style.visibility = "hidden";
}

// carousel