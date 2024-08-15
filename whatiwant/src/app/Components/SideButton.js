import React from 'react'
import Link from 'next/link'
import './SideButton.css'

const SideButton = ({route, text}) => {
    return (
        <div className= "button">
            <Link href={route}>{text}</Link>
        </div>
    )
}

export default SideButton