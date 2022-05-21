import { createSlice } from '@reduxjs/toolkit'

const peopleListSlice = createSlice({
    name: 'people',
    initialState: {
        totalPages: 1,
        totalPeopleResult: '',
        loading: false,
        error: false,
        peopleList: [],
    },
    reducers: {
        fetchPeopleList: (state) => {
            state.loading = true
            state.totalPeopleResult = ''
        },
        fetchPeopleListError: (state) => {
            state.loading = false
            state.error = true
        },
        setPeopleList: (state, { payload: fetchedData }) => {
            state.loading = false
            state.peopleList = fetchedData.results
            state.totalPages = fetchedData.total_pages
            state.totalPeopleResult = fetchedData.total_results
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

export const selectTotalPeoplePages = (state) =>
    selectPeopleList(state).totalPages

export const selectTotalPeopleResults = (state) =>
    selectPeopleList(state).totalPeopleResult

export const peopleListReducer = peopleListSlice.reducer
