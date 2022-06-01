import React from 'react';
import styles from './container05.module.css';
import Item02 from '../container02/item02';

const Container05 = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>News</h2>
            <div className={styles.items}>
                <Item02 />
                <Item02 />
                <Item02 />
                <Item02 />
            </div>
        </div>
    );
};

export default Container05;
