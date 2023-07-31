import { useState, useEffect } from 'react';
import styles from "@/styles/slide.module.css"


const Slideshow = () => {
    const images = [
      '/slide/slide_1.webp',
      '/slide/slide_2.webp',
      '/slide/slide_3.webp',
      '/slide/slide_4.webp',
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slide}>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
    );
};
export default Slideshow;