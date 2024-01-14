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
import Image from 'next/image';
import wallpaper from '@/public/wall.jpg';

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
          setSong(undefined);
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
      <section className="flex flex-col gap-1">
        <h2 className="font-bold flex items-center gap-2 underline-gray">
          <FaSpotify className="h-6 ml-1" />
          Nothing Playing Right now!
        </h2>
        <div className="flex justify-center">
          <Image src={wallpaper} alt="Chill Clouds Image"/>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-2">
      {song.previewUrl === null && showModal && (
        <Modal onClose={handleModalClose} />
      )}
      <h2 className="font-bold flex items-center gap-2 underline-gray cursor-default">
        <FaSpotify className="h-6 ml-1 fill-green-600 duration-200" />
        Currently {song.isCurrentlyPlaying ? 'Listening' : 'Paused'}
      </h2>
      <div className="flex">
        <Image
          src={song.album.image}
          alt="Album cover"
          width={60}
          height={60}
          className="rounded-md"
        />
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between px-2">
            <a
              className="font-mono tracking-tight flex flex-col ml-2 w-1/3 overflow-hidden"
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
              className='w-1/3 flex justify-end'
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
