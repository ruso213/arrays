//cap 23 
//flat()
//esto nos sirve para manipular arrays que tienen otras arrays dentro "[2,1,3,4,[4,4,4]]"
//lo que hace flat es combertir esa array en una sola array "[2,1,3,4,4,4,4]"

//ejemplo 1

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const flat2 = matriz.flat(1)
console.log(flat2)

//cap 24
//flatmap
//es un map pero aplana tambien como el flat normal
 
//ejemplo 2

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  //aqui lo que hace value es convertir esto en un array  
  //parte I
  const exer2 = Object.values(calendars)
  console.log(exer2)
  //parte II
  const exer = Object.values(calendars).flat().map(item => item.startDate)
  console.log(exer) 

  //ejemplo II de 2

  const exeq = Object.values(calendars).flatMap(date => {
    return date.map(dato => dato.startDate)
  })

  console.log("ejemplo II de 2", exeq)