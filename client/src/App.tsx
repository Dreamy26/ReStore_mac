import {useEffect, useState} from 'react';
import { Product } from './product';


function App(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products') // fetch data from our api
          .then(response => response.json())// a promise
          .then(data => setProducts(data)) // set the data to our state
    }, []) // empty array adding a dependency, this effect will only run once

function addProduct(){
    setProducts(prevState => [...prevState, 
    {
        id: prevState.length + 101,
        name: 'Product ' + (prevState.length + 1),
        price: (prevState.length *100) + 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'https://picsum.photos/200'
    }])
}
return (
    <div> 
    <h1>Re-Store</h1>
    <ul>
        {products.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
        ))}
    </ul>
    <button onClick={() => addProduct()}>Add Product</button>
    </div>
);
 }
    
export default App;
