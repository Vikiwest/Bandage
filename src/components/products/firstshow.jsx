import React from "react";
import ChevronLeft from "../../assets/images/firstshow/chevronleft.svg";
import ChevronRight from "../../assets/images/firstshow/chevronright.svg";
import Productcard from "../cards/productcard";
import { products } from "../data/products";

function Firstshow() {
  return (
    <section className="w-[80%] mx-auto flex h-[100vh] mt-5 overflow-hidden scroll-y ">
      <div className="w-2/6 order-1  bg-firstshow bg-cover bg-center h-full">

       <div className="p-5 font-bold">
        <h2>FURNITURE</h2>
        <p className="text-lightgrey">5 Items</p>
       </div>
      </div>


      <div className="w-4/5 order-2 ml-5">


        <div className="flex items-center ">
          <div className="w-2/4 text-2xl font-bold">
            <h2>BESTSELLER PRODUCTS</h2>
          </div>

          <div className="flex w-4/6  justify-between gap-5">


            <ul className="flex  gap-10 items-center font-bold">
              <li className="text-brandblue">Men</li>
              <li className="text-lightgrey">Women</li>
              <li className="text-lightgrey">Accessories</li>
            </ul>
 

            <div className="gap-2 flex">
              <ChevronLeft />
              <ChevronRight />
            </div>
            </div>
        </div>

<hr className="opacity-[0.25] my-2"/>


  {products && (
    
    <div className="flex flex-wrap p-5 gap-5">
      {products.map((item) =>(

        <Productcard
        key={item.id}
        item={item}
        />

      ))}
  </div>
  
  )}



      </div>
    </section>
  );
}

export default Firstshow;
