export default function calculate() {
    const resultInput = document.getElementById("result")
    if (input.value === "") {
        return
    }
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
}