var user = prompt('¿Cuál es tu nombre'); // recibe info del usuario
document.getElementById("name").innerHTML = "Bienvenid@ " + user; //Agrega o imprime en el HTML
//document.write("Bienvenido " + user);
var play = confirm('¿Quieres jugar?'); // da opcion si o no para que el usuario elija
if(play) { // si cumple la condicion hara lo siguiente
    var questionOne = prompt('¿Quién ganó el premio nobel de literatura en 2015?\n 1 ) Bob Dylan\n 2 ) Svetlana Aleksiévich\n 3 ) Haruki Murakami');
    var questionTwo = prompt('¿A qué se dedica stephen Hawking?\n 1 ) Música\n 2 ) Fútbol\n 3 ) Física');
    var questionThree = prompt('¿Cuál es la capital de Francia?\n 1 ) París\n 2 ) CDMX\n 3 ) Londres');
    if(questionOne == 2){
        document.getElementById("correctOne").innerHTML = "Pregunta 1 ¡¡¡ACERTASTE :) fue Svetlana Aleksiévich!!!";
    } else {
        document.getElementById("incorrectOne").innerHTML = "Pregunta 1 ¡¡¡ERROR :( fue Svetlana Aleksiévich!!!";
            }
    if(questionTwo == 3){
        document.getElementById("correctTwo").innerHTML = "Pregunta 2 ¡¡¡ACERTASTE :) Lo suyo era la Física";
    } else {
        document.getElementById("incorrectTwo").innerHTML = "Pregunta 2 ¡¡¡ERROR :( Lo suyo era la Física";
            }
    if(questionThree == 1){
        document.getElementById("correctThree").innerHTML = "Pregunta 3 ¡¡¡ACERTASTE :) su capital es París, mejor conocida como la capital del AMOR!!!";
    } else {
        document.getElementById("incorrectThree").innerHTML = "Pregunta 3 ¡¡¡ERROR :( Es París";
            }
} else { // si no cumple la condicion hara lo siguiente
    document.getElementById("false").innerHTML = ("¡¡¡Jugaremos para la proxima!!!");
    document.getElementById("tabla").style.visibility = "hidden";
}
