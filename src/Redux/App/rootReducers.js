import { combineReducers } from '@reduxjs/toolkit';
// import productsReducer from '../features/ProductsIndex/productsSlice';
import cartReducer from '../Features/cartSlice'
import userReducer from '../Features/userSlice'

const rootReducer = combineReducers({
    // products: productsReducer,
    cart: cartReducer,
    user:userReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;