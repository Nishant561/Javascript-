const fa_bars = document.querySelector(".fa-bars");
const link_container = document.querySelector(".link-container")
const links = document.querySelector('.links')
const nav = document.querySelector("nav")

fa_bars.addEventListener("click",(e)=>{
    let height1 = links.getBoundingClientRect().height
    if( link_container.getBoundingClientRect().height === 0 ){
        link_container.style.height = height1 + 'px'
    }else{
        link_container.style.height = '0px'
    }
})


window.addEventListener("resize",()=>{
    if(window.innerWidth > 500){
        link_container.style.height = 'auto'
    }
})

window.addEventListener("scroll",()=>{
    if( scrollY > nav.getBoundingClientRect().height ){
        nav.classList.add('fixed-navbar')
    }else{
        nav.classList.remove('fixed-navbar')
    }
})

const scrollLink = document.querySelectorAll(".scroll-link")

scrollLink.forEach((links)=>{
    links.addEventListener("click",(e)=>{
        e.preventDefault()
        let id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        const navheight = nav.getBoundingClientRect().height
        const fixednav = nav.classList.contains('fixed-navbar')
        const height2 = link_container.getBoundingClientRect().height
        let position = element.offsetTop - navheight

        if(!fixednav){
             position = position - navheight
        }
        if(navheight> 82){
            position = position + height2
        }
        

        window.scrollTo({
            left:0,
            top:position
        })
        link_container.style.height = '0'

    })
})
