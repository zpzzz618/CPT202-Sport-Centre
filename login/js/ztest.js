// script.js  
document.getElementById('manualButton').addEventListener('click', function() {  
    var modal = document.getElementById('manualModal');  
    modal.style.display = "block";  
});  
  
window.onclick = function(event) {  
    if (event.target == modal) {  
        modal.style.display = "none";  
    }  
}  
  
var span = document.getElementsByClassName("close")[0];  
span.onclick = function() {   
    var modal = document.getElementById('manualModal');  
    modal.style.display = "none";  
}