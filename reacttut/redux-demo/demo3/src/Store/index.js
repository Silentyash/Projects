import { configureStore } from "@reduxjs/toolkit";

import uiCartSlice from './uicartSlice';
import cartSlice from "./cart-slice";

const store= configureStore({
    reducer:{ui:uiCartSlice.reducer, cart:cartSlice.reducer },
});

export default store;