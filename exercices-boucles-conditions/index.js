let nombreSecret = 42;
let saisie;

while (saisie !== nombreSecret) {
    
    saisie = parseInt(window.prompt("Ton chiffre ?"));

    if (saisie < nombreSecret) {
        window.alert("Plus haut !");
    } else if (saisie > nombreSecret) {
        window.alert("Plus bas !");
    } else {
        window.alert("Gagné !");
    }
}