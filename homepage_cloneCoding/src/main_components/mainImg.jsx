import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick/lib/slider';
import styles from './mainImg.module.css';

const MainImg = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slideToShow: 1,
        slideToScroll: 1,
        appendDots: dots => (
            <div style={{ paddingBottom: '50px' }}>
                <ul style={{ margin: '0px' }}>{dots}</ul>
            </div>
        ),
    };
    return (
        <div>
            <Slider {...settings}>
                <div className={styles.mainImg}></div>
                <div className={styles.img2}></div>
                <div className={styles.img3}></div>
                <div className={styles.img4}></div>
                <div className={styles.img5}></div>
            </Slider>
        </div>
    );
};

export default MainImg;
