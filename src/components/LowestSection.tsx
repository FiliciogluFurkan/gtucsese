//import React from 'react'
import { Link } from 'react-router-dom'

function LowestSection() {
  return (
    <div className='homepage-lowest-section'>
    <div className='homepage-lowest-section-logo'>
      <img src="/src/images/logo2.png" alt="logo" style={{ width: '270px', height: 'auto' }} />
    </div>
    <div className='homepage-lowest-section-first'>
      <div style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '24px', color: 'white' }}>
        Kurumsal
      </div>
      <div style={{ fontFamily: 'Inter', fontWeight: '300', fontSize: '15px', color: 'white', paddingTop: '10px' }}>
        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>Hakkımızda</Link>
      </div>
      <div style={{ fontFamily: 'Inter', fontWeight: '300', fontSize: '15px', color: 'white', paddingTop: '10px' }}>
        <Link to="/help" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>Kişisel Verilerin Korunması</Link>
      </div>
      <div style={{ fontFamily: 'Inter', fontWeight: '300', fontSize: '15px', color: 'white', paddingTop: '10px' }}>
        <Link to="/help" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>Sıkça sorulan Sorular</Link>
      </div>
      <div style={{ fontFamily: 'Inter', fontWeight: '300', fontSize: '15px', color: 'white', paddingTop: '10px' }}>
        <Link to="/help" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>Hesabım</Link>

      </div>
    </div>
    <div className='homepage-lowest-section-second'>
      <div style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '24px', color: 'white' }}>
        İletişim
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '15px' }}>
        <div className='material-symbols-outlined' style={{ color: 'white' }}>pin_drop</div>
        <div style={{ fontFamily: 'Inter', fontWeight: '300', fontSize: '15px', color: 'white', paddingLeft: '10px' }}>
          Gebze Teknik Üniversitesi
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '20px' }}>
        <div className='material-symbols-outlined' style={{ color: 'white' }}>call</div>
        <div style={{ fontFamily: 'Inter', fontWeight: '300', fontSize: '15px', color: 'white', paddingLeft: '10px' }}>
          0850-455-85-45
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '20px' }}>
        <div className='material-symbols-outlined' style={{ color: 'white' }}>mail</div>
        <div style={{ fontFamily: 'Inter', fontWeight: '300', fontSize: '15px', color: 'white', paddingLeft: '10px' }}>
          sahancepte_info@gmail.com
        </div>
      </div>
    </div>
    <div className='homepage-lowest-section-third'>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '24px', color: 'white' }}>
          Sosyal Medya
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '15px' }}>
          <img src="/src/images/facebook.png" alt="logo" style={{ width: '40px', height: 'auto' }} />
          <img src="/src/images/x_icon.png" alt="logo" style={{ width: '70px', height: 'auto', paddingLeft: "20px" }} />
          <img src="/src/images/instagram_icon.png" alt="logo" style={{ width: '70px', height: 'auto', paddingLeft: "20px" }} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default LowestSection
