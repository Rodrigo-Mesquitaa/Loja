// pages/index.js

import React from 'react';
import { motion } from 'framer-motion';
import ProductList from '../components/ProductList';

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
    sizes: ['S', 'M'],
    colors: ['Yellow'],
  },
  {
    id: 5,
    name: 'T-shirt Black',
    image: 'https://via.placeholder.com/150',
    price: 18,
    sizes: ['M', 'L'],
    colors: ['Black'],
  },
  {
    id: 6,
    name: 'T-shirt White',
    image: 'https://via.placeholder.com/150',
    price: 16,
    sizes: ['S', 'L'],
    colors: ['White'],
  },
];

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <ProductList products={products} />
      </div>
    </motion.div>
  );
};

export default Home;
