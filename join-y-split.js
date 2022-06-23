//cap 20
//join()
//solo sirve para juntar cosas con el texto que quieras
//ejemplo 1
const S = ["hola", "mundo"]
const rta = S.join("--")
console.log (rta)

//split()
//divide por espacios segun el caracter que le pongas
//ejemplo 2
const s1 = "hola mundo de nuevo"
const s4 = s1.split("o").join("-").toLowerCase()
const s5 = s1.split("m").join("-").toLowerCase()
const s6 = s1.split("h").join("-").toLowerCase()
console.log(s4)
console.log(s5)
console.log(s6)

//ejemplo II de 2
const s = "hola mundo de nuevo"
const s2 = s.split("o").join("-").toLowerCase()
console.log (s2)