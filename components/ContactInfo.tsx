import React, { FC } from 'react';
import { contactType } from '../types';

type contactInfoProps = {
  contact: contactType
}

const ContactInfo:FC<contactInfoProps> = ({contact}) => {
  const {name, email, address} = contact || {};
  const {street, suit, city, zipcode} = address || {};

  if (!contact) {
    <h3>Empty contact</h3>
  }

  return (
    <>
      <h3>{name}</h3>
      <div>
        <strong>Email: </strong> 
        {email}
      </div>
      <div>
        <strong>Address: </strong> 
        {`${street}, ${suit}, ${city}, ${zipcode}`}
      </div>
    </>
  )
}

export default ContactInfo