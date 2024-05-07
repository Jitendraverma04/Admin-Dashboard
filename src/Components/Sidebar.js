import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<i class='bx bxs-dashboard' ></i>
        },
        {
            path:"/sales",
            name:"Sales",
            icon:<i class='bx bx-user' ></i>
        },
        {
            path:"/chat",
            name:"Chat",
            icon:<i class='bx bxs-comment-dots' ></i>
        },
        {
            path:"/products",
            name:"Products",
            icon:<i class='bx bxl-product-hunt'></i>
        },
        {
            path:"/contactus",
            name:"ContactUs",
            icon:<i class='bx bxs-contact'></i>
        }
    ]


    
    return (
        <>
        <nav class="navbar">
  <div class="container-fluid">
  <i class='bx bxs-grid'style={{fontSize:'34px',cursor:"pointer",color:"red"}} onClick={toggle}></i>
    <form class="d-flex" role="search">
    <i class='bx bx-message'></i> 
    <div className="text">
            Here is a Message
        </div>
    <i class='bx bxs-notification'></i>
    <div className="text">
            Here is a Notification
        </div>

    <h3 className="logo1">Jitendra Verma</h3>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn" type="submit">Search</button>
    </form>
  </div>
</nav>


        <div className="Container" style={{background:"black"}}>
           <div style={{width: isOpen ? "20%" : "0%"}} className="sidebar">
               <div className="top_section">
                <div className="logo-area">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo1">Jitendra Verma</h1>
                   <h2 style={{display: isOpen ? "block" : "none"}} className="logo2">Admin</h2>
                   </div>
                   {/* <div style={{color: isOpen ? "red" : "none"}} className="bars">
                   </div> */}
               </div>
               {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} style={{ textDecoration: "none",display: isOpen ? "" : "none"}}className="link" activeclassName="active">
                           <div className="icon" style={{display: isOpen ? "block" : "none",flexDirection:"column"}}>{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
           </div>
           <main style={{background:"black" ,width: isOpen ? "80%" : "100%", marginLeft: isOpen ? "20%" : "0%",marginTop:"30px",padding:"45px"}}>
            {children}
           {console.log(children)}
           </main>
        </div>
        </>
    );
};

export default Sidebar;