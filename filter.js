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

  /*const search = (nombre) =>{
      return orders.filter(item =>{
          return item.customerName.includes(nombre)
      })
  }

  console.log(search(""))*/

  const rta2  = orders
  .map(item => item.delivered)
  .reduce((obj, item) => {
    if (!obj[item]){
        obj[item] =  1;
    }
    else{
        obj[item] = obj[item] + 1;
    }
    return obj;

  },{});

  const rta4  = orders
  .map(item => item.total)
  .reduce((obj, item) => {
    if (!obj[item]){
        obj[item] =  1;
    }
    else{
        obj[item] = obj[item] + 1;
    }
    return obj;

  },{});

  const rta3  = orders
  .map(item => item.customerName)
  .reduce((obj, item) => {
    if (!obj[item]){
        obj[item] =  1;
    }
    else{
        obj[item] = obj[item] + 1;
    }
    return obj;

  },{});
  console.log(rta2,rta3,rta4)

  /*-------------------------------------------------*/



  const items = [1,2,3,3]

  const rta  = items.reduce((obj, item) => {
    if (!obj[item]){
        obj[item] =  1;
    }
    else{
        obj[item] = obj[item] + 1;
    }
    return obj;

  },{});

  console.log(rta)