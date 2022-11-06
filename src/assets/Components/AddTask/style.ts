import styled from "styled-components";

export const Content = styled.div`
    display: flex;

    div {
       max-width: 60vw;
       display: flex;
       justify-content: center;
       align-items: flex-start;
       flex-direction: column;
       flex-wrap: nowrap;
       margin: 5vh auto;
       padding: 2rem;
       border-radius: 0.5rem;


       h2 {
            margin: 0 0 1rem 0;
       }

       h2:last-of-type {
        margin-top: 1rem;
       }

        input:first-of-type {
            width: 25rem;
            height: 2rem;
        }

        input, textarea {
            min-width: 40rem;
            max-width: 30rem;
            height: 7rem;
            border: none;
            border-radius: 0.25rem;
            padding: 0.50rem;
            border: none;
            resize: none;
            font-family: "Roboto", sans-serif;
            background: #98D4FF;
            transition: all 0.2s;
        }

        input:focus, textarea:focus {
            border: none;
            outline: none;
            text-align: justify;
            filter: brightness(0.8);
        }

        button {
            margin-top: 1.5rem;
            width: 7rem;
            height: 2rem;
            background-color: #55B8FF;
            cursor: pointer;
            border: none;
            outline: none;
            font-weight: 900;
            border-radius: 0.25rem;
            transition: all 0.2s;
        }

        button:focus, button:hover {
            border: none;
            outline: none;
            filter: brightness(0.8);
        }

    }
       
`