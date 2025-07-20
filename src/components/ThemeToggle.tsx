import { useEffect, useState } from 'react';

function ThemeToggle() {
    // Initialize based on current class or localStorage
    const getInitialTheme = () => {
        if (typeof localStorage !== 'undefined') {
            return localStorage.theme === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    };

    const [dark, setDark] = useState(getInitialTheme);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    return (
        <button
            className="px-2 py-2 border rounded text-xl"
            onClick={() => setDark(!dark)}
        >
            {dark ? '🌙' : '☀️'}
        </button>
    );
}

export default ThemeToggle;
