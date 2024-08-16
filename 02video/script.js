const button = document.querySelector(".button-container button")
const switcher = document.querySelector(".switch")
const video = document.querySelector("video")
let sliderPercentage = 0

button.addEventListener("click",(e)=>{
    if(sliderPercentage === 0){
        switcher.style.transform = `translateX(100%)`
        video.pause();
        sliderPercentage = 100
        

    }else{
        switcher.style.transform = `translateX(0%)`
        video.play()
        sliderPercentage = 0
    }
    
})