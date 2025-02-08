import React from 'react'
import { LiaCartPlusSolid } from "react-icons/lia";

const ProductCard = ({ image, title, price }) => {
  
  return (
    <>
    <div className='col-12 col-md-6 col-xl-3'>
      <div className='product-card bg-white py-4 px-2 rounded-4'>
        <div className='d-flex'>
        <img src={image} className='product-img w-100 mx-auto' alt=''/>
        </div>
        <div className='product-info row mx-0 pt-3'>
          <div className='col-10'>
            <h5 className='product-title'>{title}</h5>
            <p className='product-text m-0'>₦ {price}</p>
          </div>
          <div className='col-2 d-flex justify-content-center'>
            <LiaCartPlusSolid className='fs-2'/>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default ProductCard
