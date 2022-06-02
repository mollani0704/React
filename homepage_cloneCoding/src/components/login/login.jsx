import React from 'react';
import Footer from '../../footer';
import BlackBar from '../blackBar/blackBar';
import LoginForm from '../loginForm';
import styles from './login.module.css';

const Login = () => {
    return (
        <>
            <BlackBar />
            <div className={styles.contents}>
                <LoginForm />
            </div>
            <Footer />
        </>
    );
};

export default Login;
