import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [actions.formSubmitHandler]: (state, { payload }) => {
      const contactsNames = state.map(contact => {
        return contact.name.toLowerCase();
      });

      contactsNames.includes(payload.name.toLowerCase())
        ? alert(`${payload.name} is already in contacts `)
        : state.push(payload);
    },
    [actions.deleteContact]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
);

const filter = createReducer('', {
  [actions.searchContact]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
