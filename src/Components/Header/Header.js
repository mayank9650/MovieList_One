import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styles from './Header.module.css'
function Header(){
    return <div className={styles.header}>
        <div className='logo'>
        <i className="fa-regular fa-camera-movie"></i>
        <p>Mov</p>
        </div>
        <div >
            <button className={styles.singup}>SIGN IN</button>
        </div>
    </div>
}

export default Header