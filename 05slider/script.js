const container = document.querySelectorAll(".main-container div")
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let counter = 0
container.forEach((item, index) => {
    item.style.left= `${index * 100}%`;
});


next.addEventListener("click",()=>{
    counter++;
    nextPhoto()
})
prev.addEventListener("click",()=>{
    counter--;
    nextPhoto()
})




const nextPhoto = ()=>{

    if(counter > container.length -1){
        counter=0;
    } else if(counter<0){
        counter = container.length 
    }

    container.forEach((item)=>{
        item.style.transform = `translateX(-${counter * 100}%)`
    })


}

