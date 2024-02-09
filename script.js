
let currentSong= new Audio();



function secondsToMinutesSeconds(seconds) {
    if(isNaN(seconds) || seconds<0){
        return " ";
    }
    const minutes=Math.floor(seconds/60);
    const remainingSeconds = Math.floor(seconds%60);
    const formattedMinutes = String(minutes).padStart(2,'0');
    const formattedSeconds = String(remainingSeconds).padStart(2,'0');
    return `${formattedMinutes}:${formattedSeconds}`;
}



function playing(track){
   
    currentSong.src="songs/"+track+".mp3";

    currentSong.play();
    play.src="pause.svg"
    document.querySelector(".songName").innerHTML= track
    document.querySelector(".songTime").innerHTML= "00:00/00:00"

}


async function main(){
Array.from(document.querySelector(".card-container").getElementsByClassName("c1")).forEach(e=>{
    e.addEventListener("click",elem=>{

        console.log(e.querySelector("p1").innerHTML);
        playing(e.querySelector("p1").innerHTML)
    })
    
})

play.addEventListener("click",()=>{
    if(currentSong.paused){
        currentSong.play();
        play.src="pause.svg"
    }
    else{
        currentSong.pause();
        play.src="play.svg"
    }
})


currentSong.addEventListener("timeupdate",()=>{
    document.querySelector(".songTime").innerHTML=`${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
    document.querySelector(".circle").style.left=( currentSong.currentTime / currentSong.duration)*100 +"%";
})

document.querySelector(".seekbar").addEventListener("click", e=>{
    let per = (e.offsetX/e.target.getBoundingClientRect().width)*100;
    document.querySelector(".circle").style.left = per +"%";
    currentSong.currentTime = ((currentSong.duration)*per)/100;
})

document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector(".left").style.left = "0"
})
document.querySelector(".hamClose").addEventListener("click", ()=>{
    document.querySelector(".left").style.left = "-100%"
})
previous.addEventListener("click",()=>{
    currentSong.currentTime = "0"
})
next.addEventListener("click",()=>{
    let x=Math.random();
    if(x>=0 && x<0.1){
        playing("Arabic_Kuthu")
    }
    else if(x>=0.1 && x<0.2){
        playing("Gaali_Valuga")
    }
    else if(x>=0.2 && x<0.3){
        playing("Mai_Agar_Kahu")
    }
    else if(x>=0.3 && x<0.4){
        playing("Gundellona")
    }
    else if(x>=0.4 && x<0.5){
        playing("Anaganaga")
    }
    else if(x>=0.5 && x<0.6){
        playing("Achyutham_Keshavam")
    }
    else if(x>=0.6 && x<0.7){
        playing("Birthday_Gift")
    }
    else if(x>=0.7 && x<0.8){
        playing("Naa_Ready")
    }
    else if(x>=0.8 && x<0.9){
        playing("Co2")
    }

    else{
        playing("Let_Her_Go")
    }
    console.log(x);
    

})



}
main()

