import React from 'react'
import Body from './components/Body'
// import Navbar from './components/Navbar'

import banner from './img/banner.jpg'

function App() {
    return (
        <div style={{ 'backgroundImage': `url(${banner})` }} className="relative h-full bg-cover bg-center lg:h-screen">
            {/* <Navbar /> */}
            <Body />
        </div >
    )
}

export default App;
