import { configureStore } from "@reduxjs/toolkit";
import playerReducer from '../slice/playerSlice'

export default configureStore({
    reducer:{
        player:playerReducer
    }
})