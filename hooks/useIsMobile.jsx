import React, { useState, useEffect } from 'react';

export function useIsMobile(width = 1024) {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                window.innerWidth < width
                    ? setIsMobile(true)
                    : setIsMobile(false);
            }

            // Add event listener
            window.addEventListener('resize', handleResize);

            handleResize();

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return isMobile;
}
