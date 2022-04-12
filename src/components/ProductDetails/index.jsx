import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { getOneProduct } from '../../services/products';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProduct = async () => {
    const data = await getOneProduct(id);
    setProduct(data);
    setLoading(false);
  };
  useEffect(() => { getProduct(); }, []);
  const {
    title, price, description, category, image,
  } = product;
  return (
    <div>
      {(loading) ? (
        <div className="loading__text"><strong>I will be with you in a few seconds...</strong></div>
      ) : (
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
      )}
    </div>
  );
}

export default ProductDetails;
