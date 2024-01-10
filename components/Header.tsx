'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

const Header: React.FC = () => {
  const [name, setName] = useState('Harsh');
  const headingRef = useRef<HTMLAnchorElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const captialLetters = letters.toUpperCase();

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    let iteration = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (name === 'Senbo') {
      setName('Harsh');
    } else {
      setName('Senbo');
    }

    intervalRef.current = setInterval(() => {
      headingRef.current!.innerText = name
        .split('')
        .map((_, index) => {
          if (index < iteration) {
            return name[index];
          } else if (index === 0) {
            return captialLetters[
              Math.floor(Math.random() * captialLetters.length)
            ];
          } else {
            return letters[Math.floor(Math.random() * letters.length)];
          }
        })
        .join('');

      if (intervalRef.current && iteration === name.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 25);
  };

  return (
    <header className="flex items-center my-4">
      <h1
        className="text-xl font-bold cursor-pointer select-none"
      >
        <Link href="https://twitter.com/senbodev" rel='noopener noreferrer' target='_blank' onMouseEnter={handleMouseEnter} ref={headingRef}>Senbo</Link>
      </h1>
    </header>
  );
};

export default Header;
