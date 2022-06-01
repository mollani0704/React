import React from 'react';
import Logo from '../../logo.png';
import styles from './item02.module.css';

const Item02 = () => {
    return (
        <div
            style={{
                width: '300px',
                height: '350px',
                backgroundColor: '#ccc',
                margin: '0 15px',
                float: 'left',
            }}
        >
            <img className={styles.img} src={Logo} alt="" />
            <div className={styles.description}>
                <h3>리액트로 홈페이지 프로젝트</h3>
                <p>안녕하세요 홈페이지 프로젝트 중입니다.</p>
                <div>★★★★★</div>
            </div>
        </div>
    );
};

export default Item02;
