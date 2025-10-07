import { Button } from "@/components/ui/button";
import { LiveTicker } from "./live-ticker";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <Image
              src="/logos/dayofai.webp"
              alt="Day of AI Australia"
              width={50}
              height={50}
              className="object-contain"
            />
            <h1 className="text-2xl font-bold text-gray-900 font-dm-serif">
              Win the Farm
            </h1>
          </a>
          <nav className="hidden md:flex items-center space-x-6 font-sans uppercase">
            <a href="/about" className="font-bold hover:text-red-600 ">
              About
            </a>
            <a href="/#how-to-play" className="font-bold hover:text-red-600 ">
              How to play
            </a>
            <a href="/#timeline" className="font-bold hover:text-red-600 ">
              Timeline
            </a>
            <a href="/rules" className="font-bold hover:text-red-600 ">
              Rules
            </a>
            <Button className="font-bold rounded-none bg-red-600 hover:bg-red-900">
              Register now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
