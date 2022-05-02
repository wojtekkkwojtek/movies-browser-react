import { createSlice } from '@reduxjs/toolkit'

const peopleListSlice = createSlice({
    name: 'people',
    initialState: {
        // page: null,
        // totalPages: null,
        // totalResults: null,
        loading: true,
        error: false,
        peopleList: [],
    },
    reducers: {
        fetchPeopleList: (state) => {
            state.loading = false
        },
        // fetchPeopleListSuccess: (state, { payload }) => {
        //     state.loading = false
        //     state.error = false
        //     state.peopleList = payload.peopleList
        //     state.totalPages = payload.totalPages
        //     state.totalResults = payload.totalResults
        // },
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
// export const selectError = (state) => selectPeopleList(state)
// export const selectLoading = (state) => selectPeopleList(state).loading
// export const selectTotalPages = (state) => selectPeopleList(state).totalPages
// export const selectTotalResults = (state) => selectPeopleList(state).totalResults



export const peopleListReducer = peopleListSlice.reducer
