import React, {useState, useEffect} from 'react';
import alarmGo from '../images/bell.png'
import receiptGo from '../images/receipt.png'
import nowGo from '../images/short_cut.png'
import logoWhite from '../images/tier_logo_white.png'
import imgPhone from '../images/ned_phone.png'
import qrPay from '../images/qr_button_black.png'
import { Link } from "react-router-dom";

const GoHome = () => {
    
    const onClickWallet = async() => {
    }

    const onClickEFT = () => {
        console.log("EFT로 이동");
        window.location.replace("/GoEFT");
    }

    const onClickATM = () => {
        console.log("ATM으로 이동");
        window.location.replace("/GoATM");
    }

    const onClickPeer = () => {
        console.log("Peer로 이동");
        window.location.replace("/GoPeer");
    }

    const onClickQRpay = () => {
        console.log("QRpay로 이동");
    }

    const onClickHistory = () => {
        console.log("History로 이동");
    }


    return(
        <div>
            <div className="container">
                <div className="mainhead">
                    <div className="logo2">
                        <img src={logoWhite} alt="White" />
                    </div>
                    <div className="bell">
                        <img src={alarmGo} alt="alarm" />
                    </div>
                </div>
                <div className="linkwallet" onClick={onClickWallet}>
                    <img src={imgPhone} className="nedlogo" alt="bigN" />
                        <span className="linkwallet1">There is no wallet connected.</span>
                        <span className="linkwallet2">+ Add Wallet</span>
                </div>
                <div className="EFT" onClick={onClickEFT}>
                    <img src={nowGo} className="imgEFT" alt="GoEFT" />
                    <span className="EFTtypo">EFT</span>
                </div>
                <div className="ATM" onClick={onClickATM}>
                    <img src={receiptGo} className="imgATM" alt="GoATM" />
                    <span className="ATMtypo">ATM</span>
                </div>
                <div className="Peer" onClick={onClickPeer}>
                    <img src={nowGo} className="imgPeer" alt="GoPeer" />
                    <span className="Peertypo">PEER RO PEER</span>
                </div>
                <div className="QR" onClick={onClickQRpay}>
                    <img src={qrPay} className="imgQrblack" alt="GoQrpay" />
                    <span className="QRtypo">QR PAYMENT</span>
                </div>
                <div className="history" >
                    <span className="historytypo">HISTORY</span>
                    <div className="historyinfo" onClick={onClickHistory}>
                        <span className="historyinfotypo">No history</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GoHome;