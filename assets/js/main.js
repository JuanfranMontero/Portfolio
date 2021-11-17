
window.onscroll = function() {myFunction()};


var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {

  if (window.pageYOffset > sticky) {

    header.classList.add("sticky");

  } else {

    header.classList.remove("sticky");
  }
  
  var links = document.querySelectorAll('.icons > a');
  
  links[0].onmouseover = () => { links[1].style.visibility = "hidden";  links[2].style.visibility = "hidden";}
  links[0].onmouseleave = () => { links[1].style.visibility = "visible"; links[2].style.visibility = "visible";}
  
  links[1].onmouseover = () => { links[0].style.visibility = "hidden";  links[2].style.visibility = "hidden";}
  links[1].onmouseleave = () => { links[0].style.visibility = "visible";  links[2].style.visibility = "visible";}

  links[2].onmouseover = () => { links[0].style.visibility = "hidden";  links[1].style.visibility = "hidden";}
  links[2].onmouseleave = () => { links[0].style.visibility = "visible";  links[1].style.visibility = "visible";}
}



