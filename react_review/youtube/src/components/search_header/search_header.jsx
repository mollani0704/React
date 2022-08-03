import styles from './search_header.module.css';
import React from 'react';

const SearchHeader = props => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.logoImg} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input className={styles.input} type="search" placeholder="Search...." />
            <button className={styles.button} type="submit">
                <img className={styles.buttonImg} src="/images/search.png" alt="" />
            </button>
        </div>
    );
};

export default SearchHeader;
