import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { StyledList } from './Styles';
import Notification from '../Notification';
import Button from '../Button';


const ContactList = ({ contactsList, filter, onDelete }) => {
    return contactsList.length ? (
      <StyledList>
        {contactsList.map(({ id, name, number }) => (
          <li className='listItem' key={id}>
            <ContactItem
              name={name}
              number={number}
            />
           <Button title='Delete' onClick={() => onDelete(id)} />
          </li>
        ))}
      </StyledList>
    ) : (
      <Notification
        text={filter ? 'Could not find this name' : 'Contact list is empty'}
      />
    );
};

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
