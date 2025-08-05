import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useInView } from 'react-intersection-observer';
import 'react-circular-progressbar/dist/styles.css';

function AnimatedCircularProgress({ product }) {
    const [progress, setProgress] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (!inView) return;

        let start = null;
        const duration = 1000; // ms
        const target = product.value;

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const progressValue = Math.min((elapsed / duration) * target, target);
            setProgress(Math.floor(progressValue));

            if (progressValue < target) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [inView, product.value]);

    return (
        <div ref={ref} className="w-[100px]">
            <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                styles={buildStyles({
                    pathTransition: 'stroke-dashoffset 1s ease-out', // Smooth stroke animation
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
