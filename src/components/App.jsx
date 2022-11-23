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
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    const { contacts, name, number } = this.state;
    evt.preventDefault();
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
      name: '',
      number: '',
      contacts: [...contacts, newContact],
    });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { contacts, filter, name, number } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            name={name}
            number={number}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Section>
        <Section title="Contacts">
          <SearchInput filter={filter} onChange={this.handleChange} />
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
