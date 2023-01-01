import { hookstate, useHookstate } from "@hookstate/core";
import axios from "axios";

const globalState = hookstate([]);

export const useGlobalState = ()=>{
    const state = useHookstate(globalState);
    return {
        get: ()=>{
            return state.get();
        },
        set: (data)=>{
            return state.set(data);
        },
        add: (obj) =>{
            return state.set((old)=>[...old, obj]);
        },
        
    }   
}