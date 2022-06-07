import React from 'react';
import Footer from '../../footer';
import BlackBar from '../blackBar/blackBar';
import Item from '../item';
import styles from './kids.module.css';

const Kids = () => {
    return (
        <>
            <BlackBar />
            <h3 className={styles.title}>HOME / KIDS</h3>
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

export default Kids;
