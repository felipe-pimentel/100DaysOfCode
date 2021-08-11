import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const TagsList = ({ tags }) => {
  return (
    <article>
      <h2>Tags</h2>
      <ul>
        {tags.map((tag, index) => (
        <li key={index}>
          <Link href={`/tag/${tag.replace('.', '-').toLowerCase()}`}>
            <a>{tag}</a>
          </Link>
        </li>
        ))}
      </ul>
    </article>
  );
}

export async function getStaticProps() {
  const tagsList = [];
  const files = fs.readdirSync(path.join('posts'));
  files.forEach((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: { tags } } = matter(markdownWithMeta);
    tags.forEach((tag) => { if (!tagsList.includes(tag)) tagsList.push(tag) });
  });
  return {
    props: {
      tags: tagsList
    }
  }
}
 
export default TagsList;
