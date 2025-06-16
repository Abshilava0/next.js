"use client";

import ImageSlideshow from "@/components/images/Image-slideshow";
import classes from "./page.module.css";
import CardPage from "@/components/cards/CardPage";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const images = [
    { image: '/homeimage.jpg', alt: 'Home image 1' },
    { image: '/homeimage2.jpg', alt: 'Home image 2' },
    { image: '/homeimage3.jpg', alt: 'Home image 3' }
  ];

  return (
    <>
      <main className={classes.homeMain}>
        <div className={classes.homeContainer}>
          <div className={classes.homeText}>
            <h1>Reliving the Golden Age of Cinema</h1>
            <p>
              Explore timeless classics, legendary directors, and forgotten gems
              from the earliest days of film. Step into a world where
              storytelling was born in black and white, and every frame was
              crafted by hand. Our platform helps filmmakers and enthusiasts
              create vintage-style
            </p>
            <button onClick={() => router.push('/contact')} >Get Started</button>
          </div>
          <div className={classes.slideshow}>
            <ImageSlideshow images={images} />
          </div>
        </div>
      </main>
      <CardPage />
    </>
  );
}
