import React from 'react'

const Head = ({isFullScreen}) => {
    return (
        <header className="header-wrap">
            <h1 className="logo">TerNote</h1>
            <ul className="head-nav">
                <li><a href="">Blog</a></li>
                <li><a href="">Git</a></li>
            </ul>
        </header>
    )
}

export default Head