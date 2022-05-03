import { createSlice } from '@reduxjs/toolkit'

const personPageSlice = createSlice({
    name: 'personPage',
    initialState: {
        personPage: [],
        loading: false,
        error: false,
    },
    reducers: {
        fetchPersonPage: state => {
            state.loading = true
            state.error = false;
        },

        fetchPersonPageError: state => {
            state.loading = false
            state.error = true
        },

        fetchPersonPageSuccess: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.personPage = payload
            console.log('personPage_in_fetch_payload:', payload)      ////////////////////////
        },
       
        setPersonCredits: (state, { payload }) => {
            state.cast = payload.cast;
            state.crew = payload.crew;
            console.log('credits ', payload)
        }
    },
})

export const {
    setPersonDetails,
    setPersonCredits,
    fetchPersonPage,
    fetchPersonPageSuccess,
    fetchPersonPageError,
} = personPageSlice.actions


export const selectPersonPage = state => state.personPage

// export const selectPersonPage = state => state.personPage.personPage
// export const selectLoading = (state) => state.personPage.loading
// export const selectError = (state) => state.personPage.error

//export const selectPersonCast = state => selectPersonDetails(state).cast;
//export const selectPersonCrew = state => selectPersonDetails(state).crew;



export const personPageReducer = personPageSlice.reducer
