import { useState, useEffect } from 'react';
import './TypewriterText.css';

/**
 * Typewriter effect component
 * Animates text character by character with blinking cursor
 */
const TypewriterText = ({ text, delay = 100, className = '' }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);

            return () => clearTimeout(timeout);
        } else {
            // Continue showing cursor after text is complete
            setShowCursor(true);
        }
    }, [currentIndex, text, delay]);

    return (
        <span className={className}>
            {displayText}
            {showCursor && <span className="cursor-blink">|</span>}
        </span>
    );
};

export default TypewriterText;
