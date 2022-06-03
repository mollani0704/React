import React from 'react';
import Footer from '../../footer';
import BlackBar from '../blackBar/blackBar';
import Item from '../item';
import styles from './new.module.css';

const New = () => {
    return (
        <>
            <BlackBar />
            <h3 className={styles.title}>HOME / NEW</h3>
            <img
                className={styles.new_Img}
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

export default New;
