import { createSlice } from '@reduxjs/toolkit'

const peopleListSlice = createSlice({
    name: 'people',
    initialState: {
        page: null,
        totalPages: null,
        totalResults: null,
        loading: false,
        error: 'cos-w-people',
        peopleList: null,
    },
    reducers: {
        fetchPeopleList: (state) => {
            state.loading = true
            state.error = false
            state.peopleList = null
        },
        fetchPeopleListSuccess: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.peopleList = payload.peopleList
            state.totalPages = payload.totalPages
            state.totalResults = payload.totalResults
        },
        fetchPeopleListError: (state) => {
            state.loading = false
            state.error = true
        },

        fetchExample: () => {
            console.log('test-people')
        },
        setPeopleList: (state, { payload: example }) => {
            state.peopleList = example.results
        },
    },
})

export const {
    fetchExample,
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

// export const getPeopleById = (state, peopleId) =>
export const peopleListReducer = peopleListSlice.reducer
