import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Link from 'next/link'

const dailyPost = ({ id, frontmatter: { title, tags }, content }) => {
  return (
    <article>
      <h2>Dia #{title}</h2>
      {/* <ul className="post-tags">
        {tags.map((tag, index) => (<li key={index}>{tag}</li>))}
      </ul> */}
      <ul className="post-tags">
        {tags.map((tag, index) => (
        <li key={index}>
          <Link href={`/tag/${tag.replace('.', '-').toLowerCase()}`}>
            <a>{tag}</a>
          </Link>
        </li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={ { __html: marked(content) } }></div>
    </article>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map(filename => ({ params: { id: filename.replace('.md', '') } }));
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { id } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', id + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { id, frontmatter, content } };
}

export default dailyPost;
