import React from 'react';
import styles from './container01.module.css';
import Item01 from './item01';

const Container01 = () => {
    return (
        <div className={styles.container}>
            <Item01 />
            <Item01 />
            <Item01 />
        </div>
    );
};

export default Container01;
