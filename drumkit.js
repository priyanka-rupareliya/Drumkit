let data = {
    A: {
        name: "Arjun",
        sound: "sound/arjun.mp3",
    },
    B: {
        name: "Balram",
        sound: "sound/balram.mp3",
    },
    C: {
        name: "Chanakya",
        sound: "sound/chanakya.mp3",
    },
    D: {
        name: "Dhruva",
        sound: "sound/dhruva.mp3",
    },
    E: {
        name: "Ekalavya",
        sound: "sound/ekalavya.mp3",
    },
    F: {
        name: "Four-Vedas",
        sound: "sound/fourvedas.mp3",
    },
    G: {
        name: "Gyatri-Mata",
        sound: "sound/gyatrimata.mp3",
    },
    H: {
        name: "Hanuman",
        sound: "sound/hanuman.mp3",
    },
    I: {
        name: "Indra",
        sound: "sound/indra.mp3",
    },
    J: {
        name: "Jatayu",
        sound: "sound/jatayu.mp3",
    },
    K: {
        name: "Krishna",
        sound: "sound/krishna.mp3",
    },
    L: {
        name: "Lav-Kusha",
        sound: "sound/lavkusha.mp3",
    },
    M: {
        name: "Markandeya",
        sound: "sound/markandeya.mp3",
    },
    N: {
        name: "Narada",
        sound: "sound/narada.mp3",
    },
    O: {
        name: "Omkara",
        sound: "sound/omkara.mp3",
    },
    P: {
        name: "Prahlada",
        sound: "sound/prahlada.mp3",
    },
    Q: {
        name: "Queen-Gandhari",
        sound: "sound/queengandhari.mp3",
    },
    R: {
        name: "Rama",
        sound: "sound/rama.mp3",
    },
    S: {
        name: "Surya",
        sound: "sound/surya.mp3",
    },
    T: {
        name: "Tulasi",
        sound: "sound/tulasi.mp3",
    },
    U: {
        name: "Uddhava",
        sound: "sound/uddhava.mp3",
    },
    V: {
        name: "Vamanavatar",
        sound: "sound/vamanavatar.mp3",
    },
    W: {
        name: "Water-Ganga",
        sound: "sound/waterganga.mp3",
    },
    X: {
        name: "Xeerabdi-Dwadasi",
        sound: "sound/xeerabdidwadasi.mp3",
    },
    Y: {
        name: "Yashoda",
        sound: "sound/yashoda.mp3",
    },
    Z: {
        name: "Zambavantha",
        sound: "sound/zambavantha.mp3",
    },
};

let drumkit = document.getElementById("drumkit");
let playingSound = null; // To track the currently playing sound
let previousActive = null; // To track the currently playing sound


function card() {
    for (let key in data) {
        let drumElement = document.createElement("div");
        drumElement.classList.add("element", data[key].name);
        drumkit.appendChild(drumElement);

        let h2 = document.createElement("h2");
        h2.textContent = key;
        drumElement.appendChild(h2);

        let span = document.createElement("span");
        span.textContent = data[key].name;
        drumElement.appendChild(span);


        drumElement.addEventListener("click", function (event) {
            let key = event.currentTarget.querySelector("h2").textContent;
            playDrum(key.toUpperCase())
        });
    }

}
function playDrum(key) {
    if (data.hasOwnProperty(key)) {
        let drumElement = document.querySelector(`.element.${data[key].name}`);
        if (previousActive) {
            previousActive.classList.remove("active");
        }
        drumElement.classList.add("active");


        if (playingSound) {
            playingSound.pause();
            playingSound.currentTime = 0;
        }

        //audio

        let audio = new Audio();
        audio.src = data[key].sound;
        audio.play();
        playingSound = audio;
        previousActive = drumElement;
    }
}

document.addEventListener("keydown", function (event) {
    playDrum(event.key.toUpperCase());
});
card();