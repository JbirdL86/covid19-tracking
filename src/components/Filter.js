import PropTypes from 'prop-types';
import style from './filter.module.css';

const Filter = (props) => {
  const { updateCountryFilter } = props;

  return (
    <div className={style.filterCountry}>
      <input className={style.inputFilter} type="text" placeholder="Enter country name" onChange={updateCountryFilter} />
    </div>
  );
};

Filter.propTypes = {
  updateCountryFilter: PropTypes.func.isRequired,
};

export default Filter;
