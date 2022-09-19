import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { FC } from 'react';
import { postsDataType } from '../../types';

type postsTypeProps = {
  posts: postsDataType[]
}

const Posts:FC<postsTypeProps> = ({posts}) => {
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts && posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export const getStaticProps:GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      posts: data
    }
  }
}

export default Posts