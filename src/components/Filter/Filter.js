import React from 'react';
import { nanoid } from 'nanoid';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter ({ filter, onFilter }) {
  const inputFilter = nanoid();

  return (
    <>
      <h3 className={s.title}>Find contacts by name</h3>
      <label htmlFor={inputFilter} className={s.label}>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
          id={inputFilter}
          className={s.input}
        />
      </label>
    </>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};