import React from 'react';
import styles from './footer.module.css';
import FooterItem from './footerItem';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <FooterItem />
            <FooterItem />
            <FooterItem />
            <FooterItem />
            <FooterItem />
        </div>
    );
};

export default Footer;
