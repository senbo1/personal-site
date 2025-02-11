'use client';

import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type MenuItem = {
  name: string;
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
};

const menuItems: MenuItem[] = [
  {
    name: 'Twitter/X',
    href: 'https://x.com/senbodev',
    isExternal: true,
  },
  {
    name: 'Github',
    href: 'https://github.com/senbo1',
    isExternal: true,
  },
  {
    name: 'Email',
    href: 'mailto:senbodev@gmail.com',
    isExternal: true,
  },
];

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-16 flex justify-center items-center select-none">
      <motion.div
        className="flex flex-col justify-center items-center relative w-full max-w-[640px] mx-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        layout
      >
        <motion.div
          className="bg-foreground rounded-[10px] flex justify-center items-center text-[22px] text-background font-bold italic z-10 relative"
          initial={{ width: '100%', maxWidth: 280, height: 36 }}
          animate={
            isHovered
              ? {
                  width: '60%',
                  maxWidth: 180,
                  height: 40,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }
              : {
                  width: '100%',
                  maxWidth: 280,
                  height: 36,
                }
          }
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 28,
          }}
        >
          Harsh
        </motion.div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="bg-foreground rounded-[10px] absolute top-[40px] w-full"
              initial={{
                width: '90%',
                maxWidth: 280,
                height: 36,
                y: -36,
              }}
              animate={{
                width: '100%',
                maxWidth: 640,
                height: 60,
                padding: 8,
                y: -4,
              }}
              exit={{
                width: '90%',
                maxWidth: 280,
                height: 36,
                y: -40,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 28,
              }}
            >
              <ul className="h-full w-full grid grid-cols-3">
                {menuItems.map((item, index) => (
                  <MenuItem key={item.name} item={item} index={index} />
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const MenuItem = ({ item, index }: { item: MenuItem; index: number }) => {
  return (
    <motion.a
      key={item.name}
      className={cn(
        'text-xs text-background font-mono uppercase rounded-[10px] overflow-hidden',
        { 'bg-background text-foreground': item.isActive }
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.15,
        },
      }}
      transition={{
        duration: 0.2,
        delay: 0.2 + 0.1 * index,
      }}
      href={item.href}
      {...(item.isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
    >
      <motion.div
        className="overflow-hidden h-full flex flex-col justify-center items-center"
        whileHover="hover"
      >
        <MotionConfig
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 25,
          }}
        >
          <motion.span
            initial={{
              y: '-120%',
            }}
            variants={{
              hover: {
                y: '20%',
              },
            }}
          >
            {item.name}
          </motion.span>

          <motion.span
            className={cn('w-[9px] h-[9px] rounded-full bg-background', {
              'bg-foreground': item.isActive,
            })}
            initial={{
              y: '-100%',
            }}
            variants={{
              hover: {
                y: '100%',
              },
            }}
          ></motion.span>

          <motion.span
            initial={{
              y: '-20%',
            }}
            variants={{
              hover: {
                y: '120%',
              },
            }}
          >
            {item.name}
          </motion.span>
        </MotionConfig>
      </motion.div>
    </motion.a>
  );
};

export default Nav;
