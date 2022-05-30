import React from 'react';
import BlackBar from './components/blackBar/blackBar';
import Footer from './footer';
import styles from './main.module.css';

const Main = () => {
    return (
        <>
            <BlackBar />
            <div className={styles.mainImg}>MainImg</div>
            <div className={styles.contents}>MainImg</div>
            <Footer />
        </>
    );
};

export default Main;
