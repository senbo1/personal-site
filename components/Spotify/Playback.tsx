import { type FC } from 'react';
import { formatTime } from '@/lib/time';
import { cn } from '@/lib/utils';

interface PlaybackProps extends React.HTMLAttributes<HTMLParagraphElement>{
  progress_ms: number;
  duration_ms: number;
}

const Playback: FC<PlaybackProps> = ({ progress_ms, duration_ms, className }) => {
  return (
    <p className={cn('font-mono text-green-400 h-fit', className)}>
      {formatTime(Math.floor(progress_ms / 1000))} /{' '}
      {formatTime(Math.floor(duration_ms / 1000))}
    </p>
  );
};

export default Playback;
