// import React from 'react'
import Cart from "../../assets/images/shopping_cart_24dp_23A6F0_FILL0_wght400_GRAD0_opsz24.svg"
function Shoppingcarticon() {
  return (
    <div className="cartcontainer flex">
      <img className="carticon" src={Cart} alt="shoppingcart" />
      <p className="carticonnumber ml-1 text-xs text-brandblue">1</p>
    </div>
  )
}

export default Shoppingcarticon
