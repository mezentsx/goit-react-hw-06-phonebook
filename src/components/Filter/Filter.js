import React from 'react';
import { nanoid } from 'nanoid';
import s from './Filter.module.css';
import actions from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const inputFilter = nanoid();

  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onFilter = e => dispatch(actions.searchContact(e.currentTarget.value));

  return (
    <>
      <h3 className={s.title}>Find contacts by name</h3>
      <label htmlFor={inputFilter} className={s.label}>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onFilter}
          id={inputFilter}
          className={s.input}
        />
      </label>
    </>
  );
};

export default Filter;
