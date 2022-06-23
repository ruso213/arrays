//cap 17 curso arrays
//find()
//esta funcion solo va a regresarte solo un objeto (no una array) que va de acuerdo
//con la condicional.
//en caso de que hayan dos objetos o mas que van de acuerdo con la condicional
//se devuelve el primer objeto que lo cumple 

//ejemplo 1 
const i = [1,3,30,34,4,7,8,30]

const E = i.find(item => item === 30);
const E2 = i.findIndex(item => item === 30);
console.log (E)
console.log(E2)


//ejemplo 2
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const ej2 = products.find(item => item.id ==="🥞");
  const ej3 = products.findIndex(item => item.id ==="🥞");
  console.log(ej2)
  console.log(ej3)