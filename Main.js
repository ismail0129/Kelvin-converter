function check(form){
let select = document.getElementById("Select").value
let num = number.value
if (select === "Kelvin"){
    document.getElementById("Name").innerText = "Kelvin"
    document.getElementById("outKelvin").innerText = num
    document.getElementById("outCelsuis").innerText = (num - 273)
    document.getElementById("outFahrenhite").innerText = (num - 273)*9/5 +32
    document.getElementById("outNew").innerText = (num - 273)*(33/100)
}else{}
if (select === "Celsuis"){
    document.getElementById("Name").innerText = "Celsuis"
    document.getElementById("outKelvin").innertext = (num + 273)
    document.getElementById("outCelsuis").innerText = (num)
    document.getElementById("outFahrenhite").innerText = num *9/5 +32
    document.getElementById("outNew").innerText = num *(33/100)
}else{}
if (select === "Fahrenheit"){
    document.getElementById("Name").innerText = "Fahrenheit"
    document.getElementById("outKelvin").innertext = ( num - 32*5/9)+273
    document.getElementById("outCelsuis").innerText = (num -32) *5/9
    document.getElementById("outFahrenhite").innerText = num
    document.getElementById("outNew").innerText = (num - 32) *11/16
    
}
}
