import { useSelector } from 'react-redux';
import { useState } from 'react';
import Item from '../components/Item';
import style from './home.module.css';
import Filter from '../components/Filter';
import worldImg from '../img/world.png';

const Home = () => {
  const { countries, totalConfirmed } = useSelector((state) => state.countries);
  const [countryFilter, setcountryFilter] = useState('');
  const numberFormat = new Intl.NumberFormat('en-US');
  const date = new Date().toISOString().slice(0, 10);

  const updateCountryFilter = (e) => {
    setcountryFilter(e.target.value);
  };

  let homeOutput = (
    <p>Loading</p>
  );

  if (countries) {
    homeOutput = (
      <>
        <div className={style.header}>
          <img className={style.map} src={worldImg} alt="world" />
          <div className={style.total}>
            <h2>
              World confirmed cases on
              {` ${date}`}
            </h2>
            <p>
              <span>
                {`${numberFormat.format(totalConfirmed)} `}
              </span>
              Infected
            </p>
          </div>
        </div>
        <div className={style.filterContainer}>
          <Filter updateCountryFilter={updateCountryFilter} />
        </div>
        <div className={style.stats}>
          <h4>Stats by country</h4>
        </div>
        <div className={style.container}>
          {Object.values(countries).filter(({ name }) => (
            name.toLowerCase().startsWith(countryFilter.toLowerCase())
          )).map((country, index) => (
            <Item key={country.id} country={country} index={index} />
          ))}
        </div>
      </>
    );
  }
  return homeOutput;
};

export default Home;
