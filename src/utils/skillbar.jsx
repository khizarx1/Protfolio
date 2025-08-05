import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function SkillBar({ product }) {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (inView) {
            setWidth(product.value);
        }
    }, [inView, product.value]);

    return (
        <div ref={ref} className="mb-4">
            <div className="flex justify-between text-white text-sm font-medium mb-1">
                <span><i className={`pr-2 ${product.icon}`}></i>{product.label}</span>
                <span>{width}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded">
                <div
                    className="h-2 bg-cyan-400 rounded transition-[width] duration-[1500ms] ease-out"
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
}
export default SkillBar