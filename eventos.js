document.addEventListener("click", function(){
    var miDiv = document.getElementById('elDiv');
    var boton =document.getElementById('boton')
    miDiv.addEventListener('click', function(event) {
        event.stopPropagation();
        alert ("Hola! Soy el div");
    });
    boton.addEventListener('click', function(event) {
        event.stopPropagation();
        alert ("Hola! ");
    });
});