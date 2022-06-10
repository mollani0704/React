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
                <div>
                    <img
                        className={styles.Img}
                        src={require('../Img/mainImg.jpg')}
                    />
                </div>
                <div>
                    <img
                        className={styles.Img}
                        src={require('../Img/Img2.jpg')}
                    />
                </div>
                <div>
                    <img
                        className={styles.Img}
                        src={require('../Img/Img3.jpeg')}
                    />
                </div>
                <div>
                    <img
                        className={styles.Img}
                        src={require('../Img/Img4.jpg')}
                    />
                </div>
                <div>
                    <img
                        className={styles.Img}
                        src={require('../Img/Img5.jpg')}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default MainImg;
