import React from 'react';
import styles from './container02.module.css';
import Item02 from './item02';

const Container02 = () => {
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

export default Container02;
