// console.log("Welcome to spotify");

// initialize the variable

let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

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

masterPlay.addEventListener('click'), ()=>{
    if(audioElement.pause || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-circle-pause")
    }
});



// listen to events
myProgressBar.addEventListener("timeupdate", ()=>{
    console.log("Time Update successfuly")
    // update seekbar
})

