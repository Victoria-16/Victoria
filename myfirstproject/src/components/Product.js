export default function Product () {
    //const products = ["Laptop", "Phone", "Modem", "Computer","Hard drive","Mifi", "Laptop"];
    const product = [
    {  id: 1, name: "Laptop", price: 500  },
    {  id: 2, name: "Phone", price: 200   },
    {  id: 3, name: "Modem", price: 50    },
    {  id: 4, name: "computer", price:700  },
    {  id: 5, name: "Hard drive", price: 80 },
    {  id: 6, name: "Mifi", price: 30    },
    {  id: 7, name:"Laptop", price: 900  },
];
const productList = product.map((product) => ( 
    <h3 key={product.id}>
       {product.name}: ${product.price}
       </h3>
   ));
    return <div> {productList}</div>; 

    
    }
    
