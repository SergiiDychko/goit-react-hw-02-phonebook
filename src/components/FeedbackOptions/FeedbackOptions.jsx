import PropTypes from 'prop-types';
import VoteButton from './VoteButton';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackBtns}>
      {Object.keys(options).map(option => (
        <VoteButton
          name={option}
          key={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
