import styled from 'styled-components'


export const Container = styled.main`

        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
    h1 {
        color: #000;
        font-weight: 900;
        font-size: 5rem;

        span {
        color: #2946DD;
        }
    }

    div {
        button {
            background-color: #D9D9D9;
            color: #2946DD;
            border: none;
            padding: 0.25rem;
            text-align: center;
            cursor: pointer;
            width: 14.5rem;
            height: 2rem;
            border-radius: 0.25rem;
            font-weight: 700;
            font-size: 1rem;
            transition: all 0.2S;
            
        }
        button:hover{
                background: #A9A9A9;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
        }
        
    }

   
`