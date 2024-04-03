// pages/[productId].js

import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ProductDetails from '../components/ProductDetails';

const products = [
  {
    id: 1,
    name: 'T-shirt Red',
    image: 'https://via.placeholder.com/150',
    price: 10,
    sizes: ['S', 'M', 'L'],
    colors: ['Red'],
  },
  {
    id: 2,
    name: 'T-shirt Blue',
    image: 'https://via.placeholder.com/150',
    price: 15,
    sizes: ['S', 'M', 'L'],
    colors: ['Blue'],
  },
  {
    id: 3,
    name: 'T-shirt Green',
    image: 'https://via.placeholder.com/150',
    price: 20,
    sizes: ['S', 'M', 'L'],
    colors: ['Green'],
  },
  {
    id: 4,
    name: 'T-shirt Yellow',
    image: 'https://via.placeholder.com/150',
    price: 12,
    sizes: ['S', 'M', 'L'],
    colors: ['Yellow'],
  },
  {
    id: 5,
    name: 'T-shirt Black',
    image: 'https://via.placeholder.com/150',
    price: 18,
    sizes: ['S', 'M', 'L'],
    colors: ['Black'],
  },
  {
    id: 6,
    name: 'T-shirt White',
    image: 'https://via.placeholder.com/150',
    price: 16,
    sizes: ['S', 'M', 'L'],
    colors: ['White'],
  },
  // Adicione mais produtos aqui
];

const ProductDetailPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const product = products.find(product => product.id === parseInt(productId));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="container mx-auto py-8">
        {product ? (
          <ProductDetails product={product} />
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;
