// import React from 'react'
import Favourite from "../../assets/images/favorite_24dp_23A6F0_FILL0_wght400_GRAD0_opsz24.svg"
function Favouriteicon() {
  return (
    <div className="favouritecontainer flex">
      <img className="favouriteicon w-4 h-4" src={Favourite} alt="favourite icon" />
      <p className="favouritenumber ml-1 text-xs text-brandblue">1</p>
    </div>
  )
}

export default Favouriteicon
