import styled from "styled-components";

export const HomeGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 0.5fr 2fr;
  padding: 0 10px;
  margin-top: 0;
  align-items: baseline;

`;

export const CustomerGrid = styled.div`
display: grid;
grid-gap: 10 px;
grid-template-columns: repeat(2, 1fr);
padding: 10px;
`

export const List = styled.ul`
li{
padding-top: 5px;
color: #F9D5A7;
}
a{
    text-decoration: none;
    color: #90AACB;
    :hover{
        border-bottom: solid 3px #FEF1E6;
    }
}`
