import './BuyBtn.css'

const BuyBtn = ({name, newPrice}) => {
  return (
    <button onClick={()=>
      alert(`Has agregado al carrito un ${name} de $${newPrice}`)}>Comprar</button>
  )
}

export{BuyBtn}