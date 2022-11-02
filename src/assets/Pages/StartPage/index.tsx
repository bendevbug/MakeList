import { Link } from "react-router-dom";
import { Home } from "../Home";
import { Container } from "./style";

export function StartPage() {
    return(
        <Container>
            <div>
                <h1>Make<span>List</span></h1>
                <Link to="/Home">Start</Link>
            </div>
        </Container>
    );
}