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

        fetchPersonPageSuccess: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.personPage = payload
            console.log('personPage_in_fetch_payload:', payload)      ////////////////////////
        },
        // setPersonDetails: (state, { payload: personDetails }) => {
        //     state.loading = false
        //     state.personPage = personDetails
        //     console.log('personPage set:', personDetails) ////////////////////////
        // },

        // setPersonCredits: (state, { payload }) => {
        //     state.cast = payload.cast;
        //     state.crew = payload.crew;
        // }
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
export const selectPersonPageDetails=state=>selectPersonPage(state);

//export const selectPersonCast = state => selectPersonDetails(state).cast;
//export const selectPersonCrew = state => selectPersonDetails(state).crew;
//export const selectLoading = (state) => selectPersonDetails(state).loading
// export const selectError = (state) => selectMoviePage(state).error


export const personPageReducer = personPageSlice.reducer
