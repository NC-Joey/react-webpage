import React from 'react'
import ProductCard from './ProductCard'
import { products } from './ProductList'
import backpack from '../assets/images/products-white/backpack.jpg'
import bottle from '../assets/images/products-white/bottle.jpg'
import clock from '../assets/images/products-white/clock.jpg'
import hoodie from '../assets/images/products-white/hoodie.jpg'
import mug from '../assets/images/products-white/mug.jpg'
import notebook from '../assets/images/notebook.jpg'
import pouch from '../assets/images/products-white/pouch.jpg'
import shorts from '../assets/images/products-white/shorts.jpg'
import toteBag from '../assets/images/products-white/tote_bag.jpg'
import tumbler from '../assets/images/products-white/tumbler.jpg'


const Products = () => {
    const assets = [backpack, bottle, clock, hoodie, mug, notebook, pouch, shorts, toteBag, tumbler]
    console.log(assets)
    return (
        <div className='row mx-0 g-4 px-3 pt-4 px-md-5'>
            {products.map(product => <ProductCard image={product.image} title={product.title} price={product.price} />)}
        </div>
  )
}

export default Products
