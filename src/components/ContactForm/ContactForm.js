import { useState } from 'react';
import style from './ContactForm.module.css';
import { useSelector, useDispatch } from "react-redux";
import { addContact , getContacts } from 'redux/contactReducer';
import { nanoid } from 'nanoid';

export default function ContactForm( ) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;

      default:
    }
    return;
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    // const contact = {
    //   id: nanoid(),
    //   name,
    //   number,
    // };
    e.preventDefault();
    
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name}, is already in your contacts`);
    }
    dispatch(addContact({ name, number, id: nanoid() }));

    reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>
        <span className={style.text}>Name</span>
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.label}>
        <span className={style.text}>Number</span>
        <input
          className={style.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={style.addBtn}>
        Add contact
      </button>
    </form>
  );
}
