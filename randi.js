const arr = ["buenos dias", "manzana", "peras","agua","refran"]

const nwarra = arr.filter(items => items.length <= 5)
const nwarra6 = arr.filter(items => items.length >= 6)

console.log (nwarra)
console.log(nwarra6)

/**
 * filtrado chido
 */
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
      {
        customerName: "Valentina",
        total: 240,
        delivered: true,
      },
      {
        customerName: "Valentina",
        total: 240,
        delivered: true,
      }    
  ];
/**explicacion  */
  const n = "customerName"

  const primero = orders[0]
  primero[n] == primero["customerName"] == primero.customerName
 
 /**fin explicacion */
 
  /** forma sencilla */
 


 const nuevarray = orders.reduce((acc,item2) => {
      if(!acc[item2.customerName]) {
          acc[item2.customerName] = 0
      }
     acc[item2.customerName]++
     
return acc
        
  } ,{})
  console.log(nuevarray)




  /* segunda forma */
 


const nuevarray2 = orders.map(items => items.customerName).reduce((acc,items) => {
      if(!acc[items]){
          acc[items] = 1;
      }else{
         acc[items] = acc[items] ++;
      }
      return acc;
  }, {})

  console.log("nuevarray22" , nuevarray2)