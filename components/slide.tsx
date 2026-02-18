import { useState, useEffect } from 'react';

const Slideshow = () => {
    const images = [
      '/slide/slide_1.webp',
      '/slide/slide_2.webp',
      '/slide/slide_3.webp',
      '/slide/slide_4.webp',
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
                setIsTransitioning(false);
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden rounded-2xl mx-auto max-w-7xl px-4 sm:px-6">
            <div className="relative aspect-[21/9] sm:aspect-[21/9]">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
                        isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                        maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                        WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
                    }}
                />
            </div>
            {/* Slide indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentIndex 
                                ? 'w-8 bg-white' 
                                : 'w-1.5 bg-white/40 hover:bg-white/60'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};
export default Slideshow;