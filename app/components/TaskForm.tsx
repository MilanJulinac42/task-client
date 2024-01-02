"use client";
import React, { useState } from "react";

const TaskForm: React.FC<any> = ({ onSubmit }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [status, setStatus] = useState("pending");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newTask = {
            title,
            description,
            dueDate,
            status,
        };
        onSubmit(newTask);

        setTitle("");
        setDescription("");
        setDueDate("");
        setStatus("pending");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Description:
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </label>
            <br />
            <label>
                Due Date:
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </label>
            <br />
            <label>
                Status:
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="overdue">Overdue</option>
                </select>
            </label>
            <br />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
