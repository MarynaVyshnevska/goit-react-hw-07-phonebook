import { configureStore } from "@reduxjs/toolkit";
// import { contactsInitState } from "./contact/contact.init-state";
import { contactsReducer } from "./contact/contact.slice";
import { filterReducer } from "./contact/filter.slice";

// import {
//     // persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
    
// const initState = {
//     contacts: contactsInitState,
    
// }

export const store = configureStore({
    devTools: true,
    // preloadedState: initState,
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
    
});

// export const persistor = persistStore(store);