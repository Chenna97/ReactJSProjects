import React, { useState } from 'react'
import ProductCard from './ProductCard'
//import {products} from '../data/products.json'
import "../components/ProductCard.css"
const ProductList = ({products,onSelectProduct}) => {
    
    let handleSelectProduct=(product)=>{
       console.log("Selected Product",product);
        //call the function passed from App and pass the selected product
        onSelectProduct(product);
    }
  return (
    <div>
      {
        products.map(product=>
            <ProductCard product={product}
            key={product.productId}
            onViewDetails={()=>handleSelectProduct(product)}
            ></ProductCard>
        )
      }
     
    </div>
  )
}

export default ProductList
