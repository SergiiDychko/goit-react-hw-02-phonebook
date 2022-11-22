import styled from 'styled-components';

export const StyledContact = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  .contactName {
    display: block;
    width: 70%;
    padding-left: 20px;
    font-size: 18px;
    font-weight: 500;
  }
  .contactNumber {
    width: 30%;
    text-align: right;
    padding-right: 25px;
    text-decoration: none;
    font-size: 18px;
    color: darkgreen;
  }
  .contactNumber:hover {
    color: darkseagreen;
    text-decoration: underline;
  }
`;
