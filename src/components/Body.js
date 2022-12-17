import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import { isMobile } from 'react-device-detect'

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
    const [web3, setWeb3] = useState([])
    const [contract, setContract] = useState([])
    const [displayAlertGeneral, setDisplayAlertGeneral] = useState(false)
    const [state, setState] = useState({
        account: "",
        isConnected: false,
        isSoldOut: false,
        hasFreeMint: false,
        isLoading: false,
        isLoadingMint: false,
        isLoadingFree: false,
        isDisabled: false,
        isDisabledMint: false,
        isDisabledFree: false,
        isPlusDisabled: false,
        isMinusDisabled: false,
        showButtons: false,
        isError: false,
        maxMintPerTx: 0,
        maxNftPerAddr: 0,
        totalSupply: 0,
        txHash: "",
        lastTokenId: 0,
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

    // alerts
    const handleHideShowAlertGeneral = () => setDisplayAlertGeneral(false);
    const handleShowAlertGeneral = () => setDisplayAlertGeneral(true);

    // functions
    const _connect = async () => {
        _setState("isLoading", true)
        _setState("isDisabled", true)

        const web3 = configureWeb3()
        if (web3 !== 1) {
            setWeb3(web3)

            const contract = new web3.eth.Contract(bwuAbi, bwuAddress)
            setContract(contract)

            const userAcct = await connectToMetaMask()
            if (userAcct) {
                _init(web3, contract, userAcct)
                _setState("account", userAcct)
            } else {
                _setState("outputMsg", "You do not have a connected wallet address. Please try again.")
                handleShowAlertGeneral()
                _setState("isLoading", false)
                _setState("isDisabled", false)
            }
        } else {
            _setState("isError", true);
            (isMobile) ? _setState("outputMsg", "Please use the in-app browser of MetaMask app on your device to mint.") : _setState("outputMsg", "No MetaMask detected. Please install Metamask extension on your browser to proceed.")
            handleShowAlertGeneral()

            _setState("isLoading", false)
            _setState("isDisabled", false)
        }
    }

    const _init = async (w3, cont, acct) => {
        // check if the account has free mint
        const checkFreeMint = await cont.methods.isFreeMint(acct).call()
        if (checkFreeMint) {
            _setState("hasFreeMint", true)
            _setState("isError", false)
            _setState("outputMsg", "Congratulations! You have a FREE BWU NFT MINT! Please click the \"MINT FREE NFT\" button below")
            handleShowAlertGeneral()
        }

        // get the details for the mint
        const maxMintQty = await cont.methods.maxMintQuantity().call()
        _setState("maxMintPerTx", maxMintQty)

        const nftAddressLimit = await cont.methods.nftPerAddressLimit().call()
        _setState("maxNftPerAddr", nftAddressLimit)

        const totalSupply = await cont.methods.totalSupply().call()
        _setState("totalSupply", totalSupply)

        _setState("isLoading", false)
        _setState("isDisabled", false)
        _setState("isConnected", true)
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
                        <p className="teenage text-gray-50 text-[22px] text-center mb-1">So, <span className="aine text-sm">BEAR WITH US!</span></p>

                        <div className="mb-8">
                            <a
                                href={`https://goerli.etherscan.io/address/${bwuAddress}`}
                                target="_blank"
                                rel="noreferrer"
                                className="teenage text-gray-50 text-md underline hover:text-color-orange"
                            >
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" /> View Smart Contract
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
                                {/* alert */}
                                {displayAlertGeneral && (
                                    <div className={`mb-3 ${state.isError ? "alert-error" : "alert-success"}`}>
                                        <div className="flex justify-between items-start gap-4">
                                            <p className="teenage text-lg leading-5 text-white">{state.outputMsg}</p>
                                            <button onClick={handleHideShowAlertGeneral} className="teenage text-white">
                                                <FontAwesomeIcon icon={faTimes} />
                                            </button>
                                        </div>
                                        {state.showButtons && (
                                            <div className="flex justify-start gap-3 mt-1">
                                                <a href={explorerUrl + state.txHash}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="teenage text-white underline hover:text-color-orange"
                                                >
                                                    View on EtherScan
                                                </a>
                                                <a href={openSeaUrl + bwuAddress + "/" + state.lastTokenId}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="teenage text-white underline hover:text-color-orange"
                                                >
                                                    View on OpenSea
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {/* end alert */}
                                <p className="text-gray-50 text-md text-center mb-5">Connect your wallet to proceed</p>
                                
                                <button onClick={_connect} className="btn-1 w-[250px] mx-auto rounded-full teenage on-hover on-disabled" disabled={state.isDisabled}>
                                    {state.isLoading ? <FontAwesomeIcon icon={faSpinner} color="white" spin /> : "Connect Wallet"}
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="w-[260px] mx-auto lg:-mt-12">
                                    <img src={logo} alt="Bear With Us Logo" className="w-full" />
                                </div>
                                <div className="bg-gray-50 border-8 border-[#fac102] rounded-2xl px-4 pt-9 pb-4 w-full sm:w-4/5 md:w-2/3 lg:w-full xl:w-5/6 sm:mx-auto -mt-14">
                                    {/* alert */}
                                    {displayAlertGeneral && (
                                        <div className={`mb-3 ${state.isError ? "alert-error" : "alert-success"}`}>
                                            <div className="flex justify-between items-start gap-4">
                                                <p className="teenage text-lg leading-5 text-white">{state.outputMsg}</p>
                                                <button onClick={handleHideShowAlertGeneral} className="teenage text-white">
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </button>
                                            </div>
                                            {state.showButtons && (
                                                <div className="flex justify-start gap-3 mt-1">
                                                    <a href={explorerUrl + state.txHash}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="teenage text-white underline hover:text-color-orange"
                                                    >
                                                        View on EtherScan
                                                    </a>
                                                    <a href={openSeaUrl + bwuAddress + "/" + state.lastTokenId}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="teenage text-white underline hover:text-color-orange"
                                                    >
                                                        View on OpenSea
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {/* end alert */}

                                    <div className="mb-6">
                                        <p className="text-color-brown text-lg mb-1">Mint Price: 0.003 ETH*</p>
                                        <p className="text-color-orange text-sm">100/999 Minted!</p>
                                    </div>
                                    <div className="mb-3">
                                        <p className="teenage text-color-brown text-[20px]">Max. mint per transaction: 3</p>
                                        <p className="teenage text-color-brown text-[20px]">NFT Limit per Address: 9</p>
                                    </div>
                                    <div className="flex justify-center items-center mb-3 gap-2">
                                        <button className="w-14 btn-1 rounded-md on-hover on-disabled" disabled={state.isMinusDisabled || state.isDisabled}>-</button>
                                        <div id="qtyToMint" className="border-2 border-[#6a3722] grow text-[25px] py-1 px-3 rounded-md">1</div>
                                        <button className="w-14 btn-1 rounded-md on-hover on-disabled" disabled={state.isPlusDisabled || state.isDisabled}>+</button>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="btn-1 w-[220px] mx-auto rounded-md teenage on-hover on-disabled mb-3" disabled={state.isDisabledMint}>
                                            {state.isLoadingMint ? <FontAwesomeIcon icon={faSpinner} color="white" spin /> : "MINT NOW!"}
                                        </button>
                                        <button className="btn-1 w-[220px] mx-auto rounded-md teenage on-hover on-disabled mb-3" disabled={!state.hasFreeMint || state.isDisabledFree}>
                                            {state.isLoadingFree ? <FontAwesomeIcon icon={faSpinner} color="white" spin /> : "MINT FREE NFT"}
                                        </button>
                                    </div>
                                    <p className="teenage text-color-orange text-md">*Mint price doesn't include the gas fee</p>
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