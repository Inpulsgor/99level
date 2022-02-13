import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import middleware from "./middleware";

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production", // enabled only in development mode
});

export type RootState = ReturnType<typeof rootReducer>;

const persistor = persistStore(store);

export default { store, persistor };
