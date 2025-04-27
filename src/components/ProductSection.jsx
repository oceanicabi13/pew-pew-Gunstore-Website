import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/data';
const ProductSection = () => {
    return (
    <div className=" bg-black">
        <div id="product">
        <div className="p-10">
            <h2 className="text-white text-3x1 font bold mb-6 text-center">Our Guns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                )
                )}
            </div>
            </div>
        </div>
        </div>
    )
}

export default ProductSection;