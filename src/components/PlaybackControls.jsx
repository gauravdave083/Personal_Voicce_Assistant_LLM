import React from 'react';

const PlaybackControls = () => {
    const handlePlay = () => {
        // Logic to play media
    };

    const handlePause = () => {
        // Logic to pause media
    };

    const handleNext = () => {
        // Logic to skip to the next track
    };

    const handlePrevious = () => {
        // Logic to go to the previous track
    };

    return (
        <div className="flex justify-center space-x-4">
            <button onClick={handlePrevious} className="bg-blue-500 text-white p-2 rounded">Previous</button>
            <button onClick={handlePlay} className="bg-green-500 text-white p-2 rounded">Play</button>
            <button onClick={handlePause} className="bg-yellow-500 text-white p-2 rounded">Pause</button>
            <button onClick={handleNext} className="bg-blue-500 text-white p-2 rounded">Next</button>
        </div>
    );
};

export default PlaybackControls;