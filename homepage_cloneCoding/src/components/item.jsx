import React from 'react';
import styles from './item.module.css';
import Logo from '../logo.png';

const Item = () => {
    return (
        <div className={styles.item}>
            <img className={styles.img} src={Logo} alt="" />
            <div className={styles.description}>
                <h3 className={styles.title}>리액트로 홈페이지 프로젝트</h3>
                <p>안녕하세요 홈페이지 프로젝트 중입니다.</p>
                <button>구매하기</button>
            </div>
        </div>
    );
};

export default Item;
