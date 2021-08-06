import styles from '../styles/Card.module.css'

const Card = ({ post:{ frontmatter: { title, tags, excerpt } } }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.dayId} >#{title}</h2>
      <ul className={styles.tags}>
        {tags.map((tag, index) => <li key={index}>{tag}</li>)}
      </ul>
      <p className={styles.excerpt}>{excerpt}</p>
    </div>
  );
}
 
export default Card;
