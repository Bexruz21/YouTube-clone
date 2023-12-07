import React from 'react'
import Categories from './Category/Category'
import Navbar from './Navbar/Navbar'


function Header({setSidebar, setVideos}) {
    return (
        <div className="header">
            <Navbar setSidebar={setSidebar} setVideos={setVideos}/>
            <Categories setVideos={setVideos}/>
        </div>
    )
}

export default Header