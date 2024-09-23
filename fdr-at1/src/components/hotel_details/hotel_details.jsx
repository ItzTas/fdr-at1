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
}) {
    return (
        <div className={styles.hotelDetails}>
            <h2 className={styles.name}>{name}</h2>

            <div className={styles.images}>
                {hotelsIMGs.map((img, i) =>
                    isValidImageURL(img) ? (
                        <img
                            className={styles.image}
                            src={img}
                            alt={'Imagem de ' + name}
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

            <p className={styles.desc}>{desc}</p>

            <div className={styles.listBoxes}>
                <div className={styles.lists}>
                    <h3> Itens: </h3>
                    <ul>
                        {items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.lists}>
                    <h3> Serviços: </h3>
                    <ul>
                        {services.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.locations}>
                <h3>Cidade: </h3>
            </div>
        </div>
    );
}

HotelDetails.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    services: PropTypes.arrayOf(PropTypes.string).isRequired,
    hotelsIMGs: PropTypes.arrayOf(PropTypes.string).isRequired,
    state: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
};
