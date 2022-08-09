import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin:auto;
    align-items:center;
    background-color:#fff;
    border-radius:5px;
    padding: 5px 9vw ;


@media (max-width: 750px){
    width:20vw;

    p{
        font-size:12px;
    }

    span {
        font-size:20px
    }

    svg {
        display:none
    }
}

`;



export const Header = styled.header `
    display:flex;
    align-items: center;
    justify-items: space-around;
    gap: 10px;
    margin: 20px auto;

    img {
        width:25px;
        height:25px;
    }
`;

export const HeaderTitle = styled.p `
    font-size:20px;

`;

export const Total = styled.span `
    font-size:30px;
    font-weight:bold;
`;