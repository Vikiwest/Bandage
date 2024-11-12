// import React from 'react'
import Currentcarousel from "../../assets/images/currentcarouselindicator.png"
import Nxtcarousel from "../../assets/images/nextcarouselindicator.png"
function Carouindicator() {
  return (
    <div className="caroulcontainer">
      <img className="currentcaroulindicator" src={Currentcarousel} alt="currentcarouselindicator" />
      <img className="nextcaroulindicator" src={Nxtcarousel} alt="nextcarouselindicator" />
    </div>
  )
}

export default Carouindicator
