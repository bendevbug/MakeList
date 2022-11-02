import { Container } from "./style";
import icon from '../../Images/cellbit.jpg'
import home from '../../Images/Home.svg'
import task from '../../Images/addTask.svg'
import { Link } from "react-router-dom";

export function SideBar() {
    return(
        <Container>
            <div>
            <img src={icon}></img>
            <h3>Seja bem vindo {/* nome do usuario */} </h3>

            <section>
                    <Link to="/Home">Home<img src={home} /></Link>
                    <Link to="/AddTask">Add Task <img src={task}/></Link>
            </section>
            </div>
           
        </Container>
    );
}