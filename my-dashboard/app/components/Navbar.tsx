import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'; // Import icons from heroicons

const Navbar = () => {
    const [mode, setMode] = useState('system');

    useEffect(() => {
        const savedMode = localStorage.getItem('mode');
        if (savedMode) {
            setMode(savedMode);
        }
        document.documentElement.setAttribute('data-theme', mode);
    }, [mode]);

    const handleModeChange = (newMode) => {
        setMode(newMode);
        localStorage.setItem('mode', newMode);
        if (newMode === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        } else if (newMode === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    };

    return (
        <nav className="flex justify-between p-4 bg-gray-200 dark:bg-gray-800">
            <h1 className="text-xl font-bold">Mode Selector</h1>
            <div className="flex items-center">
                <button onClick={() => handleModeChange('dark')} className="mx-2"><MoonIcon className="h-6 w-6" /></button>
                <button onClick={() => handleModeChange('light')} className="mx-2"><SunIcon className="h-6 w-6" /></button>
                <button onClick={() => handleModeChange('system')} className="mx-2">System</button>
            </div>
        </nav>
    );
};

export default Navbar;
