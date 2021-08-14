import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <Link href="https://github.com/felipe-pimentel">
        <a>LinkedIn
          {/* <Image
            src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg"
            alt="GitHub logo"
            height="1.5rem"
            width="1.5rem"
          /> */}
        </a>
      </Link>
      <Link href="linkedin.com/in/felipe-pimentel-web-dev/">
        <a>GitHub
          {/* <Image
            src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn logo"
            height="1.5rem"
            width="1.5rem"
          /> */}
        </a>
      </Link>
    </footer>
  );
}
 
export default Footer;
