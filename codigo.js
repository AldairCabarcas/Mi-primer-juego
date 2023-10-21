const sectionSelectAttack = document.getElementById("ataques")
const sectionReset = document.getElementById("reset")
const seleccionarPersonajeJugador = document.getElementById("section_select-player")
const reinicar = document.getElementById("section_btn-reset")

const botonAgua = document.getElementById("section_button-water")
const botonFuego = document.getElementById("section_button-fire")
const botonRayo = document.getElementById("section_button-ray")
const botonTierra = document.getElementById("section_button-land")
const botonAire = document.getElementById("section_button-air")

const sectionChoosePlayer = document.getElementById("select_player")
const personajeSeleccionado = document.getElementById("player-selected")

const personajeEnemigoSeleccionado = document.getElementById("player-enemy-select")

const vidaJugador = document.getElementById("life-player")
const vidaEnemigo = document.getElementById("life-enemy")

const sectionMensaje = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataque-jugador")
const ataquesDelEnemigo = document.getElementById("ataque-enemigo")
const mostrarPersojanes = document.getElementById('contenedor-personajes')

let personajeJugador
let personajeEnemigo

let inputDeidara 
let inputPain 
let inputKonan 
let inputItachi
let inputHidan

let akatsukis = []
let personajeElegir
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let resultado

let victorias = 0
let derrotas = 0

class Akatsuki{
    constructor(nombre, foto, vida, voces){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.voces = voces
        this.ataques = []
    }
}

let deidara = new Akatsuki('Deidara', './assets/image/deidara.png', 5, "audio/deidara_voice.mp3")
let pain = new Akatsuki('Pain', './assets/image/pain.png', 5, "audio/pain_voice.mp3")
let konan = new Akatsuki('Konan', './assets/image/konan.png', 5, "audio/konan_voice.mp3")
let itachi = new Akatsuki('Itachi', './assets/image/itachi.png', 5, "audio/itachi_voice.mp3")
let hidan = new Akatsuki('Hidan', './assets/image/hidan.png', 5, "audio/hidan_voice.mp3")

deidara.ataques.push(
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
)
pain.ataques.push(
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
)
konan.ataques.push(
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
)
itachi.ataques.push(
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
)
hidan.ataques.push(
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
    { nombre: "destrucción de la tierra", id: 'section_button-land'},
)

akatsukis.push(deidara,pain,konan,itachi,hidan)

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
    
    sectionSelectAttack.style.display = 'none'

    akatsukis.forEach((Akatsuki) => {
        personajeElegir = `
        <input type="radio" name="personaje" id=${Akatsuki.nombre} onclick= />
			<label class="personaje" for=${Akatsuki.nombre}>
				<img src=${Akatsuki.foto} alt=${Akatsuki.nombre}>
				<p>${Akatsuki.nombre}</p>
			</label>
        `
        mostrarPersojanes.innerHTML += personajeElegir

         inputDeidara = document.getElementById("Deidara")
         inputPain = document.getElementById("Pain")
         inputKonan = document.getElementById("Konan")
         inputItachi = document.getElementById("Itachi")
         inputHidan = document.getElementById("Hidan")

    })
    
    sectionReset.style.display = "none"
    
    seleccionarPersonajeJugador.addEventListener("click", seleccionarPersonaje)

    reinicar.addEventListener("click", reiniciarJuego)

    function habilitarBtn() {

    botonAgua.addEventListener("click", ataqueAgua)
        botonAgua.disabled = false
    botonFuego.addEventListener("click", ataqueFuego)
        botonFuego.disabled = false
    botonRayo.addEventListener("click", ataqueRayo)
        botonRayo.disabled = false
    botonTierra.addEventListener("click", ataqueTierra)
        botonTierra.disabled = false
    botonAire.addEventListener("click", ataqueAire)
        botonAire.disabled = false
    }

    function seleccionarPersonaje() {
        
        sectionChoosePlayer.style.display = "none"
        sectionSelectAttack.style.display = "flex"

        let start = 1
        
        if (inputDeidara.checked) {
            personajeSeleccionado.innerHTML = inputDeidara.id
            personajeJugador = "Deidara"
        } else if (inputPain.checked) {
            personajeSeleccionado.innerHTML = inputPain.id
            personajeJugador = "Pain"
        } else if (inputKonan.checked) {
            personajeSeleccionado.innerHTML = inputKonan.id
            personajeJugador = "Konan"
        } else if(inputItachi.checked) {
            personajeSeleccionado.innerHTML = inputItachi.id
            personajeJugador = "Itachi"
        } else if (inputHidan.checked) {
            personajeSeleccionado.innerHTML = inputHidan.id
        } else {
        
            alert("Debes seleccionar un personaje.")
            start = 0
            reiniciarJuego()
        }

        if (start == 1){
        seleccionarPersonajeEnemigo()
        }

        if (start == 0){
            
        }
    }

    function seleccionarPersonajeEnemigo() {

        let personajeAleatorio = aleatoria(1,5)
        
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

        let nuevoAtaqueJugador = document.createElement('p')
        let nuevoAtaqueEnemigo = document.createElement('p')


        nuevoAtaqueJugador.innerHTML =  personajeJugador +  ', atacó con ' + ataqueJugador 
        nuevoAtaqueEnemigo.innerHTML = personajeEnemigo + ', atacó con ' + ataqueEnemigo 

        ataquesDelJugador.appendChild(nuevoAtaqueJugador)
        ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)

        revisarVidas()
    }

    function crearMensajeFinal(resultadoFinal){
        
        sectionReset.style.display = "block"
        
        sectionMensaje.innerHTML = resultadoFinal

        // desactivar botones de ataque al quedarse sin vida.
        
        botonAgua.disabled = true
        botonFuego.disabled = true
        botonRayo.disabled = true
        botonTierra.disabled = true
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
