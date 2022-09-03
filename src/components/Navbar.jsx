import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openLogin } from "../features/Login/LoginSlice";
import { User } from "./Icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { cartItems, cartTotalItems } = useSelector((store) => store.product);
  const { isLogin } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logofun() {
    window.location.href = "/";
  }

  return (
    <div className={styles.nav_parent}>
    
        <img style={{ cursor: "pointer",height:"60px", width:"180px" }} onClick={logofun} src="https://i.postimg.cc/8cnr5Tns/Screenshot-2022-09-02-120308.png"></img>
       
        <div className={styles.nav_linkWrap}>

          <Link to="/products/mens">
            <h4 style={{color:"white" , fontSize:"25px",  fontFamily: "Arial, Helvetica, sans-serif"}}>Our Collection</h4>
          </Link>
         
      </div>

      <div className={styles.nav_end}>
      
        <div
          className={styles.nav_logIN}
          onClick={isLogin ? undefined : () => dispatch(openLogin())}
        >
          {isLogin ? <User /> : "Sign In"}
        </div>
        <div className={styles.nav_icons}>
       
        </div>
        <div
          className={styles.nav_icons}
          onClick={() => {
            navigate("/cart");
          }}
        >
          <img style={{height:"40px"}}
            src="https://cdn.iconscout.com/icon/premium/png-128-thumb/basket-721-1122617.png"
            alt=""/>
          {cartItems.length != 0 ? (
            <div className={styles.amount_container}>
              <p className={styles.total_amount}>{cartTotalItems}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
