window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo-fixsed").className = "test";
  } else {
    document.getElementById("logo-fixsed").className = "";
  }
}