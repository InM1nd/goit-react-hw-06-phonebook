import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



export const contactsSlice = createSlice({
    name: 'items',
    initialState: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    reducers: {
        addContact(state, action){
            return[...state, action.payload];
        },
        deleteContact(state, action){
            return state.filter(({ id }) => id !== action.payload);
        }
    }
});


export const filterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
      changeFilter(_, action) {
       return action.payload;
      },
    },
  });

  const persistConfig = {
    key:'items',
    storage,
    whitelist:['filter']
  }
  
  const mainReducers = combineReducers({
    [contactsSlice.name]: contactsSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
  });
  

export const persistedReducer = persistReducer(persistConfig, mainReducers);

export const { addContact, deleteContact  } = contactsSlice.actions;
export const { changeFilter } = filterSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

