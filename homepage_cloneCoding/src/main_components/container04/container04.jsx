import React from 'react';
import Item02 from '../container02/item02';
import styles from './container04.module.css';

const Container04 = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>New Arrival</h2>
            <div className={styles.items}>
                <Item02 />
                <Item02 />
                <Item02 />
                <Item02 />
            </div>
        </div>
    );
};

export default Container04;
