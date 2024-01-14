'use client';

import { useState, useCallback, useEffect, type FC } from 'react';
import type { Song } from '@/lib/types';
import Modal from './Modal';
import ProgressBar from './ProgressBar';
import Playback from './Playback';
import Music from './Music';
import { FaSpotify } from 'react-icons/fa';
import { getCurrentlyPlayingSong } from '@/actions/spotify';
import { cn } from '@/lib/utils';

const Spotify: FC = () => {
  const [song, setSong] = useState<Song>();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    // Fetching song updates at regular interval
    const interval = setInterval(async () => {
      try {
        const res = await getCurrentlyPlayingSong();
        if (res.status === 204) {
          setSong(undefined);
        } else if (res.status === 429) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } else if (res.status === 200) {
          const data = res.data as Song;
          setSong(data);
        } 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
  }, []);

  if (!song) {
    return (
      <section className="flex flex-col gap-1 my-2">
        <h2 className="font-bold flex items-center gap-2 underline-gray hover-transition">
          <FaSpotify className="h-6 ml-1" />
          Nothing Playing Right now!
        </h2>
        <div className="flex justify-center">
          <img src="/wall.jpg" alt="Chill Clouds Image" className="w-full" />
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-2 my-3">
      {song.previewUrl === null && showModal && (
        <Modal onClose={handleModalClose} />
      )}
      <h2 className="font-bold flex items-center gap-2 underline underline-offset-4 decoration-neutral-500 hover-transition group">
        <FaSpotify className="h-6 ml-1 fill-green-600 group-hover:fill-neutral-900 duration-200" />
        Currently {song.isCurrentlyPlaying ? 'Listening' : 'Paused'}
      </h2>
      <div className="flex">
        <img
          src={song.album.image}
          alt="Album cover"
          width={60}
          height={60}
          className="rounded-md"
        />
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between px-2">
            <a
              className="font-mono tracking-tight flex flex-col ml-2 w-[140px] overflow-hidden"
              href={song.externalUrl}
              target="_blank"
            >
              <span
                className={cn('whitespace-nowrap hover-transition truncate', {
                  'w-fit': song.title.length < 15,
                })}
              >
                {song.title}
              </span>
              <span className="text-sm text-neutral-400 truncate">
                {song.artist.name}
              </span>
            </a>
            <Music song={song} setShowModal={setShowModal} />
            <Playback
              progress_ms={song.progress_ms}
              duration_ms={song.duration_ms}
            />
          </div>
          <ProgressBar progress={song.currentProgress} />
        </div>
      </div>
    </section>
  );
};

export default Spotify;

// RIP SEO
