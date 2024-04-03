// components/ProductList.js

import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="p-4 border rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          <img src={product.image} alt={product.name} className="w-full h-auto mb-2" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.price}</p>
          <p className="text-gray-600 mb-2">Sizes: {product.sizes.join(', ')}</p>
          <p className="text-gray-600 mb-2">Colors: {product.colors.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
