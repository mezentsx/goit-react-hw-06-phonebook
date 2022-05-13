import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import s from './App.module.css';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>You have no saved contacts</p>
      )}
    </div>
  );
};

export default App;
