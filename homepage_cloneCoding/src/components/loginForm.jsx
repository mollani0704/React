import React from 'react';
import styles from './loginForm.module.css';

const LoginForm = () => {
    return (
        <div>
            <h1 className={styles.title}>로그인</h1>
            <form className={styles.inputForm}>
                <input
                    className={styles.emailInput}
                    type="email"
                    placeholder="*이메일"
                ></input>
                <input
                    className={styles.passwordInput}
                    type="password"
                    placeholder="*비밀번호"
                ></input>
                <button className={styles.loginBtn}>로그인</button>
                <button className={styles.kakaoBtn}>
                    카카오 계정으로 로그인
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
