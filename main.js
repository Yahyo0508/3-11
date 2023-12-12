let body = document.querySelector ("body")
let button = document.querySelector ("button")
let circle = document.querySelector ("#circle")
let toggle = false
button.addEventListener('click', () => {
    if (toggle){
        circle.classList.add('translate-x-[68px]')
        circle.classList.remove('translate-x-[0]')
        toggle = false
    } else {
        circle.classList.add('translate-x-[0]')
        circle.classList.remove('translate-x-[68px]')
        toggle = true
    }
})