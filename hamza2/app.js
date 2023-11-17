const music= document.querySelector("audio")
const btn =document.querySelector("button")
btn.innerHTML="pley"

btn.onclick=()=>{
    if (music.paused) {
        music.play()
        btn.style.background="red"
        btn.innerHTML="stop"
    }else{
        music.pause()

        btn.style.background="black"
        btn.innerHTML="coutinue"
    }
}



