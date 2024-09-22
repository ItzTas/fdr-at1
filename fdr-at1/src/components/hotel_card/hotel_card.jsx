import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './hotel_card.module.css';

export default function HotelCard({ hotelSiteURL, imgURL, name, desc, stars }) {
    const [imgLoaded, setImgLoaded] = useState(true);

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
        <a href={hotelSiteURL}>
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
            </div>
        </a>
    );
}

HotelCard.propTypes = {
    imgURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    hotelSiteURL: PropTypes.string.isRequired,
};
