import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styles from './hotel_card.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function HotelCard({
    hotelURL,
    imgURL,
    name,
    desc,
    stars,
    city,
    state,
    price,
    onEdit,
    index,
    onDelete,
}) {
    const [imgLoaded, setImgLoaded] = useState(true);
    const [hotelData, setHotelData] = useState({
        name,
        desc,
        stars,
        city,
        state,
        price,
        imgURL,
    });

    useEffect(() => {
        setHotelData({ name, desc, stars, city, state, price, imgURL });
    }, [name, desc, stars, city, state, price, imgURL]);

    function renderStars() {
        return Array.from({ length: hotelData.stars }, (_, i) => (
            <span key={i} className={styles.hotelStar}>
                ⭐
            </span>
        ));
    }

    function handleCardClick() {
        const hotelInfo = {
            name: hotelData.name,
            city: hotelData.city,
            state: hotelData.state,
            price: hotelData.price,
        };
        localStorage.setItem('@selectedHotel', JSON.stringify(hotelInfo));
    }

    function handleEdit(event) {
        event.preventDefault();
        onEdit(hotelData, index);
    }

    function handleDelete(event) {
        event.preventDefault();
        onDelete(index);
    }

    return (
        <Link className={styles.link} to={hotelURL} onClick={handleCardClick}>
            <div className={styles.hotelCard}>
                {imgLoaded ? (
                    <img
                        className={styles.imgCard}
                        src={hotelData.imgURL}
                        alt={hotelData.name}
                        onError={() => setImgLoaded(false)}
                    />
                ) : (
                    <div className={styles.imgCard}>Imagem não disponível</div>
                )}
                <h2 className={styles.hotelName}>{hotelData.name}</h2>
                <p>
                    {hotelData.desc.length > 59
                        ? hotelData.desc.substring(0, 56) + '...'
                        : hotelData.desc}
                </p>
                <div className={styles.hotelStars}>{renderStars()}</div>
                <div className={styles.infos}>
                    <div className={styles.state}>Estado: {hotelData.state}</div>
                    <div className={styles.city}>Cidade: {hotelData.city}</div>
                    <div className={styles.price}>
                        Preço: R${hotelData.price.toFixed(2)}
                    </div>
                </div>
                <Button
                    startIcon={<EditIcon />}
                    variant='contained'
                    onClick={(event) => {
                        handleEdit(event);
                    }}
                >
                    Editar
                </Button>
                <Button
                    startIcon={<DeleteIcon />}
                    variant='contained'
                    color='error'
                    onClick={(event) => {
                        handleDelete(event);
                    }}
                >
                    Deletar
                </Button>
            </div>
        </Link>
    );
}

HotelCard.propTypes = {
    imgURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    hotelURL: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onEdit: PropTypes.func,
    index: PropTypes.number,
    onDelete: PropTypes.func,
};
