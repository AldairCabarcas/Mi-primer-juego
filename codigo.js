let personajeJugador
let personajeEnemigo

let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let resultado

let victorias = 0
let derrotas = 0
// Voces de personajes seleccionado
let deidaraVoice = new Audio();
deidaraVoice.src = "audio/deidara_voice.mp3"

let painVoice = new Audio();
painVoice.src = "audio/pain_voice.mp3"

let konanVoice = new Audio();
konanVoice.src = "audio/konan_voice.mp3"

let itachiVoice = new Audio();
itachiVoice.src = "audio/itachi_voice.mp3"

let hidanVoice = new Audio();
hidanVoice.src = "audio/hidan_voice.mp3"

function iniciarJuego() {
    let sectionSelectAttack = document.getElementById("ataques")
    sectionSelectAttack.style.display = "none"

    let sectionReset = document.getElementById("reset")
        sectionReset.style.display = "none"

    let seleccionarPersonajeJugador = document.getElementById("section_select-player")
    seleccionarPersonajeJugador.addEventListener("click", seleccionarPersonaje)

    let reinicar = document.getElementById("section_btn-reset")
    reinicar.addEventListener("click", reiniciarJuego)

    function habilitarBtn() {

    let botonAgua = document.getElementById("section_button-water")
    botonAgua.addEventListener("click", ataqueAgua)
        botonAgua.disabled = false

    let botonFuego = document.getElementById("section_button-fire")
    botonFuego.addEventListener("click", ataqueFuego)
        botonFuego.disabled = false

    let botonRayo = document.getElementById("section_button-ray")
    botonRayo.addEventListener("click", ataqueRayo)
        botonRayo.disabled = false

    botonTierra = document.getElementById("section_button-land")
    botonTierra.addEventListener("click", ataqueTierra)
        botonTierra.disabled = false

    let botonAire = document.getElementById("section_button-air")
    botonAire.addEventListener("click", ataqueAire)
        botonAire.disabled = false
    }

    function seleccionarPersonaje() {
        let sectionChoosePlayer = document.getElementById("select_player")
        sectionChoosePlayer.style.display = "none"

        let sectionSelectAttack = document.getElementById("ataques")
        sectionSelectAttack.style.display = "flex"

        let start = 1
        let inputDeidara = document.getElementById("deidara")
        inputDeidara.disabled = true
        let inputPain = document.getElementById("pain")
        inputPain.disabled = true
        let inputKonan = document.getElementById("konan")
        inputKonan.disabled = true
        let inputItachi = document.getElementById("itachi")
        inputItachi.disabled = true
        let inputHidan = document.getElementById("hidan")
        inputHidan.disabled = true
        let personajeSeleccionado = document.getElementById("player-selected")

        if (inputDeidara.checked) {
            personajeSeleccionado.innerHTML = "Deidara"
            personajeJugador = "Deidara"
        } else if (inputPain.checked) {
            personajeSeleccionado.innerHTML = "Pain"
            personajeJugador = "Pain"
        } else if (inputKonan.checked) {
            personajeSeleccionado.innerHTML = "Konan"
            personajeJugador = "Konan"
        } else if(inputItachi.checked) {
            personajeSeleccionado.innerHTML = "Itachi"
            personajeJugador = "Itachi"
        } else if (inputHidan.checked) {
            personajeSeleccionado.innerHTML = "Hidan"
            personajeJugador = "Hidan"
        } else {
        
            alert("Debes seleccionar un personaje.")
            start = 0
            reiniciarJuego()
        }

        if (start == 1) {
        seleccionarPersonajeEnemigo ()
        }

        if (start == 0){
            
        }
    }

    function seleccionarPersonajeEnemigo() {

        let personajeAleatorio = aleatoria(1,5)
        let personajeEnemigoSeleccionado = document.getElementById("player-enemy-select")

        if(personajeAleatorio == 1) {
            personajeEnemigoSeleccionado.innerHTML = "Deidara"
            personajeEnemigo = "Deidara"
        } else if (personajeAleatorio == 2) {
            personajeEnemigoSeleccionado.innerHTML = "Pain"
            personajeEnemigo = "Pain"
        } else if (personajeAleatorio == 3) {
            personajeEnemigoSeleccionado.innerHTML = "Konan"
            personajeEnemigo = "Konan"
        } else if (personajeAleatorio == 4) {
            personajeEnemigoSeleccionado.innerHTML = "Itachi"
            personajeEnemigo = "Itachi"
        } else {
            personajeEnemigoSeleccionado.innerHTML = "Hidan"
            personajeEnemigo = "Hidan"
        } 

        habilitarBtn()
    }

    function ataqueAgua() {
        ataqueJugador = "jutsu pistola de agua"
        ataqueAleatorioEnemigo()
    }
    function ataqueFuego(){
        ataqueJugador = "jutsu gran bola de fuego"
        ataqueAleatorioEnemigo()
    }
    function ataqueRayo(){
        ataqueJugador = "Chidori"
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra(){
        ataqueJugador = "Destrucción de la tierra"
        ataqueAleatorioEnemigo()
    }
    function ataqueAire(){
        ataqueJugador = "Rassengan"
        ataqueAleatorioEnemigo()
    }
   
    function ataqueAleatorioEnemigo() {
        let  ataqueAleatorio = aleatoria (1,5)
        
        if (ataqueAleatorio == 1) {
            ataqueEnemigo = "jutsu pistola de agua"
        } else if (ataqueAleatorio == 2) {
            ataqueEnemigo = "jutsu gran bola de fuego"
        } else if (ataqueAleatorio == 3) {
            ataqueEnemigo = "Chidori"
        } else if (ataqueAleatorio == 4) {
            ataqueEnemigo = "Destrucción de la tierra"
        } else {
            ataqueEnemigo = "Rassengan"
        }
        combate();
        crearMensaje();

    }

    function combate (){
        let vidaJugador = document.getElementById("life-player")
        let vidaEnemigo = document.getElementById("life-enemy")

        if (ataqueJugador == ataqueEnemigo){
            resultado = "¡EMPATE!"
        } else if (ataqueJugador == "jutsu pistola de agua" && (ataqueEnemigo == "jutsu gran bola de fuego" || ataqueEnemigo == "Rassengan")){
            resultado = "¡GANASTE!"
            vidasEnemigo--
            vidaEnemigo.innerHTML = vidasEnemigo
        }  else if (ataqueJugador == "jutsu gran bola de fuego" && (ataqueEnemigo == "Rassengan" || ataqueEnemigo == "Chidori")){
            resultado = "¡GANASTE!"
            vidasEnemigo--
            vidaEnemigo.innerHTML = vidasEnemigo
        }  else if (ataqueJugador == "Rassengan" && (ataqueEnemigo == "Chidori" || ataqueEnemigo == "Destrucción de la tierra")){
            resultado = "¡GANASTE!"
            vidasEnemigo--
            vidaEnemigo.innerHTML = vidasEnemigo
        }  else if (ataqueJugador == "Chidori" && (ataqueEnemigo == "Destrucción de la tierra" || ataqueEnemigo == "jutsu pistola de agua")){
            resultado = "¡GANASTE!"
            vidasEnemigo--
            vidaEnemigo.innerHTML = vidasEnemigo
        }  else if (ataqueJugador == "Destrucción de la tierra" && (ataqueEnemigo == "jutsu pistola de agua" || ataqueEnemigo == "jutsu gran bola de fuego")){
            resultado = "¡GANASTE!"
            vidasEnemigo--
            vidaEnemigo.innerHTML = vidasEnemigo
        } else {
            resultado = "¡PERDISTE!"
                vidasJugador--
                vidaJugador.innerHTML = vidasJugador

        }        
    }

    function revisarVidas(){
        if(vidasEnemigo == 0){
        crearMensajeFinal("¡You win! 🏆")
        } else if (vidasJugador == 0){
            crearMensajeFinal("You lost. 😢")
        }
    } 

    function crearMensaje(){
        let sectionMensaje = document.getElementById("resultado")
        let ataquesDelJugador = document.getElementById("ataque-jugador")
        let ataquesDelEnemigo = document.getElementById("ataque-enemigo")

        let nuevoAtaqueJugador = document.createElement('p')
        let nuevoAtaqueEnemigo = document.createElement('p')


        nuevoAtaqueJugador.innerHTML =  personajeJugador +  ', atacó con ' + ataqueJugador 
        nuevoAtaqueEnemigo.innerHTML = personajeEnemigo + ', atacó con ' + ataqueEnemigo 

        ataquesDelJugador.appendChild(nuevoAtaqueJugador)
        ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)

        revisarVidas()
    }

    function crearMensajeFinal(resultadoFinal){
        let sectionReset = document.getElementById("reset")
        sectionReset.style.display = "block"

        let sectionMensaje = document.getElementById("resultado")

        sectionMensaje.innerHTML = resultadoFinal


        // desactivar botones de ataque al quedarse sin vida.

        let botonAgua = document.getElementById("section_button-water")
        botonAgua.disabled = true

        let botonFuego = document.getElementById("section_button-fire")
            botonFuego.disabled = true

        let botonRayo = document.getElementById("section_button-ray")
            botonRayo.disabled = true

        botonTierra = document.getElementById("section_button-land")
            botonTierra.disabled = true

        let botonAire = document.getElementById("section_button-air")
            botonAire.disabled = true

    }

    function reiniciarJuego(){
        location.reload()
    }
    function aleatoria(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}
window.addEventListener("load", iniciarJuego)
