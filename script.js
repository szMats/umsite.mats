function verificarSenha() {
    var senhaInserida = document.getElementById("senha").value;
    if (senhaInserida == "2325") {
      document.getElementById("login").style.display = "none";
      document.getElementById("imagensTexto").style.display = "block";
    } else {
      alert("Senha incorreta!");
    }
  }
  
  function sair() {
    document.getElementById("login").style.display = "block";
    document.getElementById("imagensTexto").style.display = "none";
    document.getElementById("senha").value = ""; 
  }
  
  var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");
  
    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }