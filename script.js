const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


convertBtn.addEventListener("click", function(){
    if(inputEl.value){
        let input = inputEl.value
        let calc1 = input*3.281
        let calc2 = input/3.281 
        lengthEl.textContent = `${input} meter(s) = ${calc1.toFixed(3)} feet | ${input} feet = ${calc2.toFixed(3)} meters`
        calc1 = input*0.264
        calc2 = input/0.264
        volumeEl.textContent = `${input} litre(s) = ${calc1.toFixed(3)} gallons | ${input} gallons = ${calc2.toFixed(3)} litres`
        calc1 = input*2.204
        calc2 = input/2.204.toFixed(3)
        massEl.textContent = `${input} kilo(s) = ${calc1.toFixed(3)} pounds | ${input} pounds = ${calc2.toFixed(3)} kilos`

    }
})