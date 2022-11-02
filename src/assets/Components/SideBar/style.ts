import styled from "styled-components";

export const Container = styled.div`
        background: #E2E2E2;
        height: 100vh;
        width: auto;
        float: left;

        div {
            width: 19rem;
            height: 100vh;
            background: #126BAB;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding: 2rem;

            img {
                width: 6vw;
                border-radius: 10rem;
            }
            h3 {
                width: auto;
                margin: 1rem 0;
                font-size: 1.3rem;
            }
        }
        section {
                margin-top: 3.5rem;
                display: inline-flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: baseline;

                img {
                    border-radius: 0;
                    width: 2rem;
                    margin: -0.25rem 1.5rem;
                    float: inline-end;
                }

                a {
                    margin: 1rem 0rem;
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    font-weight: 900;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                a:first-child {
                    color: #98D4FF;
                }

                a:hover {
                    color: #98D4FF;
                }
        }
`