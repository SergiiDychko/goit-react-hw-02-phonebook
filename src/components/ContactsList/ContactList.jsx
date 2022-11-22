import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { StyledList } from './Styles';
import Notification from '../Notification';


const ContactList = ({ contactsList, filter }) => {
    return contactsList.length ? (
      <StyledList>
        {contactsList.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} />
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
};

export default ContactList;
