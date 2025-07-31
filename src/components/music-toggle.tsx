"use client";
import { useRef, useState } from "react";
import { Music, Music2, Pause } from "lucide-react";

// Cambia este link por el de tu mp3 (puede ser de Dropbox, Google Drive directo, SoundCloud, etc)
const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="ml-2 flex items-center">
      <button
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        onClick={toggleMusic}
        className="rounded-full p-2 hover:bg-muted transition-colors"
        style={{ outline: "none" }}
      >
        {playing ? <Music2 className="h-5 w-5 text-rose-700" /> : <Music className="h-5 w-5 text-muted-foreground" />}
      </button>
      {/* El audio es invisible */}
      <audio ref={audioRef} src={MUSIC_URL} loop preload="none" />
    </div>
  );
}
