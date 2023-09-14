import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const User = styled(Form)`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 30px;
  border: 1px solid #212121;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledField = styled(Field)`
  padding: 8px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 30%;
  padding: 10px 0;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ffffff;
`;
export const ErrMsg = styled(ErrorMessage)`
  margin-top: 8px;
  color: #ff0000;
`;
