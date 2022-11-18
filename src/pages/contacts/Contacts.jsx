import { useSelector } from 'react-redux';
import {
  getFilteredContacts,
  getState,  
} from 'redux/contacts/contactsSelectors';

import { PhoneBookStyled } from 'components/PhoneBookStyled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';

const Contacts = () => {
  const contacts = useSelector(getFilteredContacts); 
  const { loading } = useSelector(getState);

  return (
    <PhoneBookStyled>
      <ContactForm />
      <Filter />
      {!loading && contacts.length > 0 && <ContactList />}
    </PhoneBookStyled>
  );
};

export default Contacts;
