import { createSlice } from '@reduxjs/toolkit'

const personPageSlice = createSlice({
    name: 'person',
    initialState: {
        personPage: null,
        actors: null,
        loading: false,
        error: false,
        movie_id: null,
    },
    reducers: {
        fetchPersonPage: (state, { payload: id }) => {
            state.loading = true
            state.error = false
            console.log(' fetchPersonPage ok?', id)
            state.people_id = id
        },
       
        setPersonDetails: (state, { payload: personDetails }) => {
            state.loading = false
            state.personPage = personDetails
            console.log('personPage:', personDetails)
        },
    },
})

export const {
    setId,
    setPersonDetails,
    fetchPersonPage,
    fetchPersonPageSuccess,
    fetchPersonPageError,

} = personPageSlice.actions

export const selectPersonPage = (state) => state.person

export const selectGetEx1 = (state) => state.person.people_id //?

// export const selectLoading = (state) => selectMoviePage(state).loading
// export const selectError = (state) => selectMoviePage(state).error
// export const selectActors = (state) => selectMoviePage(state).actors
// export const selectMovie = (state) => selectMoviePage(state).moviePage

export const personPageReducer = personPageSlice.reducer
