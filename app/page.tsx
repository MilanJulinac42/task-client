"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const Home = () => {
    const [tasks, setTasks] = useState<any>([]);

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

    const handleAddTask = async (newTask: any) => {
        try {
            const response = await fetch("http://localhost:3002/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask),
            });

            const createdTask = await response.json();

            setTasks((prevTasks: any) => [...prevTasks, createdTask]);
        } catch (error: any) {
            console.error("Error creating task:", error.message);
        }
    };

    return (
        <div>
            <h1>Task Tracker App</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Home;
