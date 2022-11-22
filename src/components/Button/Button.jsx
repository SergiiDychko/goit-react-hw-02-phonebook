import PropTypes from 'prop-types';
import { StyledButton } from './Styles';

const Button = ({title, onClick}) => { return (
  <StyledButton className="btn" type="button" onClick={onClick}>
    {title}
  </StyledButton>
);}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Button;