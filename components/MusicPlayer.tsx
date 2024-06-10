"use client";

import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = [
    "/music/505.mp3",
    "/music/astro.mp3",
    "/music/blut.mp3",
    "/music/mono.mp3",
    "/music/paranoia.mp3",
    "/music/party.mp3",
    "/music/ru.mp3",
  ];

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const randomIndex = Math.floor(Math.random() * songs.length);
        const randomSong = songs[randomIndex];
        audioRef.current.src = randomSong;
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSongEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="hidden md:fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-3 md:flex items-center space-x-2 select-none">
      <p className="text-gray-800 text-sm">Listen to random music?</p>
      <button
        onClick={togglePlayPause}
        className="focus:outline-none p-1 rounded-full text-orange-500"
      >
        {isPlaying ? (
          <FaPause className="h-4 w-4" />
        ) : (
          <FaPlay className="h-4 w-4" />
        )}
      </button>
      <audio ref={audioRef} onEnded={handleSongEnded} />
    </div>
  );
};

export default MusicPlayer;
