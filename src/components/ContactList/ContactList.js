import style from './ContactList.module.css';
import { deleteContact , getContacts , getFilter } from '../../redux/contactReducer';
import { useSelector, useDispatch } from 'react-redux';

export default function ContactList ()  {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const renderContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())); 

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
  
