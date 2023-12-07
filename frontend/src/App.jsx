import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home'
import Library from './pages/Library/Library';
import VideoDetail from './pages/VideoDetail/VideoDetail'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/library' element={<Library/>} exact/>
                <Route path="/video/:id" element={<VideoDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App