/* eslint-disable no-unused-vars */
import styles from './styles.module.css'
import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
 
// eslint-disable-next-line react/prop-types
export default function FirstRoll ({logoCampo, logoEquipe, logoPlayer}) {
    return (
        <div className={styles.containerScroller}> 
        <div className={styles.containerRoll}>
        <div className={styles.itemRoll}>
        <img style={{width: '50px', backgroundColor: 'transparent', margin: '10px'}}   src={logoCampo} />

        <p>Meu Racha</p>
        </div>
        <div className={styles.itemRoll}>
        <img style={{width: '50px', backgroundColor: 'transparent', margin: '10px'}}   src={logoEquipe} />

        <p style={{marginTop: '-5px', lineHeight: '20px'}} >Sortear Times</p>
        </div>
        <div className={styles.itemRoll}>
        <img style={{width: '50px', backgroundColor: 'transparent', margin: '10px'}}   src={logoPlayer} />

        <p style={{marginTop: '-5px', lineHeight: '20px'}} >+ Novo Jogador</p>
        </div>
        </div>
        </div>
    )
}