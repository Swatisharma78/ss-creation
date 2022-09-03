import React, { useEffect } from "react";
import styles from "./styles/SignUpModal.module.css";
import { Cross, Info } from "./Icons";
import { openLogin } from "../features/Login/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import {setUserMail,setUserPass,addUser} from "../features/Auth/AuthSlice";

export default function SignUpModal() {
  const { userMail, userPass,regUsers } = useSelector(
    (store) => store.auth
  );
  useEffect(() => {
    if (regUsers) {
      localStorage.setItem("users", JSON.stringify(regUsers));
    }
  }, [regUsers]);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.modal_head}>
          Sign Up
          <Cross />
        </div>
        <div className={styles.modal_body}>
          <input
            type="text"
            placeholder="Email Address*"
            className={styles.emailInput}
            onChange={(e) => {
              let mail = e.target.value;
              dispatch(setUserMail(mail));
            }} />
          <input
            type="password"
            placeholder="Create Password*"
            className={styles.passInput}
            onChange={(e) => {
              let pass = e.target.value;
              dispatch(setUserPass(pass));
            }} />       
        </div>
        <button
          type="button"
          className={styles.signUnBtn}
          onClick={() => {
            let user = {
              email: userMail,
              password: userPass, 
            };
            dispatch(addUser(user));
            alert("User Signed Up Successfully");
            setTimeout(() => dispatch(openLogin()), 1000);
            dispatch(setUserMail(null));
            dispatch(setUserPass(null));
          }}>
          SIGN UP
        </button>
       <div className={styles.modal_bottom}>
          Already have an account?{" "}
          <span
            style={{
              color: "rgb(100, 92, 255)",
              marginLeft: "20px",
              cursor: "pointer",
            }}
            onClick={() => dispatch(openLogin())}>
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
}