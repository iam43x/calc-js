import { calculate } from "./modules/calc.js"
import { insertRow } from "./modules/table.js"

let calcInput = document.getElementById("calc-input")
let calcBtn = document.getElementById("calc-btn")
let calcTableResult = document.getElementById("calc-table-result")

window.addEventListener('load', (event) => {
    calcBtn.addEventListener(
        'click', () => { 
            calcTableResult.style.visibility = 'visible'
            let result = calculate(calcInput.value)
            insertRow(calcTableResult, calcInput.value, result)
        })
})
