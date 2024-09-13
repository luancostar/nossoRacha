/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './styles.module.css';

export default function NewPlayer() {
    const [rating, setRating] = useState(0);

    const handleRating = (index) => {
        const newRating = rating === index ? index - 0.5 : index;
        setRating(newRating);
    };

    return (
        <div className={styles.contentTable}>
            <h1>Nome do Jogador:</h1>
            <div>
                <input className={styles.inputContent} type="text" />
            </div>
            <h1 style={{marginBottom:'0px'}}>Selecione o Nível do Jogador:</h1>
           
            <div className={styles.starRating}>
                {[...Array(5)].map((_, index) => (
                    <label
                        key={index}
                        className={`${styles.star} ${
                            rating > index
                                ? rating > index + 0.5
                                    ? styles.full
                                    : styles.half
                                : styles.empty
                        }`}
                        onClick={() => handleRating(index + 1)}
                    >
                        ★
                    </label>
                ))}
            </div>

            <div>
                <h2>Avaliação: {rating} estrelas</h2>
            </div>
            
            <div style={{marginTop:'6rem', width: '100%'}}>
                <input className='submitNewPlayer' type="submit" />
            </div>
        </div>
    );
}
