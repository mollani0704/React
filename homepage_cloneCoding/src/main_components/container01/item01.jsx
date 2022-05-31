import React from 'react';
import Logo from '../../logo.png';
import styles from './item01.module.css';

const Item01 = () => {
    return (
        <div
            style={{
                width: '400px',
                height: '450px',
                backgroundColor: '#ccc',
                margin: '0 20px',
                float: 'left',
            }}
        >
            <img className={styles.img} src={Logo} alt="" />
            <div className={styles.description}>
                <h3>리액트로 홈페이지 프로젝트</h3>
                <p>안녕하세요 홈페이지 프로젝트 중입니다.</p>
                <button>구매하기</button>
            </div>
        </div>
    );
};

export default Item01;
