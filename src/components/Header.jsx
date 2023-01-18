import React from 'react';
import logo from '../logo.png'

function Header() {
    return (
        <header>
            <h1>Skyrim Quests <img src={logo} alt='skyrim logo' width={100} height={100} /></h1>
        </header>
    )
}

export default Header;