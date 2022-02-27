function check(form){
let Kelvin = Kelvin.value
let Celsuis = Celsuis.value 
let Fahrenheit = Fahrenheit.value
let Newton_temp = Newton.value
Celsuis = Kelvin - 273
Fahrenheit = Celsuis *(9/5) +32
Fahrenheit = Math.floor(Fahrenheit)
Newton_temp = Math.floor(Celsuis *(33/100))
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit F°.`)
console.log(`The temperature is ${Celsuis} degrees Celsuis C°.`)
console.log(`The temperature is ${Kelvin} degrees Kelvin K°.`)
console.log(`The temperature is ${Newton_temp} degrees Newton N°.`)  
}
