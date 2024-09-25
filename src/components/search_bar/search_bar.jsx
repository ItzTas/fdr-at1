import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export default function SearchBar({ getSearch }) {
    const margin = {
        margin: '30px 0 0 0',
    };

    return (
        <div>
            <TextField
                sx={margin}
                variant='outlined'
                fullWidth
                label='Procurar hotel'
                onChange={(e) => {
                    getSearch(e.target.value);
                }}
            />
        </div>
    );
}

SearchBar.propTypes = {
    getSearch: PropTypes.func.isRequired,
};
