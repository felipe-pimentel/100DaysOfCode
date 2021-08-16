import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href="/"><a><h1>#100DaysOfCode</h1></a></Link>
      <nav>
        <Link href="/"><a>HOME</a></Link>
        <Link href="/tags"><a>TAGS</a></Link>
        <Link href="/about"><a>ABOUT</a></Link>
      </nav>
    </header>
  );
}
 
export default Header;
