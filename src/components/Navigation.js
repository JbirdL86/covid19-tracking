import { Link, useLocation } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import style from './navigation.module.css';

const Navigation = () => {
  const path = useLocation();
  return (
    <header>
      <nav className={style.navBar}>
        <Link data-testid="home" to="/">
          { path.pathname !== '/'
            ? (
              <>
                <FaAngleLeft className={style.arrow} />
              </>
            )
            : ''}
        </Link>
        <h3>Covid19 Tracker</h3>
        <div className={style.icons}>
          <FaMicrophone />
          <IoMdSettings />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
