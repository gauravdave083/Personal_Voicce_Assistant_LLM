<<<<<<< HEAD
# AI Voice Assistant Frontend

## Overview
This project is the frontend for the AI Voice Assistant, built using React and Tailwind CSS. It provides a user interface for interacting with the voice assistant, allowing users to control media playback and access various features through voice commands.

## Features
- Responsive design using Tailwind CSS
- Header component with navigation links
- Playback controls for media management
- Home page that integrates all components

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-voice-assistant-frontend.git
   cd ai-voice-assistant-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage
- Use the header navigation to access different sections of the application.
- Control media playback using the playback controls provided on the home page.

## Future Enhancements
- Add more pages and components for additional features.
- Improve accessibility and user experience.
- Integrate with the backend API for real-time voice assistant functionality.

## License
MIT License. See [LICENSE](LICENSE) for details.
=======
# AI Voice Assistant

## Overview
The AI Voice Assistant is a local-first, LLM-powered assistant with wake-word detection, voice input, and media playback features. It integrates speech-to-text (STT), large language model (LLM) processing, and text-to-speech (TTS) for real-time conversations. Additionally, it supports Spotify and YouTube playback through voice commands.

## Features
- Wake-word activation ("Hey Nova" by default)
- Real-time speech-to-text (STT) for voice prompts
- LLM integration (via Ollama / OpenAI API / custom models)
- Text-to-speech (TTS) responses
- Spotify playback control (play, pause, next, search)
- YouTube search and playback
- React-based frontend for playback & UI
- Docker Compose setup for backend + frontend

## Architecture
1. **Wake-word Engine** (Picovoice Porcupine / Snowboy)
2. **Backend API** (FastAPI/Node.js)
   - STT service (Whisper / DeepSpeech)
   - LLM service (Ollama / OpenAI)
   - Media control service (Spotify Web API + YouTube API)
3. **Frontend** (React + Tailwind)
   - Audio streaming (WebRTC / WebSocket)
   - Playback controls (Spotify SDK, YouTube iframe)
   - Live transcript + response display

## Setup
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/voice-assistant.git
   cd voice-assistant
   ```

2. Start services with Docker Compose
   ```bash
   docker-compose up --build
   ```

3. Configure `.env` with your API keys:
   - `OPENAI_API_KEY`
   - `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`
   - `YOUTUBE_API_KEY`

4. Run the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Usage
- Say **"Hey Nova"** to activate the assistant
- Speak your command (e.g., "Play Imagine Dragons on Spotify")
- Assistant will process, respond with voice, and control playback

## Future Enhancements
- Multi-language support
- Offline STT/TTS models
- Integration with smart home devices
- Personal knowledge base (RAG pipeline)

## License
MIT License. See [LICENSE](LICENSE) for details.
>>>>>>> 6c2545506d5fadce0f6908c34c269a19b1ad897e
