let namebox = document.getElementById('name')
let name = prompt('Enter your name for registeration')
let greetingbox = document.getElementById('greeting')
if (name){
    namebox.innerHTML = name + ' Your registeration is completed.'
}

setInterval(function(){
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    greetingbox.style.background = `rgb(${r}, ${g}, ${b})`
},250)