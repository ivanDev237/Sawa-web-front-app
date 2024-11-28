import React from 'react';
import { Moon, SunMoon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="py-2 px-3 font-semibold"
            onClick={toggleTheme}
        >
            {theme === 'light' ? (<Moon size={18} />) : (<SunMoon size={18} />)}
        </button>
    );
};

export default ThemeToggle;