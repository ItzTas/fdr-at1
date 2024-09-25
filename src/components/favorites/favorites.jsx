import PropTypes from 'prop-types';
import styles from './favorites.module.css';

export default function Favorites({ hotels }) {
    return (
        <div className={styles.favDiv}>
            {hotels.length > 0 ? (
                <div className={styles.innerFavDiv}>
                    <h3 className={styles.h3}>Favoritos: </h3>
                    <ul className={styles.favorites}>
                        {hotels.map((hotel, index) => (
                            <li key={index}>{hotel.name}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className={styles.noFav}>Sem hoteis favoritos ainda</p>
            )}
        </div>
    );
}

Favorites.propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
