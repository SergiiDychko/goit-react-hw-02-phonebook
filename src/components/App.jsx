import { Component } from 'react';
import './App.css';
import {Notify} from 'notiflix';
import ContactForm from './ContactForm/';
import ContactList from './ContactsList/';
import Section from './Section';
import { nanoid } from 'nanoid';
import SearchInput from './SearchInput/';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = (name, number) => {
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState({
      contacts: [...contacts, newContact],
    });
  };
  
  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addNewContact={this.addNewContact} />
        </Section>
        <Section title="Contacts">
          <SearchInput filter={filter} onChange={this.handleFilter} />
          <ContactList
            contactsList={filter ? this.filteredContacts() : contacts}
            filter={filter}
            onDelete={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
