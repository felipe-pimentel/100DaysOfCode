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
      <ul className={styles.tags}>
        {tags.map((tag, index) => (
        <li key={index}>
          <Link href={`/tag/${tag.replace('.', '-').toLowerCase()}`}>
            <a>{tag}</a>
          </Link>
        </li>
        ))}
      </ul>
      <Link href={`/day/${id}`}>
        <a className={styles.cardInfos}>
          <h2 className={styles.dayId} >#{title}</h2>
          <p className={styles.excerpt}>{excerpt}</p>
        </a>
      </Link>
    </div>
  );
}

export default Card;
