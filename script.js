var playicon = document.getElementById("play");
var song = document.getElementById("mysong");

playicon.onclick = function () {
    if (song.paused) {
        song.play();
        playicon.classList.remove("fa-play");
        playicon.classList.add("fa-pause");
    } else {
        song.pause();
        playicon.classList.remove("fa-pause");
        if (playicon.classList != ("fa-play")) {
            playicon.classList.add("fa-play");
        }
    }
}