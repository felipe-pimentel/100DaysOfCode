import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>#100DaysOfCode</h1>
      <nav>
        <Link href="/"><a>HOME</a></Link>
        <Link href="/tags"><a>TAGS</a></Link>
        <Link href="/about"><a>ABOUT</a></Link>
      </nav>
    </header>
  );
}
 
export default Header;
