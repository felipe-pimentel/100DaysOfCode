import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Card from '../../components/Card';

const postsByTag = ({ postsByTag }) => {
  return (
    <section>
      {postsByTag.map(post => (
        <Card post={post} key={post.id} />
      ))}
    </section>
  );
}

export async function getStaticPaths() {
  const tagsList = [];
  const files = fs.readdirSync(path.join('posts'));
  files.forEach((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: { tags } } = matter(markdownWithMeta);
    tags.forEach((tag) => { if (!tagsList.includes(tag)) tagsList.push(tag) });
  });
  const paths = tagsList.map((currentTag) => (
    { params: { tag: currentTag.replace('.', '-').toLowerCase() }}
  ));
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { tag } }) {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(filename => {
    const id = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    const tagsLinks = frontmatter.tags.map((tag) => tag.replace('.', '-').toLowerCase());
    return { id, frontmatter, tagsLinks };
  }).filter((post) => post.tagsLinks.includes(tag));
  return {
    props: {
      postsByTag: posts
    }
  }
}

export default postsByTag;
