import { configureStore } from "@reduxjs/toolkit";
import { reducerObj } from "./allReducers";
import { allMiddlewares } from "./middlewares";

const store = configureStore({
    reducer: reducerObj,
    middleware: allMiddlewares
})

export default store;