import axios from "axios";
import { useState } from "react";
import { useGlobalState } from "./state"

export default function Add() {
    const state = useGlobalState();
    const [addForm, setAdd] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAdd((old) => { return { ...old, [name]: value } })
    }
    const addTodo = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/todos", addForm).then((res) => {
            state.add(res.data);
        });
    }
    return (
        <form onSubmit={addTodo}>
            <input type="text" placeholder="name" name="name" onChange={handleChange} />
            <input type="text" placeholder="description" name="descrip" onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}