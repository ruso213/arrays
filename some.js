const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];


  const newapointment = {
      startDate: new Date(2021, 1 , 1, 19),
      endDate: new Date(2021, 1 , 1, 20,30 )
  }

  var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

  const overlab = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping  (
            
            {start: date.startDate , end: date.endDate},
            {start: newDate.startDate , end: newDate.endDate},
                
            
        )
    })
  }
console.log(overlab(newapointment), "hola")


//**ejercicio */




const team = [
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
    age: 6,
  },
  {
    name: "Santiago",
    age: 13,
  },
];


const menoresa = team.every(item => item.age >= 7) //**si la edad del item es mayor que 7 devuelve true */

console.log(menoresa)

const añoactual = 2022
function añoknacio(edad){
  const añoknacio2 = añoactual - edad
  console.log(añoknacio2)
}

añoknacio(12)