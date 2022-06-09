import { Container, HeroTitle } from './ContactsPage.styled';
import { RiContactsBookLine } from 'react-icons/ri';

import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';

function Contacts() {
  return (
    <Container>
      <HeroTitle>
        Phonebook <RiContactsBookLine />
      </HeroTitle>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default Contacts;
