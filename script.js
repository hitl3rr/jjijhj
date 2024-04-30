const submit = document.querySelector("#sbmitt")
const jaj = document.querySelector("#jaj")
const area = document.querySelector("#areaa")
const blurr = document.querySelector(".wqqwq")
const closer = document.querySelector("#closer")
const abva = document.querySelector(".saasd")

submit.addEventListener("click" , function () {
    abva.innerText = `Welcome to the site  ${area.value} `
    blurr.style.display = "block"
    closer.style.display = "block"
    jaj.style.display = "block"
    
})
closer.addEventListener("click" , function () {
    jaj.style.display = "none"
    blurr.style.display = "none"
})
