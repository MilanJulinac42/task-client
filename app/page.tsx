import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";

export const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("http://localhost:3002/tasks");
                const data = await response.json();
                setTasks(data);
            } catch (error: any) {
                console.error("Error fetching tasks:", error.message);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Task Tracker App</h1>
            <TaskList tasks={tasks} />
        </div>
    );
};
