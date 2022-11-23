import styled from 'styled-components';

export const StyledContact = styled.div`
  display: flex;
  width: 100%;
  .contactName {
    display: block;
    width: 70%;
    font-size: 18px;
    font-weight: 500;
  }
  .contactNumber {
    width: 30%;
    text-decoration: none;
    font-size: 18px;
    color: darkgreen;
  }
  .contactNumber:hover {
    color: darkseagreen;
    text-decoration: underline;
  }
`;
