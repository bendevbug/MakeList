import { ChangeEvent, MouseEventHandler, useState } from "react";
import { useApi } from "../../../Hooks/useApi";
import { Task } from "../../../types/user";
import { SideBar } from "../SideBar";
import { Content } from "./style";



export function AddTask(props: Task) {

    const api = useApi();
    

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [task, setTask] = useState<Task>()


    const handleDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
        console.log(description)
    }

    const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
        console.log(title)
    }

    const handleTask = async () => {
        if (title && description) {
           await api.addTask(title, description)
           setTask({title, description})
           console.log({title, description})
           document.location.reload(true)
        }
    }
    

    return(
        <>
           <SideBar />
           <Content>
            <div>

                    <h2>Title</h2>
                    <input value={title} onChange={handleTitle} type="text" maxLength={30}></input>

                    <h2>Description</h2>
                    <textarea name={description} onChange={handleDescription} type="text"></textarea>
                    
                    <button onClick={handleTask} type="submit">
                        ADD
                    </button>
            </div>
                             
           </Content>
        </>
    );
}