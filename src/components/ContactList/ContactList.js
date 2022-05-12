import React from 'react';
import s from './ContactList.module.css';
import actions from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state =>
    getVisibleContacts(state.contacts.items, state.contacts.filter),
  );

  const onDelete = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id}>
            {name}: {number}
            <button
              type="button"
              onClick={() => onDelete(id)}
              className={s.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
