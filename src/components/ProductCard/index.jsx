import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';

function ProductCard(props) {
  const { id, title, image } = props;
  return (
    <li className="card__container">
      <img
        src={image}
        alt={title}
        className="card__image"
      />
      <div className="card__title">{title}</div>
      <div className="card__bottom">
        <div className="card__timer">Timer</div>
        <Link to={`/productdetails/${id}`} className="card__detail">Product detail</Link>
      </div>
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
