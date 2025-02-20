# ex-js-simon-says-dom

## Analizzare il materiale fornito

- File HTML :
 - <!-- <div id="countdown" class="fs-1 fw-bolder"></div> --> sezione del conto alla rovescia
 - <!-- <p id="instructions">Memorizza i numeri entro il tempo limite!</p> --> isctruzioni utente
 - <!-- <ul id="numbers-list" class="d-flex gap-5 list-unstyled"></ul> --> Lista dei numeri da visualizzare
 - <!-- <form id="answers-form" class="d-none"> --> Form con i 5 input type number e il pulsante conferma
 - <!-- <p class="text-danger text-center" id="message"></p> --> sezzione da far apparire come messaggio (BONUS)
 - come sugerito creare 2 file js, uno per la pagina e uno per le funzioni

## Analizzare la tracia dell'esercizio
1 Visualizzare in pagina 5 numeri casuali.
    - generare i 5 numeri casuali e inserirli in una lista (i numero dovrenno essere diversi e in un range tra 1 e 50 estremi inclusi)
    - creare l'oggetto <li></li> con un numero casuale all'interno X5
    - appenderlo alla lista <ul></ul> presente nell'html fornito

2 Da lì parte un timer di 30 secondi. 
    - settare un conto alla rovescia di 30 secondi che parte dopo l'inserimento dei numeri in pagina
    - fallo apparire in pagina

3 Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
    - applicare la classe d-none alla lista e disabilitarla nel form
    - trovare modo per far capire all'utente che il range dei numeri è tra 1 e 50
    - raccogliere ogni inmput dell'utente e metterlo in una lista

4 Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    - effettuare il confronto delle 2 liste e restituire quali e quanti numeri sono uguali
    - trovare un modo carino per far dire alla pagine quanti e quali numero l'utente si è ricordato

## BONUS

- controllo sull'imput lato js per segnara un'errata digitazione o un numero doppio
- se l'utente ha fatto un errore segnaliamolo nel form