import React from 'react';
import "./Contact.css"

const Contact = ({ id, name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className='contact'>
      <p >Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
