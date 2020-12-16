// variabili definite dall utente
var mailUtente = prompt('Inserisca la mail.');
// dichiarazione variabili
var messaggio = document.getElementById('messaggio');
var dado = document.getElementById('dado');
var risultato = document.getElementById('risultato');
var vittoria_sconfitta = document.getElementById('vittoria_sconfitta');
var emailTrovata = false; //puo essere anche solo dichiarata ma non popolata ed è automaticamente false: var = emailTrovata;
// dichiarazione array
var mailAmmesse =
['bellazio@gmail.com','ciaociccio@gmail.com','ninog@gmail.com','boolean@gmail.com'];
// creo ciclo for per controllo mail e creo condizioni
for(var i = 0; i <= mailAmmesse.length; i++) {
  if(mailUtente === mailAmmesse[i]){
    emailTrovata = true;
  }
}
// trovata la mail esco dal ciclo e proseguo con le condizioni gioco
if (emailTrovata === true) {
  // inserisco in html gli elementi per proseguire
  messaggio.innerText = 'Email verificata.Clicca sul pulsante per giocare a dadi.'
  dado.innerHTML = 'Tira il dado';
  // creo funzione tiradado che si attiva al clik sul bottone
  dado.addEventListener('click', function(){
    // nella funzione creo variabili di gioco
    var computerNumber = Math.floor(Math.random() * 6) +1;  //numero randomico per computer
    var userNumber = Math.floor(Math.random() * 6) +1;  //numero randomico per utente
    if(computerNumber > userNumber){
      risultato.innerText = 'Numero computer=' +" "+ computerNumber +" "+ 'Tuo numero=' +" "+ userNumber;
      vittoria_sconfitta.innerText = 'Peccato...hai perso!'
    }else if(computerNumber < userNumber){
      risultato.innerText = 'Numero computer=' +" "+ computerNumber +" "+ 'Tuo numero=' +" "+ userNumber;
      vittoria_sconfitta.innerText = 'Bravo...hai vinto!'
    }else{
      risultato.innerText = 'Numero computer=' +" "+ computerNumber +" "+ 'Tuo numero=' +" "+ userNumber;
      vittoria_sconfitta.innerText = 'Pareggio!'
    }
  }
  );
}else{
  alert('Email non valida!');
}
