
export const getSlideInVariants = (direction = "left", delay = 0, duration = 0.6) => {
    let x = 0;
    let y = 0;

    switch (direction) {
        case "left":
            x = -100;
            break;
        case "right":
            x = 100;
            break;
        case "top":
            y = -100;
            break;
        case "bottom":
            y = 100;
            break;
        default:
            break;
    }

    return {
        initial: { x, y, opacity: 0 },
        animate: { x: 0, y: 0, opacity: 1 },
        transition: {
            duration,
            ease: "easeOut",
            delay,
        },
    };
};
