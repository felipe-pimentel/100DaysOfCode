import Link from 'next/link';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer>
      <span>by Felipe Pimentel</span>
      <span>●</span>
      <Link href="https://github.com/felipe-pimentel">
        <a target="_blank">
          <Icon icon="simple-icons:github"
            style={{ fontSize: '1.2rem', color: 'var(--clr-footer-text)' }}
            />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/felipe-pimentel-web-dev/">
        <a target="_blank">
          <Icon icon="simple-icons:linkedin"
            style={{ fontSize: '1.2rem', color: 'var(--clr-footer-text)' }}
            />
        </a>
      </Link>
      <Link href="mailto:lipe.pimentel89@gmail.com">
        <a>
          <Icon icon="simple-icons:maildotru"
            style={{ fontSize: '1.2rem', color: 'var(--clr-footer-text)' }}
            />
        </a>
      </Link>
      <span>●</span>
      <span>2021</span>
    </footer>
  );
}
 
export default Footer;
