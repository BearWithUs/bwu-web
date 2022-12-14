import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

import logo from '../img/logo.png'
import bwu from '../img/bwu.gif'

function Body() {
    return (
        // <section className="relative p-2 max-w-7xl mx-auto xl:px-0 mt-12 md:mt-20 lg:mt-24">
        //     <div className="flex flex-wrap justify-center items-center">
        <section className="relative px-2 max-w-7xl mx-auto xl:px-0 h-full py-14 lg:py-0">
            <div className="flex flex-wrap justify-center items-center h-full">
                <div className="w-full lg:w-1/2 text-center">
                    <div className="px-3 sm:px-10 md:px-20 lg:px-0">
                        <p className="text-[#6a3722] text-stroke text-3xl mb-5">You Found Us!</p>
                        <p className="teenage text-gray-50 text-[22px] text-center mb-3">If you are here, you found us in the vast forest. Welcome to the camp!</p>
                        <p className="teenage text-gray-50 text-[22px] text-center mb-3">This 999 sleuth of bears has come to gather in this camp to bring back the FUN in the NFT space in this BEAR MARKET.  We just missed chatting, chilling, hibernating, and having fun with the amazing people in the world.</p>
                        <p className="teenage text-gray-50 text-[22px] text-center mb-3">If you join us, there will be nothing to expect from you, we won't promise anything either. No strings attached. We are all just here to have fun and enjoy the community. In the forest, there always be uncertainties, and that is what makes it thrilling. It's up to you to follow your own trail. If you lose anything, we won't be responsible for it.</p>
                        <p className="teenage text-gray-50 text-[22px] text-center mb-3">So, <span className="aine text-sm">BEAR WITH US!</span></p>
                    </div>
                </div>
                <div className="w-full my-10 lg:w-1/2 text-center">
                    <div className="w-full px-3 sm:px-10 md:w-5/6 md:mx-auto md:px-0">
                        <div className="w-[280px] mx-auto">
                            <img src={bwu} alt="Bear With Us GIF" className="w-full" />
                        </div>
                        <div className="w-[260px] mx-auto -mt-[52px]">
                            <img src={logo} alt="Bear With Us Logo" className="w-full" />
                        </div>
                        <p className="teenage text-gray-50 text-4xl text-center mb-5">Minting very soon!</p>
                        <div className="flex flex-row justify-center gap-14">
                            <div className="w-8">
                                <a href="https://discord.gg/BfnfTjVetq">
                                    <FontAwesomeIcon icon={faDiscord} className="text-gray-50 text-4xl" />
                                </a>
                            </div>
                            <div className="w-8">
                                <a href="https://twitter.com/bearwithuswtf">
                                    <FontAwesomeIcon icon={faTwitter} className="text-gray-50 text-4xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Body