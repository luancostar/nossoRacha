/* eslint-disable no-unused-vars */
import styles from './styles.module.css'
import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
 
// eslint-disable-next-line react/prop-types
export default function TopBar ({logoImg, logoName} ) {
    return (
        <div className={styles.containerTop}>
        <div className={styles.itemsContainerTop}>
 
        <img style={{width: '60px'}}   src={logoImg} />
        <img style={{width: '100px', height: '40px'}}   src={logoName} />
        <a className={styles.topItems} href=""><FontAwesomeIcon className={styles.bottomIcon} icon={faBell} />
    
        </a>
        </div>
        </div>
    )
}