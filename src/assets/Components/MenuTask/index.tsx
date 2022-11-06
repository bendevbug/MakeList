import axios from "axios";
import { Key, useContext, useEffect, useState } from "react";
import { addTaskContext } from "../../../Contexts/addTaskContext";
import { api, getApi, useApi } from "../../../Hooks/useApi";
import { Task } from "../../../types/user";
import { Container } from "./style";
import trash  from "../../Images/trash.svg"

export function MenuTask() {
    
    const [task, setTask] = useState<Task | null>(null);
    const useApi = api;

    useEffect(()=> {
        api.get('http://localhost:3000/tasks').then((response) => {
            setTask(response.data)
            console.log(task)
            return response.data
        });
        
    }, [api])

    async function retireTask(id: number) {
        
        const filteredTasks = task?.filter(task => task.id !== id)

        setTask(filteredTasks)
        console.log(filteredTasks)
        
        
    }

    let listTasks = task?.map((task: Task) => {
       return ( 
            <div>
                    <h2 key={task}>{task?.title}</h2>
                    <h4>{task?.description}</h4>
                    <img src={trash} onClick={()=> retireTask(task.id)}/>
            </div>
        )
       
    })
    
    

    return(
        <Container>
            
            {listTasks}
               
        </Container>
    );
}