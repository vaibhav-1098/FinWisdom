import { useEffect } from "react";

const Confetti = () => {
    useEffect(() => {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            confettiNumber: 100,
        });
    }, []);
    return null;
};

export default Confetti;
