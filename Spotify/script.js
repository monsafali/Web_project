// console.log("Welcome to spotify");

// initialize the variable

let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gift = document.getElementById("gif");

let songs = [
    { songName: "Salam-e-Ishq",   filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/1.mp3",coverPath: "covers/1.jpg"}

]


// audioElement.play();

// handle paly/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-circle-pause");
        gift.style.opacity = 1
    }else{
        audioElement.pause();
        masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-circle-pause");
        gift.style.opacity = 0
    }
}) 




// listen to events
audioElement.addEventListener("timeupdate", ()=>{
   // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value * audioElement
})

