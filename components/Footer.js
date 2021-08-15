import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <span>Feito por Felipe Pimentel</span>
      <span>●</span>
      <Link href="https://github.com/felipe-pimentel">
        <a target="_blank">
          <Icon icon="simple-icons:github"
            style={{ fontSize: '1.5rem', color: 'var(--clr-footer-text)' }}
          />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/felipe-pimentel-web-dev/">
        <a target="_blank">
          <Icon icon="simple-icons:linkedin"
            style={{ fontSize: '1.5rem', color: 'var(--clr-footer-text)' }}
          />
        </a>
      </Link>
    </footer>
  );
}
 
export default Footer;
