import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { getOneProduct } from '../../services/products';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const data = await getOneProduct(id);
    setProduct(data);
  };
  useEffect(() => { getProduct(); }, []);
  const {
    title, price, description, category, image,
  } = product;
  return (
    <div className="details__container">
      <div className="details__title">{title}</div>
      <img
        src={image}
        alt={title}
        className="details__image"
      />
      <div>
        <div className="details__price">
          <strong>Precio (USD): </strong>
          {price}
        </div>
        <ul className="details_list">
          <li>
            <strong>Categoría: </strong>
            {category}
          </li>
          <li>
            <strong>Descripción: </strong>
            {description}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
