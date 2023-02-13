import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63ea9c71e57f2ca4eb3e3c1e.mockapi.io/contacts';

// export const getContactsThunk = createAsyncThunk(
//     'contacts/fetchAll',
//     async (params, thunkAPI) => {
//         console.log(params);
//         console.log(thunkAPI);
//         try {
//             const { data } = await axios.get('/contacts');
//             console.log('hi')
//             return data;
//         } catch (error) {
//             console.log("error", error)
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', async (_, thunkAPI) => {
        try {
            console.log('hi')
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            // console.log('add')
            const { data } = await axios.post('/contacts', newContact);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);