import styled from "styled-components";


export const Container = styled.div`
    height: 100%;
    width: 80vw;
    float: left;

    
    div {
       width: 35vw;
       background: #38ACFF;
       display: grid;
       justify-content: space-between;
       align-items: flex-start;
       flex-direction: column;
       flex-wrap: nowrap;
       margin: 5vh auto 1vh auto;
       padding: 2rem;
       border-radius: 0.5rem;

       h4 {
           margin: 1rem 0;

       }

       img {
        float: right;
        width: 1.6rem;
        display: flow-root;
        cursor: pointer;
       }
    }

    
`