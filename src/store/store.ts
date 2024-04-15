import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (curryGetDefaultMiddleware) => {
    return curryGetDefaultMiddleware().concat([api.middleware]);
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export { store };
