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

let ref_interval;
let isPaused = false; //cuando carga la pag se pone a false
let minutos, segundos;

function startCuentaAtras() {
    if(!isPaused) { //para que no coja los nuevos valores de los inputs cuando esta pausado
        //guardamos los valores de los inputs
        minutos = parseInt(document.getElementById("input_minutos").value);
        segundos = parseInt(document.getElementById("input_segundos").value);
    }

    if(!ref_interval) { //verificamos si es null o undefined (null, undefined y 0 == falso)
        isPaused = false; //cuando le das a START (ya sea iniciando o reanudando el intervalo) se pone a false

        ref_interval = window.setInterval(function() { //hacemos que se actualicen cada segundo
            document.getElementById("cuentaAtrasMinutos").innerText = minutos;
            document.getElementById("cuentaAtrasSegundos").innerText = segundos;
    
            if(!isPaused) {
                if(segundos === 0) {
                    if(minutos !== 0) {
                        minutos -= 1;
                        segundos = 59;
                    } else { //cuando es 00:00 o llega a 00:00 paramos el intervalo
                        window.clearInterval(ref_interval);
                        ref_interval = null; //para evitar intervalos duplicados
                    }
                } else {
                    segundos -= 1;
                } 
            }    
        }, 1000);
    }
}

function stopCuentaAtras() {
    window.clearInterval(ref_interval);
    ref_interval = null;
    //ponemos los valores de los spans a 0
    document.getElementById("cuentaAtrasMinutos").innerText = 0;
    document.getElementById("cuentaAtrasSegundos").innerText = 0;
    minutos = 0;
    segundos = 0;
    isPaused = false; //no está pausado, le hemos dado a STOP
}

function pauseCuentaAtras() {
    isPaused = true;
    window.clearInterval(ref_interval);
    ref_interval = null; //eliminamos el intervalo y su referencia pero mantenemos los valores de las variables minutos y segundos
}



// 5p] Afegeix un rellotge que mostri la hora, minuts i segons actuals i s’actualitzi cada segon.
// a. Afegeix la possibilitat d’establir una alarma que avisi en una hora en concret
// b. Al saltar l’alarma aconsegueix que soni una música i que es pugui aturar 
// c. L’usuari pot escollir entre diferents músiques 
// d. L’usuari pot establir el volum
// e. En qualsevol moment l’usuari pot reproduir i aturar la música de l’alarm
let reloj = setInterval(myTimer, 1000); //ponemos myTimer sin () porque queremos pasar la referencia, sino se ejecutaría inmediatamente y 1 sola vez
let horaAlarma;
let alarmaSonando = false;
let audio = new Audio();

function myTimer() {
    let t = new Date();
    let horaActual = t.getHours().toString().padStart(2, "0") + ":" + t.getMinutes().toString().padStart(2, "0") + ":" + t.getSeconds().toString().padStart(2, "0");
    document.getElementById("reloj").innerHTML = horaActual;
    
    if(horaAlarma) { //si no es null ni undefined (o sea, si se ha hecho el setAlarm)
        if(horaActual == horaAlarma) {
            console.log("COINCIDE ALARMA CON HORA");
            alarmaSonando = true;
            playMusic();
        }
    }
}

function setAlarm() {
    horaAlarma = document.getElementById("alarma").value;
    console.log("Alarma programada a la hora: " + horaAlarma);
    document.getElementById("mensajeConfirmacion").innerHTML = "Se ha programado la alarma con éxito!";
}

function playMusic() {
    audio.src = document.getElementById("musica").value;
    console.log("Iniciando reproducción de la canción...");
    audio.play();
}

function stopAlarm() {
    audio.pause();
    audio.currentTime = 0;
    console.log("ALARMA PARADA");
    document.getElementById("mensajeConfirmacion").innerHTML = "Se ha parado la alarma.";
}

function changeVolume() {
    audio.volume = document.getElementById("vol").value;
}

