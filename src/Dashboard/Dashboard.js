


import React from 'react'
import Graph from './Graph';
import './Dashboard.css'
 import Sales from '../Components/Sales';
import Chat from '../Components/Chat';
 import"../Components/Chat.css"
import Products from '../Components/Products';
import ContactUs from '../Components/ContactUs';
import "../Components/ContactUs.css"



export default function Dashboard() {
  return (
    <div >
      <div className="Dashboard">


      <div className="Today-Collection">
        <div className="TodaySale">
          <div className="icon">
          <i class='bx bx-cart'></i>
          </div>
          <div className="content">
           Today Sale
           $120
          </div>
        </div>
        <div className="TotalSale">
          <div className="icon">
          <i class='bx bx-bar-chart'></i>
          </div>
          <div className="content">
          Total Sale   <br/>
          $120
          </div>
        </div>
        <div className="TodayRevenue">
          <div className="icon">
          <i class='bx bxs-wallet' ></i>
          </div>
          <div className="content">
Today Revenue
          $1200
          </div>
        </div>
        <div className="TotalRevenue">
          <div className="icon">
          <i class='bx bxs-bank'></i>
          </div>
          <div className="content">
Total Revenue
          $1200
          </div>
        </div>
      </div>


      <div className="Graphs"><Graph /></div>
      <div className="Sales"><Sales/></div>
      <div className="Chat"><Chat/></div>
<div className="Products"><Products/></div>
<div className="ContactUS"><ContactUs/></div>
      </div>
    </div>
  );
}
