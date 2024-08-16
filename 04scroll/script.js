const bars = document.querySelector(".bars")
const link_container = document.querySelector(".link-container")
const top_arrow = document.querySelector(".top-arrow")
const nav = document.querySelector('nav')
const scroll_link = document.querySelectorAll('.scroll-link')


 let transform_variable = 0
bars.addEventListener("click",(e)=>{
    if(transform_variable === 0){
        link_container.style.transform = `translateX(${transform_variable}%)`
        transform_variable = 100
        document.querySelector(".bars i").classList.remove('fa-bars')
        document.querySelector(".bars i").classList.add('fa-x')

    }else{
       
        link_container.style.transform = `translateX(-${transform_variable}%)`
        transform_variable = 0
        document.querySelector(".bars i").classList.add('fa-bars')
        document.querySelector(".bars i").classList.remove('fa-x')
    }
})


window.addEventListener("resize",()=>{
    if(window.innerWidth > 500){
        link_container.style.transform = `translateX(0)`
    }
})


top_arrow.addEventListener("click",(e)=>{
    window.scrollTo(0,0)
})

window.addEventListener("scroll",()=>{
    if(scrollY > 500){
        top_arrow.style.display = "block"
    }else{
        top_arrow.style.display = "none"
    }
})

window.addEventListener("scroll",()=>{
    let nav_height = nav.getBoundingClientRect().height

    if(scrollY > nav_height){
        nav.classList.add('fixed-navbar')
    }else{
        nav.classList.remove('fixed-navbar')
    }

})


scroll_link.forEach((items)=>{
    items.addEventListener("click",(e)=>{
        e.preventDefault()
        let id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        let position = element.offsetTop
        const navHeight = document.querySelector("nav")
        const height1 = navHeight.getBoundingClientRect().height
        const fixednav = navHeight.classList.contains("fixed-navbar")

        if(fixednav){
            position = position - height1
        }

        
        
        window.scrollTo({
            left:0,
            top:position,

        })
    })
})
