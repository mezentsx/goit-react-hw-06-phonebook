import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const formSubmitHandler = createAction('contacts/add', text => ({
  payload: {
    id: nanoid(),
    name: text.name,
    number: text.number,
  },
}));
const deleteContact = createAction('contacts/delete');
const searchContact = createAction('contacts/filter');

const actions = { formSubmitHandler, deleteContact, searchContact };
export default actions;
