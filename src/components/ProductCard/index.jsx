import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';

function ProductCard(props) {
  const { id, title, image } = props;
  return (
    <li className="card">
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className="image"
        />
        <div>{title}</div>
      </Link>
    </li>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
};

ProductCard.defaultProps = {
  id: '',
  title: '',
  image: '',
};

export default ProductCard;
