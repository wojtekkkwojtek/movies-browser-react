import { createSlice } from '@reduxjs/toolkit'

const personPageSlice = createSlice({
    name: 'personOne',
    initialState: {
        error: false,
        loading: false,
        personPage: [],
    },
    reducers: {
        fetchPersonPage: (state) => {
            state.error = false
            state.loading = true
        },

        fetchPersonPageError: (state) => {
            state.error = true
            state.loading = false
        },

        fetchPersonPageSuccess: (state, { payload }) => {
            state.error = false
            state.loading = false
            state.personPage = payload
        },

        setPersonCredits: (state, { payload }) => {
            state.cast = payload.cast
            state.crew = payload.crew
        },
    },
})

export const {
    setPersonDetails,
    setPersonCredits,
    fetchPersonPage,
    fetchPersonPageSuccess,
    fetchPersonPageError,
} = personPageSlice.actions

export const selectPersonPage = (state) => state.personOne

export const personPageReducer = personPageSlice.reducer
