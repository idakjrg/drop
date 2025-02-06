/**
 * Fil: ./js/js.js
 * Formål: demonstration af drag and drip
 * Inspiration fra @URI: https://www.w3schools.com/HTML/html5_draganddrop.asp
 */

// Hiscore - sådan
let score = 0
hiscore.innerHTML = localStorage.getItem("hiscore") + " Kan du gøre det bedre?"


// tillader drop
function allowDrop(ev) {
    ev.preventDefault()
  }

// drag
function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id)
}

// drop
function drop(ev,besked) {

    // billedet overføres  
    ev.preventDefault()
    var data = ev.dataTransfer.getData("text")
    ev.target.appendChild(document.getElementById(data))

    // feedback til brugeren
    feedback.innerHTML = besked

    // hiscore - ændres
    score += Math.floor(Math.random()*777)
    hiscore.innerHTML = score

    // kan gemmes som session/local storage, her local
    if (typeof(Storage)){
        // hvis browseren understøtter Storage, se: https://caniuse.com/?search=storage
        //localStorage.setItem("hiscore",score)
        try {
            if (score > localStorage.getItem("hiscore")){
                localStorage.setItem("hiscore", score)
            }
        }
        catch {
            localStorage.setItem("hiscore", score)
        }
    }
    else {
        console.log("Denne browser tillader ikke Storage")
    }

    // PÅ EGEN HÅND
    // videre: lyd - kald en funktion, der afspiller en passende lyd, fx sådan:
    // spilVideo('minLyd.mp3')
    // videre: video - kald en funktion, der viser en video
    // videre: add/remove class - animer noget
    // "Find selv på flere ..."
}

// viser gemt score fra sidste spil