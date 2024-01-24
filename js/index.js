import { switchTheme } from "./switchTheme.js"
import calculate from "./calculate.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyhandlers.js"
import copy from "./copy.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById("clear").addEventListener("click", handleClearButton)

document.getElementById("input").addEventListener("keydown", handleTyping)

document.getElementById("equal").addEventListener("click", calculate)

document.getElementById("copyToClipboard").addEventListener("click", copy)

document.getElementById("themeSwitcher").addEventListener("click", switchTheme)