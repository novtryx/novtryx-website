"use client"

import * as React from "react"
import Image, { StaticImageData } from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface ImageCarouselProps {
  images: (string | StaticImageData)[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full order-1 lg:order-2"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100 xl:h-112.5 rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}