import { createSlice } from "@reduxjs/toolkit";


const uiCartSlice= createSlice({
    name:'ui',
    initialState : {cartShowing:false },
    reducers:{
        cartToggle(state){
            state.cartShowing = !state.cartShowing;
            // if (state.cartShowing===false){
            //     state.cartShowing=true;
            // }else{state.cartShowing=false};
        }
    }

});

export const uiCartActions = uiCartSlice.actions;
export default uiCartSlice;