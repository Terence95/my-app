import React from 'react'

const Head = ({isFullScreen}) => {
    return (
        <header className="header-wrap">
            <h1 className="logo">Ter note</h1>
            <ul className="head-nav">
                <li><a href="">blog</a></li>
                <li><a href="">Git</a></li>
            </ul>
        </header>
    )
}

export default Head