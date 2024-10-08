import { useEffect, useState } from 'react';
import HotelList from '../../components/hotel_list/hotel_list';
import AddHotel from '../../components/add_hotel/add_hotel';
import SearchBar from '../../components/search_bar/search_bar';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Favorites from '../../components/favorites/favorites';
import ThemeToggle from '../../components/theme_toggle/theme_toggle';

const initialHotels = [
    {
        name: 'Hotel Unique',
        stars: 3,
        desc: 'Um hotel exclusivo e luxuoso em São Paulo, oferecendo serviços de primeira linha.',
        city: 'São Paulo',
        state: 'São Paulo',
        price: 2000,
        imgURL:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.L2-0z8zJwgNcn7O4iYZgdAHaEo%26pid%3DApi&f=1&ipt=bbf625d890debb79f3bb1aed61562ac03c51286de98378592492e9011436d615&ipo=images',
        hotelURL: '/hotels/Hotel+Unique',
    },
    {
        name: 'Copacabana Palace',
        stars: 5,
        desc: 'O Copacabana Palace é um dos hotéis mais renomados do Brasil. Situado em frente à famosa praia de Copacabana, o hotel oferece uma vista magnífica do mar, combinada com uma atmosfera luxuosa e um serviço impecável.',
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
        price: 1200,
        imgURL:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.pDkpTTA2NRLTR9XqUkTXPgHaE5%26pid%3DApi&f=1&ipt=1056759e9442a2e6edfdabf29556b7d7d1547c05300ab72ea6dee6d6041f7aef&ipo=images',
        hotelURL: '/hotels/Copacabana+Palace',
    },
    {
        name: 'Fasano Rio',
        stars: 4,
        desc: 'O Fasano Rio é sinônimo de exclusividade e sofisticação. Localizado na Praia de Ipanema, o hotel é conhecido por seu design arrojado e por oferecer uma das melhores vistas do pôr do sol carioca.',
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
        price: 1500,
        imgURL:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eS0o2FeNwUSUwI357ynUDwHaE8%26pid%3DApi&f=1&ipt=261ae9deec72f7b263137057b93fade119ff191fcf9e78debd9a795f9040329e&ipo=images',
        hotelURL: '/hotels/Fasano+Rio',
    },
];

export default function Home() {
    const [hotels, setHotels] = useState([]);
    const [editingHotel, setEditingHotel] = useState(null);
    const [editingIndex, setEditingIndex] = useState(-1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('price');
    const [favorites, setFavorites] = useState([]);
    const [theme, setTheme] = useState('');

    useEffect(() => {
        let hotelList = localStorage.getItem('@hotelsList');
        if (!hotelList) {
            localStorage.setItem('@hotelsList', JSON.stringify(initialHotels));
            hotelList = localStorage.getItem('@hotelsList');
        }
        setHotels(JSON.parse(hotelList));

        const favoritesList = localStorage.getItem('@favoritesList');
        if (favoritesList) {
            setFavorites(JSON.parse(favoritesList));
        }

        const storedTheme = localStorage.getItem('@theme');
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme('light');
            localStorage.setItem('@theme', 'light');
        }
    }, []);

    useEffect(() => {
        if (!theme) {
            return;
        }
        document.body.className = theme;
        console.log(document.body.className);

        localStorage.setItem('@theme', theme);
    }, [theme]);

    function handleAdd(hotel) {
        if (editingHotel) {
            const updatedHotels = [...hotels];
            updatedHotels[editingIndex] = hotel;
            localStorage.setItem('@hotelsList', JSON.stringify(updatedHotels));
            setHotels(updatedHotels);
            setEditingHotel(null);
            setEditingIndex(-1);
            return;
        }
        const updatedHotels = [...hotels, hotel];
        localStorage.setItem('@hotelsList', JSON.stringify(updatedHotels));
        setHotels(updatedHotels);
    }

    function handleEdit(hotel, index) {
        setEditingHotel(hotel);
        setEditingIndex(index);
    }

    function handleDelete(index) {
        const updatedHotels = [...hotels];
        updatedHotels.splice(index, 1);
        localStorage.setItem('@hotelsList', JSON.stringify(updatedHotels));
        setHotels(updatedHotels);
        setEditingHotel(null);
        setEditingIndex(-1);
    }

    function getSearch(searchTerm) {
        setSearchTerm(searchTerm);
    }

    function handleSortChange(event) {
        setSortBy(event.target.value);
    }

    function handleFavorite(hotel, _, selected) {
        if (selected) {
            const oldFavorites = localStorage.getItem('@favoritesList');
            const parsedOldFavorites = JSON.parse(oldFavorites);
            const cFavorites = [...parsedOldFavorites, hotel];
            setFavorites(cFavorites);
            localStorage.setItem('@favoritesList', JSON.stringify(cFavorites));
            return;
        }
        const oldFavorites = localStorage.getItem('@favoritesList');
        const parsedOldFavorites = JSON.parse(oldFavorites);
        const cFavorites = parsedOldFavorites.filter((h) => h.name !== hotel.name);
        setFavorites(cFavorites);
        localStorage.setItem('@favoritesList', JSON.stringify(cFavorites));
    }

    function toggleTheme() {
        const prevTheme = localStorage.getItem('@theme');
        if (!prevTheme) {
            return;
        }

        let newTheme;

        if (prevTheme === 'light') {
            newTheme = 'dark';
        } else {
            newTheme = 'light';
        }

        setTheme(newTheme);
        localStorage.setItem('@theme', newTheme);
    }

    return (
        <div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <AddHotel editingHotel={editingHotel} onAdd={handleAdd} />
            <SearchBar getSearch={getSearch} />
            <FormControl fullWidth sx={{ marginTop: '30px' }}>
                <InputLabel>Ordenar por</InputLabel>
                <Select value={sortBy} onChange={handleSortChange}>
                    <MenuItem value=''>Não ordenar</MenuItem>
                    <MenuItem value='price'>Preço</MenuItem>
                    <MenuItem value='stars'>Classificação</MenuItem>
                </Select>
            </FormControl>
            <HotelList
                searchTerm={searchTerm}
                onDelete={handleDelete}
                onEdit={handleEdit}
                hotels={hotels}
                margin='20px'
                sortBy={sortBy}
                onFavorite={handleFavorite}
            />
            <Favorites hotels={favorites} />
        </div>
    );
}
