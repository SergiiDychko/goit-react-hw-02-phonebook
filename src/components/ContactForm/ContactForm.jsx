import PropTypes from 'prop-types';
import { Component } from 'react';
import Button from '../Button';
import { StyledForm } from './Styles';

class ContactForm extends Component {
  state = { name: '', number: '' };

    handleSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();
    this.props.addNewContact(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  
  
  render() {
    const {name, number} = this.state
    return (
      <StyledForm>
        <label className="formLabel">
          <span className="labelTitle">Name:</span>
          <input
            className="inputTag"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            value={name}
            required
          />
        </label>
        <label className="formLabel">
          <span className="labelTitle">Number:</span>
          <input
            className="inputTag"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            value={number}
            required
          />
        </label>

        <Button title="Add contact" onClick={this.handleSubmit} />
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};

export default ContactForm;
