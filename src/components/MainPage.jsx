import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/MainPage.module.css";
import trending from "./trending.json";
import "./GDetails.css";

import Footer from "./Footer";
export default function MainPage() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "SS Creation";
    if (window.pageYOffset > 300) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);
  return (
   <div>
   
    <img style={{marginTop:"63px", width:"100%"}} src="https://i.postimg.cc/J01VDPLj/Screenshot-2022-09-02-135751.png"/>
<div className="sunny">
        <p className="topdeal">Trending now</p>
      </div>
      <div className="maincontainer">
        <div className="container">
          {trending.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.imgURL} alt={item.name} />
              </div>
              <div className="card-title">{item.title}</div>
              {/* <div className="card-info">{item.info}</div> */}
              <div className="card-rating">
                <span>
                  {item.star}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 51 48"
                  >
                    <path
                      fill="#ffffff"
                      stroke="none"
                      d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                    ></path>
                  </svg>
                </span>
                <span>{item.rating}</span>
              </div>
              <div className="price">
                <div className="card-mrp">
                  <span>MRP</span>
                  <span>{item.mrp}</span>
                  <span className="card-discount">{item.discount}</span>
                </div>
                <div className="card-price">
          <span>{item.sellingPrice}</span>
     </div>
     </div>
    </div>
    ))}
  </div>
        <img style={{marginTop:"63px", width:"100%"}} src="https://i.postimg.cc/1RTSQRyM/Screenshot-2022-09-02-224349.png"/>
        <Footer/>
        
      </div>

   </div>
  );
}
