import { useHookstate } from "@hookstate/core"
import axios from "axios";
import { useEffect } from "react";
import { useGlobalState } from "./state"

export default function Show() {
    const state = useGlobalState();
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/todos").then((res) => {
            state.set(res.data);
            console.log(res.data)
        })
    }, []);
    return (
        <div style={{
            display: "flex",
            marginTop: "100px",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px"
        }}>
            {state.get().map((todo) => {
                return <div key={todo.id} style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "300px",
                    backgroundColor: "grey",
                }}>
                    <div>
                        <h1>{todo.name}</h1>
                        <p>{todo.descrip}</p>
                    </div>
                </div>
            })}
        </div>
    )
}