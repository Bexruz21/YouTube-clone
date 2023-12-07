import { configureStore } from "@reduxjs/toolkit";
import { videosSlice } from "../features/videos";

const store = configureStore({
    reducer: {
        videos: videosSlice.reducer
    }
})

export default store