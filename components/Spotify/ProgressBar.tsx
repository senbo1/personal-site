import { useRef, type FC, useEffect } from 'react';

interface ProgressProps {
  progress: number;
}

const ProgressBar: FC<ProgressProps> = ({ progress }) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current)
      progressRef.current.style.width = `${Math.floor(progress * 100)}%`;
  }, [progress]);

  return (
    <div className="flex justify-center w-full pl-4 pr-2">
      <div className="w-full h-1 bg-neutral-600 rounded-full">
        <div
          className="h-full rounded-full bg-green-500"
          ref={progressRef}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
