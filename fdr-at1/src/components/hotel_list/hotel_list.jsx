import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import styles from './hotel_list.module.css';
import HotelCard from '../hotel_card/hotel_card';

export default function HotelList({
    hotels: initialHotels,
    margin,
    gap,
    onEdit,
    onDelete,
    searchTerm,
}) {
    const [hotels, setHotels] = useState([]);

    const getHotels = useCallback(() => {
        if (initialHotels.length > 0) {
            localStorage.setItem('@hotelsList', JSON.stringify(initialHotels));
            return setHotels(initialHotels);
        }
        const hotelsStorage = localStorage.getItem('@hotelsList');
        if (hotelsStorage) {
            return setHotels(JSON.parse(hotelsStorage));
        }
    }, [initialHotels]);

    useEffect(() => {
        getHotels();
    }, [getHotels]);

    const filteredHotels = hotels.filter((hotel) => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
            hotel.name.toLowerCase().includes(lowerSearchTerm) ||
            hotel.city.toLowerCase().includes(lowerSearchTerm) ||
            hotel.state.toLowerCase().includes(lowerSearchTerm) ||
            !searchTerm
        );
    });

    return (
        <div
            style={{ margin: margin || '0px', gap: gap || '70px' }}
            className={styles.hotelList}
        >
            {filteredHotels.map((hotel, i) => (
                <HotelCard
                    onDelete={onDelete}
                    onEdit={onEdit}
                    index={i}
                    key={i}
                    {...hotel}
                />
            ))}
        </div>
    );
}

HotelList.propTypes = {
    hotels: PropTypes.arrayOf(
        PropTypes.shape({
            desc: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            stars: PropTypes.number.isRequired,
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            imgURL: PropTypes.string.isRequired,
            hotelURL: PropTypes.string.isRequired,
        }),
    ),
    margin: PropTypes.string,
    gap: PropTypes.string,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    searchTerm: PropTypes.string,
};
