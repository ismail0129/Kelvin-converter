//this sets the tempretaure in kelvin variable
const Kelvin = 293
//Convert K° to C°
const Celsuis = Kelvin - 273
//Convert C° to F° 
let Fahrenheit = Celsuis *(9/5) +32
//Round up the result of the conversion from C° to F°
Fahrenheit = Math.floor(Fahrenheit)
let Newton_temp = Math.floor(Celsuis *(33/100))
//Log in the console the final results
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit F°.`)
console.log(`The temperature is ${Celsuis} degrees Celsuis C°.`)
console.log(`The temperature is ${Kelvin} degrees Kelvin K°.`)
console.log(`The temperature is ${Newton_temp} degrees Newton N°.`)
