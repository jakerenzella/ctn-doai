"use client";

import { Button } from "@/components/ui/button";
import { LiveTicker } from "./live-ticker";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          {/* Desktop Navigation */}
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
            <a href="/setting" className="font-bold hover:text-red-600 ">
              Setting
            </a>
            <a href="/rules" className="font-bold hover:text-red-600 ">
              Rules
            </a>
            <Button className="font-bold rounded-none bg-red-600 hover:bg-red-900">
              Register now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4 font-sans uppercase">
              <a
                href="/about"
                className="font-bold hover:text-red-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#how-to-play"
                className="font-bold hover:text-red-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How to play
              </a>
              <a
                href="/#timeline"
                className="font-bold hover:text-red-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Timeline
              </a>
              <a
                href="/setting"
                className="font-bold hover:text-red-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Setting
              </a>
              <a
                href="/rules"
                className="font-bold hover:text-red-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rules
              </a>
              <Button className="font-bold rounded-none bg-red-600 hover:bg-red-900 w-full">
                Register now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
