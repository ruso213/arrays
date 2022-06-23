//cap 15 curso arrays
//every()

//lo que hace esta funcion es que si un elemento de una array no se cumple
//esta funcion no va a devolver un true, por lo cual todos deven de cumplir 
//la funcion que se le pida

//ejemplo 1 

const team1 = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];


const team2 = [
    {
      name: "Nicolas",
      age: 14,
    },
    {
      name: "Andrea",
      age: 12,
    },
    {
      name: "Zulema",
      age: 15,
    },
    {
      name: "Santiago",
      age: 15,
    },
  ];
//aqui lo que hacemos es que si alguna persona es menor que 15 el equipo no 
//pueda ser aceptado 
const rta = team1.every(item => item.age <= 15);
const rta2 = team2.every(item => item.age <= 15);
console.log("team1 " , rta)
console.log("team2 " , rta2)
//lo que hacemos para entrar a la edad es que al parametro de la funcion"(item)"
//le añadimos el "(.age)" ya que este es el nombre de la propiedad en el cual esta
//guardado la edad


//ejemplo 2

const solution = [2,3,4,5,7]
const solution2 = [2,4,6,8,10]
const ej2 = solution.every(item => item % 2 ===0);
const ej3 = solution2.every(item => item % 2 ===0);
console.log(ej2)
console.log(ej3)
//aqui lo que hacemos es que dividimos entre 2 y si el reciduo de la division
//da igual a 0 osea que no tiene reciduo devuelve true. 
//en cambio si da reciduo sea false.
