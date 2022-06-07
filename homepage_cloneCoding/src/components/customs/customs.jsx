import React from 'react';
import Footer from '../../footer';
import BlackBar from '../blackBar/blackBar';
import Item from '../item';
import styles from './customs.module.css';

const Customs = () => {
    return (
        <>
            <BlackBar />
            <h3 className={styles.title}>HOME / CUSTOMS</h3>
            <img
                className={styles.Img}
                src={require('../../Img/mainImg.jpg')}
                alt=""
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
            </div>
            <Footer />
        </>
    );
};

export default Customs;
