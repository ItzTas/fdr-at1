import PropTypes from 'prop-types';
import { isValidImageURL } from '../../helpers/img';
import styles from './hotel_details.module.css';

export default function HotelDetails({
    hotelsIMGs,
    name,
    desc,
    items,
    services,
    state,
    city,
    price,
}) {
    const storedHotel = localStorage.getItem('@selectedHotel');
    const parsedHotel = JSON.parse(storedHotel) || {};

    const hotelData = {
        hotelsIMGs: hotelsIMGs || parsedHotel.hotelsIMGs || [],
        name: name || parsedHotel.name || '',
        desc: desc || parsedHotel.desc || '',
        items: items || parsedHotel.items || [],
        services: services || parsedHotel.services || [],
        state: state || parsedHotel.state || '',
        city: city || parsedHotel.city || '',
        price: price || parsedHotel.price || 0,
    };

    return (
        <div className={styles.hotelDetails}>
            <h2 className={styles.name}>{hotelData.name}</h2>

            <div className={styles.images}>
                {hotelData.hotelsIMGs.map((img, i) =>
                    isValidImageURL(img) ? (
                        <img
                            className={styles.image}
                            src={img}
                            alt={'Imagem de ' + hotelData.name}
                            key={i}
                        />
                    ) : (
                        <img
                            className={styles.image}
                            src={'https://placehold.co/600x400?text=Invalid+Image'}
                            alt={'Invalid image'}
                            key={i}
                        />
                    ),
                )}
            </div>

            <p className={styles.desc}>{hotelData.desc}</p>

            <div className={styles.listBoxes}>
                <div className={styles.lists}>
                    <h3> Itens: </h3>
                    <ul>
                        {hotelData.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.lists}>
                    <h3> Serviços: </h3>
                    <ul>
                        {hotelData.services.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.locations}>
                <span>
                    <h3> Estado: {hotelData.state}</h3>
                    <h3> Cidade: {hotelData.city}</h3>
                </span>
            </div>

            <p className={styles.price}>
                <span>
                    Preço: R$
                    {hotelData.price.toFixed(2)}
                </span>
            </p>
        </div>
    );
}

HotelDetails.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    services: PropTypes.arrayOf(PropTypes.string),
    hotelsIMGs: PropTypes.arrayOf(PropTypes.string),
    state: PropTypes.string,
    city: PropTypes.string,
    price: PropTypes.number,
};
