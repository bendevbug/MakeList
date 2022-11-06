
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../Hooks/useApi';
import { Task } from '../types/user';


export const addTaskContext = createContext<Task[]>([]) 


interface addContextProviderProps {
    children: ReactNode;
}


export function AddTaskContextProvider({children}: addContextProviderProps) {

    const [task, setTask] = useState<Task[]>([])
    useEffect(()=> {
        api.get('tasks')
        .then(response => setTask(response.data.tasks))
    }, [])

    console.log(task)

    
    return(
        <addTaskContext.Provider value={task}>
            {children}
        </addTaskContext.Provider>
    );
}

