import { Alert, Button, Snackbar, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import styles from './add_hotel.module.css';

export default function AddHotel({ onAdd, editingHotel }) {
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const fontSize = { fontSize: 'clamp(1.3rem, 1.34vw, 1.7rem)' };

    const [hotelData, setHotelData] = useState({
        name: '',
        imgURL: '',
        stars: '',
        city: '',
        state: '',
        price: '',
        desc: '',
    });

    function handleCloseSnack(reason) {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    function handleAdd(event) {
        event.preventDefault();
        if (
            hotelData.name.trim() === '' ||
            hotelData.imgURL.trim() === '' ||
            hotelData.stars === '' ||
            hotelData.city.trim() === '' ||
            hotelData.price === '' ||
            hotelData.desc.trim() === '' ||
            hotelData.state.trim() === ''
        ) {
            setErrorMessage('Todos os campos devem ser preenchidos.');
            setOpen(true);
            return;
        }

        const price = parseFloat(hotelData.price);
        const stars = parseInt(hotelData.stars);

        if (isNaN(price) || isNaN(stars)) {
            setErrorMessage('A classificação e o preço devem ser numéricos.');
            setOpen(true);
            return;
        }

        if (hotelData.stars > 5 || hotelData.stars < 1) {
            setErrorMessage('A classificação deve estar entre 1 e 5 estrelas.');
            setOpen(true);
            return;
        }

        if (price < 0) {
            setErrorMessage('O preço não pode ser negativo.');
            setOpen(true);
            return;
        }

        const { name, imgURL, desc, city, state } = hotelData;
        onAdd({ name, imgURL, desc, city, state, price, stars });
        setHotelData({
            name: '',
            imgURL: '',
            stars: '',
            city: '',
            state: '',
            price: '',
            desc: '',
        });
    }

    useEffect(() => {
        if (editingHotel) {
            return setHotelData(editingHotel);
        }
        setHotelData({
            name: '',
            imgURL: '',
            stars: '',
            city: '',
            state: '',
            price: '',
            desc: '',
        });
    }, [editingHotel]);

    function handleChange(event) {
        const { name, value } = event.target;
        setHotelData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <>
            <form className={styles.form}>
                <TextField
                    label='Nome do Hotel'
                    variant='outlined'
                    fullWidth
                    name='name'
                    value={hotelData.name}
                    onChange={handleChange}
                    margin='normal'
                />
                <TextField
                    label='URL da Imagem'
                    variant='outlined'
                    fullWidth
                    name='imgURL'
                    value={hotelData.imgURL}
                    onChange={handleChange}
                    margin='normal'
                />
                <TextField
                    label='Classificação entre 1 a 5 (Estrelas) '
                    variant='outlined'
                    fullWidth
                    name='stars'
                    value={hotelData.stars}
                    onChange={handleChange}
                    margin='normal'
                />
                <TextField
                    label='Cidade'
                    variant='outlined'
                    fullWidth
                    name='city'
                    value={hotelData.city}
                    onChange={handleChange}
                    margin='normal'
                />
                <TextField
                    label='Estado'
                    variant='outlined'
                    fullWidth
                    name='state'
                    value={hotelData.state}
                    onChange={handleChange}
                    margin='normal'
                />
                <TextField
                    label='Preço da Diária (R$)'
                    variant='outlined'
                    fullWidth
                    name='price'
                    value={hotelData.price}
                    onChange={handleChange}
                    margin='normal'
                />
                <TextField
                    label='Descrição'
                    variant='outlined'
                    fullWidth
                    name='desc'
                    value={hotelData.desc}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    margin='normal'
                />
                <Button
                    className={styles.button}
                    variant='contained'
                    onClick={(event) => {
                        handleAdd(event);
                    }}
                    color='secondary'
                    size='large'
                    sx={{ ...fontSize, lineHeight: '1px' }}
                    startIcon={<AddIcon />}
                >
                    {editingHotel ? 'Editar' : 'Adicionar'}
                </Button>
            </form>
            <Snackbar open={open}>
                <Alert
                    onClose={handleCloseSnack}
                    severity='error'
                    sx={{ width: '100%' }}
                >
                    {errorMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

AddHotel.propTypes = {
    onAdd: PropTypes.func.isRequired,
    editingHotel: PropTypes.object,
};
