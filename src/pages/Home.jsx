import React from 'react';
import Header from '../components/Header';
import PlaybackControls from '../components/PlaybackControls';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Header />
            <h1 className="text-3xl font-bold mt-4">Welcome to AI Voice Assistant</h1>
            <p className="mt-2 text-lg">Your personal voice-controlled assistant.</p>
            <PlaybackControls />
        </div>
    );
};

export default Home;