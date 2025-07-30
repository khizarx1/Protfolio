// src/utils/TypingText.js

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

/**
 * A reusable typing animation component
 * @param {string[]} sequence - Array of strings or timing values
 * @param {number} speed - Typing speed
 * @param {number} repeat - How many times to repeat (0 = once, Infinity = loop)
 * @param {string} className - Additional CSS classes
 * @param {string} wrapper - HTML tag wrapper (default is "span")
 */
const TypingText = ({ 
    sequence = ['Default Typing Text'], 
    speed = 50, 
    repeat = 0, 
    className = '', 
    wrapper = 'span' 
}) => {
    return (
        <TypeAnimation
            sequence={sequence}
            speed={speed}
            repeat={repeat}
            wrapper={wrapper}
            className={className}
        />
    );  
};

export default TypingText;
