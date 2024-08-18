/* eslint-disable no-unused-vars */
import styles from './styles.module.css'
import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faFutbol, faUserPlus } from '@fortawesome/free-solid-svg-icons'
 
export default function BottomBar ( ) {
    return (
        <div className={styles.containerBottom}>
        <div className={styles.itemsContainerBottom}>

        <div className={styles.itemBottomTag}>
        <Link to="/"><FontAwesomeIcon className={styles.bottomIcon} icon={faFutbol} />
        <small>Início</small>
        </Link>
        </div>
        <div className={styles.itemBottomTag}>
        <Link to="#"><FontAwesomeIcon className={styles.bottomIcon} icon={faUserPlus} />
        <small>Novo Jogador</small>
        </Link>
        </div>
        <div className={styles.itemBottomTag}>

        <Link to="#"><FontAwesomeIcon className={styles.bottomIcon} icon={faDice} />
        <small>Times</small>
        </Link>
        </div>
        </div>
        </div>
    )
}