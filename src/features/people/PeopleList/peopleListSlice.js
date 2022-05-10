import { createSlice } from '@reduxjs/toolkit'

const peopleListSlice = createSlice({
    name: 'people',
    initialState: {
        loading: false,
        error: false,
        peopleList: [],
    },
    reducers: {
        fetchPeopleList: (state) => {
            state.loading = true
        },

        fetchPeopleListError: (state) => {
            state.loading = false
            state.error = true
        },

        setPeopleList: (state, { payload: fetchedData }) => {
            state.loading = false
            state.peopleList = fetchedData.results
        },
    },
})

export const {
    setPeopleList,
    fetchPeopleList,
    fetchPeopleListSuccess,
    fetchPeopleListError,
} = peopleListSlice.actions

export const selectPeopleList = (state) => state.people

export const peopleListReducer = peopleListSlice.reducer
