import React, { useState } from 'react';
//import React, { useState } from 'react';
import value from './scrollimages';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Content = () => {
    const [index, SetIndex] = useState(0);
    const { image } = value[index];

    const checkNumber = (Number) => {
        if (Number > value.length - 1) {
            return 0;
        }
        if (Number < 0) {
            return value.length - 1
        }
        return Number;
    };
    const nextImage = () => {
        SetIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevImage = () => {
        SetIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const randomImage = () => {
        let randomnumber = Math.floor(Math.random() * value.length);
        if (randomnumber === index) {
            randomnumber = index + 1
        }
        SetIndex(checkNumber(randomnumber));
    }
    return <article className='slider'>
        <div className="img-container">
            <img src={image} alt='' className='person-img' />
        </div>
        <div className='button-container'>
            <button className='prev-btn' onClick={prevImage}>
                <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextImage}>
                <FaChevronRight />
            </button>
        </div>
    </article>

};
export default Content;