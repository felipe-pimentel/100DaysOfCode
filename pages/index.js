import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Card from '../components/Card';

export default function Home({ posts }) {
  return (
    <section>
      {posts.map(post => (
        <Card post={post} key={post.slug} />
      ))}
    </section>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });
  return {
    props: {
      posts
    }
  }
}
