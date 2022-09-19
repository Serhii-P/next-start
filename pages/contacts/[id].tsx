import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { FC } from 'react'
import ContactInfo from '../../components/ContactInfo';
import { contactType } from '../../types';

type contactTypeProps = {
  contact: contactType
}

const Contact:FC<contactTypeProps> = ({contact}) => {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <ContactInfo contact={contact} />
    </>  
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      contact: data
    }
  }
}

export default Contact