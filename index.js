// Selecting the needed elements
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

// taking some values for conversion
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204
// reverse
const feetToMeter = 0.3048
const gallonsToLiters = 3.78541
const poundsToKilos = 0.453592

// selecting convert button and adding event listener 
convertBtn.addEventListener("click", function() {

    // parseFloat() parses a string and returns the first number
    // If the first character of the string is not a number it will return NaN
    let baseValue = parseFloat(inputEl.value) 

    if (!isNaN(baseValue)) { // when basevalue is not a NaN
        lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters` 

        volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} feet = ${(baseValue * gallonsToLiters).toFixed(3)} liters` 

        massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} feet = ${(baseValue * poundsToKilos).toFixed(3)} kilos`
    } else { // when basevalue is a NaN
        alert("Please input a valid number")
    }
})