import { createSlice } from '@reduxjs/toolkit'

const personPageSlice = createSlice({
    name: 'personOne',
    initialState: {
        personPage: [],
        loading: false,
        error: false,
    },
    reducers: {
        fetchPersonPage: (state) => {
            state.loading = true
            state.error = false
        },

        fetchPersonPageError: (state) => {
            state.loading = false
            state.error = true
        },

        fetchPersonPageSuccess: (state, { payload }) => {
            state.loading = false
            state.error = false
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
