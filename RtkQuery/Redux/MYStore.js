import { configureStore } from '@reduxjs/toolkit';
import todoreducer from './MYSlice';
import { getApiCall } from '../Screens/GetApiCall';
import { setupListeners } from '@reduxjs/toolkit/query';

const MYStore = configureStore({
    reducer: {
        todo: todoreducer,
        [getApiCall.reducerPath]: getApiCall.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getApiCall.middleware),
});

setupListeners(MYStore.dispatch);

export default MYStore;
