import ContactCreate from './ContactCreate';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './ContactList/Filter';
import Header from './Header';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contact/contact.thunk';


export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Header title="Phonebook"/>
      <ContactCreate/>
      <Section title="Contacts">
        <Filter/>
            
        <ContactList/>
      </Section>
    </>
  );
};

