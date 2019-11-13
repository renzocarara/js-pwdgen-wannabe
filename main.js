// recupero gli input dall 'utente
var nome = prompt("Ciao, inserisci il tuo nome:", "Mario");
var cognome = prompt("grazie " + nome + ", ora inserisci il tuo cognome:", "Rossi");
var colore = prompt("e infine inserisci il tuo colore preferito:", "giallo");

// costruisco la password con gli input dell'utente
var password = nome + cognome + colore + "19";

// visualizzo la password sulla pagina HTML
document.getElementById("pwd").innerHTML = password;