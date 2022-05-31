import React from 'react';
import BlackBar from './components/blackBar/blackBar';
import Footer from './footer';
import styles from './main.module.css';
import Container01 from './main_components/container01/container01';
import Container02 from './main_components/container02/container02';
import Container03 from './main_components/container03/container03';
import Container04 from './main_components/container04/container04';
import Container05 from './main_components/container05/container05';
import Container06 from './main_components/container06/container06';

const Main = () => {
    return (
        <>
            <BlackBar />
            <div className={styles.main_container}>
                <img
                    className={styles.main_Img}
                    src={require('./Img/mainImg.jpg')}
                    alt=""
                />
            </div>
            <div className={styles.contents}>
                <Container01 />
                <Container02 />
                <Container03 />
                <Container04 />
                <Container05 />
                <Container06 />
            </div>
            <Footer />
        </>
    );
};

export default Main;
