//import React, { useRef, useState } from 'react';
//import React from 'react';
import { useState } from 'react';
import './../css/header/header.css';
import logo from '/src/assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <>
            <div className="header">
                <div className='image'>
                    <img src={logo} alt="logo" style={{ width: '150px', height: '70px' }} />
                </div>

                <div className='header-tab first-text'>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>ANA SAYFA</Link>
                </div>
                <div className='header-tab second-text'>
                    <Link to="/fields" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>HALI SAHALAR</Link>
                </div>
                <div className='header-tab third-text'>
                    <Link to="/createteam" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>KADRO KUR</Link>
                </div>
                <div className='header-tab fourth-text'>
                    <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>HAKKIMIZDA</Link>
                </div>
                <div className='header-tab fifth-text'>
                    <Link to="/help" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>DESTEK</Link>
                </div>


                <div className='menu-button'
                    style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", position: 'relative' }}
                >
                    <div className='menu-button-material-symbols-outlined'>
                        <span
                            className='material-symbols-outlined'
                            onClick={toggleMenu}
                            style={{ cursor: 'pointer', marginRight: '10px' }}
                        >
                            Menu
                        </span>
                    </div>

                    {showMenu && (
                        <div
                            className="dropdown-menu"
                        >
                            <div style={{ cursor: 'pointer', padding: '5px' }}>
                                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>Giriş Yap</Link>
                            </div>
                            <div style={{ cursor: 'pointer', padding: '5px' }}>
                                <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>Kayıt Ol</Link>
                            </div>
                            <div style={{ cursor: 'pointer', padding: '5px' }}>
                                <Link to="/password-reset" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>Şifre Yenile</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Header;
