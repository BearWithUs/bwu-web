import React, { useState } from 'react'
import Body from './components/Body'

import banner from './img/banner.jpg'

function App() {
    return (
        <div style={{ 'backgroundImage': `url(${banner})` }} className="relative h-full bg-cover bg-center lg:h-screen">
            <div className="bwu-overlay"></div>
            <Body />
        </div >
    )
}

export default App;
