import React, { useState } from 'react'
import Aside from '../Aside/Aside'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'


function Layout({children, setVideos}) {
    const [sidebar, setSidebar] = useState('')
    return (
        <>
            <Header setSidebar={setSidebar} setVideos={setVideos}/>
            <Aside/>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
            {children}
        </>
    )
}

export default Layout