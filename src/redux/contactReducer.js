import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'



export const contactsSlice = createSlice({
    name: 'items',
    initialState: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    reducers: {
        addContact(state, {payload}){
            return[payload, ...state ];
        },
        deleteContact(state, {payload}){
            return state.filter(({ id }) => id !== payload);
        }
    }
});


export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
      changeFilter(_, {payload}) {
       return payload;
      },
    },
  });


export default combineReducers({
  contact: contactsSlice.reducer,
  filter: filterSlice.reducer,
});
  
export const { addContact, deleteContact  } = contactsSlice.actions;
export const { changeFilter } = filterSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

