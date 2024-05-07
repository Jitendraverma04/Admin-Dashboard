import React from 'react'
import {Tilt} from "react-tilt"
import "./Products.css"

export default function Products() {
  return (
    <div>
      <div className="Products-container">
        <h2>Products</h2>
        <div className="Products">
          <Tilt>
          <div className="product-card">
            <img src='Images/reebok.jpg' />
            </div>
            </Tilt>
            <Tilt>
          <div className="product-card">
          <img src='Images/gucci.jpg' alt="" /></div></Tilt>

          <Tilt><div className="product-card">
          <img src='Images/jordan.jpg' alt="" /></div></Tilt>
          <Tilt>
          <div className="product-card">
          <img src='Images/denim.jpg' alt="" /></div></Tilt>
         <Tilt><div className="product-card">
          <img src='Images/zara.jpg' alt="" /></div></Tilt> 
       <Tilt> <div className="product-card">
          <img src='Images/levi.jpg' alt="" /></div></Tilt>
         <Tilt> <div className="product-card">
          <img src='Images/hm.jpg' alt="" /></div></Tilt>
         <Tilt> <div className="product-card">
          <img src='Images/diesel.jpg' alt="" /></div></Tilt>
          
        </div>
        </div>
      </div>
  )
}
