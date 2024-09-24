import PropTypes from 'prop-types';
import { Switch } from '@mui/material';

export default function ThemeToggle({ theme, toggleTheme }) {
    return (
        <div>
            <label>
                Tema {theme === 'light' ? 'Claro' : 'Escuro'}
                <Switch checked={theme === 'dark'} onChange={toggleTheme} />
            </label>
        </div>
    );
}

ThemeToggle.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};
