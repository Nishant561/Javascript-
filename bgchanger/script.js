const links = document.querySelectorAll(".links");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        links.forEach((linker) => {
            linker.classList.remove('active');
        });
        e.target.classList.add('active');

        let category = String(e.target.dataset.category);
        if (category === 'simple') {
            document.querySelector('.container').innerHTML = ''
            simple();
            buttonColors(); 
        }else if(category === 'hex'){
            document.querySelector('.container').innerHTML = ''
            hex()
        }
    });
});

document.querySelector('.container').addEventListener("click", (e) => {
    if (e.target.classList.contains('btn')) {
        let color = e.target.dataset.color;
        document.querySelector('body').style.backgroundColor = color;
    }
});

window.addEventListener("DOMContentLoaded", () => {
    simple();
    buttonColors();
});

function simple() {
    const div = document.createElement('div');
    div.innerHTML = `
        <button class="btn" data-color="red">Red</button>
        <button class="btn" data-color="blue">Blue</button>
        <button class="btn" data-color="green">Green</button>
        <button class="btn" data-color="yellow">Yellow</button>
        <button class="btn" data-color="purple">Purple</button>
    `;
    document.querySelector('.container').appendChild(div);
}

function buttonColors() {
    const btns = document.querySelectorAll('.btn');
    btns.forEach((button) => {
        let color = button.dataset.color;
        button.style.backgroundColor = color;
    });
}

function hex(){
    const div = document.createElement('div')
    div.innerHTML = `
        <p class="colorCode"> #ffffff </p>
        <button class="generate"> Generate </button>
        <button class="copy" > Copy </button>
    `
    document.querySelector('.container').appendChild(div)
    div.querySelector('.generate').addEventListener('click',()=>{
        colorCodeGenerator()
    })
    div.querySelector('.copy').addEventListener('click',()=>{
        copy()
    })
}



const colorCodeGenerator = ()=>{
    let hexCode = '0123456789ABCDEF'
    let color='#'

    for(i=1 ; i<=6 ; i++ ){
        let position = Math.floor(Math.random() * hexCode.length)
        color += hexCode.charAt(position)
    }

    document.querySelector('.colorCode').textContent = color

    document.querySelector('body').style.backgroundColor = color


}

const copy = ()=>{
    let colorCode = document.querySelector('.colorCode').textContent
    window.navigator.clipboard.writeText(colorCode)
}