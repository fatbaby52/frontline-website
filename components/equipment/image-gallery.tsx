"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  fallbackSrc?: string;
  fallbackAlt?: string;
}

export function ImageGallery({
  images,
  fallbackSrc,
  fallbackAlt,
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const gallery =
    images.length > 0
      ? images
      : fallbackSrc
        ? [{ src: fallbackSrc, alt: fallbackAlt || "" }]
        : [];

  const handleThumbnailClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  if (gallery.length === 0) return null;

  const active = gallery[activeIndex];

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative flex aspect-[5/4] items-center justify-center rounded-xl bg-white/5 p-6">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          className="object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {gallery.length > 1 && (
        <div className="flex gap-2" role="tablist" aria-label="Image gallery">
          {gallery.map((img, index) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`View ${img.alt || `image ${index + 1}`}`}
              onClick={() => handleThumbnailClick(index)}
              className={`relative h-16 w-20 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                index === activeIndex
                  ? "border-accent ring-1 ring-accent"
                  : "border-white/20 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
