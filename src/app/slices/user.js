import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        set: (state, action) => action.payload
    },
})

export const { set } = userSlice.actions
export default userSlice.reducer

