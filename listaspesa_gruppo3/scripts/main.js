var nomeProdotto;
var quantita;
var prezzo;
var list;
var priorita;
var listaProdotti = [];


function insertData(){
     nomeProdotto = prompt('Inserisci il nome prodotto');
     quantita = prompt('Inserisci la quantita');
     prezzo = prompt('inserisci il prezzo');
     priorita = 0;
     listaProdotti[0] = {
          "nomeProdotto": nomeProdotto, 
          "quantita": quantita,
          "prezzo": prezzo,
          "priorita":priorita
     };
     
     for (var i=0; i<listaProdotti.length; i++){
          localStorage.setItem("nomeProdotto"+(i+1).toString(),listaProdotti[i].nomeProdotto);
          localStorage.setItem('quantita'+(i+1).toString(),listaProdotti[i].quantita);
          localStorage.setItem('prezzo'+(i+1).toString(),listaProdotti[i].prezzo);
          localStorage.setItem('priorita'+(i+1).toString(),listaProdotti[i].priorita);
     }

    /* localStorage.setItem('nomeProdotto',listaProdotti.nomeProdotto);
     localStorage.setItem('quantita',listaProdotti.quantita);
     localStorage.setItem('prezzo',listaProdotti.prezzo);
     localStorage.setItem('priorita',listaProdotti.priorita);*/
     viewData();
}
function viewData(){
     list = document.getElementById('list');
     list.innerHTML = 
     "<ul>"+
          "<li>Nome:"+ nomeProdotto+"</li>"+
          "<li>Quantita:"+quantita+ "</li>"+
          "<li>Prezzo:"+prezzo+ "</li>"+
          '<input type="button" value="elimina">';
     "</ul>";
}
function deleteAll(){
     localStorage.clear();
     list = document.getElementById('list');
     list.innerHTML = "";
}



