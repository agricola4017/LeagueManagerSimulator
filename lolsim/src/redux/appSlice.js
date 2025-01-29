import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  players: [],
  teams: [],
  loading: false,
  error: null
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      state.players = action.payload
    },
    setTeams: (state, action) => {
      state.teams = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { setPlayers, setTeams, setLoading, setError } = appSlice.actions

export default appSlice.reducer
