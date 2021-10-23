import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './details.module.css';
import countryLink from './countries';

const Details = () => {
  const { id } = useParams();
  const countries = useSelector((state) => state.countries.countries);
  const numberFormat = new Intl.NumberFormat('en-US');
  const date = new Date().toISOString().slice(0, 10);

  let item = (
    <p>Loading</p>
  );

  if (countries && Object.values(countries).length > 0) {
    const countryDetail = Object.values(countries).find((country) => country.id === id);
    item = (
      <div className={style.detailsCont}>
        <div className={style.header}>
          <div className={style.imageCont}>
            <img className={style.image} alt="" src={countryLink(countryDetail.name).toLowerCase()} />
          </div>
          <div className={style.details}>
            <h2>{`${countryDetail.name} `}</h2>
            <p data-testid="todayConfirmed">{numberFormat.format(countryDetail.today_confirmed)}</p>
            <p>Currently infected</p>
          </div>
        </div>
        <div className={style.cities}>
          <h4>
            Stats by cities on
            {` ${date}`}
          </h4>
          <ul data-testid="cities" className={countryDetail.regions.length === 0 ? style.list : ''}>
            {countryDetail.regions.length === 0 ? (
              <h2>No cities to show</h2>
            ) : countryDetail.regions.map((region, index) => (
              <li
                key={region.id}
                className={([1, 0][index % 2]) === 0 ? style.dark : style.light}
              >
                <h3>{region.name}</h3>
                <p>
                  Confirmed:
                  {` ${numberFormat.format(region.today_confirmed)}`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return item;
};

export default Details;
