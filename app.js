const btn = document.querySelector("button");
const bg = document.querySelector("body");
const h1 = document.querySelector("h1");


btn.addEventListener("click",()=>{
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    bg.style.backgroundColor = `rgb(${r},${g},${b})`
    h1.innerText = `rgb(${r},${g},${b})`;


})


