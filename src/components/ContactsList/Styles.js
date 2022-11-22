import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0 auto;
  width: 500px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  overflow: hidden;
  li:nth-child(odd) {
    background-color: rgb(245, 245, 245);
  }
  
  .notification {
    font-size: 18px;
    text-align: center;
}
  `;
