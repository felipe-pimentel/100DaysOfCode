import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Card from '../components/Card';

export default function Home({ posts }) {
  return (
    <section>
      {posts.map(post => (
        <Card post={post} key={post.id} />
      ))}
    </section>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(filename => {
    const id = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return { id, frontmatter };
  });
  return {
    props: {
      posts
    }
  }
}
