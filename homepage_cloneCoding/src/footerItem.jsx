import React from 'react';
import styles from './footerItem.module.css';

const FooterItem = () => {
    return (
        <div className={styles.item}>
            <h2 className={styles.title}>React</h2>
            <a className={styles.link} href="">
                React
            </a>
            <a className={styles.link} href="">
                React
            </a>
        </div>
    );
};

export default FooterItem;
