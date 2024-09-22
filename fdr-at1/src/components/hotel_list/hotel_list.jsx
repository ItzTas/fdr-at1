import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import styles from './hotel_list.module.css';
import HotelCard from '../hotel_card/hotel_card';

export default function HotelList({ hotels: initialHotels, margin, gap }) {
    const [hotels, setHotels] = useState([]);

    const getHotels = useCallback(() => {
        if (initialHotels) {
            return setHotels(initialHotels);
        }
        const hotelsStorage = localStorage.getItem('@hotelsList');
        if (!hotelsStorage) {
            const initialHotels = [
                {
                    name: 'Hotel A',
                    stars: 5,
                    desc: 'This is a hotel that will be used as the default for all customers',
                    city: 'São Paulo',
                    state: 'SP',
                    price: 500,
                    imgURL:
                        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.voltaaomundo.pt%2Ffiles%2F2016%2F06%2Fconrad.jpg&f=1&nofb=1&ipt=ebfb3ffd57c9215019eef29393706a3bf3347822e5ffde7d6f5698813c62e873&ipo=images',
                    hotelURL: 'https://example.com/hotel/1',
                },
                {
                    name: 'Hotel B',
                    stars: 4,
                    desc: 'This is a hotel that will be used as the default for all customers',
                    city: 'Rio de Janeiro',
                    state: 'RJ',
                    price: 400,
                    imgURL:
                        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sCyl_SbxWmK61J4Ab7gbcwHaEK%26pid%3DApi&f=1&ipt=5cfb11831c0a2909bb155dde5b64a131bcb497982a904b40d8ddc10337748f5d&ipo=images',
                    hotelURL: 'https://example.com/hotel/1',
                },
            ];
            localStorage.setItem('@hotelsList', JSON.stringify(initialHotels));
            return setHotels(initialHotels);
        }
        return setHotels(JSON.parse(hotelsStorage));
    }, [initialHotels]);

    useEffect(() => {
        getHotels();
    }, [getHotels]);

    return (
        <div
            style={{ margin: margin || '0px', gap: gap || '70px' }}
            className={styles.hotelList}
        >
            {hotels.map((hotel, i) => (
                <HotelCard key={i} {...hotel} />
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
};
