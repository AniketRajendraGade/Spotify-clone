
let songIndex = 0;
let audioElement = new Audio(`songs/${1}.mp3`);
let masterplay = document.getElementById('masterplay');
let progresbar = document.getElementById('progresbar');
let gif = document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname')
let item = Array.from(document.getElementsByClassName('item'));


let songs = [
    
    {songname: "Baby-justin bieber", filePath:"songs/1.mp3", coverPath:"photo/baby.jpg"},
    {songname: "Closer-The Chainsmokers", filePath:"songs/2.mp3", coverPath:"photo/closer.jpg"},
    {songname: "Despacito-Luis Fonsi", filePath:"songs/3.mp3", coverPath:"photo/despa.jpg"},
    {songname: "Faded-Alan Walker", filePath:"songs/4.mp3", coverPath:"photo/faded.jpg"},
    {songname: "Maan Meri Jaan-king", filePath:"songs/5.mp3", coverPath:"photo/mannmere.jpg"},
    {songname: "Maiya-Menu ", filePath:"songs/6.mp3", coverPath:"photo/maiya.jpg"},
    {songname: "Mere Bina", filePath:"songs/7.mp3", coverPath:"photo/merebi.jpg"},
    {songname: "Raataan Lambiyan", filePath:"songs/8.mp3", coverPath:"photo/ratalam.jpg"},
    {songname: "Wavin-Flag-kaan", filePath:"songs/9.mp3", coverPath:"photo/Wavin-flag.jpg"},
    {songname: "Yaari", filePath:"songs/10.mp3", coverPath:"photo/yari.jpg"},
    {songname: "Zara sa-KK", filePath:"songs/11.mp3", coverPath:"photo/zara.jpg"},
    {songname: "Apna-Bana-Le-arjit singh", filePath:"songs/12.mp3", coverPath:"photo/apna.jpg"},
    
]
item.forEach((element,i)=>{
    
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
     }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    } 
})

//listen to event
audioElement.addEventListener('timeupdate',()=>{
    
    progres= parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    progresbar.value = progres;
})
progresbar.addEventListener('change',()=>{
    audioElement.currentTime = progresbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    }) 

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity =1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})





document.getElementById('next').addEventListener('click', ()=>{
    
    if(songIndex >= 11){
        songIndex = 0;
    }
    else{
        songIndex = (songIndex + 1);
    }

    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 11;
    }
    else{
        songIndex = ( songIndex - 1);
    }

    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            songIndex = parseInt(e.target.id);
            songitemplay.classList.remove('fa-play-circle');
            songitemplay.classList.add('fa-pause-circle');
            gif.style.opacity =1;
         }
        else{
            audioElement.pause();
            songIndex = parseInt(e.target.id);
            songitemplay.classList.remove('fa-pause-circle');
            songitemplay.classList.add('fa-play-circle');
            gif.style.opacity =0;
        } 
    })
})
        



    





