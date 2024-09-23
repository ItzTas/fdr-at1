import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './hotel_card.module.css';
import { Link } from 'react-router-dom';

export default function HotelCard({
  hotelURL,
  imgURL,
  name,
  desc,
  stars,
  city,
  state,
  price,
}) {
  const [imgLoaded, setImgLoaded] = useState(true);
  if (desc.length > 60) {
    desc = desc.substring(0, 57) + '...';
  }

  function renderStars() {
    const starElements = [];
    for (let i = 0; i < stars; i++) {
      starElements.push(
        <span key={i} className={styles.hotelStar}>
          ⭐
        </span>,
      );
    }
    return starElements;
  }
  return (
    <Link className={styles.link} to={hotelURL}>
      <div className={styles.hotelCard}>
        {imgLoaded ? (
          <img
            className={styles.imgCard}
            src={imgURL}
            alt={name}
            onError={() => setImgLoaded(false)}
          />
        ) : (
          <div className={styles.imgCard}>Imagem não disponivel</div>
        )}
        <h2 className={styles.hotelName}>{name}</h2>
        <p>{desc}</p>
        <div className={styles.hotelStars}> {renderStars()}</div>
        <div className={styles.infos}>
          <div className={styles.state}>Estado: {state}</div>
          <div className={styles.city}>Cidade: {city}</div>
          <div className={styles.price}>Preço: R${price.toFixed(2)}</div>
        </div>
      </div>
    </Link>
  );
}

HotelCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  hotelURL: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
