import Link from 'next/link';
import styles from '../styles/Card.module.css'

const Card = ({ post: { id, frontmatter: { title, tags, excerpt } } }) => {
  return (
    <Link href={`/day/${id}`}>
      <a className={styles.card}>
        <h2 className={styles.dayId} >#{title}</h2>
        <ul className={styles.tags}>
          {tags.map((tag, index) => <li key={index}>{tag}</li>)}
        </ul>
        <p className={styles.excerpt}>{excerpt}</p>
      </a>
    </Link>
  );
}
 
export default Card;
