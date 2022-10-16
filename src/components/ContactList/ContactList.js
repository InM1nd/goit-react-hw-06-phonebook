import React from 'react';
import style from './ContactList.module.css';
import { deleteContact } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function ContactList ()  {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const renderContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


const handleDelete = id => {
  dispatch(deleteContact(id));
};

    return (
      <ul>
        {renderContactList.map(({ id, name, number }) => {
          return (
            <li key={id} id={id} className={style.item}>
              {name}: {number}
              <button onClick={() => handleDelete(id)} className={style.button}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  };
  
