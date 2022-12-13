import React from 'react'

import discord from '../img/discord-icon.png'
import twitter from '../img/twitter-icon.png'
import logo from '../img/logo.png'

function Navbar() {
    return (
        <header className="top-0 z-20 border-b border-b-gray-50 w-full">
            <div className="flex flex-row justify-between items-center p-2 max-w-7xl mx-auto xl:px-0">
                <div className="w-24">
                    <a href="/">
                        <img src={logo} alt="Bear With Us logo" className="w-100" />
                    </a>
                </div>
                <div className="flex flex-row justify-center gap-8">
                    <div className="w-8">
                        <a href="https://discord.gg/BfnfTjVetq">
                            <img src={discord} alt="Discord" className="w-100" />
                        </a>
                    </div>
                    <div className="w-8">
                        <a href="https://twitter.com/bearwithuswtf">
                            <img src={twitter} alt="Twitter" className="w-100" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar