 /* eslint-disable no-unused-vars */
import styles from './styles.module.css'
import React from 'react'
 
export default function ContainerMatchs ( ) {
    return (
        <div className={styles.contentTable}>
            <h1>Próximos Rachas:</h1>
        <div className={styles.containerTable}>
       
          <table className={styles.tableMatchs}>
            <thead>
            <tr>
                <th>#</th>
                <th>Data</th>
                <th>Horário</th>
                <th>Local</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>30/08/24</td>
                <td>21:00</td>
                <td>Arena Futebol</td>
            </tr>
            <tr>
                <td>1</td>
                <td>30/08/24</td>
                <td>21:00</td>
                <td>Arena Futebol</td>
            </tr>
            <tr>
                <td>1</td>
                <td>30/08/24</td>
                <td>21:00</td>
                <td>Arena Futebol</td>
            </tr>
            <tr>
                <td>1</td>
                <td>30/08/24</td>
                <td>21:00</td>
                <td>Arena Futebol</td>
            </tr>
            <tr>
                <td>1</td>
                <td>30/08/24</td>
                <td>21:00</td>
                <td>Arena Futebol</td>
            </tr>
            </tbody>
            </table>
        </div>
        </div>
    )
}

