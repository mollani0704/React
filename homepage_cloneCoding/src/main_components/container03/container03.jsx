import React from 'react';
import styles from './container03.module.css';
import Item03 from './item03';

const Container03 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <Item03 />
                <Item03 />
                <Item03 />
            </div>
        </div>
    );
};

export default Container03;
