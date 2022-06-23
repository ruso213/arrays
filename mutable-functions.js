//cap 26
const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const newarray = [];
const productindex = products.findIndex(item => item.id === ("🥞"));
if(productindex !== -1){
    newarray.push(products[productindex]);
    products.splice(productindex, 1);
}
//aqui lo que hacemos es que  creamos una nueva array "newarray" para ahi pushearle el objeto que queremos
//el products.findIndex lo ocupamos para saber la posicon de el string que queremos "🥞" para luego utilizarlo
//en el splice el cual elimina objetos o cosas de donde le pidamos el cual necesita la posicion del objeto
//que queremos eliminar y el segundo dato "1" es cuantas casillas queremos eliminar en este caso "1" por que
//solo queremos eliminar el de "🥞".
//y el push es para meterle objetos al array "newarray" y el "products[productindex]" es para decirle de 
//donde sacamos el objeto
console.log(products)
console.log(newarray)


//ejercicio I


const productsV2 = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

const update = {
    id: "🍔",
    changes: {
        price: 200,
        description: "delicious",
    },
}

//aqui lo que hacemos es que con un findIndex buscamos el lugar donde "update.id🍔" y "item.id🍔" sean iguales
//y eso nos va a dar un numero el cual es la posicion de donde es igual al update
//luego con filter filtramos los que no sean iguales como son"🥞🍕" y eso lo concatenamos
//con concat({...productsV2[productIndexV2], ...update.changes}) el cual junta los cambio de
//    price: 200, description: "delicious",
// haciendo que quede en un mismo array en  "updatedProductsV2"
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
console.log(productIndexV2)
const updatedProductsV2 = productsV2.filter(item => item.id !== update.id).concat({...productsV2[productIndexV2], ...update.changes});
console.log("OriginalList:",productsV2);
console.log("UpdatedList:",updatedProductsV2);

//ejercicio II




const products2 = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

const myProducts = [];
let newArray;
const productIndex = products2.findIndex(item => item.id === "🍔");
if (productIndex != -1){
    myProducts.push(products2[productIndex])
    newArray = products2.filter(item => item != products2[productIndex]);

    // puede ser "🍔" o tambien "products2[productIndex]" ya que esto signidica la posicon de la "🍔"
}
console.log("Products:",products2);
console.log("MyProducts:", myProducts);
console.log("newArray:",newArray);
console.log("-".repeat(10));


