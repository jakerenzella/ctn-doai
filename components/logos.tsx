"use client";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import Image from "next/image";

const images = [{ imgSrc: "/unsw-grayscale.png" }, { imgSrc: "/dayofai.webp" }];

export const Logos = () => (
  <section>
    <div className="my-4 ">
      <div className="flex size-full items-center justify-center bg-background">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {images.map((image, index) => (
              <MarqueeItem className="h-32 w-32" key={index}>
                <Image
                  alt={`Placeholder ${index}`}
                  className="overflow-hidden"
                  src={image.imgSrc}
                  width={128}
                  height={128}
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
