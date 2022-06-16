import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick/lib/slider';
import styles from './blackBar.module.css';

const BlackBar = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slideToShow: 0,
        slideToScroll: 1,
        fade: true,
    };

    return (
        <div className={styles.black_bar}>
            <Slider {...settings}>
                <div>3만원 이상 무료배송</div>
                <div>오리지널 실루엣의 매력</div>
                <div>[커스텀]5월 신상품</div>
            </Slider>
        </div>
    );
};

export default BlackBar;
