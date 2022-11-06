import styled from "styled-components";

export const Container = styled.div`
        background: #E2E2E2;
        height: 100%;
        width: auto;
        float: left;

        div {
            width: 19rem;
            height: 60vh;
            background: #126BAB;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            padding: 2rem;
            border-radius: 0 0.25rem 0.25rem 0;
            img {
                width: 6vw;
                border-radius: 10rem;
            }
            h3 {
                width: auto;
                margin: 1rem 0;
                font-size: 1.3rem;
                color: #fff;
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
                    transition: all 0.18s;
                    color: #fff;
                }

                a:hover {
                    color: #98d4ff;
                }
        }
`