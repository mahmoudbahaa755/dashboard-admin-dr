
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState={
    value: ThemeState

}
type ThemeState={
    
    selectedTheme:string,
}
const initialState ={
    value:{
        selectedTheme:'',
    } as ThemeState,
} as InitialState ;
export const auth= createSlice({
    name:'auth',
    initialState,
    reducers:{
        changeTeheme: (action:PayloadAction<string>) =>{
            return {
                value:{
                  
                    selectedTheme:action.payload,
                   
                }
            }

        }
    }
})

export const { changeTeheme}= auth.actions;
export default auth.reducer;