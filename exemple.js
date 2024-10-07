console.log("Hola!");

let div = window.document.getElementById("div_text"); //window opcional
div.innerHTML = "Hola <h1>HTML</h1>";
div.innerText += "Hola <h1>HTML</h1>"; //elimina lo anterior, asignas nuevo valor
//alert("Popup feo alert");

//let numero = window.prompt("Indica un numero"); //si es en la propia ventana no hace falta window
let input_numero = document.getElementById("input_numero");
let input_numero2 = document.getElementById("input_numero2");

let resultat = document.getElementById("resultat");

let text = String("hola");

//let sumaValors = function (){ //funciones son objetos, clase Function -> los obj que devuelve son ejecutables
function sumaValors() {
    let num1 = input_numero.value;
    let num2 = input_numero2.value;
    if(isNaN(num1)) {
        num1 = 0;
    }
    if(isNaN(num2)) {
        num2 = 0;
    }
    resultat.innerText = parseFloat(num1) + parseFloat(num2);
}


let audio = document.getElementById("audio");
const input_timer = document.getElementById("timer");
const timer_span = document.getElementById("timer_span");
audio.addEventListener("canplaythrough", initTimeAudio);

function playAudio() {
    audio.src = "DRUMC0.WAV";
    audio.play();
}

function playAudio2() {
    audio.src = "FANFARE1.WAV";
    audio.play();
}

function initTimeAudio(){
    input_timer.max = audio.duration;
    //timer_span.max = audio.duration;
    let ref_interval = window.setInterval(function() {
        input_timer.value = audio.currentTime;
        timer_span.innerText = audio.currentTime;

        if(audio.currentTime == audio.duration) {
            window.clearInterval(ref_interval);
        }
    }, 1000);   
}

function clk_btn_stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

function clk_btn_mute() {
    audio.muted = !audio.muted;
}

function clk_btn_volup() {
    try {
        audio.volume += 0.2; //pujem 20% el volum
    } catch(e) {
        audio.volume = 1;
    }
    document.getElementById("vol").value = audio.volume;
}

function clk_btn_volDown() {
    try {
        audio.volume -= 0.2; 
    } catch(e) {
        audio.volume = 0;
    }
    document.getElementById("vol").value = audio.volume;
}

function change_inp_vol() {
    audio.volume = document.getElementById("vol").value;
}

window.setTimeout( //executa el que t'indiqui passat x temps (1 sola vegada) != setInterval() crida funcio en intervals especifics (+ de 1 vegada)
    function(){
        document.getElementById("timer_span").innerText = audio.duration;
    }, 500 //medio segundo
);



// 1.
// Crea un document HTML amb un div amb id “llista_propietats”. Programa amb JS que es creï una
// llista amb els següents missatges i amb els valors obtinguts dinàmicament:
// a. Valor mínim que pot tenir un número JS
// b. Amplada total de la pantalla
// c. Amplada interna de la finestra
// d. Títol de la web
// e. Hora actual

window.setInterval(mostraLlista, 1000);

function mostraLlista() {
    let data = new Date();
    let llista = document.getElementById("llista_propietats");
    llista.innerHTML = `<ol>
                            <li>Valor minim que pot tenir un número JS: ` + Number.MIN_VALUE + `</li>
                            <li>Amplada total de la pantalla: ` + screen.width + `</li>
                            <li>Amplada interna de la finestra: ` + window.innerWidth + `</li>
                            <li>Títol de la web: ` + document.title + `</li>
                            <li>Hora actual: ` + data.getDate() + `/` + data.getMonth() + `/` + data.getFullYear() + ` - ` 
                            + data.getHours() + `:` + data.getMinutes() + `:` + data.getSeconds() + `</li>
                            </ol>`;
}

