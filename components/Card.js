import Link from 'next/link';
import styles from '../styles/Card.module.css'

// const Card = ({ post: { id, frontmatter: { title, tags, excerpt } } }) => {
//   return (
//     <Link href={`/day/${id}`}>
//       <a className={styles.card}>
//         <h2 className={styles.dayId} >#{title}</h2>
//         <ul className={styles.tags}>
//           {tags.map((tag, index) => (
//           <li key={index}>
//             <Link href={`/tag/${tag.replace('.', '-').toLowerCase()}`}>
//               <a>{tag}</a>
//             </Link>
//           </li>
//           ))}
//         </ul>
//         <p className={styles.excerpt}>{excerpt}</p>
//       </a>
//     </Link>
//   );
// }

const Card = ({ post: { id, frontmatter: { title, tags, excerpt } } }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h2 className={styles.dayId} >#{title}</h2>
        <ul className={styles.tags}>
          {tags.map((tag, index) => (
          <li key={index}>
            <Link href={`/tag/${tag.replace('.', '-').toLowerCase()}`}>
              <a>{tag}</a>
            </Link>
          </li>
          ))}
        </ul>
      </div>
      <div className={styles.cardBottom}>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link href={`/day/${id}`}>
          <a className={styles.readMoreBtn}>Ler mais</a>
        </Link>
      </div>
    </div>
  );
}

export default Card;
