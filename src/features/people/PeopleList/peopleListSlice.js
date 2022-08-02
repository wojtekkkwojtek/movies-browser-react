import { createSlice } from '@reduxjs/toolkit';

const peopleListSlice = createSlice({
    name: 'people',
    initialState: {
        error: false,
        loading: false,
        totalPages: 1,
        totalPeopleResult: null,
        peopleList: [],
    },
    reducers: {
        fetchPeopleList: (state) => {
            state.error = false;
            state.loading = true;
            state.totalPeopleResult = '';
        },
        fetchPeopleListError: (state, action) => {
            state.error = true;
            state.loading = false;
        },
        setPeopleList: (state, { payload: fetchedData }) => {
            state.error = false;
            state.loading = false;
            state.peopleList = fetchedData.results;
            state.totalPages = fetchedData.total_pages;
            state.totalPeopleResult = fetchedData.total_results;
        },
    },
});

export const {
    setPeopleList,
    fetchPeopleList,
    fetchPeopleListSuccess,
    fetchPeopleListError,
} = peopleListSlice.actions;

export const selectPeopleList = (state) => state.people;

export const selectTotalPeoplePages = (state) =>
    selectPeopleList(state).totalPages;

export const selectTotalPeopleResults = (state) =>
    selectPeopleList(state).totalPeopleResult;

export const peopleListReducer = peopleListSlice.reducer;
