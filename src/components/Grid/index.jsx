import { React, useEffect, useState } from 'react';
import { getAllProducts } from '../../services/products';
import ProductCard from '../ProductCard';
import './Grid.css';

function Grid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
    setLoading(false);
  };
  useEffect(() => { getProducts(); }, []);
  return (
    <div>
      {(loading) ? (
        <div className="loading__text"><strong>I will be with you in a few seconds...</strong></div>
      ) : (
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
      )}
    </div>
  );
}

export default Grid;
