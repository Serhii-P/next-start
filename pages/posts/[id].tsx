import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { FC } from 'react'
import ContactInfo from '../../components/ContactInfo';
import PostInfo from '../../components/PostInfo';
import { postsDataType } from '../../types';

type postTypeProps = {
  post: postsDataType
}

const Post:FC<postTypeProps> = ({post}) => {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <PostInfo post={post} />
    </>  
  )
};

// export const getServerSideProps = async (context) => {
//   const {id} = context.params;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const data = await res.json();
//   if (!data) {
//     return {
//       notFound: true
//     }
//   }

//   return {
//     props: {
//       contact: data
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async (context) => {
  const {id} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const paths = data.map(({id} )=> ({
    params: {id: id.toString()}
  }))

  return {
    paths,
    fallback: false
  }
};
export default Post; 