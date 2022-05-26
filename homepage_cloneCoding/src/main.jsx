import React from 'react';
import Footer from './footer';
import styles from './main.module.css';

const Main = () => {
    return (
        <>
            <div className={styles.mainImg}>MainImg</div>
            <div className={styles.contents}>MainImg</div>
            <Footer />
        </>
    );
};

export default Main;
