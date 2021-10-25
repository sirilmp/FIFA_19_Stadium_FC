import { createSlice } from "@reduxjs/toolkit";


const playerSlice=createSlice({
    name:'player',
    initialState:{
        player:null
    },
    reducers:{
        set_player:(state,action)=>{
            state.player=action.payload.player
        }
    }
})

export const {set_player}=playerSlice.actions;

export const player=(state)=>state.player.player

export default playerSlice.reducer