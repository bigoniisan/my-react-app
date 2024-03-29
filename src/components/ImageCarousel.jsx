import { useState } from "react";
import styles from "./ImageCarousel.module.css"

// should take an array of images?
function ImageCarousel() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const carouselImages = [
        "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
        "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg",
        "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg",
        "https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg"
    ];

    let currentImageUrl = carouselImages[currentImageIndex];

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

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.prevSlide} onClick={() => prevSlide()}>Prev</div>
            <div className={styles.nextSlide} onClick={() => nextSlide()}>Next</div>
            <div className={styles.carouselImage} 
                style={ {backgroundImage: `url(${currentImageUrl})`} }>
            </div>
            <div className={styles.imageDotContainer}>
                <div className={styles.imageDot} onClick={() => goToSlide(0)}></div>
                <div className={styles.imageDot} onClick={() => goToSlide(1)}></div>
                <div className={styles.imageDot} onClick={() => goToSlide(2)}></div>
                <div className={styles.imageDot} onClick={() => goToSlide(3)}></div>
            </div>
        </div>
    )
}

export default ImageCarousel;