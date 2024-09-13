/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Loading() {
   
    return (
       
        <div className={styles.containerLoading}>
         <img style={{width:'100%',marginTop:'50%'}} src="/src/assets/loading.gif" alt="" />
        </div>
      
    );
}
