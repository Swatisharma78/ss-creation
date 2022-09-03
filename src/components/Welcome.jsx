import React from "react";
import styles from "./styles/Welcome.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../features/Modal/ModalSlice";

export default function ModalMain() {
  const dispatch = useDispatch();
  return (
    <aside className={styles.container}>
     
          <div
            style={{
              height: 111,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }} >
            <button
              type="button"
              className={styles.modalBtn}
              onClick={() => dispatch(openModal())}>
             Welcome In SS Creation
            </button>       
      </div>
    </aside>
  );
}
