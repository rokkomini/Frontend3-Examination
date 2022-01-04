import styled from "styled-components";
import { css } from "styled-components";

export const Table = styled.table`

width: 1000px;
padding: 5px 0px;
margin: 10px auto;

tr {
border-bottom:  2px solid #F9D5A7;
:hover {
border-bottom: solid 3px #FEF1E6;
}
}

th, td {
    text-align: left;
    color: #879194;
    padding: 5px 0;
}

${props => props.userTable && css`
width: 300px;
tr:hover{
    border-bottom: none;
}`}
`

export const ButtonDiv = styled.div`
display: flex;
padding: 5px 20px;
justify-content: center;

`
