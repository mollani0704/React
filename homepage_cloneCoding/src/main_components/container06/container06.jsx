import React from 'react';
import styles from './container06.module.css';
import Item06 from './item06';

const Container06 = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Events</h2>
            <div className={styles.items}>
                <Item06 />
                <Item06 />
                <Item06 />
                <Item06 />
            </div>
        </div>
    );
};

export default Container06;
