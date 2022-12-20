import React, { useState } from 'react'
import Categories from './Categories'
import LeftMenu from './LeftMenu'
import Menu from './Menu'
import Navbar from './Navbar'
import Videos from './Videos'


function Layout() {
    const [shadow, setShadow] = useState('none')
    
    return (
        <React.StrictMode>
            <Navbar setShadow={setShadow}/>
            <LeftMenu/>
            <Menu shadow={shadow} setShadow={setShadow}/>
            <div className="media-content">
                <div className="content">
                    <Categories/>
                    <Videos/>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Layout