// console.log("Welcome to spotify");

// initialize the variable

let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gift = document.getElementById("gif");
let songsItem = Array.from(document.getElementsByClassName("songItem"))

let songs = [
    { songName: "Salam-e-Ishq",   filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    { songName: "meinu kehndi milo na",   filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/8.mp3",coverPath: "covers/8.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/9.mp3",coverPath: "covers/9.jpg"},
    { songName: "Salam-e-Ishq",   filePath: "songs/10.mp3",coverPath: "covers/10.jpg"}

]

songsItem.forEach((element, i)=>{
    // console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

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
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () =>{
    
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-play-circle");

    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-circle-pause")
        audioElement.src = `songs/${songindex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-circle-pause"); 

    })
    
})

document.getElementById("next"). addEventListener("click", () =>{
    if(songindex >= 9){
        songindex =0
    } else{
        songindex += 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-circle-pause"); 
})


document.getElementById("previous"). addEventListener("click", () =>{
    if(songindex<=0){
        songindex =0
    } else{
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-circle-pause"); 
})

