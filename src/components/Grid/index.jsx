import { React, useEffect, useState } from 'react';
import { getAllProducts } from '../../services/products';
import ProductCard from '../ProductCard';
import './Grid.css';

function Grid() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };
  useEffect(() => { getProducts(); }, []);
  return (
    <div>
      <ul className="grid">
        {
          products.map((element) => (
            <ProductCard
              key={element.id}
              id={element.id}
              title={element.title}
              image={element.image}
            />
          ))
          }
      </ul>
    </div>
  );
}

export default Grid;
