import React from 'react'

import discord from './img/discord-icon.png'
import twitter from './img/twitter-icon.png'
import logo from './img/logo.png'
import banner from './img/banner.jpg'

function App() {
  return (
    <div style={{ 'backgroundImage': `url(${banner})` }} className="h-screen bg-cover bg-center">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-row justify-between items-center top-0 p-2 z-20">
          <div className="w-24">
            <a href="/">
              <img src={logo} alt="Bear With Us logo" className="w-100" />
            </a>
          </div>
          <div className="flex flex-row justify-center gap-8">
            <div className="w-8">
              <a href="#">
                <img src={discord} alt="Discord" className="w-100" />
              </a>
            </div>
            <div className="w-8">
              <a href="#">
                <img src={twitter} alt="Twitter" className="w-100" />
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
