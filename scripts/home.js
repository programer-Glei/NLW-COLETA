
let botao = document.querySelector("#page-home main button")
let modal = document.querySelector("#modal")
let close = document.querySelector("#modal .header a")

botao.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})