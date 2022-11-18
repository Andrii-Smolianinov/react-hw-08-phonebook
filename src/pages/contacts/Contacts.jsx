import { useSelector } from 'react-redux';
import {
  getFilteredContacts,
  getState,
  selectContacts,
} from 'redux/contacts/contactsSelectors';

import { PhoneBookStyled } from 'components/PhoneBookStyled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';

const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);
  const isContacts = useSelector(selectContacts);
  const { loading } = useSelector(getState);

  return (
    <PhoneBookStyled>
      <ContactForm />
      {isContacts && <Filter />}
      {!loading && contacts.length > 0 && <ContactList />}
    </PhoneBookStyled>
  );
};

export default Contacts;
