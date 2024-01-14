import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';

const links: {
  href: string;
  Icon: IconType;
}[] = [
  {
    href: 'https://github.com/senbo1',
    Icon: FaGithub,
  },
  {
    href: 'https://twitter.com/senbodev',
    Icon: FaXTwitter,
  },
  {
    href: 'https://www.linkedin.com/in/harshbhadu/',
    Icon: FaLinkedin,
  },
];

const Footer = () => {
  return (
    <footer className="flex gap-4 border-t pt-2 border-neutral-500 justify-center">
      {links.map((link) => {
        const { href, Icon } = link;
        return (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            key={href}
            className='text-neutral-500 hover:text-white transition-all duration-200'
          >
            <Icon className='w-6 h-6'/>
          </Link>
        );
      })}
    </footer>
  );
};

export default Footer;
