import React from 'react'
import { CDN_URL } from '../utils/constants'
import { addItems } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ItemCard = ({fooditem}) => {

  const MenuItemsCards = fooditem;



  const { name, price, imageId, defaultPrice, description

  } = MenuItemsCards?.card?.info


  const dispatch = useDispatch();

  const handleAddItem = (fooditem) => {


    dispatch (addItems (fooditem) );



  };


// restaurent menu items cart with img
const notify = () => toast("Wow so easy!");

  return (


    <div>
      <hr className="   bg-gray-200 h-0.5 m-auto mt-5 mb-5 "></hr>

      <div className='flex p-1 gap-2 bg-white items-center lg:w-auto sm:w-auto 
    mx-auto m-4 justify-between   '>

        <div className='w-3/4'>
          <h4 className='font-medium  lg:text-lg sm:font-medium min-[320px]:text-sm '>{name}</h4>
          <p className='font-medium text-sm sm:font-medium min-[320px]:text-sm' >{(price || defaultPrice) / 100
          } Rs</p>

          <p className=' text-sm'>{description}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <img className="w-40  border-2 rounded-lg" src={CDN_URL + imageId} alt="food-img" />
          <div className=" hover:visible absolute">
          <button className="border-solid bg-black  text-white p-2 px-4 rounded-lg mt-1 shadow-lg"
            onClick={() => {
               handleAddItem( fooditem )
               toast("Item added to cart 🥳🥳🥳")
              //  {notify}
            }}

          > Add+</button>
            <ToastContainer />

          </div>
          <div>
        {/* <button className="border-solid bg-black  text-white p-2 px-4 rounded-lg mt-1 shadow-lg" onClick={notify, handleAddItem}>Notify!</button>
        <ToastContainer /> */}
      </div>

        </div>


      </div>

    </div>
  )
}

export default ItemCard;