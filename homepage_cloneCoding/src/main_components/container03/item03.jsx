import React from 'react';
import Logo from '../../logo.png';
import styles from './item03.module.css';

const Item03 = () => {
    return (
        <div
            style={{
                width: '450px',
                height: '350px',
                backgroundColor: '#ccc',
                margin: '0 15px',
                float: 'left',
            }}
        >
            <h1 className={styles.title}>REACT</h1>
        </div>
    );
};

export default Item03;
