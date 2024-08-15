import React from 'react'
import Link from 'next/link'
import './Side.css'
import logo from './wiwlogo.png'
import Image from 'next/image'
import SideButton from './SideButton'


const Side = () => {
    return (
        <div className="side">
            <Image src={logo} alt={"Logo for WhatIWant"}/>
            <div className="links">
                <SideButton route = "/login" text = "Login"/>
                <SideButton route = "/about" text = "About"/>
                <SideButton route = "/code" text = "Access Code"/>
            </div>
        </div>
    )
}

export default Side