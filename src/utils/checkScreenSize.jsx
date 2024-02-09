import { useEffect, useState } from 'react';

const useCheckWidthScreen = (widthToReRender) => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return width > widthToReRender;
};

export default useCheckWidthScreen;
