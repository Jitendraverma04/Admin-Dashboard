import React from 'react'
import './Chat.css'
export default function Chat() {
    const data1=[
  {
    name:"Piter",
    image:"Images/user1.jpg",
    msg:"Thank you for working with us",
    time:"12 minutes ago"
  },  
  {
    name:"Wanda",
    image:"Images/wanda.jpg",
    msg:"Thank you for working with us",
    time:"12 minutes ago"
  },
  {
    name:"Chris Hemsworth",
    image:"Images/user3.jpg",
    msg:"Thank you for working with us",
    time:"12 minutes ago"
  },  
  {
    name:"Zendaya",
    image:"Images/user4.jpg",
    msg:"Thank you for working with us",
    time:"12 minutes ago"
  },
  {
    name:"Tony",
    image:"Images/user5.jpg",
    msg:"Thank you for working with us",
    time:"12 minutes ago"
  },  
  {
    name:"Jason",
    image:"Images/user2.jpg",
    msg:"Thank you for working with us",
    time:"12 minutes ago"
  },
  
  
    ];



    const data2=[
      {
        name:"Piter",
        image:"Images/user1.jpg",
        msg:"Hii my name is Piter",
        time:"10 days ago"
      },  
      {
        name:"Wanda",
        image:"Images/wanda.jpg",
        msg:"Hii my name is Wanda",
        time:"12 days ago"
      },
      {
        name:"Chris Hemsworth",
        image:"Images/user3.jpg",
        msg:"Hii my name is Chris",
        time:"12 days ago"
      },  
      {
        name:"Zendaya",
        image:"Images/user4.jpg",
        msg:"Hii my name is Zen",
        time:"13 days ago"
      },
      {
        name:"Tony",
        image:"Images/user5.jpg",
        msg:"Hii my name is Tony",
        time:"15 days ago"
      },  
      {
        name:"Jason",
        image:"Images/user2.jpg",
        msg:"Hii my name is Jason",
        time:"23 days ago"
      },
      
      
        ];
  return (
    <div >
        <div className="Chat-container">
      <div className="Chats">
<h2>Today Chats</h2>
<div className="Chat-content">
{data1.map(key => (
       <div className="Data">
        <div className="Data1">
         <img src={key.image} alt=' '  className="chat-image" />
         </div>
         <div className="Data2">
        <div className="chat-name">{key.name}</div>
        <div className="chat-msg"> {key.msg} </div>
        </div>
        <div className="Data3">
            <div className="chat-time">{key.time}</div>
        </div>
       </div>
      ))}
</div>
      </div>


      <div className="Chats">
<h2>Past Chats</h2>
<div className="Chat-content">
{data2.map(d => (
       <div className="Data">
        <div className="Data1">
         <img src={d.image}  alt=' ' className="chat-image" />
         </div>
         <div className="Data2">
        <div className="chat-name">{d.name}</div>
        <div className="chat-msg"> {d.msg} </div>
        </div>
        <div className="Data3">
            <div className="chat-time">{d.time}</div>
        </div>
       </div>
      ))}
</div>
      </div>
      </div>
    </div>
  )
}
