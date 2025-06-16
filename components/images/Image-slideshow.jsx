import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from './image-slideshow.module.css';

export default function ImageSlideshow({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          fill
          className={index === currentImageIndex ? classes.active : ''}
          style={{ objectFit: 'cover' }}
          priority={index === currentImageIndex}
        />
      ))}
    </div>
  );
}


