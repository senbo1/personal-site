'use client';

import { BLUR_FADE_DELAY } from '@/app/constants';
import BlurFade from './ui/blur-fade';

const Name = () => {
  return (
    <div className="">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-4xl font-bold mb-6 cursor-pointer">harsh bhadu</h1>
      </BlurFade>
    </div>
  );
};

export default Name;
