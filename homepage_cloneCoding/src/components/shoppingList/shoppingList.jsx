import React from 'react';
import Footer from '../../footer';
import BlackBar from '../blackBar/blackBar';
import styles from './shoppingList.module.css';

const ShoppingList = () => {
    return (
        <>
            <BlackBar />
            <div className={styles.content}>
                <h1>장바구니에 담긴 상품이 없습니다.</h1>
                <button className={styles.btn}>계속 쇼핑하기</button>
            </div>
            <Footer />
        </>
    );
};

export default ShoppingList;
