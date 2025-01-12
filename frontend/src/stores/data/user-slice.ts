import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const initialState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export const { } = userSlice.actions

export const selectCount = (state: RootState) => state.user

export default userSlice.reducer