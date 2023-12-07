import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { VIDEOS } from "../utils/urls";

export const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        data: [],
        videos: []
    },
    reducers: {
        setVideos: (state, action) => {
            state.data = action.payload;
            state.videos = action.payload;
        },
        filterVideos: (state, action) => {
            console.log(state.data.filter(video => video.attributes.category == action.payload))
            // state.videos = state.data.filter(video => video.attributes.category == action.payload)
        }
    },
});

export const { setVideos, filterVideos } = videosSlice.actions;

export const getVideos = () => async (dispatch) => {
    const response = await axios.get(VIDEOS);
    dispatch(setVideos(response.data.data));
};

export default videosSlice.reducer;
