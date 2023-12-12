var btn = document.getElementById("myBtn");
var modal = document.getElementById("myContent");
var cls = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

cls.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 
