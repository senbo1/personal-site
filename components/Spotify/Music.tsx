import { type FC, useCallback, useState, useEffect, useRef } from 'react';
import type { Song } from '@/lib/types';
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

interface MusicProps {
  song: Song;
  setShowModal: (showModal: boolean) => void;
}

const Music: FC<MusicProps> = ({ song, setShowModal }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const fetchingRef = useRef<boolean>(false);

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        URL.revokeObjectURL(audio.src);
        setAudio(null);
      }
    };
  }, [audio]);

  const downloadAndPlayPause = useCallback(() => {
    if (fetchingRef.current) return; // prevent multiple fetches

    // if song has changed 
    if (song && (!audio || (audio && song.title !== audio.title))) {
      // if music is already playing then pause
      let wasPlaying: boolean = false;
      if (audio) {
        wasPlaying = !audio.paused;
        audio.pause();
        URL.revokeObjectURL(audio.src); // Remove from memory
      }

      // if No preview is available
      if (song.previewUrl === null) {
        setShowModal(true);
        return;
      }

      fetchingRef.current = true; // set fetching to true
      
      fetch(song.previewUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const objectURL = URL.createObjectURL(blob);
          const newAudio = new Audio(objectURL);
          newAudio.title = song.title;
          newAudio.volume = 0.4;
          if (!wasPlaying) {
            newAudio.play();
          }
          fetchingRef.current = false;
          setAudio(newAudio);
        });
    } else if (audio && !audio.paused) {
      audio.pause();
    } else if (audio && audio.paused) {
      audio.play();
    }
  }, [song, audio, setShowModal]);
  
  return (
    <button onClick={downloadAndPlayPause}>
      {!audio || audio?.paused ? (
        <FaPlay className="h-4" aria-label="Play" />
      ) : (
        <FaPause className="h-4" aria-label="Pause" />
      )}
    </button>
  );
};

export default Music;
