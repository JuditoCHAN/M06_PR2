// 3. 2p] Crea un document HTML amb un div amb id “taula_propietats”. Programa amb JS que es creï 
// una taula formada per dos columnes. En la primera columna has de mostrar els texts indicats a 
// continuació, i en la segona columna els valors corresponents obtinguts dinàmicament amb JS:

document.getElementById("taula_propietats").innerHTML = `<table>
<tr>
<td>a. Valor máxim que pot tenir un número JS</td>
<td>` + Number.MAX_VALUE + `</td>
</tr>
<tr>
<td>b. Altura total de la pantalla</td>
<td> `+ screen.height + `</td>
</tr>
<tr>
<td>c. Altura interna de la finestra</td>
<td> `+ window.innerHeight + `</td>
</tr>
<tr>
<td>c. URL de la web</td>
<td> `+ location.href + `</td>
</tr>
`


// 4. 3p] Afegeix al document HTML un compte enrere inicialment a 00minuts i 00segons
// a. Permet que l’usuari pugui establir quants minuts i segons vol que duri.
// b. Permet que l’usuari inicií el compte enrere i el pugui aturar (restablint-lo a 0) i pausar 
// c. Quan el compte enrere arribi a 0, avisa amb una música i permet que es pugui aturar.
let stopTimer = false; //cuando carga la pag se pone a false
let ref_interval;

function startCuentaAtras() {
    //guardamos los valores de los inputs
    let minutos = parseInt(document.getElementById("input_minutos").value);
    let segundos = parseInt(document.getElementById("input_segundos").value);

    stopTimer = false; //cuando le das a START se pone a false
    
    ref_interval = window.setInterval(function() { //hacemos que se actualicen cada segundo
        document.getElementById("cuentaAtrasMinutos").innerText = minutos;
        document.getElementById("cuentaAtrasSegundos").innerText = segundos;

        if(!stopTimer) {
            if(segundos === 0) {
                if(minutos !== 0) {
                    minutos -= 1;
                    segundos = 59;
                } else { //cuando es 00:00 o llega a 00:00 paramos el intervalo
                    window.clearInterval(ref_interval);
                }
            } else {
                segundos -= 1;
            } 
        } 
        // else { //stopTimer == true
        //     window.clearInterval(ref_interval);
        // }

    }, 1000);

}

function stopCuentaAtras() {
    //ponemos los valores de los spans a 0
    // stopTimer = true;
    window.clearInterval(ref_interval);
    document.getElementById("cuentaAtrasMinutos").innerText = 0;
    document.getElementById("cuentaAtrasSegundos").innerText = 0;
}

function pauseCuentaAtras() {
    // stopTimer = true;
    window.clearInterval(ref_interval);
}
