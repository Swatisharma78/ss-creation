import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import styles from "../components/styles/Cart.module.css";
import { openLogin } from "../features/Login/LoginSlice";


const Cart = () => {
  const { isLogin } = useSelector((store) => store.login);
  const navigate = useNavigate();
  const {cartTotalItems,cartItems,sub_total,estimated_subtoal,
  } = useSelector((state) => state.product);
  const [subTotal, setSubTotal] = useState(0);
  const [estimatedTotal, setEstimatedTotal] = useState(0);
  // const [value, setValue] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    const handleIndianRupees = () => {
      let x = sub_total;
      let y = estimated_subtoal;
      x = x.toString();
      y = y.toString();
      let lastThree = x.substring(x.length - 3);
      let lastThree1 = y.substring(y.length - 3);
      let otherNumbers = x.substring(0, x.length - 3);
      let otherNumbers1 = y.substring(0, x.length - 3);
      if (otherNumbers !== "") lastThree = "," + lastThree;
      if (otherNumbers1 !== "") lastThree1 = "," + lastThree1;
      let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      let res1 =
        otherNumbers1.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      setSubTotal(res);
      setEstimatedTotal(res1);
    };
    handleIndianRupees();
  }, [sub_total, estimated_subtoal]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.top_left}>
              <p className={styles.head}>Shopping Bag</p>
              <p className={styles.items}>{cartTotalItems} Items</p>
            </div>
            <div className={styles.top_right}>
              {!isLogin ? (
                <p className={styles.items}>
                  Have an Account?
                  <span onClick={() => dispatch(openLogin())}>Sign In</span>
                </p>
              ) : null}
            </div>
          </div>
          <div className={styles.mid}>
            <div className={styles.mid_left}>
              <p className={styles.small}>Items</p>
            </div>
            <div className={styles.mid_middle}>
              <p className={styles.small}>Price</p>
            </div>
            <div className={styles.mid_right}>
              <p className={styles.small}>QTY</p>
            </div>
          </div>
          <div className={styles.products}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                return <CartItem item={item} key={item.id} />;
              })
            ) : (
              <div className={styles.empty}>
                <p>Please Add Something to your Cart</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.payment_total}>
            <div className={styles.sub_total}>
              <div className={styles.sub_total_left}>
                <p>Item Subtotal</p>
              </div>
              <div className={styles.sub_total_right}>
                <p>INR {subTotal}</p>
              </div>
            </div>
            <div className={styles.sub_estimated_total}>
              <div className={styles.sub_estimated_total_left}>
                <p className={styles.dark}>Estimated Total</p>
                <p className={styles.dim}>Shipping calculated in Checkout</p>
              </div>
              <div className={styles.sub_estimated_total_right}>
                <p className={styles.dark}>INR {estimatedTotal}</p>
              </div>
            </div>
            <div className={styles.checkout_container}>
              <button
                onClick={() => {
                  isLogin ? navigate("/checkOut") : dispatch(openLogin());
                }}>
                CHECK OUT NOW
              </button>
             
            </div>
          </div>
        
            <div className={styles.ip_container}>
             
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Cart;
