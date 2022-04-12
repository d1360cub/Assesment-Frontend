/* eslint-disable react/jsx-no-bind */
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import './ProductCard.css';

function ProductCard(props) {
  const { id, title, image } = props;
  const [countdown, setCountdown] = useState(true);
  const [buttonName, setButtonName] = useState('Product detail');
  const handlerIsCompleted = () => {
    setCountdown(false);
    setButtonName('Offer expired');
  };
  return (
    <li className="card__container">
      <img
        src={image}
        alt={title}
        className="card__image"
      />
      <div className="card__title">{title}</div>
      <div className="card__bottom">
        <div className="card__timer">
          <Countdown
            date={Date.now() + parseInt((Math.random() * (300000)), 10)}
            onComplete={handlerIsCompleted}
          />
        </div>
        <Link
          className={countdown ? 'link__active' : 'link__inactive'}
          to={`/productdetails/${id}`}
        >
          {buttonName}
        </Link>
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
