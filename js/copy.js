/*export default function (ev) {
    const button = ev.currentTarget
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
    setTimeout(function () {
        button.innerText = "Copy"
        button.classList.remove("success")
    }, 1000)
}*/

export default function (ev) {
    const resultInput = document.getElementById("result")
    const button = ev.currentTarget
    console.log(button); // Verifique o valor de button
    button.innerText = "Copied!"
    button.classList.add("success")
    console.log(button.classList); // Verifique se a classe "success" foi adicionada
    navigator.clipboard.writeText(resultInput.value)
    setTimeout(function () {
        button.innerText = "Copy"
        button.classList.remove("success")
        console.log(button.classList); // Verifique se a classe "success" foi removida
    }, 1000)
}