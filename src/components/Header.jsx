import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-500 p-4">
            <h1 className="text-white text-2xl">AI Voice Assistant</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:underline">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:underline">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;