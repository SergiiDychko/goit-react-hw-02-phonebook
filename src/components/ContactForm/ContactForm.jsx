import PropTypes from 'prop-types';
// import { Component } from 'react';
import Button from '../Button';
import { StyledForm } from './Styles';

const ContactForm = ({name, number, onChange, onSubmit }) => {
  return (<StyledForm>
    <label className="formLabel">
      <span className="labelTitle">Name:</span>
      <input
        className="inputTag"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
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
        onChange={onChange}
        value={number}
        required
      />
    </label>
  
    <Button title="Add contact" onClick={onSubmit} />
  </StyledForm>
  );
};

ContactForm.propTypes = {
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      onSubmit: PropTypes.func.isRequired,
  };

export default ContactForm;
