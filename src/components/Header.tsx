import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './../css/header/header.css';
import logo from '/src/assets/images/logo.png';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation(); // Mevcut yolu almak için useLocation kullanılıyor

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Seçili sayfa kontrolü
    const isSelected = (path: string) => location.pathname === path;

    return (
        <div className="header">
            <div className='image'>
                <img src={logo} alt="logo" style={{ width: '150px', height: '70px' }} />
            </div>

            <div className='header-tab-container'>
                <div className={`header-tab ${isSelected('/') ? 'selected' : ''}`}>
                    <Link className='header-tab-text' to="/" >ANA SAYFA</Link>
                </div>
                <div className={`header-tab ${isSelected('/fields') ? 'selected' : ''}`}>
                    <Link className='header-tab-text' to="/fields">HALI SAHALAR</Link>
                </div>
                <div className={`header-tab ${isSelected('/createteam') ? 'selected' : ''}`}>
                    <Link className='header-tab-text' to="/createteam">KADRO KUR</Link>
                </div>
                <div className={`header-tab  ${isSelected('/about') ? 'selected' : ''}`}>
                    <Link className='header-tab-text' to="/about" >HAKKIMIZDA</Link>
                </div>
                <div className={`header-tab ${isSelected('/help') ? 'selected' : ''}`}>
                    <Link className='header-tab-text' to="/help">DESTEK</Link>
                </div>
            </div>


            <div className='menu-button'
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
                    <div className="dropdown-menu">
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
    );
}

export default Header;
