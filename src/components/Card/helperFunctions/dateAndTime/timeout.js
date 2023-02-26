import { useEffect, useState } from 'react';

let time = new Date().getTime();

export const useTimeout = (currentTime = time) => {
    const [isTimeout, setIsTimeout] = useState(false);

    useEffect(() => {
        let timer = setInterval(() => {
            time > currentTime ? setIsTimeout(true) : setIsTimeout(false);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    });

    return isTimeout;
};