import PropTypes from 'prop-types';
import css from './VoteButton.module.css';

const VoteButton = ({ name, onLeaveFeedback }) => {
  return (
    <button className={css[name]} name={name} onClick={onLeaveFeedback}>
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
  );
};

VoteButton.propTypes = {
  name: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default VoteButton