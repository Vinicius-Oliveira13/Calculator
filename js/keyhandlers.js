import calculate from "./calculate.js"

const input = document.getElementById("input")
const resultInput = document.getElementById("result")

export function handleClearButton () {
    const resultInput = document.getElementById("result")
    input.value = ""
    resultInput.value = ""
    if (resultInput.classList.contains("error")) {
        resultInput.classList.remove("error")
    }
    input.focus()
}

export function handleTyping(ev) {
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === "Backspace") {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
        calculate()
    }
    if (ev.key === "Delete") {
        input.value = ""
        resultInput.value = ""
        if (resultInput.classList.contains("error")) {
            resultInput.classList.remove("error")
        }
    }
}

export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value
    input.value += value
    input.focus()
}