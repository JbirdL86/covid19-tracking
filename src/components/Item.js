import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './item.module.css';
import flagLink from '../countries';

const Item = (props) => {
  const { country, index } = props;
  const { name, today_confirmed: todayConfirmed, id } = country;
  const numberFormat = new Intl.NumberFormat('en-US');

  return (
    <Link
      to={`/country/${id}`}
      className={([1, 0, 0, 1][index % 4]) === 0 ? style.dark : style.light}
    >
      <div className={style.item}>
        <div className={style.imageCont}>
          <img className={style.image} alt="" src={flagLink(country.name).toLowerCase()} />
        </div>
        <div className={style.details}>
          <h3>{name}</h3>
          <p>{numberFormat.format(todayConfirmed)}</p>
        </div>
      </div>
    </Link>
  );
};

Item.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    today_confirmed: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Item;
