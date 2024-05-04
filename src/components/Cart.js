import React from 'react'
import TemList from './TemList';
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

// const Cart = () => {
//     const cartItems =useSelector((store)=>store.cart.items);
// const dispatch =useDispatch();

// const handleClearCart=()=>{
//     dispatch(clearCart());
// }
//   return (
//     <div className ="text-center m-4 p-4">
//         <h1 className ="text-2xl font-bold">Cart</h1>
//       <div className="w-6/12 m-auto">

//       {cartItems.length>0 &&
//         <button className="p-2 m-2 bg-black text-white rounded-lg"
//         onClick={handleClearCart}
//         >Clear Cart</button>}
//         {cartItems.length===0 && <h1>Your Cart is Empty</h1>}
//         <TemList items={cartItems}/>
//       </div>
//     </div>
//   )
// }

// export default Cart;


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
  // card function using redux
    let totalPrice = 0;
  
    cartItems.map((item) => {
      let price =
  
        (item?.card?.info?.price / 100)
        || (item?.card?.info?.defaultPrice / 100);
  
      totalPrice += price;
  
      return totalPrice;
  
    });
  
  
  
  
    const dispatch = useDispatch();
  
    const clearHandler = () => {
  
      dispatch(clearCart());
  
  
    }
  
    return cartItems.length == 0 ? (
  
      <EmptyCart />
  //  empty cart 
  
    ) : (
      <>
        <div className="flex w-3/4 m-auto p-4 mt-10  mb-10 lg:w-[92%] sm:w-[95%] min-[320px]:w-auto  justify-center  gap-8 flex-col bg-gray-100 rounded-3xl shadow-2xl">
          <div className="font-medium flex items-center w-3/4 m-auto justify-between  lg:w-3/4 sm:w-[98%] min-[320px]:w-auto min-[320px]:flex-wrap
          
           lg:justify-around md:justify-around sm:justify-between min-[320px]:justify-center gap-4   ">
            <div>
              <h2> Your Items : {cartItems.length}</h2>
            </div>
            <div>
              <p>Total Charges : {totalPrice} Rs</p>
            </div>
            <div>
  
            {/* clear button for  cart clear */}
              <button className=" p-2 text-xl bg-red-700 lg:text-xl sm:text-lg min-[320px]:text-base   rounded-md text-white"
                onClick={() => clearHandler()}
              >
                Clear items
              </button>
            </div>
          </div>
  {/*  looping add cart items in cart component  using map  */}
          <div className=" flex m-auto  w-3/4  lg:w-[90%] md:w-[95%] sm:[95%] min-[320px]:w-auto justify-center     flex-wrap">
            {cartItems.map((items, index) => {
              console.log(items);
  
              key = { index };
              return <TemList fooditem={items} />;
            })}
          </div>
  
  
          <div className="mb-10  flex  justify-end">
            <button className="bg-green-600 p-3 hover:bg-green-700 text-xl lg:text-xl sm:text-base min-[320px]:text-base rounded-md text-white">
  
              Order item
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default Cart;