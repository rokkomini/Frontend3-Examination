import styled, { css } from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #90AACB;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  ${props => props.inputUpdate && css`
  width: 400px;
  margin: 5px;`}
 
`;

export const Button = styled.button`  
  width: 200px;
  padding: 10px 5px;
  color: #FEF1E6;
  font-weight: 600;
  text-transform: uppercase;
  background: #FFB085;
  border: none;
  border-radius: 3px;
  outline: 0;  
  cursor: pointer;
  margin: 5px 10px;  
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);#d68d66;  
    :hover {
    background: #eea37b;
  }
  a{
    text-decoration: none;
    color: #FEF1E6;
  }

  ${props => props.primary && css`
  max-width: 100%;
  width: auto;
  padding: 15px 10px;`}
  `;