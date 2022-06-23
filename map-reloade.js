const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  const rta = orders.map(item => item.total)
  console.log(rta)

  const rta2 = orders.map((item) =>{
      return {
          ...item,
          tax: .19
      }
  })
  console.log("rta2", rta2 )




 /* const solution = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
    
  ];

   
    function solution(array){
        return array.map(item => ({
            ...item,
            taxes: Math.trunc(item.price * .19)
        }))
   }; */
    
