import { createSlice } from '@reduxjs/toolkit'

const personPageSlice = createSlice({
    name: 'personOne',
    initialState: {
        personPage: [],
        loading: false,
        error: false,
    },
    reducers: {
        fetchPersonPage: (state, { payload: id }) => {
            state.loading = true
            state.error = false
            console.log(' fetchPersonPage ok?', 'id= ' + id)     ////////////////////////
            state.person_id = id
        },

        setPersonDetails: (state, { payload: personDetails }) => {
            state.loading = false
            state.personPage = personDetails
            console.log('personPage:', personDetails)      ////////////////////////
        },

        setPersonCredits: (state, { payload }) => {
            state.cast = payload.cast;
            state.crew = payload.crew;
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

export const selectPersonPage = state => state.personOne
export const selectPersonCast =state=> selectPersonPage(state).cast;
export const selectPersonCrew =state=> selectPersonPage(state).crew;


export const selectGetEx1 = (state) => state.personOne.person_id
console.log('selectGetEx1: ' + { selectGetEx1 })      ///////////////////////

// export const selectLoading = (state) => selectMoviePage(state).loading
// export const selectError = (state) => selectMoviePage(state).error
// export const selectActors = (state) => selectMoviePage(state).actors
// export const selectMovie = (state) => selectMoviePage(state).moviePage

export const personPageReducer = personPageSlice.reducer
