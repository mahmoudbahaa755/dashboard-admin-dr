
// import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// type InitialState={
//     value: AuthState

// }
// type AuthState={
//     isAuth:boolean,
//     username:string,
//     isModerator:boolean
// }
// const initialState ={
//     value:{
//         isAuth:false,
//         username:'',
//         isModerator:false
//     } as AuthState,
// } as InitialState ;
// export const auth = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         logOut: () => {
//             return initialState;
//         },
//         logIn: (state:any, action: PayloadAction<string>) => {
//             state.value = {
//                 isAuth: true,
//                 username: action.payload,
//                 isModerator: true,
//             };
//         },
//     },
// });

// export const {logIn, logOut}= auth.actions;
// export default auth.reducer;