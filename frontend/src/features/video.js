import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    video: {}
}

const video = createSlice({
  name: 'video',
  initialState,
  reducers: {}
});

export const {} = video.actions

export default video.reducer