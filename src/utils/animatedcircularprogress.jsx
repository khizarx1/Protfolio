import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useInView } from 'react-intersection-observer';
import 'react-circular-progressbar/dist/styles.css';

function AnimatedCircularProgress({ product }) {
    const [progress, setProgress] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const interval = setInterval(() => {
                start += 1;
                if (start <= product.value) {
                    setProgress(start);
                } else {
                    clearInterval(interval);
                }
            }, 15); // speed of animation
        }
    }, [inView, product.value]);

    return (
        <div ref={ref} className="w-[100px]">
            <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                styles={buildStyles({
                    pathColor: '#1EE4E9',
                    textColor: '#fff',
                    trailColor: '#1b1b1b',
                })}
            />
            <p className="text-white text-center mt-2">{product.label}</p>
        </div>
    );
}

export default AnimatedCircularProgress;
