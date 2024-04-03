import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { hospitalApi} from './hospitalSlice';

export const store = configureStore({
  reducer: {
    [hospitalApi.reducerPath] : hospitalApi.reducer,

  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(hospitalApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;