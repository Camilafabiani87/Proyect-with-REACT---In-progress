import {ProductContainer} from "./Components/ProductContainer";
import { Product } from "./Components/Product";
import data from './products.json';

const App = ()=>{
    return (
        <ProductContainer>
            {data.map(product =>
                 <Product
                    key={product.id}
                    name={product.name}
                    discount = {product.discount}
                    oldPrice={product.price}
                    newPrice={product.price - product.price*product.discount/100} 
                    />
                   )}
           
          

          
        </ProductContainer>
    )
}

export default App