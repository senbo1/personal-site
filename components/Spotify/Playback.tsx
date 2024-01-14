import { type FC } from 'react';
import { formatTime } from '@/lib/time';

interface PlaybackProps {
  progress_ms: number;
  duration_ms: number;
}

const Playback: FC<PlaybackProps> = ({ progress_ms, duration_ms }) => {
  return (
    <p className={'font-mono text-green-400 h-fit'}>
      {formatTime(Math.floor(progress_ms / 1000))} /{' '}
      {formatTime(Math.floor(duration_ms / 1000))}
    </p>
  );
};

export default Playback;
