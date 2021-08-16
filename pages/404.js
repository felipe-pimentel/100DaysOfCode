import Image from "next/image";
import Link from "next/link"

const NotFound = () => {
  return (
    <article className="not-found">
      <h2>Oh no... :(</h2>
      <div>
        <Image
          src="https://c.tenor.com/1zi9Ppr4YDsAAAAj/travolta-lost.gif"
          width={300}
          height={300}
          alt="Lost John Travolta"
        />
      </div>
      <p>Você parece perdido, mas não se preocupe.</p>
      <p>
        <Link href="/">
          <a>Venha, vamos pra casa...</a>
        </Link>
      </p>
    </article>
  );
}

export default NotFound;
