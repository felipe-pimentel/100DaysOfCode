import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const TagsList = ({ tags }) => {
  return (
    <article>
      <h2>Tags</h2>
      <ul className="tags-list">
        {tags.map((tag, index) => (
        // <li key={index} style={{gridColumn: `span ${tag[1]}`, gridRow: `span ${tag[1]}`}}>
        <li key={index} style={{'--span': `${tag[1]}`}}>
          <Link href={`/tag/${tag[0].replace('.', '-').toLowerCase()}`}>
            <a>
              <p>{tag[0]}</p>
            </a>
          </Link>
        </li>
        ))}
      </ul>
    </article>
  );
}

// export async function getStaticProps() {
//   const tagsList = [];
//   const files = fs.readdirSync(path.join('posts'));
//   files.forEach((filename) => {
//     const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
//     const { data: { tags } } = matter(markdownWithMeta);
//     tags.forEach((tag) => { if (!tagsList.includes(tag)) tagsList.push(tag) });
//   });
//   return {
//     props: {
//       tags: tagsList
//     }
//   }
// }

const spanValue = (currentValue, maxValue) => {
  const ratio = currentValue / maxValue;
  // if (ratio > 0.8) return 5;
  // if (ratio > 0.6) return 4;
  // if (ratio > 0.4) return 3;
  // if (ratio > 0.2) return 2;
  if (ratio > 0.75) return 4;
  if (ratio > 0.5) return 3;
  if (ratio > 0.25) return 2;
  return 1;
}

const defineTagsSpans = (tagsList) => {
  const mostUsedTag = Math.max(...tagsList.map(tag => tag[1]));
  return tagsList.map((tag) => {
    tag[1] = spanValue(tag[1], mostUsedTag);
    return tag;
  })
};

export async function getStaticProps() {
  const tagsList = {};
  const files = fs.readdirSync(path.join('posts'));
  files.forEach((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: { tags } } = matter(markdownWithMeta);
    tags.forEach((tag) => {
      if (!tagsList[tag]) {
        tagsList[tag] = 1
      } else {
        tagsList[tag] = tagsList[tag] + 1;
      }
    });
  });
  const tagsListWithSpan = defineTagsSpans(Object.entries(tagsList));
  return {
    props: {
      tags: tagsListWithSpan
    }
  }
}

export default TagsList;
