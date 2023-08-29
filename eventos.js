document.addEventListener("click", function(){
    var miDiv = document.getElementById('elDiv');
    miDiv.addEventListener('click', function() {
        alert ("Hola! Soy el div");
    });
});