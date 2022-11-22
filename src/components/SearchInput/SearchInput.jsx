import PropTypes from 'prop-types';
import { StyledInput } from './Styles';


const SearchInput = ({filter, onChange}) => {
  return (
    <StyledInput>
      <p className="inputTitle">Filter by name:</p>
      <input
        className="inputTag"
        type="text"
        name="filter"
        title="Please enter the name"
        onChange={onChange}
        value={filter}
      />
    </StyledInput>
  );
};

SearchInput.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SearchInput;