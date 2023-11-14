
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState={
    value: AuthState

}
type AuthState={
    isAuth:boolean,
    username:string,
    isModerator:boolean
}
const initialState ={
    value:{
        isAuth:false,
        username:'',
       uid:'',
        isModerator:false
    } as AuthState,
} as InitialState ;

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action: PayloadAction<string>) => {
            state.value = {
                isAuth: true,
                username: action.payload,
                uid: 'dasd',
                isModerator: false,
            };
        },
    },
});

export const {logIn, logOut}= auth.actions;
export default auth.reducer;