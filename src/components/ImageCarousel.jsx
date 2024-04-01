import { useState } from "react";
import styles from "./ImageCarousel.module.css"

// should take an array of images?
function ImageCarousel(props) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const carouselImages = [
        "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
        "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg",
        "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg",
        "https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg"
    ];
    let currentImageUrl = carouselImages[currentImageIndex];
    //  useRef returns an object, {current: null}

    function prevSlide() {
        const prevIndex = (currentImageIndex - 1) % carouselImages.length;
        setCurrentImageIndex(prevIndex);
    }

    function nextSlide() {
        const nextIndex = (currentImageIndex + 1) % carouselImages.length;
        setCurrentImageIndex(nextIndex);
    }

    function goToSlide(slide) {
        setCurrentImageIndex(slide);
    }

    function getDotSize(slide) {
        if (slide === currentImageIndex) {
            return `${styles.largeImageDot}`;
        }
        return `${styles.imageDot}`;
    }

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.prevSlide} onClick={() => prevSlide()}>
                <div className={styles.leftArrow}></div>
            </div>
            <div className={styles.nextSlide} onClick={() => nextSlide()}>
                <div className={styles.rightArrow}></div>
            </div>
            <div className={styles.carouselImage} 
                style={ {backgroundImage: `url(${currentImageUrl})`} }>
            </div>
            <div className={styles.imageDotContainer}>
                <div className={getDotSize(0)} onClick={() => goToSlide(0)}></div>
                <div className={getDotSize(1)} onClick={() => goToSlide(1)}></div>
                <div className={getDotSize(2)} onClick={() => goToSlide(2)}></div>
                <div className={getDotSize(3)} onClick={() => goToSlide(3)}></div>
            </div>
        </div>
    )
}

export default ImageCarousel;