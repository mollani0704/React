import React from 'react';
import Footer from '../../footer';
import BlackBar from '../blackBar/blackBar';
import Item from '../item';
import styles from './women.module.css';

const Women = () => {
    return (
        <>
            <BlackBar />
            <h3 className={styles.title}> HOME / WOMEN</h3>
            <img
                className={styles.Img}
                src={require('../../Img/mainImg.jpg')}
            />
            <div className={styles.contents}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <Footer />
        </>
    );
};

export default Women;
