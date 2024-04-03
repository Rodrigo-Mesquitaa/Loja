// components/ProductDetails.js

import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-auto mb-2" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.price}</p>
      <div className="mb-2">
        <label htmlFor="size" className="mr-2 font-semibold">Size:</label>
        <select id="size" className="p-2 border rounded-md">
          {product.sizes.map(size => (
            <option key={size}>{size}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="color" className="mr-2 font-semibold">Color:</label>
        <select id="color" className="p-2 border rounded-md">
          {product.colors.map(color => (
            <option key={color}>{color}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductDetails;
