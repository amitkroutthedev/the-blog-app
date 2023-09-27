"use client"
import React, { useState } from 'react';
import { HiArrowNarrowUp } from 'react-icons/hi';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className='btn btn-circle btn-lg bg-primary-content'>
            <HiArrowNarrowUp onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }} size={25} />
        </button>
    );
}

export default ScrollButton;