"use client";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import Image from "next/image";

const images = [
  { imgSrc: "/unsw-grayscale.png" },
  { imgSrc: "/dayofai.webp", width: 55 },
  { imgSrc: "/googleorg.jpeg", width: 200, height: 128 },
];

export const Logos = () => (
  <section>
    <div className="my-4 ">
      <div className="flex size-full items-center justify-center bg-background">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {images.map((image, index) => (
              <MarqueeItem className="mx-8" key={index}>
                <Image
                  alt={`Logo ${index}`}
                  className="overflow-hidden"
                  src={image.imgSrc}
                  width={image.width || 128}
                  height={image.height || 128}
                  loading="lazy"
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </div>
  </section>
);
