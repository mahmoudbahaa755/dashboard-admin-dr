import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth-slice";

// const mainReducer= (state={theme:'theme 1'} , action) =>{
//     if (action.type === 'changeTheme'){
//         return {
//             theme: 'theme 2'
//         }
//     }
// }
export const store= configureStore({
    reducer:{
        authReducer
    }
})

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch