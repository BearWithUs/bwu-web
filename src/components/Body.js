import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import connectToMetaMask from '../utils/connectToMM'
import { configureWeb3 } from '../utils/web3'

// PRODUCTION
// import { bwuAbi, bwuAddress } from '../utils/contractMain' 
// DEVELOPMENT
import { bwuAbi, bwuAddress } from '../utils/contractDev'

import discord from '../img/discord-icon.png'
import twitter from '../img/twitter-icon.png'
import logo from '../img/logo.png'
import bwu from '../img/bwu.gif'

function Body() {
    const [state, setState] = useState({
        account: "",
        isConnected: false,
        isSoldOut: false,
        hasFreeMint: false,
        isLoading: false,
        isDisabled: false,
        isError: false,
        txHash: "",
        outputMsg: "",
    })

    // Other Variables
    // PRODUCTION
    // const explorerUrl = "https://etherscan.io/tx/"
    // const openSeaUrl = "https://opensea.io/assets/ethereum/"
    // DEVELOPMENT
    const explorerUrl = "https://goerli.etherscan.io/tx/"
    const openSeaUrl = "https://testnets.opensea.io/assets/goerli/"

    // state updater
    const _setState = (name, value) => {
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <section className="relative px-2 max-w-7xl mx-auto xl:px-0 h-full py-14 lg:py-0">
            <div className="flex flex-wrap justify-center items-center h-full">
                <div className="w-full lg:w-1/2 text-center">
                    <div className="px-3 sm:px-10 md:px-20 lg:px-0">
                        <p className="text-color-brown text-stroke text-3xl mb-5">You Found Us!</p>
                        <p className="teenage text-gray-50 text-[22px] text-center mb-3">If you are here, you found us in the vast forest. Welcome to the camp!</p>
                        <p className="teenage text-gray-50 text-[22px] text-center mb-3">This 999 sleuth of bears has come to gather in this camp to bring back the FUN in the NFT space in this BEAR MARKET.  We just missed chatting, chilling, hibernating, and having fun with the amazing people in the world.</p>
                        <p className="teenage text-gray-50 text-[22px] text-center mb-3">If you join us, there will be nothing to expect from you, we won't promise anything either. No strings attached. We are all just here to have fun and enjoy the community. In the forest, there always be uncertainties, and that is what makes it thrilling. It's up to you to follow your own trail. If you lose anything, we won't be responsible for it.</p>
                        <p className="teenage text-gray-50 text-[22px] text-center mb-3">So, <span className="aine text-sm">BEAR WITH US!</span></p>

                        <a href={`https://goerli.etherscan.io/address/${bwuAddress}`}></a>

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
                </div>
                <div className="w-full mt-10 text-center lg:mt-0 lg:w-1/2">
                    <div className="w-full px-3 sm:px-10 md:w-5/6 md:mx-auto md:px-0">
                        {!state.isConnected ? (
                            <>
                                <div className="w-[280px] mx-auto">
                                    <img src={bwu} alt="Bear With Us GIF" className="w-full" />
                                </div>
                                <div className="w-[260px] mx-auto -mt-[52px]">
                                    <img src={logo} alt="Bear With Us Logo" className="w-full" />
                                </div>
                                <p className="text-gray-50 text-md text-center mb-5">Connect your wallet to proceed</p>
                                <button className="btn-1 teenage on-hover on-disabled" disabled={state.isDisabled}>
                                    {state.isLoading ? <FontAwesomeIcon icon={faSpinner} color="white" spin /> : "Connect Wallet"}
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="w-[260px] mx-auto lg:-mt-12">
                                    <img src={logo} alt="Bear With Us Logo" className="w-full" />
                                </div>
                                <div className="bg-gray-50 border-8 border-[#fac102] rounded-2xl px-4 pt-9 pb-4 w-full sm:w-4/5 md:w-2/3 lg:w-full xl:w-5/6 sm:mx-auto -mt-14">
                                    <div className="mb-3">
                                        <p className="text-color-brown text-xl mb-1">Mint Price: 0.003 ETH*</p>
                                        <p className="text-color-orange text-sm">100/999 Minted!</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Body