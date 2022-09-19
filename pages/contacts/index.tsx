import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { FC } from 'react';
import { contactType } from '../../types';

type contactsTypeProps = {
  contacts: contactType[]
}

const Contacts: FC<contactsTypeProps> = ({contacts}) => {
  return (
    <div>
      <h3>Contacts list</h3>
      <ul>
        {contacts && contacts.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      contacts: data
    }
  }
}

export default Contacts