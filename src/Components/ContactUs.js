import React from 'react'
// import "./ContactUs.css"
import './ContactUs.css'

export default function ContactUs() {
  return (
    <div>
      <div className="ContactUs">
        <h2>ContactUs</h2>
        <div className="ContactUs-container">
          <div className="ContactUs-content1">
            All Rights Are Reserver By @Admin 2024-2025
          </div>
          <div className="ContactUs-content2">Design By : <spam>Jitendra Verma</spam><br/>
          Maintained By : <spam>Jitendra Verma</spam>
          </div>


          <div className="ContactUs-carousel">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
  <div class="carousel-inner" >
    <div class="carousel-item active">
      {/* <img src={gucci} class="d-block w-100" alt="..."/> */}
      <h2>Thank You</h2>

    </div>
    <div class="carousel-item">
      {/* <img src={reebok} class="d-block w-100" alt="..."/> */}
      <h2>For</h2>
    </div>
    <div class="carousel-item" >
      {/* <img src={Jordan} class="d-block w-100" alt="..."/> */}
      <h2>Visiting Us</h2>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          </div>

          
        </div>
      </div>
      </div>
  )
}
