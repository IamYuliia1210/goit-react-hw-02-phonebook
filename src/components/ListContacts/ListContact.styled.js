import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

export const Text = styled.p`
  align-self: center;
`;

export const Button = styled.button`
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ffffff;
  color: red;
`;
