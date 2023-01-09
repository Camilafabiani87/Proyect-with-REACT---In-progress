
import './Product.css'
import  {BuyBtn}  from './BuyBtn'
import { Discount } from './Discount';
import { Heart } from './Heart';




const Product = ({discount,name,oldPrice,newPrice}) => {
  return (
    <div className="product">
        <Discount discount = {discount}/>
       <Heart />
        <img className="product_img" src="https://picsum.photos/180" alt="product"/>
        <h2 className="product_name">{name}</h2>
        <div className="product_details">
            <p className="product_oldPrice">${oldPrice}</p>
            <p className="product_newPrice">${newPrice}</p>
            <BuyBtn name={name} newPrice={newPrice}/>

        </div>
    </div>
  )
}

export {Product}