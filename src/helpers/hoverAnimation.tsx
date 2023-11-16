const hoverVars = {
    initial: {
        scale: 1,
        opacity: 1,
    },
    animate: {
        scale: 1.03,
        transition: {
            duration: 0.3,
            ease: [0.12, 0, 0.39, 0],
            opacity: 0.3,
        }
    },
    exit: {
        scale: 1,
        transition: {
            duration: 0.3,
            ease: [0.12, 0, 0.39, 1],
            opacity: 1,
        }
    }
}

export default hoverVars